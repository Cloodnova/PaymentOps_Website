// Factual, conservative FAQ content used on the product and ISO pages.
// Claims are limited to current product scope; no certification or coverage claims are made.

export interface FaqItem {
  question: string;
  answer: string;
}

export const PRODUCT_FAQ: FaqItem[] = [
  {
    question: 'What is CloudNova PaymentOps?',
    answer:
      'CloudNova PaymentOps is a non-transactional payment-data intelligence platform for financial institutions. It validates ISO 20022 payment data, produces repair candidates, reconciles payment and account events, and manages exceptions through controlled, auditable workflows.',
  },
  {
    question: 'Does PaymentOps process or move money?',
    answer:
      'No. PaymentOps is non-transactional. It does not initiate, authorize, execute, settle, debit or credit payments, and it does not transmit live SWIFT messages.',
  },
  {
    question: 'Which ISO 20022 messages does PaymentOps currently support?',
    answer:
      'It supports exact message versions: pacs.008.001.08, pain.001.001.13, pacs.009.001.13, pacs.002.001.16, camt.054.001.14 and camt.053.001.14. Additional message families can be added according to customer and PoC requirements.',
  },
  {
    question: 'Can PaymentOps validate pacs.008 messages?',
    answer:
      'Yes — specifically pacs.008.001.08. It applies schema and deterministic rule validation and can generate a revalidated repair candidate for operator approval.',
  },
  {
    question: 'Can PaymentOps reconcile camt.053 and camt.054 entries?',
    answer:
      'Yes. It reconciles camt.053 and camt.054 account entries against payment lifecycles, with duplicate detection, amount-mismatch detection and evidence codes. Ambiguous outcomes are routed to human review rather than resolved silently.',
  },
  {
    question: 'Does PaymentOps support structured address readiness?',
    answer:
      'Yes. It analyses structured-address readiness using country-specific rules with explicit coverage states. Development reference data includes Italy, India, Saudi Arabia, the United Kingdom, Germany, France, Spain and the Netherlands; additional geography datasets are enabled according to customer and production requirements.',
  },
  {
    question: 'Does PaymentOps make autonomous payment decisions?',
    answer:
      'No. Outcomes are produced by deterministic validation, normalization and scoring. Ambiguous or conflicting results are routed to human review, and AI is optional, additive and never authoritative for a decision.',
  },
  {
    question: 'How is PaymentOps deployed?',
    answer:
      'Through a controlled deployment: a guided evaluation workspace, a private environment for programmes with specific access needs, or a focused 4–6 week PoC with agreed inputs, outputs, roles and review checkpoints.',
  },
  {
    question: 'Can we run a controlled PoC?',
    answer:
      'Yes. PoCs are scoped around your sample data, success criteria and roles, with a documented readout. Request a demo to begin the conversation.',
  },
];
