// Privacy-conscious analytics helper for the public marketing website.
//
// Only aggregate, non-identifying interaction data is sent. We NEVER send payment payloads,
// ISO message contents, message names, account numbers, credentials or any customer financial
// data. Demo-request events deliberately exclude email, name and message contents.
//
// The measurement id is resolved at runtime on the server (see app/layout.tsx) and handed to
// the client component, so it can be configured per environment without a rebuild. When no id
// is configured, every helper is a safe no-op.

export type AnalyticsEvent =
  | 'request_demo_clicked'
  | 'request_demo_started'
  | 'request_demo_submitted'
  | 'request_demo_error'
  | 'signin_clicked'
  | 'explore_product_clicked'
  | 'iso20022_page_view'
  | 'security_page_view'
  | 'deployment_page_view'
  | 'contact_clicked'
  | 'poc_cta_clicked';

export type AnalyticsParams = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

let activeMeasurementId: string | null = null;

/** Called by the analytics component with the id resolved from server runtime configuration. */
export function setAnalyticsMeasurementId(id: string | undefined | null): void {
  activeMeasurementId = id && id.trim() ? id.trim() : null;
}

export function analyticsEnabled(): boolean {
  return activeMeasurementId !== null;
}

// Ensure a gtag shim exists that queues into dataLayer. gtag.js drains the queue when it loads,
// so events fired before the script finishes are preserved (this mirrors the canonical snippet).
function ensureGtag(): void {
  if (typeof window === 'undefined') return;
  window.dataLayer = window.dataLayer || [];
  if (typeof window.gtag !== 'function') {
    window.gtag = function gtag(...args: unknown[]) {
      window.dataLayer?.push(args);
    };
  }
}

/** Fire a single semantic event. No-op on the server or when analytics is not configured. */
export function trackEvent(name: AnalyticsEvent, params?: AnalyticsParams): void {
  if (!activeMeasurementId || typeof window === 'undefined') return;
  ensureGtag();
  window.gtag?.('event', name, params ?? {});
}

/** Fire an explicit SPA page_view (gtag config uses send_page_view:false to avoid duplicates). */
export function trackPageView(path: string, title?: string): void {
  if (!activeMeasurementId || typeof window === 'undefined') return;
  ensureGtag();
  window.gtag?.('event', 'page_view', {
    page_path: path,
    page_location: window.location.href,
    page_title: title ?? document.title,
  });
}
