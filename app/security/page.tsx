import { type Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Security',
  description:
    'Conservative security architecture: private backend services, same-origin web/API boundary, tenant isolation, server-side credential handling and an immutable audit trail.',
  alternates: { canonical: '/security' },
};

const ITEMS = [
  { title: 'Private backend services', body: 'The PaymentOps API is not exposed publicly. It is reachable only from within the cluster.' },
  { title: 'Same-origin web/API architecture', body: 'The browser talks only to the application origin; a server-side proxy forwards authenticated requests to the private API.' },
  { title: 'Server-side credential handling', body: 'Backend operator credentials are injected server-side and never shipped to the browser bundle.' },
  { title: 'Authenticated application access', body: 'Application routes require a real server-side session. Sessions are revocable and expire.' },
  { title: 'Tenant isolation', body: 'Every customer/tenant query is scoped to an organization. Cross-tenant access is denied.' },
  { title: 'Audit trail', body: 'Analysis, correlation, reconciliation and operator decisions are recorded with the authenticated actor.' },
  { title: 'Zero-retention options', body: 'Original payload retention is configurable; metadata-only and zero-retention policies are supported.' },
  { title: 'Secrets outside the browser', body: 'No API secrets or session tokens are placed in client-readable environment variables or browser storage.' },
  { title: 'TLS via edge / tunnel', body: 'Public traffic terminates over TLS at the edge before reaching the private cluster.' },
  { title: 'Kubernetes network isolation', body: 'Workloads run as non-root with restricted capabilities and namespace-scoped networking.' },
  { title: 'Human review for ambiguity', body: 'Ambiguous or conflicting outcomes require a human decision; deterministic validation remains authoritative.' },
  { title: 'Non-transactional boundary', body: 'PaymentOps does not execute, authorize, settle, debit or credit payments, and makes no sanctions/AML decisions.' },
];

export default function SecurityPage() {
  return (
    <>
      <section className="hero" style={{ padding: '4rem 0' }}>
        <div className="container">
          <p className="eyebrow" style={{ color: '#e0a082' }}>Security</p>
          <h1 className="display-2" style={{ maxWidth: '44rem' }}>A conservative, defensible security posture</h1>
          <p className="lede" style={{ marginTop: '1rem' }}>
            We describe our architecture as it is implemented. We do not claim certifications we do
            not currently hold.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid grid-2">
            {ITEMS.map((item) => (
              <article className="card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="card">
            <h3>Certification status</h3>
            <p>
              CloudNova does not currently claim ISO 27001, SOC 2 or PCI DSS certification. Any such
              claim would be made only after formal certification is achieved.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 className="display-2">Discuss your security requirements.</h2>
          <div className="hero-actions" style={{ justifyContent: 'center' }}>
            <Link className="btn" href="/request-demo">Request a Demo</Link>
            <Link className="btn btn-outline" href="/contact">Contact us</Link>
          </div>
        </div>
      </section>
    </>
  );
}
