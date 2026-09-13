import { NextResponse } from 'next/server';
import { deliverDemoRequest, validateDemoRequest } from '@/lib/demoRequest';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

// Lightweight in-memory rate limit (per process). Sufficient for a marketing form.
const WINDOW_MS = 60_000;
const MAX_PER_WINDOW = 5;
const hits = new Map<string, { count: number; resetAt: number }>();

function rateLimited(key: string): boolean {
  const now = Date.now();
  const entry = hits.get(key);
  if (!entry || entry.resetAt < now) {
    hits.set(key, { count: 1, resetAt: now + WINDOW_MS });
    return false;
  }
  entry.count += 1;
  return entry.count > MAX_PER_WINDOW;
}

export async function POST(request: Request) {
  const ip =
    request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ??
    request.headers.get('x-real-ip') ??
    'unknown';
  if (rateLimited(ip)) {
    return NextResponse.json({ detail: 'Too many requests. Please try again shortly.' }, { status: 429 });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ detail: 'Invalid request.' }, { status: 400 });
  }

  const result = validateDemoRequest(body);
  if (!result.ok) {
    return NextResponse.json({ detail: 'Please complete the required fields.', errors: result.errors }, { status: 422 });
  }

  const delivery = await deliverDemoRequest(result.value, (event, fields) => {
    // Structured, sanitized server log. No secrets or credentials are present.
    console.info(JSON.stringify({ event, ...fields }));
  });

  if (!delivery.delivered) {
    return NextResponse.json({ detail: 'We could not record your request. Please try again.' }, { status: 503 });
  }

  return NextResponse.json({ ok: true }, { status: 202 });
}
