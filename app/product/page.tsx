import Link from 'next/link';
import { type Metadata } from 'next';
import PageHero from '@/components/PageHero';
import StructuredData from '@/components/StructuredData';
import Faq from '@/components/Faq';
import TrackedLink from '@/components/TrackedLink';
import { breadcrumbLd, faqLd } from '@/lib/seo';
import { PRODUCT_FAQ } from '@/lib/faq';
import { FileCheck2, GitCompare, ClipboardCheck, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Payment Data Intelligence & Exception Operations',
  description:
    'CloudNova PaymentOps unifies ISO 20022 validation and repair, payment matching and reconciliation, and exception operations for financial institutions.',
  alternates: { canonical: '/product' },
  openGraph: {
    title: 'Product | CloudNova PaymentOps',
    description:
      'One deterministic platform for payment-data quality and operations: validation and repair, matching and reconciliation, and exception operations.',
    url: '/product',
  },
};

const PILLARS = [
  {
    href: '/validation-repair',
    icon: FileCheck2,
    title: 'Validation & Repair',
    body: 'Determine whether payment data is valid and usable, and produce a safe, revalidated repair candidate.',
  },
  {
    href: '/reconciliation',
    icon: GitCompare,
    title: 'Matching & Reconciliation',
    body: 'Determine whether a record corresponds to an expected payment, account or business record — deterministically.',
  },
  {
    href: '/exception-operations',
    icon: ClipboardCheck,
    title: 'Exception Operations',
    body: 'Give operations teams cases, evidence and audited decisions for ambiguous or mismatched outcomes.',
  },
];

export default function ProductPage() {
  return (
    <>
      <StructuredData
        data={[
          breadcrumbLd([
            { name: 'Home', path: '/' },
            { name: 'Product', path: '/product' },
          ]),
          faqLd(PRODUCT_FAQ),
        ]}
      />

      <PageHero
        eyebrow="Product"
        title="A deterministic control surface for payment-data quality and operations"
        lede="CloudNova PaymentOps ingests ISO 20022 payment data, validates and repairs it, reconciles it against expected records, and routes exceptions to human review — all with an auditable evidence trail."
      />

      <section className="section">
        <div className="container">
          <h2 className="display-2" style={{ fontSize: '1.5rem' }}>Three product pillars</h2>
          <div className="grid grid-3" style={{ marginTop: '1.5rem' }}>
            {PILLARS.map((p) => {
              const Icon = p.icon;
              return (
                <article className="card" key={p.title}>
                  <span className="icon-badge" aria-hidden="true"><Icon size={18} /></span>
                  <h3>{p.title}</h3>
                  <p>{p.body}</p>
                  <p style={{ marginTop: '1.25rem' }}>
                    <Link href={p.href}>Explore {p.title} <ArrowRight size={13} style={{ verticalAlign: 'middle' }} /></Link>
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
            <h2 className="display-2" style={{ fontSize: '1.5rem' }}>From raw message to reviewed outcome</h2>
            <ol className="list" style={{ marginTop: '1.5rem' }}>
              <li>Ingest a payment message (ISO 20022 XML, JSON or CSV) via a governed integration profile.</li>
              <li>Validate against schema and deterministic rules; derive structured address readiness.</li>
              <li>Produce a repair candidate and revalidate it before any human decision.</li>
              <li>Match and reconcile records with deterministic scoring and critical-conflict detection.</li>
              <li>Route ambiguous outcomes to cases for human review, with full audit evidence.</li>
            </ol>
          </div>
          <div className="card">
            <h3>Designed for operations</h3>
            <ul className="list">
              <li>Information-dense, audit-oriented operator experience</li>
              <li>Lifecycle evidence across initiation, transfer, status and account reporting</li>
              <li>Tenant isolation on every customer query</li>
              <li>Configuration-driven profiles — no per-customer forks</li>
              <li>Optional, non-authoritative AI explanations only</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: '52rem' }}>
          <h2 className="display-2" style={{ fontSize: '1.5rem' }}>Frequently asked questions</h2>
          <Faq items={PRODUCT_FAQ} id="faq-product" />
        </div>
      </section>

      <section className="section section-alt">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 className="display-2">Available for controlled evaluation and PoC engagements.</h2>
          <p className="lede" style={{ margin: '1rem auto 0' }}>
            Start with your own sample data and agreed success criteria.
          </p>
          <div className="hero-actions" style={{ justifyContent: 'center' }}>
            <TrackedLink className="btn" href="/request-demo" event="request_demo_clicked" eventParams={{ location: 'product' }}>
              Request a Demo
            </TrackedLink>
          </div>
        </div>
      </section>
    </>
  );
}
