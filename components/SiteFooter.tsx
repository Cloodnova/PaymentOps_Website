import Link from 'next/link';
import { APP_URL } from '@/lib/site';
import TrackedLink from '@/components/TrackedLink';

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="brand" style={{ marginBottom: '0.85rem' }}>
              <span className="brand-mark" aria-hidden="true">C</span>
              <span className="brand-name" style={{ color: 'var(--navy-fg)' }}>
                CloudNova <span style={{ opacity: 0.6 }}>PaymentOps</span>
              </span>
            </div>
            <p className="small" style={{ color: 'var(--navy-muted)', maxWidth: '22rem' }}>
              Payment data intelligence and exception operations for financial institutions.
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
            <h4>Solutions</h4>
            <Link href="/iso-20022-validation">ISO 20022 validation</Link>
            <Link href="/payment-reconciliation">Payment reconciliation</Link>
            <Link href="/payment-exception-management">Payment exceptions</Link>
            <Link href="/structured-address-readiness">Structured address readiness</Link>
          </div>
          <div>
            <h4>Company</h4>
            <Link href="/security">Security</Link>
            <Link href="/deployment">Deployment</Link>
            <TrackedLink href="/contact" event="contact_clicked" eventParams={{ location: 'footer' }}>
              Contact
            </TrackedLink>
            <Link href="/request-demo">Request a Demo</Link>
            <TrackedLink
              href={`${APP_URL}/login`}
              event="signin_clicked"
              eventParams={{ location: 'footer' }}
              external
            >
              Sign in
            </TrackedLink>
          </div>
          <div>
            <h4>Legal</h4>
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
          </div>
        </div>
        <div className="footer-bottom">
          © {new Date().getFullYear()} CloudNova. CloudNova PaymentOps is a non-transactional
          payment-data intelligence platform. It does not execute, authorize, settle, debit or credit
          payments.
        </div>
      </div>
    </footer>
  );
}
