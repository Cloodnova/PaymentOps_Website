import { type Metadata } from 'next';
import LandingPage from '@/components/LandingPage';

export const metadata: Metadata = {
  title: 'Payment Reconciliation',
  description:
    'Deterministic payment reconciliation for banks and fintechs: match payments to expected records, reconcile camt.053 and camt.054 account events, and surface duplicates and amount mismatches.',
  alternates: { canonical: '/payment-reconciliation' },
  openGraph: {
    title: 'Payment Reconciliation | CloudNova PaymentOps',
    description:
      'Reconcile ISO 20022 payments and account events with deterministic matching, conflict detection and human review.',
    url: '/payment-reconciliation',
  },
};

export default function PaymentReconciliationPage() {
  return (
    <LandingPage
      eyebrow="Reconciliation"
      path="/payment-reconciliation"
      title="Payment matching and reconciliation for banks and fintechs"
      lede="Match payment records against expected outcomes, reconcile account events, and make every break explainable with deterministic evidence."
      sections={[
        {
          title: 'Why payment reconciliation breaks down',
          paragraphs: [
            'A payment is rarely one record. It is an initiation, one or more transfers, status updates and, eventually, account events. Matching those records across systems is where reconciliation work concentrates.',
            'Small differences — a reference format, a normalized name, a corrected value, a duplicate notification — turn a clean match into a break. When identifiers are missing or partially populated, the problem compounds.',
            'Account events add another dimension: camt.053 statements and camt.054 notifications must be tied back to the payments they represent, and duplicates or amount differences need to be visible rather than assumed away.',
          ],
        },
        {
          title: 'How teams reconcile today',
          paragraphs: [
            'Reconciliation is often a blend of rule-based scripts, spreadsheets and break queues reviewed by operations staff. It is effective for known patterns but struggles with ambiguity and does not always preserve the evidence behind a decision.',
          ],
        },
        {
          title: 'How PaymentOps helps',
          paragraphs: [
            'PaymentOps builds a canonical record for each source, normalizes both sides deterministically, then applies exact checks followed by bounded fuzzy comparison where appropriate.',
            'A versioned, weighted matching policy produces a bounded score — not a statistical probability. Material amount, currency, account or identifier conflicts override high similarity scores and route to review, so a confident-looking match is never accepted when something important disagrees.',
            'For account events, camt.053 and camt.054 entries are reconciled to payment lifecycles with evidence codes, and duplicates and amount mismatches are classified explicitly. Ambiguous outcomes become cases for a human decision.',
          ],
        },
        {
          title: 'Evidence over automation',
          paragraphs: [
            'The goal is a defensible outcome: what was expected, what was observed, how the comparison was made, and what an operator decided. Reconciliation results are recorded with their evidence, and received payloads remain immutable.',
          ],
        },
      ]}
      scope={[
        'Exact and normalized comparison across references, identifiers, accounts, amounts and currency',
        'Deterministic, versioned weighted scoring with explicit conflict detection',
        'Account-event reconciliation for camt.053.001.14 and camt.054.001.14',
        'Duplicate-entry and amount-mismatch classification',
        'Lifecycle correlation across initiation, transfer and status messages',
      ]}
      limitations={[
        'The match score is a bounded deterministic score, not a probability or accuracy guarantee',
        'PaymentOps is non-transactional and is not a settlement or clearing system',
        'Coverage is limited to the supported exact message versions',
        'Ambiguous or conflicting results require human review',
      ]}
      faq={[
        { question: 'Can PaymentOps reconcile camt.053 and camt.054 entries?', answer: 'Yes. It reconciles camt.053 and camt.054 account entries against payment lifecycles, with duplicate detection, amount-mismatch detection and evidence codes.' },
        { question: 'Is the match score a probability?', answer: 'No. It is a bounded, weighted score produced by a versioned deterministic policy — not a statistical probability or an accuracy guarantee.' },
        { question: 'What happens when values conflict?', answer: 'Material amount, currency, account or identifier conflicts override high fuzzy scores and are routed to human review as cases.' },
        { question: 'Does reconciliation move money?', answer: 'No. PaymentOps is non-transactional. It analyzes and reconciles payment data and never initiates, executes or settles payments.' },
      ]}
      related={[
        { href: '/reconciliation', label: 'Matching & reconciliation', description: 'The reconciliation pillar in detail, including scoring and conflict handling.' },
        { href: '/exception-operations', label: 'Exception operations', description: 'How breaks and ambiguous outcomes become cases with evidence and audited decisions.' },
        { href: '/iso-20022', label: 'ISO 20022 support', description: 'Exact supported versions, including camt.053.001.14 and camt.054.001.14.' },
      ]}
    />
  );
}
