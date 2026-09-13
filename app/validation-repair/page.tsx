import { type Metadata } from 'next';
import PillarPage from '@/components/PillarPage';

export const metadata: Metadata = {
  title: 'Validation & Repair',
  description:
    'Structured validation, deterministic rules, address intelligence, repair candidates and revalidation for ISO 20022 payment data.',
  alternates: { canonical: '/validation-repair' },
};

export default function ValidationRepairPage() {
  return (
    <PillarPage
      eyebrow="Pillar 1"
      title="Validation & Repair"
      lede="Establish whether payment data is valid and usable, and produce a safe, revalidated repair candidate for operator approval."
      question="Is the payment data valid and usable, and can a safe repair candidate be produced?"
      capabilities={[
        { title: 'Structured validation', body: 'Schema and deterministic rule validation, with machine-readable findings and explicit severities.' },
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
    />
  );
}
