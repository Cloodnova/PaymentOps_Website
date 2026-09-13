'use client';

import { type FormEvent, useState } from 'react';
import { USE_CASES } from '@/lib/demoRequest';

type Status = 'idle' | 'submitting' | 'success' | 'error';

export default function DemoRequestForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setStatus('submitting');
    setError(null);
    try {
      const res = await fetch('/api/demo-request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setStatus('success');
        form.reset();
        return;
      }
      const body = (await res.json().catch(() => ({}))) as { detail?: string };
      setError(body.detail ?? 'We could not submit your request. Please try again.');
      setStatus('error');
    } catch {
      setError('We could not submit your request. Please try again.');
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="surface" role="status">
        <div className="form-success">
          Thank you. Your demo request has been received. A CloudNova representative will follow up.
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} aria-label="Request a demo" className="surface">
      <div className="demo-form-grid">
        <label className="field">
          <span className="field-label">First name *</span>
          <input name="first_name" required maxLength={120} autoComplete="given-name" />
        </label>
        <label className="field">
          <span className="field-label">Last name *</span>
          <input name="last_name" required maxLength={120} autoComplete="family-name" />
        </label>
        <label className="field">
          <span className="field-label">Work email *</span>
          <input name="email" type="email" required maxLength={255} autoComplete="email" />
        </label>
        <label className="field">
          <span className="field-label">Company *</span>
          <input name="company" required maxLength={200} autoComplete="organization" />
        </label>
        <label className="field">
          <span className="field-label">Role</span>
          <input name="role" maxLength={120} autoComplete="organization-title" />
        </label>
        <label className="field">
          <span className="field-label">Country *</span>
          <input name="country" required maxLength={120} autoComplete="country-name" />
        </label>
      </div>

      <label className="field">
        <span className="field-label">Use case *</span>
        <select name="use_case" required defaultValue="">
          <option value="" disabled>Select a use case</option>
          {USE_CASES.map((u) => <option key={u} value={u}>{u}</option>)}
        </select>
      </label>

      <label className="field">
        <span className="field-label">Message (optional)</span>
        <textarea name="message" rows={4} maxLength={2000} />
      </label>

      {status === 'error' && error ? <p className="form-error" role="alert">{error}</p> : null}

      <button className="btn" type="submit" disabled={status === 'submitting'}>
        {status === 'submitting' ? 'Submitting…' : 'Request Demo'}
      </button>

      <p className="form-note" style={{ marginTop: '0.75rem' }}>
        We use your details only to respond to your request. See our <a href="/privacy">Privacy</a> notice.
      </p>
    </form>
  );
}
