import { type Metadata } from 'next';
import LandingPage from '@/components/LandingPage';

export const metadata: Metadata = {
  title: 'Structured Address Readiness',
  description:
    'Analyse ISO 20022 structured-address readiness with country-specific rules, explicit coverage states and repair candidates, while keeping human review in the loop.',
  alternates: { canonical: '/structured-address-readiness' },
  openGraph: {
    title: 'ISO 20022 Structured Address Readiness | CloudNova PaymentOps',
    description:
      'Assess structured-address readiness, produce candidate structures and keep geography coverage explicit.',
    url: '/structured-address-readiness',
  },
};

export default function StructuredAddressReadinessPage() {
  return (
    <LandingPage
      eyebrow="Address readiness"
      path="/structured-address-readiness"
      title="ISO 20022 structured-address readiness"
      lede="Understand how ready your payment address data is for structured formats, where the gaps are, and which corrections are safe — with controlled geography coverage."
      sections={[
        {
          title: 'Why structured addresses matter',
          paragraphs: [
            'Payment address information increasingly needs to be carried in a structured form rather than a free-text line. Industry programmes have moved toward structured address elements, and payment data that was previously acceptable can become unusable downstream.',
            'Unstructured or partially populated addresses are common. They are also hard to correct safely, because address conventions differ by country and a plausible-looking change can be wrong.',
          ],
        },
        {
          title: 'How teams approach address data today',
          paragraphs: [
            'Teams often rely on manual cleansing, reference-data lookups or external data sources, applied through local rules. Coverage is uneven, results are hard to audit, and there is rarely a clear statement of which geographies are actually supported versus unknown.',
          ],
        },
        {
          title: 'How PaymentOps helps',
          paragraphs: [
            'PaymentOps analyses structured-address readiness using country-specific rules and reports explicit coverage states — supported, unsupported geography or unknown — so the boundaries are visible rather than implied.',
            'Where structuring is possible, it can produce a repair or structured candidate with the source value, the proposed value and the supporting evidence. As with all repair, the candidate is subject to human review rather than applied automatically.',
            'Address analysis is deterministic and independent. PaymentOps does not claim any endorsement by, or affiliation with, any standards body or messaging network.',
          ],
        },
        {
          title: 'Controlled, explicit coverage',
          paragraphs: [
            'Development reference data currently covers Italy, India, Saudi Arabia, the United Kingdom, Germany, France, Spain and the Netherlands. Additional geography datasets are enabled according to customer and production requirements. This is deliberately not a claim of worldwide coverage.',
          ],
        },
      ]}
      scope={[
        'Structured-address readiness analysis with country-specific rules',
        'Explicit coverage states: supported, unsupported geography or unknown',
        'Repair and structured candidates with evidence and human review',
        'Development geography: Italy, India, Saudi Arabia, United Kingdom, Germany, France, Spain, Netherlands',
        'Provider fallback with deterministic handling',
      ]}
      limitations={[
        'This is not worldwide or global address coverage; additional datasets are enabled per customer and production requirements',
        'No endorsement or affiliation with any standards body or messaging network is claimed or implied',
        'Structured candidates require human review and revalidation',
        'Address readiness analysis does not replace the customer’s own reference data or compliance obligations',
      ]}
      faq={[
        { question: 'Does PaymentOps support structured address readiness?', answer: 'Yes. It analyses structured-address readiness with country-specific rules and explicit coverage states, and can produce a structured candidate for human review.' },
        { question: 'Is address coverage global?', answer: 'No. Development reference data currently covers Italy, India, Saudi Arabia, the United Kingdom, Germany, France, Spain and the Netherlands; additional datasets are enabled according to customer and production requirements.' },
        { question: 'Is PaymentOps endorsed by a standards body or messaging network?', answer: 'No. PaymentOps is independent and does not claim endorsement by, or affiliation with, any standards body or messaging network.' },
        { question: 'Are address corrections applied automatically?', answer: 'No. Structured candidates are proposals with evidence and are subject to human review and revalidation before use.' },
      ]}
      related={[
        { href: '/iso-20022-validation', label: 'ISO 20022 validation', description: 'Exact-version validation and where address readiness analysis fits.' },
        { href: '/validation-repair', label: 'Validation & repair', description: 'Repair candidates, revalidation and human approval.' },
        { href: '/iso-20022', label: 'ISO 20022 support', description: 'The exact supported message versions that carry address data.' },
      ]}
    />
  );
}
