import { type Metadata } from 'next';
import LandingPage from '@/components/LandingPage';

export const metadata: Metadata = {
  title: 'Payment Exception Management',
  description:
    'Payment exception management for operations teams: investigate breaks with structured evidence, route ambiguous outcomes to human review, and keep an immutable audit trail.',
  alternates: { canonical: '/payment-exception-management' },
  openGraph: {
    title: 'Payment Exception Management | CloudNova PaymentOps',
    description:
      'Investigate payment exceptions with structured evidence, human review and an auditable decision trail.',
    url: '/payment-exception-management',
  },
};

export default function PaymentExceptionManagementPage() {
  return (
    <LandingPage
      eyebrow="Exceptions"
      path="/payment-exception-management"
      title="Payment exception management for operations teams"
      lede="Turn payment exceptions into structured cases with evidence, a clear owner and an audited decision — instead of a queue that silently changes data."
      sections={[
        {
          title: 'Why payment exceptions are costly',
          paragraphs: [
            'Exceptions are the last mile of payment operations. A missing identifier, a mismatched amount, an out-of-order status or an ambiguous match can stall a payment and pull in several teams.',
            'The cost is rarely the single exception. It is the repeated explanation, the lost context between systems, and the difficulty of showing why a decision was made when someone asks later.',
          ],
        },
        {
          title: 'How teams manage exceptions today',
          paragraphs: [
            'Exceptions are frequently tracked in a ticket queue or a spreadsheet, with evidence assembled manually from different systems. Handoffs lose context, and the reasoning behind a resolution is often recorded only as a short comment.',
            'When a payment spans initiation, transfer, status and account reporting, assembling that context by hand is slow and error-prone.',
          ],
        },
        {
          title: 'How PaymentOps helps',
          paragraphs: [
            'PaymentOps detects exceptions deterministically — mismatch, ambiguity, missing event or duplicate — and creates a structured case with the evidence attached.',
            'An operator sees the original values, the candidate change, the score inputs, related lifecycle events and account entries, and the correlation or conflict references together, then records an analytical decision: approve, reject, close, confirm match, reject match or mark duplicate.',
            'Every analysis, correlation, reconciliation and operator decision is written to an append-oriented audit trail, so the path to an outcome is preserved.',
          ],
        },
        {
          title: 'Human decisions stay human',
          paragraphs: [
            'PaymentOps does not resolve exceptions autonomously. It narrows the problem, presents the evidence and records the decision. AI, where enabled, only proposes candidates and explanations — it never approves or executes anything.',
          ],
        },
      ]}
      scope={[
        'Cases with reason, evidence and accountable owner',
        'Human review decisions recorded in an audit trail',
        'Batch analysis with live progress and record-level traceability',
        'Lifecycle evidence across ISO 20022 initiation, transfer, status and account reporting',
        'Account-entry investigation that separates observed bank data from analytical classification',
      ]}
      limitations={[
        'Exceptions require human decisions; PaymentOps does not resolve them autonomously',
        'PaymentOps does not execute, authorize or settle payments, and makes no sanctions or AML decisions',
        'Coverage is limited to the supported exact ISO 20022 message versions',
        'Audit records reflect analytical decisions and are not a replacement for customer systems of record',
      ]}
      faq={[
        { question: 'Does PaymentOps resolve exceptions automatically?', answer: 'No. Exceptions are detected deterministically and presented as cases; a human operator records the analytical decision, which is audited.' },
        { question: 'What evidence is available to an operator?', answer: 'The original values, the candidate change, score inputs, related lifecycle events and account entries, and the correlation or conflict references.' },
        { question: 'Does PaymentOps make autonomous payment decisions?', answer: 'No. Outcomes are produced by deterministic validation, normalization and scoring; ambiguous results route to human review, and AI is never authoritative.' },
        { question: 'Can exceptions be handled in batch?', answer: 'Yes. File-based analysis runs with live progress, aggregate readiness and record-level traceability.' },
      ]}
      related={[
        { href: '/exception-operations', label: 'Exception operations', description: 'The exception-operations pillar, including cases, batches and the audit trail.' },
        { href: '/payment-reconciliation', label: 'Payment reconciliation', description: 'How deterministic matching produces the exceptions that operations then resolve.' },
        { href: '/security', label: 'Security', description: 'Access, review controls and boundaries for controlled evaluation.' },
      ]}
    />
  );
}
