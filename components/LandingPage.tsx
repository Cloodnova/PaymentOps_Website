import Link from 'next/link';
import StructuredData from '@/components/StructuredData';
import Faq from '@/components/Faq';
import TrackedLink from '@/components/TrackedLink';
import { breadcrumbLd, faqLd } from '@/lib/seo';
import { type FaqItem } from '@/lib/faq';

export interface LandingSection {
  title: string;
  paragraphs: string[];
}

/** Shared, content-driven layout for search-intent landing pages. */
export default function LandingPage({
  eyebrow,
  title,
  lede,
  path,
  sections,
  scope,
  limitations,
  faq,
  related,
}: {
  eyebrow: string;
  title: string;
  lede: string;
  path: string;
  sections: LandingSection[];
  scope: string[];
  limitations: string[];
  faq: FaqItem[];
  related: { href: string; label: string; description: string }[];
}) {
  return (
    <>
      <StructuredData
        data={[
          breadcrumbLd([
            { name: 'Home', path: '/' },
            { name: title, path },
          ]),
          faqLd(faq),
        ]}
      />

      <section className="hero" style={{ padding: '4rem 0' }}>
        <div className="container">
          <p className="eyebrow" style={{ color: '#e0a082' }}>{eyebrow}</p>
          <h1 className="display-2" style={{ maxWidth: '46rem' }}>{title}</h1>
          <p className="lede" style={{ marginTop: '1rem' }}>{lede}</p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: '52rem' }}>
          {sections.map((section) => (
            <article key={section.title} style={{ marginBottom: '2.5rem' }}>
              <h2 className="display-2" style={{ fontSize: '1.5rem' }}>{section.title}</h2>
              {section.paragraphs.map((p) => (
                <p className="muted" key={p} style={{ marginTop: '0.85rem' }}>{p}</p>
              ))}
            </article>
          ))}
        </div>
      </section>

      <section className="section section-alt">
        <div className="container grid grid-2">
          <div className="card">
            <h2 style={{ fontSize: '1.15rem' }}>Current product scope</h2>
            <ul className="list">
              {scope.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
          <div className="card">
            <h2 style={{ fontSize: '1.15rem' }}>Limitations</h2>
            <ul className="list">
              {limitations.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: '52rem' }}>
          <h2 className="display-2" style={{ fontSize: '1.5rem' }}>Frequently asked questions</h2>
          <Faq items={faq} id={`faq-${path.replace('/', '')}`} />
        </div>
      </section>

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

      <section className="section">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 className="display-2">Evaluate PaymentOps with your own payment data</h2>
          <p className="lede" style={{ margin: '1rem auto 0' }}>
            Controlled evaluations and PoC engagements, scoped around your sample and success criteria.
          </p>
          <div className="hero-actions" style={{ justifyContent: 'center' }}>
            <TrackedLink className="btn" href="/request-demo" event="request_demo_clicked" eventParams={{ location: path }}>
              Request a Demo
            </TrackedLink>
          </div>
        </div>
      </section>
    </>
  );
}
