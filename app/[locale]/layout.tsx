import './globals.css';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ThemeProvider } from '@/components/theme-provider';
import {NextIntlClientProvider} from 'next-intl';
import {getMessages, setRequestLocale} from 'next-intl/server';

export const metadata = {
  title: 'William G Dev — Automation & Data Intelligence',
  description: 'Automations, data insights, and custom solutions with n8n, Power BI, and web technologies.',
};

export function generateStaticParams() {
  return [{locale: 'en'}, {locale: 'pt'}];
}

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const locale = params.locale;
  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
          >
            <Navbar />
            <main className="flex-grow pt-20 px-6 max-w-5xl mx-auto">{children}</main>
            <Footer />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
