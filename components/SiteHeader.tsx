'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ArrowRight, ExternalLink, Menu, X } from 'lucide-react';
import { APP_URL } from '@/lib/site';

const NAV = [
  { href: '/product', label: 'Product' },
  { href: '/validation-repair', label: 'Validation & Repair' },
  { href: '/reconciliation', label: 'Reconciliation' },
  { href: '/exception-operations', label: 'Exception Operations' },
  { href: '/iso-20022', label: 'ISO 20022' },
  { href: '/security', label: 'Security' },
  { href: '/deployment', label: 'Deployment' },
];

const SIGN_IN = `${APP_URL}/login`;

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

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
          <span className="header-cta">
            <a
              className="btn btn-ghost"
              href={SIGN_IN}
              target="_blank"
              rel="noopener noreferrer"
            >
              Sign in <ExternalLink size={13} aria-hidden="true" />
            </a>
            <Link className="btn" href="/request-demo">
              Request a Demo <ArrowRight size={14} aria-hidden="true" />
            </Link>
          </span>
          <button
            className="btn btn-ghost focus-ring menu-toggle"
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            {open ? <X size={18} aria-hidden="true" /> : <Menu size={18} aria-hidden="true" />}
          </button>
        </div>
      </div>

      {open ? (
        <nav className="mobile-nav" id="mobile-navigation" aria-label="Primary mobile">
          {NAV.map((item) => (
            <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </Link>
          ))}
          <a href={SIGN_IN} target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}>
            Sign in <ExternalLink size={12} aria-hidden="true" />
          </a>
          <Link href="/request-demo" onClick={() => setOpen(false)}>
            Request a Demo
          </Link>
        </nav>
      ) : null}
    </header>
  );
}
