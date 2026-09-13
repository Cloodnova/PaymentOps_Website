// Demo-request validation and delivery abstraction.
//
// Submissions are never silently discarded: they are delivered to a configured webhook (CRM /
// email integration) and always recorded as a structured, sanitized server log event. No
// credentials or secrets are ever included.

export const USE_CASES = [
  'Payment validation',
  'Structured address readiness',
  'Payment reconciliation',
  'Exception operations',
  'ISO 20022 migration/readiness',
  'Bank PoC',
  'Other',
] as const;

export interface DemoRequest {
  first_name: string;
  last_name: string;
  email: string;
  company: string;
  role: string;
  country: string;
  use_case: string;
  message: string;
}

export type ValidationResult =
  | { ok: true; value: DemoRequest }
  | { ok: false; errors: string[] };

const MAX = 500;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function str(value: unknown, max = MAX): string {
  return typeof value === 'string' ? value.trim().slice(0, max) : '';
}

export function validateDemoRequest(input: unknown): ValidationResult {
  const raw = (input ?? {}) as Record<string, unknown>;
  const value: DemoRequest = {
    first_name: str(raw.first_name, 120),
    last_name: str(raw.last_name, 120),
    email: str(raw.email, 255),
    company: str(raw.company, 200),
    role: str(raw.role, 120),
    country: str(raw.country, 120),
    use_case: str(raw.use_case, 80),
    message: str(raw.message, 2000),
  };

  const errors: string[] = [];
  if (!value.first_name) errors.push('First name is required.');
  if (!value.last_name) errors.push('Last name is required.');
  if (!value.email || !EMAIL_RE.test(value.email)) errors.push('A valid work email is required.');
  if (!value.company) errors.push('Company is required.');
  if (!value.country) errors.push('Country is required.');
  if (!value.use_case || !USE_CASES.includes(value.use_case as (typeof USE_CASES)[number])) {
    errors.push('A valid use case is required.');
  }
  return errors.length ? { ok: false, errors } : { ok: true, value };
}

export interface DeliveryResult {
  delivered: boolean;
  channel: 'webhook' | 'log';
}

/**
 * Deliver a validated demo request.
 *
 * - If ``DEMO_REQUEST_WEBHOOK_URL`` is configured, POST the request as JSON and require 2xx.
 * - Always emit a structured server log event so a request is never silently dropped.
 *
 * Configure a webhook (CRM / email integration) in production. See docs/demo-request-flow.md.
 */
export async function deliverDemoRequest(
  value: DemoRequest,
  log: (event: string, fields: Record<string, unknown>) => void,
): Promise<DeliveryResult> {
  const webhook = process.env.DEMO_REQUEST_WEBHOOK_URL;
  if (webhook) {
    try {
      const res = await fetch(webhook, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ ...value, source: 'paymentops-website' }),
        cache: 'no-store',
      });
      if (res.ok) {
        log('demo_request_delivered', { channel: 'webhook', use_case: value.use_case, country: value.country });
        return { delivered: true, channel: 'webhook' };
      }
      log('demo_request_webhook_failed', { status: res.status, use_case: value.use_case });
    } catch {
      log('demo_request_webhook_error', { use_case: value.use_case });
    }
  }

  // Fallback: durable structured log record (no silent discard).
  log('demo_request_received', {
    channel: 'log',
    email: value.email,
    company: value.company,
    role: value.role,
    country: value.country,
    use_case: value.use_case,
    has_message: Boolean(value.message),
  });
  return { delivered: true, channel: 'log' };
}
