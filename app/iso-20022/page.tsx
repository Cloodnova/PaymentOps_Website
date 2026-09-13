import { type Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'ISO 20022 Support',
  description:
    'Exact-version ISO 20022 message support: pacs.008.001.08, pain.001.001.13, pacs.002.001.16, pacs.009.001.13, camt.053.001.14, camt.054.001.14.',
  alternates: { canonical: '/iso-20022' },
};

const SUPPORTED = [
  { family: 'pacs', definition: 'FIToFICustomerCreditTransferV08', version: 'pacs.008.001.08' },
  { family: 'pain', definition: 'CustomerCreditTransferInitiationV13', version: 'pain.001.001.13' },
  { family: 'pacs', definition: 'FIToFIPaymentStatusReportV16', version: 'pacs.002.001.16' },
  { family: 'pacs', definition: 'FinancialInstitutionCreditTransferV13', version: 'pacs.009.001.13' },
  { family: 'camt', definition: 'BankToCustomerStatementV14', version: 'camt.053.001.14' },
  { family: 'camt', definition: 'BankToCustomerDebitCreditNotificationV14', version: 'camt.054.001.14' },
];

export default function Iso20022Page() {
  return (
    <>
      <section className="hero" style={{ padding: '4rem 0' }}>
        <div className="container">
          <p className="eyebrow" style={{ color: '#e0a082' }}>Standards</p>
          <h1 className="display-2" style={{ maxWidth: '44rem' }}>ISO 20022 support — exact versions only</h1>
          <p className="lede" style={{ marginTop: '1rem' }}>
            PaymentOps resolves messages by exact message version (family + definition + version +
            namespace), never by family alone. Unsupported versions fail explicitly with structured
            metadata rather than being silently parsed.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="eyebrow">Currently supported</p>
          <table className="matrix" style={{ marginTop: '1.5rem' }}>
            <thead>
              <tr><th>Family</th><th>Definition</th><th>Version</th></tr>
            </thead>
            <tbody>
              {SUPPORTED.map((m) => (
                <tr key={m.version}>
                  <td className="mono">{m.family}</td>
                  <td>{m.definition}</td>
                  <td className="mono">{m.version}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="small muted" style={{ marginTop: '1.25rem' }}>
            Additional message families can be added according to customer and PoC requirements.
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
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 className="display-2">Have a specific ISO 20022 migration scope?</h2>
          <p className="lede" style={{ margin: '1rem auto 0' }}>
            Tell us which messages and versions matter to you.
          </p>
          <div className="hero-actions" style={{ justifyContent: 'center' }}>
            <Link className="btn" href="/request-demo">Request a Demo</Link>
          </div>
        </div>
      </section>
    </>
  );
}
