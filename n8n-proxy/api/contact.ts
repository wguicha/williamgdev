// This is a serverless function that Vercel will run as a Node.js environment
// It's exported as 'default' and receives request and response objects.

export default async function handler(request, response) {
  // Vercel automatically enables CORS for requests from the same top-level domain or its subdomains.
  // The vercel.json file adds broader headers, but for production, you might want to restrict
  // the Access-Control-Allow-Origin to your specific domain, e.g., "https://www.williamgdev.com".
  // For now, the wildcard '*' is fine for setup.

  // Handle pre-flight OPTIONS request for CORS
  if (request.method === 'OPTIONS') {
    return response.status(200).end();
  }

  // Only allow POST requests
  if (request.method !== 'POST') {
    response.setHeader('Allow', 'POST');
    return response.status(405).end('Method Not Allowed');
  }

  const { N8N_WEBHOOK_URL } = process.env;

  if (!N8N_WEBHOOK_URL) {
    console.error('N8N_WEBHOOK_URL is not set in environment variables.');
    return response.status(500).json({ message: 'Internal server error: Webhook URL not configured.' });
  }

  try {
    // Forward the request body to the n8n webhook
    const n8nResponse = await fetch(N8N_WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(request.body),
    });

    if (n8nResponse.ok) {
      return response.status(200).json({ message: 'Form submitted successfully!' });
    } else {
      const errorText = await n8nResponse.text();
      console.error('N8N webhook failed:', errorText);
      return response.status(n8nResponse.status).json({ message: 'Failed to submit form.' });
    }
  } catch (error) {
    console.error('Error submitting form to n8n:', error);
    return response.status(500).json({ message: 'Internal server error.' });
  }
}
