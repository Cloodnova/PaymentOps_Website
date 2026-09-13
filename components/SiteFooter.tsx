import Link from 'next/link';

const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? 'https://app.paymentops.cloudnova.tech';

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="brand" style={{ marginBottom: '0.75rem' }}>
              <span className="brand-mark" aria-hidden="true">C</span>
              <span className="brand-name">
                CloudNova <span>PaymentOps</span>
              </span>
            </div>
            <p className="small" style={{ color: 'var(--navy-muted)', maxWidth: '22rem' }}>
              Payment-data intelligence and exception operations for financial institutions.
              Available for controlled evaluation and PoC engagements.
            </p>
          </div>
          <div>
            <h4>Platform</h4>
            <Link href="/product">Product</Link>
            <Link href="/validation-repair">Validation &amp; Repair</Link>
            <Link href="/reconciliation">Reconciliation</Link>
            <Link href="/exception-operations">Exception Operations</Link>
            <Link href="/iso-20022">ISO 20022</Link>
          </div>
          <div>
            <h4>Company</h4>
            <Link href="/security">Security</Link>
            <Link href="/deployment">Deployment</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/request-demo">Request Demo</Link>
            <a href={`${APP_URL}/login`}>Sign in</a>
          </div>
          <div>
            <h4>Legal</h4>
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
          </div>
        </div>
        <div className="footer-bottom">
          © {new Date().getFullYear()} CloudNova. CloudNova PaymentOps is a non-transactional payment-data
          intelligence platform. It does not execute, authorize, settle, debit or credit payments.
        </div>
      </div>
    </footer>
  );
}
