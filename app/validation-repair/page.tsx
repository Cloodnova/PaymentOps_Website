import { type Metadata } from 'next';
import PillarPage from '@/components/PillarPage';

export const metadata: Metadata = {
  title: 'ISO 20022 Payment Validation & Repair',
  description:
    'Validate ISO 20022 payment data — pacs.008, pain.001, pacs.009 and pacs.002 — against schema and deterministic rules, and generate revalidated repair candidates for operator review.',
  alternates: { canonical: '/validation-repair' },
  openGraph: {
    title: 'ISO 20022 Payment Validation & Repair | CloudNova PaymentOps',
    description:
      'Structured validation, deterministic rules and revalidated repair candidates for ISO 20022 payment data.',
    url: '/validation-repair',
  },
};

export default function ValidationRepairPage() {
  return (
    <PillarPage
      eyebrow="Pillar 1"
      slug="/validation-repair"
      title="Validation & Repair"
      lede="Establish whether payment data is valid and usable, and produce a safe, revalidated repair candidate for operator approval."
      question="Is the payment data valid and usable, and can a safe repair candidate be produced?"
      capabilities={[
        { title: 'Structured validation', body: 'Schema and deterministic rule validation for exact ISO 20022 versions, with machine-readable findings and explicit severities.' },
        { title: 'Mapping', body: 'Declarative, data-driven mappings from source payloads to the canonical payment model. No arbitrary code execution.' },
        { title: 'Deterministic rules', body: 'System, default and customer rules evaluated consistently, with a versioned ruleset per profile.' },
        { title: 'Address intelligence', body: 'Structured address readiness with provider fallback and explicit geography coverage states.' },
        { title: 'Repair candidates', body: 'Safe, evidence-backed repair proposals generated from deterministic transformations.' },
        { title: 'Revalidation', body: 'Every repair candidate is revalidated before it can be approved by a human operator.' },
      ]}
      workflow={[
        'Ingest the source payload through a governed integration profile.',
        'Validate against schema and deterministic rules; capture findings.',
        'Analyse structured address readiness and coverage.',
        'Generate a repair candidate and revalidate it.',
        'Route the candidate to an operator for an audited decision.',
      ]}
      faq={[
        { question: 'Can PaymentOps validate pacs.008 messages?', answer: 'Yes — specifically pacs.008.001.08. It applies schema and deterministic rule validation and can generate a revalidated repair candidate for operator approval.' },
        { question: 'Is validation deterministic or AI-based?', answer: 'Validation is deterministic. AI is optional, additive and never authoritative for a validation or repair decision.' },
        { question: 'Are repair candidates applied automatically?', answer: 'No. Repair candidates are proposals with evidence; an operator reviews and approves or rejects them, and the decision is audited.' },
        { question: 'Does validation replace the customer schema?', answer: 'No. PaymentOps validates against the supported exact message versions and integration-profile rules; customers retain responsibility for their own operational and regulatory decisions.' },
      ]}
      related={[
        { href: '/iso-20022-validation', label: 'ISO 20022 validation', description: 'How validation, exact-version dispatch and structured failure work in practice.' },
        { href: '/structured-address-readiness', label: 'Structured address readiness', description: 'Analysing address readiness with country-specific rules and controlled coverage.' },
        { href: '/reconciliation', label: 'Payment matching & reconciliation', description: 'Reconcile lifecycle events and account entries against expected records.' },
      ]}
    />
  );
}
