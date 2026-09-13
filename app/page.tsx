import Link from 'next/link';
import { ArrowRight, FileCheck2, GitCompare, ShieldCheck, ClipboardCheck, Lock, Layers } from 'lucide-react';

const PILLARS = [
  {
    href: '/validation-repair',
    icon: FileCheck2,
    title: 'Validation & Repair',
    question: 'Is the payment data valid and usable, and can a safe repair candidate be produced?',
    points: ['Structured validation', 'Deterministic rules', 'Address intelligence', 'Repair candidates & revalidation'],
  },
  {
    href: '/reconciliation',
    icon: GitCompare,
    title: 'Matching & Reconciliation',
    question: 'Does this record correspond to the expected payment, account or business record?',
    points: ['Exact & normalized comparison', 'Deterministic scoring', 'Critical conflict detection', 'Account reconciliation'],
  },
  {
    href: '/exception-operations',
    icon: ClipboardCheck,
    title: 'Exception Operations',
    question: 'How does the operations team investigate and resolve exceptions?',
    points: ['Cases & human review', 'Batch operations', 'Lifecycle evidence', 'Immutable audit trail'],
  },
];

const ISO_SUPPORT = [
  'pacs.008.001.08',
  'pain.001.001.13',
  'pacs.002.001.16',
  'pacs.009.001.13',
  'camt.053.001.14',
  'camt.054.001.14',
];

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <p className="eyebrow" style={{ color: '#e0a082' }}>Payment data intelligence</p>
            <h1 className="display-1">Payment Data Intelligence &amp; Exception Operations for Financial Institutions</h1>
            <p className="lede" style={{ marginTop: '1.5rem' }}>
              Validate, repair, reconcile and investigate payment-data exceptions across ISO 20022
              workflows — without executing, authorizing or settling payments.
            </p>
            <div className="hero-actions">
              <Link className="btn" href="/request-demo">Request a Demo <ArrowRight size={15} /></Link>
              <Link className="btn btn-ghost" href="/product">Explore the Platform</Link>
            </div>
            <p className="small" style={{ color: 'var(--navy-muted)', marginTop: '1.5rem' }}>
              Available for controlled evaluation and PoC engagements.
            </p>
          </div>
          <div className="hero-panel" aria-label="Platform summary">
            <div className="row"><span>Deterministic validation</span><span className="tag">NO LLM DECISIONS</span></div>
            <div className="row"><span>Same-origin web / private API</span><span className="tag">TENANT-ISOLATED</span></div>
            <div className="row"><span>Exact ISO 20022 version dispatch</span><span className="tag">6 MESSAGES</span></div>
            <div className="row"><span>Human review for ambiguity</span><span className="tag">AUDITED</span></div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="eyebrow">Three product pillars</p>
          <h2 className="display-2" style={{ maxWidth: '38rem' }}>
            One deterministic platform for payment-data quality and operations.
          </h2>
          <div className="grid grid-3" style={{ marginTop: '2.5rem' }}>
            {PILLARS.map((p) => {
              const Icon = p.icon;
              return (
                <article className="card" key={p.title}>
                  <span className="icon-badge" aria-hidden="true"><Icon size={18} /></span>
                  <h3>{p.title}</h3>
                  <p style={{ marginBottom: '1rem' }}>{p.question}</p>
                  <ul className="list">
                    {p.points.map((point) => <li key={point}>{point}</li>)}
                  </ul>
                  <p style={{ marginTop: '1.25rem' }}>
                    <Link href={p.href}>Learn more <ArrowRight size={13} style={{ verticalAlign: 'middle' }} /></Link>
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container grid grid-2">
          <div>
            <p className="eyebrow">ISO 20022</p>
            <h2 className="display-2">Exact-version message support</h2>
            <p className="lede" style={{ marginTop: '1rem' }}>
              Support is dispatched by exact message version, never by family alone. Unsupported
              versions fail explicitly with structured metadata.
            </p>
            <div className="grid grid-2" style={{ marginTop: '1.5rem', gap: '0.6rem' }}>
              {ISO_SUPPORT.map((v) => (
                <span className="pill pill-ok mono" key={v}>{v}</span>
              ))}
            </div>
            <p className="small muted" style={{ marginTop: '1.25rem' }}>
              Additional message families can be added according to customer and PoC requirements.
            </p>
            <p style={{ marginTop: '1.25rem' }}><Link href="/iso-20022">ISO 20022 support <ArrowRight size={13} style={{ verticalAlign: 'middle' }} /></Link></p>
          </div>
          <div className="card">
            <span className="icon-badge" aria-hidden="true"><Layers size={18} /></span>
            <h3>Structured address readiness</h3>
            <p>
              Deterministic structured-address readiness with provider fallback and explicit
              coverage states (SUPPORTED / UNSUPPORTED_GEOGRAPHY / UNKNOWN).
            </p>
            <p className="small muted" style={{ marginTop: '0.75rem' }}>
              Development geography: Italy, India, Saudi Arabia, United Kingdom, Germany, France,
              Spain, Netherlands. Geography datasets are enabled according to customer and
              production requirements.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid grid-2">
          <div className="card">
            <span className="icon-badge" aria-hidden="true"><ShieldCheck size={18} /></span>
            <h3>Security by architecture</h3>
            <p>
              Private backend services, a same-origin web/API boundary, server-side credential
              handling, tenant isolation and an immutable audit trail.
            </p>
            <p style={{ marginTop: '1rem' }}><Link href="/security">Security overview <ArrowRight size={13} style={{ verticalAlign: 'middle' }} /></Link></p>
          </div>
          <div className="card">
            <span className="icon-badge" aria-hidden="true"><Lock size={18} /></span>
            <h3>Non-transactional by design</h3>
            <p>
              PaymentOps analyzes and reconciles payment data. It does not execute, authorize,
              settle, debit or credit payments — and never makes sanctions or AML decisions.
            </p>
            <p style={{ marginTop: '1rem' }}><Link href="/product">How it works <ArrowRight size={13} style={{ verticalAlign: 'middle' }} /></Link></p>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 className="display-2">Evaluate PaymentOps with your own payment data.</h2>
          <p className="lede" style={{ margin: '1rem auto 0' }}>
            CloudNova PaymentOps is designed for controlled bank and fintech evaluations and PoC
            deployments.
          </p>
          <div className="hero-actions" style={{ justifyContent: 'center' }}>
            <Link className="btn" href="/request-demo">Request a Demo</Link>
            <Link className="btn btn-outline" href="/contact">Contact us</Link>
          </div>
        </div>
      </section>
    </>
  );
}
