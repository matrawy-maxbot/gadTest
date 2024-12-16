import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';
import localFont from "next/font/local";
import "./globals.css";

export const metadata = {
  title: "GAD | Growth And Development",
  description: "GAD - Growth And Development: Expert design, web development, and printing services to empower your business. Let us help you grow and achieve success through creative and innovative solutions.",
};

export default async function RootLayout({ children, params: {locale} }) {

  if (!routing.locales.includes(locale)) {
    notFound();
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
