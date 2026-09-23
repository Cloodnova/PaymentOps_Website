import { type Metadata, type Viewport } from 'next';
import { DM_Mono, DM_Sans, Playfair_Display } from 'next/font/google';
import './globals.css';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import GoogleAnalytics from '@/components/GoogleAnalytics';
import StructuredData from '@/components/StructuredData';
import { organizationLd, softwareApplicationLd, websiteLd } from '@/lib/seo';
import { SITE_URL } from '@/lib/site';

const dmSans = DM_Sans({ subsets: ['latin'], weight: ['400', '500', '600', '700'], variable: '--font-dm-sans', display: 'swap' });
const dmMono = DM_Mono({ subsets: ['latin'], weight: ['400', '500'], variable: '--font-dm-mono', display: 'swap' });
const playfair = Playfair_Display({ subsets: ['latin'], weight: ['500', '600'], style: ['normal', 'italic'], variable: '--font-playfair', display: 'swap' });

// Resolved at runtime on the server so the id can be configured per environment without a
// rebuild. NEXT_PUBLIC_ is supported for local development; GA_MEASUREMENT_ID is the runtime
// (non-inlined) variable used in Kubernetes.
const GA_MEASUREMENT_ID =
  process.env.GA_MEASUREMENT_ID ?? process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? '';

const GOOGLE_SITE_VERIFICATION = process.env.GOOGLE_SITE_VERIFICATION;

const DEFAULT_TITLE =
  'CloudNova PaymentOps | ISO 20022 Validation, Reconciliation & Exception Operations';
const DEFAULT_DESCRIPTION =
  'CloudNova PaymentOps helps financial institutions validate ISO 20022 payment data, reconcile payment and account events, and manage payment exceptions through controlled, auditable workflows.';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: DEFAULT_TITLE,
    template: '%s | CloudNova PaymentOps',
  },
  description: DEFAULT_DESCRIPTION,
  applicationName: 'CloudNova PaymentOps',
  keywords: [
    'ISO 20022 validation',
    'ISO 20022 payment validation',
    'pacs.008 validation',
    'pain.001 validation',
    'ISO 20022 payment repair',
    'payment data quality',
    'payment reconciliation',
    'camt.053 reconciliation',
    'camt.054 reconciliation',
    'payment exception management',
    'payment operations',
    'structured address readiness',
  ],
  alternates: { canonical: '/' },
  icons: { icon: '/favicon.svg' },
  openGraph: {
    type: 'website',
    siteName: 'CloudNova PaymentOps',
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    url: '/',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'CloudNova PaymentOps — payment operations, made clear',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: ['/og-image.jpg'],
  },
  robots: { index: true, follow: true },
  ...(GOOGLE_SITE_VERIFICATION
    ? { verification: { google: GOOGLE_SITE_VERIFICATION } }
    : {}),
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
        {/* Google Analytics (gtag.js) — rendered once for the whole site. See components/GoogleAnalytics
            for page_view/event tracking and the runtime fallback when the id is not baked at build. */}
        {GA_MEASUREMENT_ID ? (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html:
                  'window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}' +
                  'window.gtag=window.gtag||gtag;gtag(\'js\',new Date());' +
                  `gtag('config','${GA_MEASUREMENT_ID}',{send_page_view:false});`,
              }}
            />
          </>
        ) : null}
        <GoogleAnalytics measurementId={GA_MEASUREMENT_ID} />
        <StructuredData data={[organizationLd(), websiteLd(), softwareApplicationLd()]} />
      </body>
    </html>
  );
}
