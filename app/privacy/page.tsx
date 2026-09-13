import { type Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy',
  description: 'How CloudNova handles information submitted through the CloudNova PaymentOps website.',
  alternates: { canonical: '/privacy' },
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

        <h2 style={{ marginTop: '2rem' }}>How we use it</h2>
        <p className="muted">
          We use submitted details solely to respond to your enquiry and to manage evaluation
          engagements. We do not sell personal information.
        </p>

        <h2 style={{ marginTop: '2rem' }}>Retention</h2>
        <p className="muted">
          Enquiry details are retained only as long as needed to respond and to maintain a record of
          the business relationship.
        </p>

        <h2 style={{ marginTop: '2rem' }}>Your choices</h2>
        <p className="muted">
          You may request access to, correction of, or deletion of the details you submitted by
          contacting us at <a href="mailto:paymentops@cloudnova.tech">paymentops@cloudnova.tech</a>.
        </p>
      </div>
    </section>
  );
}
