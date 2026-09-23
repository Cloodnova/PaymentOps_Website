import { type Metadata } from 'next';
import DemoRequestForm from '@/components/DemoRequestForm';

export const metadata: Metadata = {
  title: 'Request a Demo',
  description:
    'Request a controlled CloudNova PaymentOps demo or PoC evaluation for payment validation, reconciliation, exception operations and ISO 20022 readiness.',
  alternates: { canonical: '/request-demo' },
  openGraph: {
    title: 'Request a Demo | CloudNova PaymentOps',
    description:
      'Request a controlled demo or PoC evaluation of CloudNova PaymentOps.',
    url: '/request-demo',
  },
};

export default function RequestDemoPage() {
  return (
    <>
      <section className="hero" style={{ padding: '4rem 0' }}>
        <div className="container">
          <p className="eyebrow" style={{ color: '#e0a082' }}>Request a demo</p>
          <h1 className="display-2" style={{ maxWidth: '40rem' }}>Evaluate PaymentOps with your own payment data</h1>
          <p className="lede" style={{ marginTop: '1rem' }}>
            CloudNova PaymentOps is available for controlled bank and fintech evaluations and PoC
            engagements. Tell us about your scope and we will follow up.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container grid grid-2">
          <div>
            <h3 className="display display-2" style={{ fontSize: '1.6rem' }}>Request a demo</h3>
            <p className="small muted" style={{ margin: '0.5rem 0 1.25rem' }}>
              Fields marked * are required.
            </p>
            <DemoRequestForm />
          </div>
          <div>
            <div className="card" style={{ marginBottom: '1.25rem' }}>
              <h3>What happens next</h3>
              <ol className="list">
                <li>We review your request and scope.</li>
                <li>CloudNova provisions a controlled evaluation environment.</li>
                <li>Authorized users receive secure access.</li>
                <li>You evaluate PaymentOps against your own sample data.</li>
              </ol>
            </div>
            <div className="card">
              <h3>No self-service signup</h3>
              <p>
                Access is provisioned through CloudNova onboarding. There is no public signup — this
                keeps evaluations controlled and tenant-isolated.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
