# Demo Request Flow

## Customer-facing flow

1. Visitor submits the `/request-demo` form.
2. The form posts JSON to `/api/demo-request`.
3. The route validates the submission and delivers it (see below).
4. CloudNova reviews the request.
5. CloudNova creates the organization/tenant and authorized users.
6. The user receives secure access and signs in at `https://app.paymentops.cloudnova.tech`.

There is **no** public self-service signup and **no** automatic tenant provisioning.

## Delivery

`lib/demoRequest.ts` implements a delivery abstraction:

- If `DEMO_REQUEST_WEBHOOK_URL` is set, the request is POSTed as JSON to that webhook (CRM or
  email integration). A non-2xx response is treated as a delivery failure.
- Regardless of webhook configuration, a structured, sanitized server log event
  (`demo_request_received`) is emitted. Requests are **never silently discarded**.

### Configuration

| Variable | Required | Purpose |
|----------|----------|---------|
| `DEMO_REQUEST_WEBHOOK_URL` | Recommended | CRM / email integration endpoint |

Recommended production webhook: a CloudNova-owned endpoint or CRM (e.g. a form-to-email or
CRM lead endpoint). Until a webhook is configured, submissions are recorded in the container
log (which is collected by the platform).

## Validation

Required: first name, last name, valid work email, company, country, use case. Optional:
role, message. Field lengths are bounded; free text is truncated to 2000 characters. A
lightweight per-IP rate limit (5 requests / minute) reduces abuse.

## Privacy

Do not request or accept payment payloads, account numbers or other sensitive financial data
through the website. See `/privacy`.
