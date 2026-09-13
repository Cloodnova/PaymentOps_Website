import Link from 'next/link';

export default function PillarPage({
  eyebrow,
  title,
  lede,
  question,
  capabilities,
  workflow,
}: {
  eyebrow: string;
  title: string;
  lede: string;
  question: string;
  capabilities: { title: string; body: string }[];
  workflow: string[];
}) {
  return (
    <>
      <section className="hero" style={{ padding: '4rem 0' }}>
        <div className="container">
          <p className="eyebrow" style={{ color: '#e0a082' }}>{eyebrow}</p>
          <h1 className="display-2" style={{ maxWidth: '44rem' }}>{title}</h1>
          <p className="lede" style={{ marginTop: '1rem' }}>{lede}</p>
          <p className="small" style={{ color: 'var(--navy-muted)', marginTop: '1.5rem' }}>
            <strong style={{ color: 'var(--navy-fg)' }}>Core question:</strong> {question}
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="eyebrow">Capabilities</p>
          <div className="grid grid-2" style={{ marginTop: '1.5rem' }}>
            {capabilities.map((c) => (
              <article className="card" key={c.title}>
                <h3>{c.title}</h3>
                <p>{c.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container grid grid-2">
          <div>
            <p className="eyebrow">Workflow</p>
            <h2 className="display-2">How it runs</h2>
            <ol className="list" style={{ marginTop: '1.25rem' }}>
              {workflow.map((step) => <li key={step}>{step}</li>)}
            </ol>
          </div>
          <div className="card">
            <h3>Deterministic by design</h3>
            <p>
              Outcomes are produced by deterministic validation, normalization and scoring. AI is
              optional, additive and never authoritative for a decision.
            </p>
            <p className="small muted" style={{ marginTop: '0.75rem' }}>
              PaymentOps analyzes payment data only. It does not execute, authorize, settle, debit
              or credit payments.
            </p>
            <p style={{ marginTop: '1.25rem' }}><Link href="/request-demo">Request a Demo</Link></p>
          </div>
        </div>
      </section>
    </>
  );
}
