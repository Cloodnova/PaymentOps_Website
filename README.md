# CloudNova PaymentOps — Public Website

Public marketing website for CloudNova PaymentOps, served at **https://paymentops.cloudnova.tech**.

This repository contains **only** the public marketing website. It does not contain the
PaymentOps application or backend. The application lives in `Cloodnova/Payment_ops` and is
served privately at **https://app.paymentops.cloudnova.tech**.

## Stack

- Next.js 15 (App Router), React 19, TypeScript
- Minimal dependency footprint (`lucide-react` icons only)
- Plain CSS design system (`app/globals.css`) — institutional navy / cream / rust / teal

## Routes

`/`, `/product`, `/validation-repair`, `/reconciliation`, `/exception-operations`, `/iso-20022`,
`/security`, `/deployment`, `/request-demo`, `/contact`, `/privacy`, `/terms`.
Plus `sitemap.xml` and `robots.txt`.

## Development

```bash
pnpm install
pnpm dev          # http://localhost:3000
pnpm lint
pnpm typecheck
pnpm test
pnpm build
```

## Environment

| Variable | Purpose |
|----------|---------|
| `NEXT_PUBLIC_SITE_URL` | Canonical site URL (default `https://paymentops.cloudnova.tech`) |
| `NEXT_PUBLIC_APP_URL` | Private application URL for Sign in links (default `https://app.paymentops.cloudnova.tech`) |
| `DEMO_REQUEST_WEBHOOK_URL` | Optional CRM/email webhook for demo requests (see `docs/demo-request-flow.md`) |

## Documentation

- `docs/architecture.md`
- `docs/deployment.md`
- `docs/content-guidelines.md`
- `docs/demo-request-flow.md`

## Boundary

PaymentOps is non-transactional. This website must never claim payment execution, SWIFT
certification, or certifications CloudNova does not hold. See `docs/content-guidelines.md`.
