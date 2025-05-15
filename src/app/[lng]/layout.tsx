import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import '../globals.css';
import { dir } from 'i18next';
import { languages } from '@/i18n/settings';
import { ReactNode } from 'react';
import ClientThemeProvider from '@/theme/ClientThemeProvider';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Biru Tech',
  description: 'Biru Tech - Your Trusted Partner in Digital Solutions',
};

export async function generateStaticParams() {
  return languages.map((lng: string) => ({
    lng,
  }));
}

export default async function RootLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: { lng: string };
}) {
  const { lng } = await params;
  return (
    <html lang={lng} dir={dir(lng)}>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ClientThemeProvider>{children}</ClientThemeProvider>
      </body>
    </html>
  );
}
