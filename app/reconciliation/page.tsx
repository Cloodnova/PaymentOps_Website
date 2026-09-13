import { type Metadata } from 'next';
import PillarPage from '@/components/PillarPage';

export const metadata: Metadata = {
  title: 'Matching & Reconciliation',
  description:
    'Deterministic exact and fuzzy comparison, weighted scoring, critical-conflict detection and account reconciliation.',
  alternates: { canonical: '/reconciliation' },
};

export default function ReconciliationPage() {
  return (
    <PillarPage
      eyebrow="Pillar 2"
      title="Matching & Reconciliation"
      lede="Determine whether a record corresponds to an expected payment, account or business record — with deterministic scoring and explicit conflict handling."
      question="Does this record correspond to the expected payment, account or business record?"
      capabilities={[
        { title: 'Exact comparison', body: 'High-authority identifiers compared exactly: transaction IDs, end-to-end IDs, accounts, amounts and currency.' },
        { title: 'Normalized comparison', body: 'Deterministic normalization (references, IBANs, names, dates) before any fuzzy comparison.' },
        { title: 'Deterministic scoring', body: 'Weighted, versioned matching policy produces a bounded match score — never a statistical probability.' },
        { title: 'Critical conflict detection', body: 'Material amount, currency, account and identifier conflicts override high fuzzy scores and route to review.' },
        { title: 'Account reconciliation', body: 'camt.053/camt.054 account entries reconciled to payment lifecycles with evidence codes.' },
        { title: 'Operator review', body: 'Ambiguous or conflicting outcomes become cases for human confirmation — never silent automation.' },
      ]}
      workflow={[
        'Build a canonical record from each source (payment, expected, invoice, ledger, account event).',
        'Normalize both sides deterministically.',
        'Run exact checks, then fuzzy similarity where appropriate.',
        'Apply a versioned weighted policy and detect critical conflicts.',
        'Classify as matched, possible, unmatched, duplicate candidate or review required.',
      ]}
    />
  );
}
