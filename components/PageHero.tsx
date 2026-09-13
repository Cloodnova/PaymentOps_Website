import { type ReactNode } from 'react';

export default function PageHero({
  eyebrow,
  title,
  lede,
  children,
}: {
  eyebrow: string;
  title: string;
  lede?: string;
  children?: ReactNode;
}) {
  return (
    <section className="hero" style={{ padding: '4rem 0' }}>
      <div className="container">
        <p className="eyebrow" style={{ color: '#e0a082' }}>{eyebrow}</p>
        <h1 className="display-2" style={{ maxWidth: '44rem' }}>{title}</h1>
        {lede ? <p className="lede" style={{ marginTop: '1rem' }}>{lede}</p> : null}
        {children ? <div style={{ marginTop: '1.75rem' }}>{children}</div> : null}
      </div>
    </section>
  );
}
