import { type Metadata } from 'next';
import { DM_Sans, IBM_Plex_Mono, Space_Grotesk } from 'next/font/google';
import './globals.css';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import { SITE_URL } from '@/lib/site';

const dmSans = DM_Sans({ subsets: ['latin'], weight: ['400', '500', '600', '700'], variable: '--font-dm-sans', display: 'swap' });
const ibmPlexMono = IBM_Plex_Mono({ subsets: ['latin'], weight: ['400', '500', '600'], variable: '--font-ibm-plex-mono', display: 'swap' });
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], weight: ['500', '600', '700'], variable: '--font-space-grotesk', display: 'swap' });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'CloudNova PaymentOps — Payment Data Intelligence & Exception Operations',
    template: '%s · CloudNova PaymentOps',
  },
  description:
    'Validate, repair, reconcile and investigate payment-data exceptions across ISO 20022 workflows without executing, authorizing or settling payments.',
  applicationName: 'CloudNova PaymentOps',
  keywords: [
    'payment data validation',
    'ISO 20022 validation',
    'payment reconciliation',
    'payment exception management',
    'structured address readiness',
    'bank payment operations',
  ],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    siteName: 'CloudNova PaymentOps',
    title: 'CloudNova PaymentOps — Payment Data Intelligence & Exception Operations',
    description:
      'Validate, repair, reconcile and investigate payment-data exceptions across ISO 20022 workflows.',
    url: '/',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${dmSans.variable} ${ibmPlexMono.variable} ${spaceGrotesk.variable}`}>
      <body>
        <SiteHeader />
        <main className="site-main">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
