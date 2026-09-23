import { type Metadata } from 'next';
import Link from 'next/link';
import StructuredData from '@/components/StructuredData';
import Faq from '@/components/Faq';
import TrackedLink from '@/components/TrackedLink';
import { breadcrumbLd, faqLd } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'ISO 20022 Payment Operations',
  description:
    'Exact-version ISO 20022 message support for payment data: validate pacs.008.001.08, pain.001.001.13, pacs.009.001.13, pacs.002.001.16, camt.053.001.14 and camt.054.001.14, with explicit unsupported-version handling.',
  alternates: { canonical: '/iso-20022' },
  openGraph: {
    title: 'ISO 20022 Payment Operations | CloudNova PaymentOps',
    description:
      'Exact-version ISO 20022 support for validation, lifecycle correlation and account reconciliation.',
    url: '/iso-20022',
  },
};

const SUPPORTED = [
  { family: 'pacs', definition: 'FIToFICustomerCreditTransferV08', version: 'pacs.008.001.08', use: 'Payment validation, lifecycle and matching' },
  { family: 'pain', definition: 'CustomerCreditTransferInitiationV13', version: 'pain.001.001.13', use: 'Payment initiation and lifecycle correlation' },
  { family: 'pacs', definition: 'FIToFIPaymentStatusReportV16', version: 'pacs.002.001.16', use: 'Status updates and lifecycle correlation' },
  { family: 'pacs', definition: 'FinancialInstitutionCreditTransferV13', version: 'pacs.009.001.13', use: 'FI credit transfer validation and lifecycle' },
  { family: 'camt', definition: 'BankToCustomerStatementV14', version: 'camt.053.001.14', use: 'Account-event reconciliation' },
  { family: 'camt', definition: 'BankToCustomerDebitCreditNotificationV14', version: 'camt.054.001.14', use: 'Account-event reconciliation' },
];

const ISO_FAQ = [
  {
    question: 'Which ISO 20022 messages does PaymentOps currently support?',
    answer:
      'It supports exact versions: pacs.008.001.08, pain.001.001.13, pacs.009.001.13, pacs.002.001.16, camt.054.001.14 and camt.053.001.14. Additional message families can be added according to customer and PoC requirements.',
  },
  {
    question: 'Does PaymentOps support every ISO 20022 message?',
    answer:
      'No. Support is explicit and versioned. Messages are resolved by exact message version, and unsupported versions fail with a structured response rather than being silently parsed.',
  },
  {
    question: 'How does PaymentOps handle an unsupported version?',
    answer:
      'It returns a structured unsupported-version response with metadata, so the failure is visible and auditable rather than producing an inaccurate result.',
  },
  {
    question: 'Can new message versions be added?',
    answer:
      'Yes. Each supported version is registered with its parser adapter and canonical mapper, so new messages can be added without changing the core engine, according to customer and PoC requirements.',
  },
];

export default function Iso20022Page() {
  return (
    <>
      <StructuredData
        data={[
          breadcrumbLd([
            { name: 'Home', path: '/' },
            { name: 'ISO 20022', path: '/iso-20022' },
          ]),
          faqLd(ISO_FAQ),
        ]}
      />

      <section className="hero" style={{ padding: '4rem 0' }}>
        <div className="container">
          <p className="eyebrow" style={{ color: '#e0a082' }}>Standards</p>
          <h1 className="display-2" style={{ maxWidth: '46rem' }}>ISO 20022 payment operations — exact versions only</h1>
          <p className="lede" style={{ marginTop: '1rem' }}>
            PaymentOps resolves messages by exact message version (family + definition + version +
            namespace), never by family alone. Unsupported versions fail explicitly with structured
            metadata rather than being silently parsed.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="display-2" style={{ fontSize: '1.5rem' }}>Currently supported versions</h2>
          <table className="matrix" style={{ marginTop: '1.5rem' }}>
            <thead>
              <tr><th>Family</th><th>Definition</th><th>Version</th><th>Used for</th></tr>
            </thead>
            <tbody>
              {SUPPORTED.map((m) => (
                <tr key={m.version}>
                  <td className="mono">{m.family}</td>
                  <td>{m.definition}</td>
                  <td className="mono">{m.version}</td>
                  <td>{m.use}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="small muted" style={{ marginTop: '1.25rem' }}>
            Additional message families can be added according to customer and PoC requirements. This
            is not a claim that all ISO 20022 messages are supported.
          </p>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container grid grid-2">
          <div className="card">
            <h3>Adapter registry architecture</h3>
            <p>
              Each supported version is registered with its parser adapter and canonical mapper.
              New messages can be added without changing the core engine.
            </p>
          </div>
          <div className="card">
            <h3>Structured failure</h3>
            <p>
              Unsupported or unknown versions return a structured unsupported-version response.
              Schema validation is authoritative and is never weakened.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: '52rem' }}>
          <h2 className="display-2" style={{ fontSize: '1.5rem' }}>Frequently asked questions</h2>
          <Faq items={ISO_FAQ} id="faq-iso" />
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <h2 className="display-2" style={{ fontSize: '1.5rem' }}>Related</h2>
          <div className="grid grid-2" style={{ marginTop: '1.5rem' }}>
            <article className="card">
              <h3><Link href="/iso-20022-validation">ISO 20022 validation</Link></h3>
              <p>How exact-version validation, findings and structured failure work, and where repair candidates fit.</p>
            </article>
            <article className="card">
              <h3><Link href="/structured-address-readiness">Structured address readiness</Link></h3>
              <p>Analysing payment address readiness with country-specific rules and controlled geography coverage.</p>
            </article>
            <article className="card">
              <h3><Link href="/payment-reconciliation">Payment reconciliation</Link></h3>
              <p>Reconciling payment and account events, including camt.053 and camt.054 entries.</p>
            </article>
            <article className="card">
              <h3><Link href="/validation-repair">Validation &amp; repair</Link></h3>
              <p>Structured validation, deterministic rules and revalidated repair candidates.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 className="display-2">Have a specific ISO 20022 migration scope?</h2>
          <p className="lede" style={{ margin: '1rem auto 0' }}>
            Tell us which messages and versions matter to you.
          </p>
          <div className="hero-actions" style={{ justifyContent: 'center' }}>
            <TrackedLink className="btn" href="/request-demo" event="request_demo_clicked" eventParams={{ location: 'iso-20022' }}>
              Request a Demo
            </TrackedLink>
          </div>
        </div>
      </section>
    </>
  );
}
