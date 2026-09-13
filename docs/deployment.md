# Deployment

The website is deployed as an immutable container image to the CloudNova Kubernetes cluster and
routed by the Envoy Gateway.

## Image

```
ghcr.io/cloodnova/paymentops-website:<immutable-git-sha>
```

Built by CI (`.github/workflows/ci.yml`) on every push to `main`. Never use `latest` in
production.

## Kubernetes

- Namespace: `paymentops-site`
- Deployment: `paymentops-website`
- Service: `paymentops-website` (port 80 -> container 3000)
- GitOps manifests live in the `homeserver` repository:
  `clusters/loudnova/apps/paymentops-site/`

## Routing

Envoy Gateway performs hostname routing:

| Hostname | Backend |
|----------|---------|
| `paymentops.cloudnova.tech` | `paymentops-site/paymentops-website:80` |
| `app.paymentops.cloudnova.tech` | `paymentops/paymentops-web:80` |
| `paymentops-dev.cloudnova.tech` | `paymentops/paymentops-web:80` (development) |

`paymentops-api` is **not** exposed publicly.

## Cloudflare

Cloudflare routes all three hostnames to the existing Envoy Gateway origin
(`public-envoy.envoy-gateway-system.svc.cluster.local:80`). DNS/tunnel records for
`paymentops.cloudnova.tech` and `app.paymentops.cloudnova.tech` must be configured in
Cloudflare. See the `homeserver` docs.

## Environment

Set `NEXT_PUBLIC_SITE_URL`, `NEXT_PUBLIC_APP_URL`, and (optionally)
`DEMO_REQUEST_WEBHOOK_URL`. No secrets are required for the website.
