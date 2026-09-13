import { type Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Deployment',
  description:
    'Deployment models for controlled PaymentOps evaluations: CloudNova-hosted PoC, customer-managed Kubernetes, and private cloud / hybrid discussions.',
  alternates: { canonical: '/deployment' },
};

const MODELS = [
  {
    title: 'Controlled CloudNova-hosted PoC',
    body: 'CloudNova hosts a dedicated evaluation environment for a scoped PoC. Suitable for fast, controlled evaluation with your own sample data.',
  },
  {
    title: 'Customer-managed Kubernetes',
    body: 'Deploy the platform into your own Kubernetes environment, with the same architecture and tenant isolation, under your operational controls.',
  },
  {
    title: 'Private cloud / hybrid',
    body: 'Private cloud and hybrid topologies are discussed case by case, based on your security, residency and network requirements.',
  },
];

export default function DeploymentPage() {
  return (
    <>
      <section className="hero" style={{ padding: '4rem 0' }}>
        <div className="container">
          <p className="eyebrow" style={{ color: '#e0a082' }}>Deployment</p>
          <h1 className="display-2" style={{ maxWidth: '44rem' }}>Deployment models for controlled evaluation</h1>
          <p className="lede" style={{ marginTop: '1rem' }}>
            We do not claim production support for architectures we have not validated with a
            customer. Deployment models are agreed during evaluation.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid grid-3">
            {MODELS.map((m) => (
              <article className="card" key={m.title}>
                <h3>{m.title}</h3>
                <p>{m.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container grid grid-2">
          <div className="card">
            <h3>Environment separation</h3>
            <ul className="list">
              <li>Public marketing site (this website)</li>
              <li>Private authenticated application</li>
              <li>Development / testing environment (CloudNova internal)</li>
            </ul>
          </div>
          <div className="card">
            <h3>Operational posture</h3>
            <ul className="list">
              <li>Immutable, versioned container images</li>
              <li>GitOps-driven configuration</li>
              <li>Private API, no direct public exposure</li>
              <li>Audited, reversible configuration changes</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 className="display-2">Plan a deployment with us.</h2>
          <div className="hero-actions" style={{ justifyContent: 'center' }}>
            <Link className="btn" href="/request-demo">Request a Demo</Link>
          </div>
        </div>
      </section>
    </>
  );
}
