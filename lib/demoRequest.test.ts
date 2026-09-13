import { afterEach, describe, expect, it, vi } from 'vitest';
import { deliverDemoRequest, USE_CASES, validateDemoRequest } from './demoRequest';

const VALID = {
  first_name: 'Maya',
  last_name: 'Alvarez',
  email: 'maya@example.com',
  company: 'Northstar Commercial Bank',
  role: 'Head of Payment Operations',
  country: 'United Kingdom',
  use_case: 'Payment validation',
  message: 'Interested in an ISO 20022 readiness PoC.',
};

afterEach(() => {
  vi.restoreAllMocks();
  delete process.env.DEMO_REQUEST_WEBHOOK_URL;
});

describe('demo request validation', () => {
  it('accepts a valid submission and trims fields', () => {
    const result = validateDemoRequest({ ...VALID, first_name: '  Maya  ' });
    expect(result.ok).toBe(true);
    if (result.ok) {
      expect(result.value.first_name).toBe('Maya');
      expect(result.value.use_case).toBe('Payment validation');
    }
  });

  it('rejects missing required fields', () => {
    const result = validateDemoRequest({ email: 'not-an-email' });
    expect(result.ok).toBe(false);
    if (!result.ok) {
      expect(result.errors).toContain('First name is required.');
      expect(result.errors).toContain('A valid work email is required.');
    }
  });

  it('rejects an unknown use case', () => {
    const result = validateDemoRequest({ ...VALID, use_case: 'Free money' });
    expect(result.ok).toBe(false);
  });

  it('exposes the documented use-case choices', () => {
    expect(USE_CASES).toContain('ISO 20022 migration/readiness');
    expect(USE_CASES).toContain('Bank PoC');
  });

  it('truncates over-long free text', () => {
    const result = validateDemoRequest({ ...VALID, message: 'x'.repeat(5000) });
    expect(result.ok).toBe(true);
    if (result.ok) expect(result.value.message.length).toBe(2000);
  });
});

describe('demo request delivery', () => {
  it('delivers via webhook when configured', async () => {
    process.env.DEMO_REQUEST_WEBHOOK_URL = 'https://crm.example.com/lead';
    const fetchMock = vi.fn(async () => new Response(null, { status: 200 }));
    vi.stubGlobal('fetch', fetchMock);
    const log = vi.fn();
    const result = await deliverDemoRequest(VALID, log);
    expect(result.channel).toBe('webhook');
    expect(fetchMock).toHaveBeenCalledOnce();
    expect(log).toHaveBeenCalledWith('demo_request_delivered', expect.anything());
  });

  it('falls back to a durable structured log when no webhook is configured (never silently drops)', async () => {
    const log = vi.fn();
    const result = await deliverDemoRequest(VALID, log);
    expect(result.delivered).toBe(true);
    expect(result.channel).toBe('log');
    expect(log).toHaveBeenCalledWith('demo_request_received', expect.objectContaining({ email: VALID.email }));
  });
});
