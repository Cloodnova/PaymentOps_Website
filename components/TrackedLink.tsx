'use client';

import Link from 'next/link';
import { type ReactNode } from 'react';
import { trackEvent, type AnalyticsEvent, type AnalyticsParams } from '@/lib/analytics';

type Props = {
  href: string;
  event: AnalyticsEvent;
  eventParams?: AnalyticsParams;
  className?: string;
  children: ReactNode;
  external?: boolean;
  onNavigate?: () => void;
  'aria-label'?: string;
};

/**
 * Link/anchor that emits a single semantic analytics event on activation.
 * Keeps server components server-rendered while centralising CTA tracking.
 */
export default function TrackedLink({
  href,
  event,
  eventParams,
  className,
  children,
  external = false,
  onNavigate,
  'aria-label': ariaLabel,
}: Props) {
  const handleClick = () => {
    trackEvent(event, eventParams);
    onNavigate?.();
  };

  if (external) {
    return (
      <a
        href={href}
        className={className}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        aria-label={ariaLabel}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className} onClick={handleClick} aria-label={ariaLabel}>
      {children}
    </Link>
  );
}
