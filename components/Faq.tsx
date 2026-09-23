import { type FaqItem } from '@/lib/faq';

/** Accessible FAQ using native disclosure elements (keyboard- and screen-reader-friendly). */
export default function Faq({ items, id = 'faq' }: { items: FaqItem[]; id?: string }) {
  return (
    <div className="faq" id={id}>
      {items.map((item) => (
        <details className="faq-item" key={item.question}>
          <summary className="faq-q">{item.question}</summary>
          <p className="faq-a">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
