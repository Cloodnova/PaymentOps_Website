export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://paymentops.cloudnova.tech';
export const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? 'https://paymentops-app.cloudnova.tech';

// Public, indexable routes. Used by the sitemap; never include API or private app routes.
export const ROUTES = [
  '/',
  '/product',
  '/validation-repair',
  '/reconciliation',
  '/exception-operations',
  '/iso-20022',
  '/security',
  '/deployment',
  '/request-demo',
  '/contact',
  '/privacy',
  '/terms',
  // Search-intent landing pages.
  '/iso-20022-validation',
  '/payment-reconciliation',
  '/payment-exception-management',
  '/structured-address-readiness',
];

// Slightly higher crawl priority for the product/search landing pages.
export const HIGH_PRIORITY_ROUTES = new Set([
  '/',
  '/iso-20022',
  '/validation-repair',
  '/reconciliation',
  '/exception-operations',
  '/iso-20022-validation',
  '/payment-reconciliation',
  '/payment-exception-management',
  '/structured-address-readiness',
]);
