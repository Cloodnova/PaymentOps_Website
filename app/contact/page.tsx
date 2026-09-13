import { type Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contact CloudNova about CloudNova PaymentOps evaluations, PoCs and partnerships.',
  alternates: { canonical: '/contact' },
};

export default function ContactPage() {
  return (
    <>
      <section className="hero" style={{ padding: '4rem 0' }}>
        <div className="container">
          <p className="eyebrow" style={{ color: '#e0a082' }}>Contact</p>
          <h1 className="display-2">Talk to CloudNova</h1>
          <p className="lede" style={{ marginTop: '1rem' }}>
            For evaluations, PoC engagements and partnership enquiries.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container grid grid-2">
          <div className="card">
            <h3>Evaluation &amp; PoC enquiries</h3>
            <p>The fastest path is to request a demo; we will route your request to the right team.</p>
            <p style={{ marginTop: '1.25rem' }}><Link className="btn" href="/request-demo">Request a Demo</Link></p>
          </div>
          <div className="card">
            <h3>General enquiries</h3>
            <p>Email: <a href="mailto:paymentops@cloudnova.tech">paymentops@cloudnova.tech</a></p>
            <p className="small muted" style={{ marginTop: '0.75rem' }}>
              Please do not send payment payloads, account numbers or other sensitive data by email.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
