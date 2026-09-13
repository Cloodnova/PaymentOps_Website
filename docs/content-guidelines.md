# Content Guidelines

These rules are mandatory for all website copy.

## Product positioning

- Describe PaymentOps as an **enterprise payment-data intelligence and exception-operations
  platform** designed for controlled bank and fintech evaluations and PoC deployments.
- State clearly that it is **non-transactional**: it does not execute, authorize, settle, debit
  or credit payments.

## Allowed claims

- Deterministic validation, repair candidates and revalidation.
- Deterministic matching/reconciliation with critical-conflict detection.
- Exception operations with human review and an audit trail.
- Exact ISO 20022 version support (list only the supported versions).

## Prohibited claims

Do **not** use:

- "AI-powered payment processing", "automated payments", "payment execution".
- "SWIFT-certified", "SWIFT-approved", or any Swift endorsement/branding.
- "Fully autonomous reconciliation".
- "ISO 27001 certified", "SOC 2 certified", "PCI DSS certified" (unless actually achieved).
- Any claim of global address coverage.

## Address intelligence

Describe structured address readiness carefully. List the development geography
(Italy, India, Saudi Arabia, United Kingdom, Germany, France, Spain, Netherlands) and state:

> Geography datasets are enabled according to customer and production requirements.

## ISO 20022

List only currently supported exact versions:

`pacs.008.001.08`, `pain.001.001.13`, `pacs.002.001.16`, `pacs.009.001.13`,
`camt.053.001.14`, `camt.054.001.14`.

Add: "Additional message families can be added according to customer and PoC requirements."

## Screenshots

Use sanitized screenshots only. Never include real customer data, secrets, API client
credentials, internal cluster names, private hostnames or personal data.
