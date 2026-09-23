import { NextResponse } from 'next/server';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

// Returns the Google Analytics measurement id resolved from server runtime environment.
// Statically-rendered marketing pages read this at runtime in the browser so the id can be
// configured per environment (Kubernetes) without rebuilding the image. The id is public
// configuration, never a secret.
export function GET() {
  const measurementId =
    process.env.GA_MEASUREMENT_ID ?? process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? '';
  return NextResponse.json(
    { measurementId },
    { headers: { 'Cache-Control': 'public, max-age=300' } },
  );
}
