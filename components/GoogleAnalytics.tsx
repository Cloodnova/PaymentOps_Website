'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import {
  setAnalyticsMeasurementId,
  trackEvent,
  trackPageView,
  type AnalyticsEvent,
} from '@/lib/analytics';

// Pages that emit an extra page-scoped event in addition to the standard page_view.
const PAGE_EVENTS: Record<string, AnalyticsEvent> = {
  '/iso-20022': 'iso20022_page_view',
  '/security': 'security_page_view',
  '/deployment': 'deployment_page_view',
};

// Runtime fallback: inject the gtag loader/init once when the id was not baked at build time.
function injectGtag(id: string): void {
  if (document.getElementById('ga-gtag-src')) return;
  const src = document.createElement('script');
  src.id = 'ga-gtag-src';
  src.async = true;
  src.src = `https://www.googletagmanager.com/gtag/js?id=${id}`;
  document.head.appendChild(src);

  const init = document.createElement('script');
  init.id = 'ga-gtag-init';
  init.text =
    'window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}' +
    'window.gtag=window.gtag||gtag;gtag(\'js\',new Date());' +
    `gtag('config','${id}',{send_page_view:false});`;
  document.head.appendChild(init);
}

/**
 * Client-side analytics controller rendered once from the root layout.
 *
 * The gtag.js loader/init tags themselves are rendered server-side by the layout when the
 * measurement id is available at build time (so there is exactly one tag in the HTML). This
 * component handles: runtime id resolution (id supplied by Kubernetes without a rebuild),
 * explicit SPA page_view tracking (config uses send_page_view:false to avoid duplicates), and
 * page-scoped events. It never renders tags when the layout already did.
 */
export default function GoogleAnalytics({ measurementId }: { measurementId?: string }) {
  const pathname = usePathname();
  const lastPath = useRef<string | null>(null);
  const [resolvedId, setResolvedId] = useState<string>(measurementId ?? '');

  useEffect(() => {
    if (measurementId) {
      setResolvedId(measurementId);
      return;
    }
    if (resolvedId) return;
    let cancelled = false;
    fetch('/api/analytics-config', { cache: 'no-store' })
      .then((res) => (res.ok ? res.json() : null))
      .then((data: { measurementId?: string } | null) => {
        if (cancelled || !data?.measurementId) return;
        setResolvedId(data.measurementId);
        injectGtag(data.measurementId);
      })
      .catch(() => {
        /* analytics is optional; never break the page */
      });
    return () => {
      cancelled = true;
    };
  }, [measurementId, resolvedId]);

  useEffect(() => {
    setAnalyticsMeasurementId(resolvedId);
  }, [resolvedId]);

  useEffect(() => {
    if (!resolvedId || !pathname) return;
    if (lastPath.current === pathname) return;
    lastPath.current = pathname;
    trackPageView(pathname);
    const pageEvent = PAGE_EVENTS[pathname];
    if (pageEvent) trackEvent(pageEvent, { page_path: pathname });
  }, [resolvedId, pathname]);

  return null;
}
