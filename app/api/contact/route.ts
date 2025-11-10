import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const body = await request.json();
  const webhookUrl = process.env.N8N_WEBHOOK_URL;

  if (!webhookUrl) {
    console.error('N8N_WEBHOOK_URL is not set');
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }

  try {
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    if (response.ok) {
      return NextResponse.json({ message: 'Form submitted successfully!' });
    } else {
      console.error('n8n webhook failed:', await response.text());
      return NextResponse.json({ message: 'Failed to submit form' }, { status: 500 });
    }
  } catch (error) {
    console.error('Error submitting form to n8n:', error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}
