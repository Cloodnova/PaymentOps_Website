import Link from 'next/link';
import StructuredData from '@/components/StructuredData';
import Faq from '@/components/Faq';
import TrackedLink from '@/components/TrackedLink';
import { breadcrumbLd, faqLd } from '@/lib/seo';
import { type FaqItem } from '@/lib/faq';

export default function PillarPage({
  eyebrow,
  title,
  lede,
  question,
  slug,
  capabilities,
  workflow,
  faq,
  related,
}: {
  eyebrow: string;
  title: string;
  lede: string;
  question: string;
  slug: string;
  capabilities: { title: string; body: string }[];
  workflow: string[];
  faq?: FaqItem[];
  related?: { href: string; label: string; description: string }[];
}) {
  return (
    <>
      <StructuredData
        data={[
          breadcrumbLd([
            { name: 'Home', path: '/' },
            { name: 'Product', path: '/product' },
            { name: title, path: slug },
          ]),
          ...(faq ? [faqLd(faq)] : []),
        ]}
      />

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
          <h2 className="display-2" style={{ fontSize: '1.5rem' }}>Capabilities</h2>
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
            <h2 className="display-2" style={{ fontSize: '1.5rem' }}>How it runs</h2>
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
            <p style={{ marginTop: '1.25rem' }}>
              <TrackedLink href="/request-demo" event="request_demo_clicked" eventParams={{ location: slug }}>
                Request a Demo
              </TrackedLink>
            </p>
          </div>
        </div>
      </section>

      {faq ? (
        <section className="section">
          <div className="container" style={{ maxWidth: '52rem' }}>
            <h2 className="display-2" style={{ fontSize: '1.5rem' }}>Frequently asked questions</h2>
            <Faq items={faq} id={`faq-${slug.replace('/', '')}`} />
          </div>
        </section>
      ) : null}

      {related ? (
        <section className="section section-alt">
          <div className="container">
            <h2 className="display-2" style={{ fontSize: '1.5rem' }}>Related</h2>
            <div className="grid grid-2" style={{ marginTop: '1.5rem' }}>
              {related.map((r) => (
                <article className="card" key={r.href}>
                  <h3><Link href={r.href}>{r.label}</Link></h3>
                  <p>{r.description}</p>
                  <p style={{ marginTop: '1rem' }}>
                    <Link href={r.href}>Read more about {r.label.toLowerCase()}</Link>
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
}
