import Link from 'next/link';

const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? 'https://app.paymentops.cloudnova.tech';

const NAV = [
  { href: '/product', label: 'Product' },
  { href: '/iso-20022', label: 'ISO 20022' },
  { href: '/security', label: 'Security' },
  { href: '/deployment', label: 'Deployment' },
];

export default function SiteHeader() {
  return (
    <header className="site-header">
      <div className="site-header-inner">
        <Link href="/" className="brand" aria-label="CloudNova PaymentOps home">
          <span className="brand-mark" aria-hidden="true">C</span>
          <span className="brand-name">
            CloudNova <span>PaymentOps</span>
          </span>
        </Link>

        <nav className="site-nav" aria-label="Primary">
          {NAV.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="header-actions">
          <a className="btn btn-ghost" href={`${APP_URL}/login`}>Sign in</a>
          <Link className="btn" href="/request-demo">Request a Demo</Link>
        </div>
      </div>

      <nav className="mobile-nav" aria-label="Primary mobile">
        {NAV.map((item) => (
          <Link key={item.href} href={item.href}>
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
