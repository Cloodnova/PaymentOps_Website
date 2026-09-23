import { type Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy',
  description:
    'How CloudNova handles information submitted through the CloudNova PaymentOps website, including the limited, privacy-conscious analytics used to improve the site.',
  alternates: { canonical: '/privacy' },
  openGraph: {
    title: 'Privacy | CloudNova PaymentOps',
    description:
      'How CloudNova handles information submitted through the CloudNova PaymentOps website, including privacy-conscious analytics.',
    url: '/privacy',
  },
};

export default function PrivacyPage() {
  return (
    <section className="section">
      <div className="container" style={{ maxWidth: '52rem' }}>
        <p className="eyebrow">Legal</p>
        <h1 className="display-2">Privacy notice</h1>
        <p className="small muted" style={{ marginTop: '0.75rem' }}>
          This notice covers the public CloudNova PaymentOps website. The application is governed by
          your evaluation agreement.
        </p>

        <h2 style={{ marginTop: '2rem' }}>Information we collect</h2>
        <p className="muted">
          When you submit the demo-request form, we collect the contact details you provide (name,
          work email, company, role, country, use case and any message). We do not request or require
          payment payloads, account numbers or other sensitive financial data through this website.
        </p>

        <h2 style={{ marginTop: '2rem' }}>Analytics and cookies</h2>
        <p className="muted">
          This website uses Google Analytics 4 to understand aggregate, non-identifying usage — for
          example which pages are visited and whether calls to action are used. Analytics is used to
          improve the public website and to measure interest in PaymentOps; it is not used to make
          automated decisions about individuals, and it is not used for advertising profiling on this
          site.
        </p>
        <p className="muted">
          Google Analytics uses cookies to distinguish sessions and records page views and the events
          described above. We do not send the contents of forms to analytics. In particular, we never
          send payment XML, ISO message contents, names from payment messages, bank account
          information, API credentials, passwords or customer financial information to analytics.
          Demo-request conversion events record only the general use case and country, never your
          email, name, company or message.
        </p>
        <p className="muted">
          Google Analytics does not log IP addresses. You can limit or block analytics using your
          browser settings, tracking-protection features, or Google&apos;s Analytics opt-out browser
          add-on. Disabling analytics does not affect your ability to use this website.
        </p>

        <h2 style={{ marginTop: '2rem' }}>How we use it</h2>
        <p className="muted">
          We use submitted details solely to respond to your enquiry and to manage evaluation
          engagements. We do not sell personal information.
        </p>

        <h2 style={{ marginTop: '2rem' }}>Retention</h2>
        <p className="muted">
          Enquiry details are retained only as long as needed to respond and to maintain a record of
          the business relationship. Aggregate analytics data is retained according to the configured
          Google Analytics retention period.
        </p>

        <h2 style={{ marginTop: '2rem' }}>Your choices</h2>
        <p className="muted">
          You may request access to, correction of, or deletion of the details you submitted by
          contacting us at <a href="mailto:paymentops@cloudnova.tech">paymentops@cloudnova.tech</a>.
        </p>

        <p className="small muted" style={{ marginTop: '2rem' }}>
          See also our <Link href="/terms">Terms</Link> and the{' '}
          <Link href="/request-demo">Request a Demo</Link> page.
        </p>
      </div>
    </section>
  );
}
