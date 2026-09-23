import { type Metadata } from 'next';
import PillarPage from '@/components/PillarPage';

export const metadata: Metadata = {
  title: 'Payment Exception Management',
  description:
    'Payment exception management for operations teams: cases, human review, batch operations, lifecycle evidence and an immutable audit trail for ISO 20022 payment data.',
  alternates: { canonical: '/exception-operations' },
  openGraph: {
    title: 'Payment Exception Management | CloudNova PaymentOps',
    description:
      'Cases, human review, lifecycle evidence and an auditable decision trail for payment-data exceptions.',
    url: '/exception-operations',
  },
};

export default function ExceptionOperationsPage() {
  return (
    <PillarPage
      eyebrow="Pillar 3"
      slug="/exception-operations"
      title="Exception Operations"
      lede="Give operations teams the cases, evidence and audited decisions needed to resolve ambiguous or mismatched payment data."
      question="How does the operations team investigate and resolve exceptions?"
      capabilities={[
        { title: 'Cases', body: 'Every ambiguous outcome can become a case with a reason, evidence and accountable owner.' },
        { title: 'Human review', body: 'Approve, reject, close, confirm match, reject match or mark duplicate — all audited analytical decisions.' },
        { title: 'Batches', body: 'File-based analysis with live progress, aggregate readiness and record-level traceability.' },
        { title: 'Audit trail', body: 'Append-oriented audit of analysis, correlation, reconciliation and operator decisions.' },
        { title: 'Lifecycle evidence', body: 'Correlated ISO 20022 messages from initiation through status and account reporting.' },
        { title: 'Account-entry investigation', body: 'Separate observed bank data from PaymentOps analytical classification, per entry.' },
      ]}
      workflow={[
        'Exceptions are detected deterministically (mismatch, ambiguity, missing event, duplicate).',
        'A case is created or linked with structured evidence.',
        'The operator reviews findings, comparisons and conflicts.',
        'The operator records an audited analytical decision.',
        'The decision, actor and evidence are recorded in the audit trail.',
      ]}
      faq={[
        { question: 'Does PaymentOps resolve exceptions automatically?', answer: 'No. Exceptions are detected deterministically and presented as cases; a human operator records the analytical decision, which is audited.' },
        { question: 'What evidence is available to an operator?', answer: 'The original values, the candidate change, score inputs, related lifecycle events and account entries, and the correlation or conflict references.' },
        { question: 'Can exceptions be handled in batch?', answer: 'Yes. File-based analysis runs with live progress, aggregate readiness and record-level traceability.' },
        { question: 'Is every decision audited?', answer: 'Yes. Analysis, correlation, reconciliation and operator decisions are recorded in an append-oriented audit trail.' },
      ]}
      related={[
        { href: '/payment-exception-management', label: 'Payment exception management', description: 'The exception problem, how operations teams handle it, and how PaymentOps helps.' },
        { href: '/reconciliation', label: 'Payment matching & reconciliation', description: 'How deterministic matching and account reconciliation feed exception handling.' },
        { href: '/security', label: 'Security', description: 'Access, review controls and boundaries for controlled evaluation.' },
      ]}
    />
  );
}
