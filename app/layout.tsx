import type { Metadata } from 'next';
import { cormorantGaramond, sourceSans3 } from '@/lib/fonts';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import StickyCTA from '@/components/layout/StickyCTA';
import JsonLd from '@/components/JsonLd';
import { generateOrganizationSchema, generateWebSiteSchema } from '@/lib/schema';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://txicro.com'),
  title: {
    template: '%s | TXICRO',
    default: 'TXICRO — International Trade Advisory | McAllen, Texas',
  },
  description: 'Fee-based cross-border advisory for international companies, investors, and institutions entering Texas through the Rio Grande Valley.',
  openGraph: {
    type: 'website',
    siteName: 'TXICRO',
    locale: 'en_US',
    images: [{ url: '/images/txicro-logo.png', width: 512, height: 512, alt: 'TXICRO' }],
  },
  twitter: {
    card: 'summary',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
  },
  other: {
    'theme-color': '#0A1628',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorantGaramond.variable} ${sourceSans3.variable}`}>
      <body className="font-body text-slate bg-white antialiased">
        <JsonLd data={generateOrganizationSchema()} />
        <JsonLd data={generateWebSiteSchema()} />
        <Header />
        <main className="pt-16 lg:pt-[72px]">{children}</main>
        <Footer />
        <StickyCTA />
      </body>
    </html>
  );
}
