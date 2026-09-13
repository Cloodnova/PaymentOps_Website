import { type Metadata, type Viewport } from 'next';
import { DM_Mono, DM_Sans, Playfair_Display } from 'next/font/google';
import './globals.css';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import { SITE_URL } from '@/lib/site';

const dmSans = DM_Sans({ subsets: ['latin'], weight: ['400', '500', '600', '700'], variable: '--font-dm-sans', display: 'swap' });
const dmMono = DM_Mono({ subsets: ['latin'], weight: ['400', '500'], variable: '--font-dm-mono', display: 'swap' });
const playfair = Playfair_Display({ subsets: ['latin'], weight: ['500', '600'], style: ['normal', 'italic'], variable: '--font-playfair', display: 'swap' });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'CloudNova PaymentOps — Payment Operations, Made Clear',
    template: '%s · CloudNova PaymentOps',
  },
  description:
    'Payment data intelligence and exception operations for financial institutions: validate payment data, identify repair opportunities, reconcile payment and account events, and manage exceptions through controlled, auditable workflows.',
  applicationName: 'CloudNova PaymentOps',
  keywords: [
    'ISO 20022 validation',
    'payment reconciliation',
    'payment exception management',
    'payment data quality',
    'structured address readiness',
    'bank payment operations',
  ],
  alternates: { canonical: '/' },
  icons: { icon: '/favicon.svg' },
  openGraph: {
    type: 'website',
    siteName: 'CloudNova PaymentOps',
    title: 'CloudNova PaymentOps — Payment Operations, Made Clear',
    description:
      'Payment data intelligence and exception operations for financial institutions. Non-transactional by design.',
    url: '/',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CloudNova PaymentOps — Payment Operations, Made Clear',
    description:
      'Payment data intelligence and exception operations for financial institutions. Non-transactional by design.',
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#1b2a45',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${dmSans.variable} ${dmMono.variable} ${playfair.variable}`}>
      <body>
        <SiteHeader />
        <main className="site-main">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
