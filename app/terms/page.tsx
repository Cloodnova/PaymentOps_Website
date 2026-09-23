import { type Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms',
  description: 'Terms of use for the CloudNova PaymentOps public website.',
  alternates: { canonical: '/terms' },
  openGraph: {
    title: 'Terms | CloudNova PaymentOps',
    description: 'Terms of use for the CloudNova PaymentOps public website.',
    url: '/terms',
  },
};

export default function TermsPage() {
  return (
    <section className="section">
      <div className="container" style={{ maxWidth: '52rem' }}>
        <p className="eyebrow">Legal</p>
        <h1 className="display-2">Terms of use</h1>

        <h2 style={{ marginTop: '2rem' }}>Website</h2>
        <p className="muted">
          This website provides information about CloudNova PaymentOps. Product descriptions are
          indicative and do not constitute a warranty or a commitment to deliver any specific
          feature.
        </p>

        <h2 style={{ marginTop: '2rem' }}>Evaluation access</h2>
        <p className="muted">
          Access to the PaymentOps application is provisioned by CloudNova for controlled
          evaluations and is governed by a separate written agreement. There is no public
          self-service signup.
        </p>

        <h2 style={{ marginTop: '2rem' }}>No financial services</h2>
        <p className="muted">
          CloudNova PaymentOps is a non-transactional payment-data intelligence platform. It does not
          execute, authorize, settle, debit or credit payments and does not provide sanctions or AML
          decisions.
        </p>

        <h2 style={{ marginTop: '2rem' }}>Contact</h2>
        <p className="muted">
          Questions about these terms: <a href="mailto:paymentops@cloudnova.tech">paymentops@cloudnova.tech</a>.
        </p>
      </div>
    </section>
  );
}
