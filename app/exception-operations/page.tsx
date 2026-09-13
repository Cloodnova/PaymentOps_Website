import { type Metadata } from 'next';
import PillarPage from '@/components/PillarPage';

export const metadata: Metadata = {
  title: 'Exception Operations',
  description:
    'Cases, human review, batch operations, lifecycle evidence and an immutable audit trail for payment-data exceptions.',
  alternates: { canonical: '/exception-operations' },
};

export default function ExceptionOperationsPage() {
  return (
    <PillarPage
      eyebrow="Pillar 3"
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
    />
  );
}
