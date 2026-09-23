import { type Metadata } from 'next';
import LandingPage from '@/components/LandingPage';

export const metadata: Metadata = {
  title: 'ISO 20022 Validation',
  description:
    'Validate ISO 20022 payment messages by exact version — pacs.008, pain.001, pacs.009 and pacs.002 — with schema and deterministic rule checks, structured findings and revalidated repair candidates.',
  alternates: { canonical: '/iso-20022-validation' },
  openGraph: {
    title: 'ISO 20022 Validation | CloudNova PaymentOps',
    description:
      'Exact-version ISO 20022 payment validation with deterministic rules, structured findings and repair candidates.',
    url: '/iso-20022-validation',
  },
};

export default function Iso20022ValidationPage() {
  return (
    <LandingPage
      eyebrow="ISO 20022"
      path="/iso-20022-validation"
      title="ISO 20022 validation for payment operations"
      lede="Validate ISO 20022 payment data by exact message version, understand what is wrong and why, and produce a revalidated repair candidate for a human decision."
      sections={[
        {
          title: 'Why ISO 20022 validation is difficult in practice',
          paragraphs: [
            'ISO 20022 is a family of message definitions and versions, not a single format. A message that looks correct to one system can fail another because the exact version, definition or namespace does not match.',
            'Across a migration or an interoperability programme, teams deal with a mix of versions, partial implementations, structured-address changes and downstream systems that interpret fields differently. The result is a steady volume of exceptions that are expensive to diagnose by hand.',
            'Validation is also only half the problem. When data is not usable, teams need to know whether a safe correction is possible, and they need evidence before anything is changed.',
          ],
        },
        {
          title: 'How payment operations teams handle it today',
          paragraphs: [
            'Common approaches include manual inspection of message files, spreadsheet-driven reconciliation, tickets raised to an upstream team, and bespoke scripts maintained by a small number of people.',
            'These approaches can work, but they are hard to audit, they do not scale with exception volume, and the reasoning behind a correction is often lost once a ticket is closed.',
          ],
        },
        {
          title: 'How PaymentOps helps',
          paragraphs: [
            'PaymentOps resolves messages by exact version, validates them against schema and deterministic rules, and produces machine-readable findings with explicit severities.',
            'Where a correction is possible, it generates a repair candidate — the source field, the proposed value, the reason and supporting evidence — and revalidates it. Nothing is applied automatically; an operator approves or rejects the candidate, and the decision is audited.',
            'Validation results can be seen alongside lifecycle context, so an operator can understand a message as part of a payment rather than in isolation.',
          ],
        },
        {
          title: 'Deterministic, not a black box',
          paragraphs: [
            'Validation and repair candidates are produced by deterministic logic. AI is optional, additive and never authoritative for a validation or repair decision, and the platform remains fully usable with AI disabled.',
          ],
        },
      ]}
      scope={[
        'Exact-version validation: pacs.008.001.08, pain.001.001.13, pacs.009.001.13, pacs.002.001.16, camt.053.001.14 and camt.054.001.14',
        'Schema validation plus deterministic system, default and customer rules',
        'Structured findings with severities and evidence',
        'Repair candidates with revalidation and human approval',
        'Structured-address readiness analysis',
      ]}
      limitations={[
        'Only the listed exact message versions are supported; unsupported versions return a structured error',
        'Bundled schemas are CloudNova-authored subset schemas using real ISO namespaces, not official ISO schema packs',
        'PaymentOps does not execute, authorize or settle payments',
        'Repair candidates are proposals and always require human review',
      ]}
      faq={[
        { question: 'Can PaymentOps validate pacs.008 messages?', answer: 'Yes — specifically pacs.008.001.08. It applies schema and deterministic rule validation and can generate a revalidated repair candidate for operator approval.' },
        { question: 'Which ISO 20022 messages does PaymentOps currently support?', answer: 'pacs.008.001.08, pain.001.001.13, pacs.009.001.13, pacs.002.001.16, camt.054.001.14 and camt.053.001.14. Additional families can be added according to customer and PoC requirements.' },
        { question: 'Is validation deterministic or AI-based?', answer: 'Validation is deterministic. AI is optional, additive and never authoritative for a validation or repair decision.' },
        { question: 'Does validation change my data?', answer: 'No. Validation reports findings, and any repair candidate must be approved by a human operator before it is used. Received payloads are treated as immutable evidence.' },
      ]}
      related={[
        { href: '/iso-20022', label: 'ISO 20022 support', description: 'Exact supported message versions and how unsupported versions are handled.' },
        { href: '/validation-repair', label: 'Validation & repair', description: 'The full validation and repair-candidate workflow, including revalidation.' },
        { href: '/structured-address-readiness', label: 'Structured address readiness', description: 'Analysing address readiness with country-specific rules and controlled coverage.' },
      ]}
    />
  );
}
