# Architecture

## Purpose

The public marketing website explains CloudNova PaymentOps and captures demo requests. It is
completely separate from the PaymentOps application.

## Topology

```
Internet visitor
  -> https://paymentops.cloudnova.tech           (this website)
  -> Request Demo
  -> CloudNova qualification / onboarding
  -> customer/user provisioned
  -> https://app.paymentops.cloudnova.tech       (private application)
  -> login -> authenticated session -> PaymentOps application
```

The public website **must not** expose PaymentOps operational APIs.

## Separation

| Concern | Public website | Private application |
|---------|----------------|---------------------|
| Repository | `Cloodnova/PaymentOps_Website` | `Cloodnova/Payment_ops` |
| Domain | `paymentops.cloudnova.tech` | `app.paymentops.cloudnova.tech` |
| Namespace | `paymentops-site` | `paymentops` |
| Image | `paymentops-website` | `paymentops-web` / `-api` / `-worker` |
| Auth | none (public) | server-side sessions |

## Components

- **App Router pages** under `app/` (static, server-rendered).
- **Design system** in `app/globals.css` (CSS variables; no Tailwind/UI framework).
- **Shared components** in `components/` (header, footer, page hero, pillar layout, demo form).
- **Demo-request API** at `app/api/demo-request/route.ts`, with validation and a delivery
  abstraction in `lib/demoRequest.ts`.

## Non-goals

No CMS, no public signup, no tenant provisioning, no operational API surface.
