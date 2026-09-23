import { type Metadata } from 'next';
import PillarPage from '@/components/PillarPage';

export const metadata: Metadata = {
  title: 'Payment Matching & Reconciliation',
  description:
    'Deterministic payment matching and reconciliation: exact and normalized comparison, weighted scoring, critical-conflict detection, and camt.053/camt.054 account-event reconciliation.',
  alternates: { canonical: '/reconciliation' },
  openGraph: {
    title: 'Payment Matching & Reconciliation | CloudNova PaymentOps',
    description:
      'Reconcile ISO 20022 payments and camt.053/camt.054 account entries with deterministic scoring and explicit conflict handling.',
    url: '/reconciliation',
  },
};

export default function ReconciliationPage() {
  return (
    <PillarPage
      eyebrow="Pillar 2"
      slug="/reconciliation"
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
      faq={[
        { question: 'Can PaymentOps reconcile camt.053 and camt.054 entries?', answer: 'Yes. It reconciles camt.053 and camt.054 account entries against payment lifecycles, with duplicate detection, amount-mismatch detection and evidence codes.' },
        { question: 'Is the match score a probability?', answer: 'No. It is a bounded, weighted score produced by a versioned deterministic policy — not a statistical probability.' },
        { question: 'What happens when values conflict?', answer: 'Material amount, currency, account or identifier conflicts override high fuzzy scores and are routed to human review as cases.' },
        { question: 'Does reconciliation require the full payment lifecycle?', answer: 'Lifecycle evidence improves correlation, but reconciliation can operate on available sources; missing events are surfaced as explicit findings rather than assumed.' },
      ]}
      related={[
        { href: '/payment-reconciliation', label: 'Payment reconciliation', description: 'The reconciliation problem, how operations teams handle it, and how PaymentOps helps.' },
        { href: '/exception-operations', label: 'Exception operations', description: 'Turn ambiguous or mismatched outcomes into cases with evidence and audited decisions.' },
        { href: '/iso-20022', label: 'ISO 20022 support', description: 'Exact supported message versions, including camt.053.001.14 and camt.054.001.14.' },
      ]}
    />
  );
}
