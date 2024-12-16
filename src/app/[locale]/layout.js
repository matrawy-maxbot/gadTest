import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import localFont from "next/font/local";
import "./globals.css";

export const metadata = {
  title: "GAD | Growth And Development",
  description: "GAD - Growth And Development: Expert design, web development, and printing services to empower your business. Let us help you grow and achieve success through creative and innovative solutions.",
};

export default async function RootLayout({ children, params: { locale } }) {
  // Check if locale is valid
  console.log("routing ::::::::::  locale : ", locale);
  if (!routing.locales.includes(locale)) {
    return (
      <html lang="en">
        <body className='dark'>
          <h1>Invalid Locale</h1>
          <p>The requested locale is not supported.</p>
        </body>
      </html>
    );
  }

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className='dark'>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
