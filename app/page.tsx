import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowRight,
  Check,
  ChevronDown,
  CircleAlert,
  CircleCheck,
  FileCheck2,
  Scale,
  ShieldCheck,
  Sparkles,
  Users,
} from 'lucide-react';
import DemoRequestForm from '@/components/DemoRequestForm';

const ISO_ROWS: [string, string, string][] = [
  ['pain.001.001.13', 'Customer credit transfer initiation', 'Initiation'],
  ['pacs.008.001.08', 'FI to FI customer credit transfer', 'Transfer'],
  ['pacs.009.001.13', 'Financial institution credit transfer', 'Transfer'],
  ['pacs.002.001.16', 'Payment transaction status report', 'Lifecycle'],
  ['camt.054.001.14', 'Debit / credit notification', 'Reconciliation'],
  ['camt.053.001.14', 'Bank to customer account statement', 'Reconciliation'],
];

const COUNTRIES: [string, string, string][] = [
  ['IT', 'Italy', 'Postal code + province'],
  ['IN', 'India', 'PIN + state'],
  ['SA', 'Saudi Arabia', 'District + postal'],
  ['GB', 'United Kingdom', 'Postcode + county'],
  ['DE', 'Germany', 'PLZ + locality'],
  ['FR', 'France', 'Code postal'],
  ['ES', 'Spain', 'Código postal'],
  ['NL', 'Netherlands', 'Postcode + city'],
];

function HeroVisual() {
  return (
    <div className="hero-visual reveal reveal-delay-2">
      <Image
        src="/hero-banking-operations.jpg"
        alt="Payment operations professional reviewing a financial operation in a modern bank office"
        fill
        sizes="(max-width: 960px) 100vw, 46vw"
        priority
        className="hero-visual-img"
      />
      <div className="hero-overlay" aria-hidden="true" />
      <div className="hero-badge mono">
        <span className="pulse-dot" aria-hidden="true" /> OPERATIONS REVIEW / LIVE SAMPLE
      </div>
      <div className="hero-card hero-card-dark float-soft">
        <div className="hero-card-top">
          <span className="mono hero-card-label">Payment reviewed</span>
          <CircleCheck size={16} aria-hidden="true" />
        </div>
        <div className="hero-card-main">
          <strong>EUR 125,000</strong>
          <span className="mono">RECONCILED</span>
        </div>
      </div>
      <div className="hero-card hero-card-light reveal reveal-delay-3">
        <div className="hero-card-top">
          <span className="mono hero-card-label accent">Payment exception</span>
          <CircleAlert size={16} aria-hidden="true" />
        </div>
        <p>Address information requires review</p>
      </div>
      <div className="hero-card hero-card-success reveal reveal-delay-3">
        <Check size={14} aria-hidden="true" />
        <span className="mono">Account event / matched</span>
      </div>
    </div>
  );
}

function StoryRibbon() {
  const items = [
    { icon: FileCheck2, kicker: 'Start with', text: 'Payment data you can trust' },
    { icon: Scale, kicker: 'Move through', text: 'Evidence, not assumptions' },
    { icon: Users, kicker: 'Finish with', text: 'An accountable outcome' },
  ];
  return (
    <div className="story-ribbon">
      <div className="shell story-ribbon-grid">
        {items.map((item) => {
          const Icon = item.icon;
          return (
            <div className="story-item" key={item.kicker}>
              <Icon size={20} aria-hidden="true" />
              <div>
                <div className="mono story-kicker">{item.kicker}</div>
                <div className="story-text">{item.text}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function Pillars() {
  const items = [
    {
      n: '01',
      icon: FileCheck2,
      title: 'Know what arrived',
      body: 'Validate message structure, field semantics, policy rules and required data before an exception becomes an escalation.',
    },
    {
      n: '02',
      icon: Sparkles,
      title: 'See what can be repaired',
      body: 'Generate a repair candidate with the source field, proposed value, reason and supporting evidence. Your team decides.',
    },
    {
      n: '03',
      icon: Scale,
      title: 'Prove what reconciled',
      body: 'Correlate lifecycle events, compare expected and observed records, and preserve the path to an operator conclusion.',
    },
  ];
  return (
    <section className="section-pad" id="product">
      <div className="shell">
        <div className="section-intro">
          <p className="eyebrow">The operating layer</p>
          <h2 className="display display-2">Clarity for the moments that matter.</h2>
          <p className="lede">
            Payment operations do not need another black box. They need a precise place to inspect
            data, follow evidence, and move a decision forward.
          </p>
        </div>
        <div className="principles">
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <article className="surface principle" key={item.n}>
                <div className="principle-top">
                  <span className="mono principle-num">{item.n} / PRINCIPLE</span>
                  <Icon size={20} aria-hidden="true" />
                </div>
                <h3 className="display">{item.title}</h3>
                <p>{item.body}</p>
                <div className="principle-rule" aria-hidden="true" />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ImageFeature({
  image,
  alt,
  eyebrow,
  title,
  children,
  reverse = false,
}: {
  image: string;
  alt: string;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
  reverse?: boolean;
}) {
  return (
    <section className="section-pad section-alt">
      <div className={`shell image-feature ${reverse ? 'reverse' : ''}`}>
        <div className="image-feature-media">
          <Image src={image} alt={alt} width={1024} height={1024} sizes="(max-width: 960px) 100vw, 46vw" className="image-feature-img" />
        </div>
        <div>
          <div className="section-intro">
            <p className="eyebrow">{eyebrow}</p>
            <h2 className="display display-2">{title}</h2>
            <p className="lede">{children}</p>
          </div>
          <div className="mono image-feature-caption">
            <span className="hairline-short" aria-hidden="true" /> Built for serious payment operations
          </div>
        </div>
      </div>
    </section>
  );
}

function Workflow() {
  const steps = [
    ['01', 'Ingest a controlled sample', 'Bring structured payment data or account records into an isolated evaluation workspace.'],
    ['02', 'Apply deterministic controls', 'Run schema, semantic, address, matching and lifecycle checks with inspectable rules.'],
    ['03', 'Review the evidence', 'Operators see the original value, candidate repair, score inputs and trace references together.'],
    ['04', 'Record the outcome', 'Accept, reject, defer or escalate with a durable decision trail for the next team.'],
  ];
  return (
    <section className="section-pad" id="workflow">
      <div className="shell workflow">
        <div className="section-intro">
          <p className="eyebrow">How it works</p>
          <h2 className="display display-2">A better conversation around payment exceptions.</h2>
          <p className="lede">
            From the first validation to the final review, PaymentOps gives teams a shared account of
            what happened and what should happen next.
          </p>
        </div>
        <div>
          {steps.map((step) => (
            <div className="workflow-step" key={step[0]}>
              <span className="mono workflow-num">{step[0]}</span>
              <div>
                <div className="workflow-step-top">
                  <h3>{step[1]}</h3>
                  <ArrowRight size={16} aria-hidden="true" />
                </div>
                <p>{step[2]}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AddressSection() {
  return (
    <section className="section-pad address-section">
      <div className="shell address-grid">
        <div className="section-intro light">
          <p className="eyebrow eyebrow-light">Address readiness</p>
          <h2 className="display display-2">Local context for messy address fields.</h2>
          <p className="lede">
            Normalize and inspect address components with country-specific rules. Start with the
            geographies that matter to your evaluation — then see exactly where a candidate comes from.
          </p>
          <p className="address-note">
            Additional geography datasets are enabled according to customer and production requirements.
          </p>
        </div>
        <div className="address-cards">
          <div className="address-media">
            <Image
              src="/beneficiary-review.jpg"
              alt="Professional entering beneficiary details for an international payment"
              width={1024}
              height={1024}
              sizes="(max-width: 960px) 100vw, 60vw"
              className="address-media-img"
            />
          </div>
          <div className="address-card">
            <div className="mono address-card-label">Observed</div>
            <div className="mono address-value">Via Roma 12, MI</div>
            <div className="address-hint">One line. Missing locality context.</div>
          </div>
          <div className="address-card candidate">
            <div className="mono address-card-label candidate-label">Candidate repair</div>
            <div className="mono address-value candidate-value">Via Roma, 12 — Milano</div>
            <div className="address-hint candidate-hint">
              <CircleCheck size={14} aria-hidden="true" /> Evidence attached for review
            </div>
          </div>
          <div className="country-grid">
            {COUNTRIES.map(([code, name, detail]) => (
              <div className="country-chip" key={code}>
                <span className="mono country-code">{code}</span>
                <div className="country-name">{name}</div>
                <div className="country-detail">{detail}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ReconciliationCards() {
  const events = [
    'Initiated · pain.001.001.13',
    'Accepted · pacs.002.001.16',
    'Sent · pacs.008.001.08',
    'Booked · camt.054.001.14',
    'Statemented · camt.053.001.14',
    'Outcome · operator reviewed',
  ];
  return (
    <section className="section-pad recon-section">
      <div className="shell recon-grid">
        <div className="surface recon-card">
          <div className="recon-card-head">
            <span className="mono">Payment / account events</span>
            <span className="pill pill-ok mono">6 events linked</span>
          </div>
          <div className="recon-events">
            {events.map((event, i) => (
              <div className="recon-event" key={event}>
                <span className={`recon-event-dot ${i === events.length - 1 ? 'done' : ''}`}>
                  {i === events.length - 1 ? <Check size={13} aria-hidden="true" /> : <span className="mono">{i + 1}</span>}
                </span>
                <span>{event}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="surface recon-card">
          <div className="mono recon-label">Review outcome</div>
          <div className="recon-score">
            <strong className="display">91</strong>
            <span>
              deterministic
              <br />
              match score
            </span>
          </div>
          <div className="recon-bar" aria-hidden="true">
            <div className="recon-bar-fill" />
          </div>
          <div className="recon-lines">
            <div><span><CircleCheck size={15} aria-hidden="true" /> Matched</span><span className="mono">68</span></div>
            <div><span><CircleAlert size={15} aria-hidden="true" /> Possible</span><span className="mono">19</span></div>
            <div><span><ShieldCheck size={15} aria-hidden="true" /> Review</span><span className="mono">4</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ExceptionCard() {
  return (
    <section className="section-pad recon-section">
      <div className="shell">
        <div className="surface case-card">
          <div className="case-header">
            <span className="mono">CASE #PO-1842 / OPERATOR REVIEW</span>
            <span className="pill mono" style={{ color: 'var(--primary)', borderColor: 'rgba(181,89,47,.35)' }}>REVIEW</span>
          </div>
          <div className="case-grid">
            <div className="case-findings">
              <div className="mono case-label">Findings</div>
              {['Address field mismatch', 'Missing end-to-end ID', 'Statement amount variance'].map((f, i) => (
                <div className={`case-finding ${i === 0 ? 'active' : ''}`} key={f}>
                  <div className="case-finding-title">{f}</div>
                  <div className="mono case-finding-meta">pacs.008 · {i === 0 ? 'HIGH' : 'MEDIUM'}</div>
                </div>
              ))}
            </div>
            <div className="case-detail">
              <div className="mono case-label">Selected exception</div>
              <h3>Beneficiary address differs from known format</h3>
              <div className="case-values">
                <div className="case-value">
                  <span className="muted">Observed</span>
                  <span className="mono">Via Roma 12, MI</span>
                </div>
                <div className="case-value candidate">
                  <span>Candidate</span>
                  <span className="mono">Via Roma, 12 — Milano</span>
                </div>
              </div>
              <div className="case-actions">
                <span className="btn">Approve candidate</span>
                <span className="btn btn-outline">Send for review</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function IsoSection() {
  return (
    <section className="section-pad section-alt" id="iso">
      <div className="shell">
        <div className="iso-head">
          <div className="section-intro">
            <p className="eyebrow">ISO 20022</p>
            <h2 className="display display-2">The message families your teams already know.</h2>
            <p className="lede">
              A focused support matrix for controlled evaluations. Coverage is explicit, versioned and
              grounded in the sample set — not a promise about every message.
            </p>
          </div>
          <Link className="btn btn-outline" href="/iso-20022">
            View the support matrix <ArrowRight size={14} aria-hidden="true" />
          </Link>
        </div>
        <div className="iso-grid">
          {ISO_ROWS.map((row, index) => (
            <div className="surface iso-card" key={row[0]}>
              <div className="iso-card-top">
                <span className="mono iso-code">{row[0]}</span>
                <span className="mono iso-index">0{index + 1}</span>
              </div>
              <div className="iso-title">{row[1]}</div>
              <div className="iso-role">{row[2]}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Boundaries() {
  return (
    <section className="section-pad">
      <div className="shell boundaries-grid">
        <div className="boundary-dark">
          <p className="eyebrow eyebrow-light">Human control, by design</p>
          <h2 className="display display-2">Evidence can move quickly. Decisions still belong to your team.</h2>
          <p className="boundary-body">
            PaymentOps validates, repairs by proposal, correlates and organizes. It does not initiate,
            execute, authorize, settle, debit, credit or transmit live SWIFT messages. It does not make
            autonomous AML or sanctions decisions.
          </p>
          <div className="tag-row">
            {['Propose, don’t apply', 'Trace every change', 'Operator decision required'].map((t) => (
              <span className="tag-outline" key={t}>{t}</span>
            ))}
          </div>
        </div>
        <div className="surface boundary-light">
          <ShieldCheck size={24} aria-hidden="true" style={{ color: 'var(--primary)' }} />
          <h3 className="display">Built for review.</h3>
          <p>
            Evidence-led workflows, role-aware access, controlled samples and deployment choices that
            respect your institution’s boundaries.
          </p>
          <Link className="boundary-link" href="/security">
            Explore security <ArrowRight size={13} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function DeploymentStrip() {
  const items = [
    ['01', 'Guided workspace', 'A sample-driven discovery environment for teams building a shared view of payment-data quality.'],
    ['02', 'Private environment', 'A controlled deployment discussion for bank and fintech programmes with specific access needs.'],
    ['03', 'Focused PoC', 'A defined 4–6 week path with clear inputs, outputs, roles and review checkpoints.'],
  ];
  return (
    <section className="section-pad section-alt">
      <div className="shell">
        <div className="section-intro">
          <p className="eyebrow">Deployment</p>
          <h2 className="display display-2">An evaluation shape that fits your institution.</h2>
          <p className="lede">
            Start with the level of control and collaboration that matches your programme. Scale the
            conversation only when the evidence is ready.
          </p>
        </div>
        <div className="deploy-grid">
          {items.map((item) => (
            <div className="surface deploy-card" key={item[0]}>
              <span className="mono deploy-num">{item[0]}</span>
              <h3 className="display">{item[1]}</h3>
              <p>{item[2]}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhoUses() {
  const roles = [
    ['Payment operations', 'Triage exceptions, trace lifecycle events, and leave a clear decision trail.'],
    ['Product & engineering', 'Understand data quality patterns before they become customer-facing incidents.'],
    ['Transformation teams', 'Give an ISO 20022 programme a focused, evidence-led evaluation path.'],
    ['Finance & treasury', 'See payment and account events together when a business payment needs an answer.'],
  ];
  return (
    <section className="section-pad">
      <div className="shell roles-grid">
        <div className="section-intro">
          <p className="eyebrow">Who uses PaymentOps</p>
          <h2 className="display display-2">A shared view for the people behind the payment.</h2>
          <p className="lede">
            From the operations floor to the transformation programme, each team gets the context it
            needs without losing the human handoff.
          </p>
        </div>
        <div className="roles-cards">
          {roles.map((role, index) => (
            <article className="surface role-card" key={role[0]}>
              <div className="role-top">
                <span className="mono">{`0${index + 1}`}</span>
                <Users size={16} aria-hidden="true" />
              </div>
              <h3 className="display">{role[0]}</h3>
              <p>{role[1]}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function PocJourney() {
  const steps = [
    ['01', 'Scope', 'Agree the sample, success criteria and roles.'],
    ['02', 'Connect', 'Bring a controlled data set into the evaluation workspace.'],
    ['03', 'Review', 'Walk through findings with the people who know the process.'],
    ['04', 'Read out', 'Document evidence, open questions and next decisions.'],
  ];
  return (
    <section className="section-pad section-alt">
      <div className="shell">
        <div className="iso-head">
          <div className="section-intro">
            <p className="eyebrow">A focused PoC journey</p>
            <h2 className="display display-2">Make the first conversation useful.</h2>
            <p className="lede">
              A typical 4–6 week evaluation is designed around your sample, your operators and an agreed
              readout — not a promise of production rollout.
            </p>
          </div>
          <span className="mono muted">04 STEPS / CONTROLLED SCOPE</span>
        </div>
        <div className="journey-grid">
          {steps.map((step) => (
            <div className="journey-step" key={step[0]}>
              <span className="mono">{step[0]}</span>
              <h3>{step[1]}</h3>
              <p>{step[2]}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function DemoSection() {
  return (
    <section className="section-pad demo-section" id="demo">
      <div className="shell demo-grid">
        <div>
          <div className="section-intro">
            <p className="eyebrow">Request a demo</p>
            <h2 className="display display-2">Bring us the exception your team keeps explaining twice.</h2>
            <p className="lede">
              We work with banks, fintechs, payment operations teams and ISO 20022 programmes on focused
              evaluations and PoC deployments.
            </p>
          </div>
          <div className="demo-media">
            <Image
              src="/demo-team-discussion.jpg"
              alt="Financial-services team discussing a payment operations evaluation"
              width={1024}
              height={1024}
              sizes="(max-width: 960px) 100vw, 36vw"
              className="demo-media-img"
            />
          </div>
          <div className="demo-steps">
            {['Scope the sample and success criteria', 'Connect a controlled data set', 'Walk through findings with operators', 'Document the evaluation readout'].map((s, i) => (
              <div className="demo-step" key={s}>
                <span className="mono">{`0${i + 1}`}</span>
                {s}
              </div>
            ))}
          </div>
        </div>
        <DemoRequestForm />
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="shell hero-split">
          <div className="reveal">
            <p className="eyebrow eyebrow-light eyebrow-dot">CloudNova / PaymentOps</p>
            <h1 className="display hero-title">
              Payment Operations,
              <br />
              <em>Made Clear.</em>
            </h1>
            <p className="lede hero-lede">
              Payment data intelligence and exception operations for financial institutions.
            </p>
            <p className="hero-support">
              CloudNova PaymentOps helps financial institutions validate payment data, identify repair
              opportunities, reconcile payment and account events, and manage exceptions through
              controlled, auditable workflows.
            </p>
            <div className="hero-actions">
              <Link className="btn" href="/request-demo">
                Request a Demo <ArrowRight size={15} aria-hidden="true" />
              </Link>
              <a className="btn btn-ghost" href="#product">
                Explore PaymentOps <ChevronDown size={15} aria-hidden="true" />
              </a>
            </div>
            <div className="hero-checks mono">
              <span><Check size={14} aria-hidden="true" /> Controlled workflows</span>
              <span><Check size={14} aria-hidden="true" /> Human decisions</span>
            </div>
          </div>
          <HeroVisual />
        </div>
      </section>

      <StoryRibbon />
      <Pillars />
      <ImageFeature
        image="/international-payment-team.jpg"
        alt="Finance professionals reviewing an international business payment"
        eyebrow="Trusted payment operations"
        title="When the payment matters, the context matters too."
      >
        A business payment is more than a message. It is a customer relationship, a treasury decision,
        a booked event, and a team that needs to know what happened next.
      </ImageFeature>
      <Workflow />
      <AddressSection />
      <ImageFeature
        image="/reconciliation-analyst.jpg"
        alt="Payment operations analyst reviewing account records for reconciliation"
        eyebrow="Reconciliation"
        title="From mismatch to a defensible outcome."
      >
        CloudNova keeps the record trail visible: which events were expected, which were observed, where
        values diverged, and what an operator decided.
      </ImageFeature>
      <ReconciliationCards />
      <ImageFeature
        image="/exception-operator.jpg"
        alt="Payment operations specialist reviewing an exception in a modern office"
        eyebrow="Exception management"
        title="Give operators the context to make the call."
        reverse
      >
        A focused workspace for the last mile: evidence, candidate changes, related events and a clear
        human decision. Not a queue that silently changes data.
      </ImageFeature>
      <ExceptionCard />
      <IsoSection />
      <Boundaries />
      <DeploymentStrip />
      <WhoUses />
      <PocJourney />
      <DemoSection />
    </>
  );
}
