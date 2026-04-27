import { createFileRoute } from "@tanstack/react-router";

import { Button } from "@/components/ui/button";

const appUrl = "https://cloud.settleproof.app/";
const demoEmail = "mailto:hello@settleproof.app?subject=SettleProof%20demo%20request";

export const Route = createFileRoute("/")({
  component: Index,
});

type CardItem = {
  title: string;
  text: string;
};

function LogoMark() {
  return (
    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground glow-ring" aria-hidden="true">
      <svg viewBox="0 0 32 32" className="h-5 w-5" fill="none">
        <path d="M7 10.5h12.5l5.5 5.5-5.5 5.5H7" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 7.5h8M12 24.5h8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      </svg>
    </span>
  );
}

function SectionHeader({ eyebrow, title, copy }: { eyebrow?: string; title: string; copy?: string }) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center md:mb-14">
      {eyebrow && <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">{eyebrow}</p>}
      <h2 className="text-balance text-3xl font-bold tracking-normal text-foreground md:text-5xl">{title}</h2>
      {copy && <p className="mt-5 text-pretty text-base leading-7 text-muted-foreground md:text-lg">{copy}</p>}
    </div>
  );
}

function IconBadge({ children }: { children: React.ReactNode }) {
  return <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-secondary text-primary">{children}</div>;
}

function FeatureCard({ title, text }: CardItem) {
  return (
    <article className="glass-panel rounded-xl p-6 transition duration-300 hover:-translate-y-1 hover:border-primary/50">
      <IconBadge>
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 7h16M4 12h10M4 17h7" strokeLinecap="round" />
          <path d="m16 14 2 2 4-5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </IconBadge>
      <h3 className="text-xl font-semibold text-foreground">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-muted-foreground">{text}</p>
    </article>
  );
}

function ProductMockup() {
  const stages = ["Upload reports", "AI column mapping", "Reconciliation run", "Exception review", "Export report"];
  const rows = [
    ["RZP-2841", "₹486.08", "UTR found", "Matched"],
    ["INV-1028", "₹480.00", "Variance ₹6.08", "Review"],
    ["BANK-774", "₹22,400", "No invoice", "Exception"],
  ];

  return (
    <div className="float-proof relative mx-auto mt-14 max-w-6xl rounded-2xl border border-primary/30 bg-card p-3 shadow-glow md:p-4">
      <div className="glass-panel overflow-hidden rounded-xl">
        <div className="flex items-center justify-between border-b border-border px-4 py-3">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-destructive" />
            <span className="h-3 w-3 rounded-full bg-chart-5" />
            <span className="h-3 w-3 rounded-full bg-chart-2" />
          </div>
          <span className="text-xs font-medium text-muted-foreground">SettleProof reconciliation workspace</span>
        </div>
        <div className="grid gap-5 p-5 lg:grid-cols-[0.9fr_1.4fr] lg:p-7">
          <aside className="rounded-xl border border-border bg-surface p-4">
            <div className="mb-4 flex items-center gap-3">
              <LogoMark />
              <div>
                <p className="font-semibold text-foreground">April reconciliation</p>
                <p className="text-xs text-muted-foreground">Razorpay + bank + invoices</p>
              </div>
            </div>
            <div className="space-y-3">
              {stages.map((stage, index) => (
                <div key={stage} className="flex items-center gap-3 rounded-lg border border-border bg-secondary/70 p-3">
                  <span className="flex h-7 w-7 items-center justify-center rounded-md bg-primary text-xs font-bold text-primary-foreground">{index + 1}</span>
                  <span className="text-sm font-medium text-foreground">{stage}</span>
                </div>
              ))}
            </div>
          </aside>
          <div className="space-y-5">
            <div className="grid gap-3 sm:grid-cols-3">
              {["2,418 rows", "86% auto-match", "37 exceptions"].map((metric) => (
                <div key={metric} className="rounded-xl border border-border bg-surface p-4 text-center">
                  <p className="text-lg font-bold text-foreground">{metric}</p>
                  <p className="mt-1 text-xs text-muted-foreground">sample run</p>
                </div>
              ))}
            </div>
            <div className="overflow-hidden rounded-xl border border-border bg-surface">
              <div className="grid grid-cols-4 border-b border-border px-4 py-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                <span>Reference</span><span>Amount</span><span>Evidence</span><span>Status</span>
              </div>
              {rows.map((row) => (
                <div key={row[0]} className="grid grid-cols-4 items-center border-b border-border/60 px-4 py-4 text-sm last:border-b-0">
                  {row.map((cell, index) => <span key={cell} className={index === 3 ? "font-semibold text-primary" : "text-surface-foreground"}>{cell}</span>)}
                </div>
              ))}
            </div>
            <div className="rounded-xl border border-primary/30 bg-secondary p-4">
              <p className="text-sm font-semibold text-foreground">AI finding</p>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">Gateway expected ₹486.08 but bank received ₹480.00 after fee/GST deduction. Evidence attached from settlement row 118 and bank line 42.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Navbar() {
  const nav = ["Product", "How it works", "Use cases", "Pricing", "Resources"];
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-5 py-4 lg:px-8" aria-label="Main navigation">
        <a href="#top" className="flex items-center gap-3" aria-label="SettleProof home">
          <LogoMark />
          <span>
            <span className="block text-lg font-bold text-foreground">SettleProof</span>
            <span className="hidden text-xs text-muted-foreground sm:block">AI reconciliation</span>
          </span>
        </a>
        <div className="hidden items-center gap-7 text-sm font-medium text-muted-foreground lg:flex">
          {nav.map((item) => <a key={item} href={`#${item.toLowerCase().replaceAll(" ", "-")}`} className="transition hover:text-foreground">{item}</a>)}
          <a href={appUrl} className="transition hover:text-foreground">Login</a>
        </div>
        <div className="flex items-center gap-2">
          <Button asChild variant="glass" size="sm"><a href={demoEmail}>Book a demo</a></Button>
          <Button asChild variant="hero" size="sm"><a href={appUrl}>Try SettleProof</a></Button>
        </div>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="settleproof-grid transaction-rain relative overflow-hidden px-5 pb-20 pt-20 lg:px-8 lg:pb-28 lg:pt-24">
      <div className="relative mx-auto max-w-7xl text-center">
        <p className="mx-auto mb-5 w-fit rounded-full border border-border bg-surface-elevated px-4 py-2 text-sm font-medium text-muted-foreground">AI payment reconciliation software for Razorpay, Stripe, banks, invoices, fees, GST, and settlements</p>
        <h1 className="mx-auto max-w-5xl text-balance text-5xl font-bold tracking-normal text-foreground md:text-7xl">Reconcile payments in minutes, not days.</h1>
        <p className="mx-auto mt-7 max-w-4xl text-pretty text-lg leading-8 text-muted-foreground md:text-xl">SettleProof matches Razorpay, Stripe, bank statements, invoices, refunds, fees, and settlements — then shows only the exceptions your finance team needs to approve.</p>
        <p className="mt-4 text-base font-semibold text-foreground">AI prepares the reconciliation. Your accountant approves the exceptions.</p>
        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button asChild variant="hero" size="xl"><a href={appUrl}>Try SettleProof</a></Button>
          <Button asChild variant="glass" size="xl"><a href={demoEmail}>Book a demo</a></Button>
        </div>
        <p className="mt-5 text-sm text-muted-foreground">Upload sample files. Get matched records, exceptions, and audit-ready exports.</p>
        <ProductMockup />
      </div>
    </section>
  );
}

function Problem() {
  const cards = [
    "Gateway reports do not match bank credits",
    "One payout contains many payments, fees, taxes, and refunds",
    "Invoices, payment IDs, UTRs, and bank narrations rarely line up cleanly",
    "Accountants spend hours reviewing rows that should have been auto-matched",
  ];
  return (
    <section id="product" className="px-5 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader title="Finance teams still reconcile payments in spreadsheets." copy="Payment gateways show payouts. Banks show credits. Invoices show what should have been paid. Refunds, fees, GST, taxes, chargebacks, and delayed settlements make everything messy." />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {cards.map((title) => <FeatureCard key={title} title={title} text="Spreadsheet review turns payment operations into manual row-by-row detective work." />)}
        </div>
        <p className="mx-auto mt-10 max-w-3xl text-center text-xl font-semibold text-foreground">Your team should not review thousands of rows. They should review only the exceptions.</p>
      </div>
    </section>
  );
}

function Solution() {
  const features: CardItem[] = [
    { title: "AI column mapping", text: "Detects payment IDs, invoice IDs, UTRs, gross amount, fees, tax, refunds, settlement date, bank narration, and more." },
    { title: "Canonical payment ledger", text: "Converts Razorpay, Stripe, bank, and invoice exports into one normalized reconciliation model." },
    { title: "Deterministic matching engine", text: "Matches by UTR, payout ID, payment ID, invoice ID, amount, date window, and settlement logic." },
    { title: "Exception-first review", text: "Shows missing bank credits, missing invoices, refund mismatch, fee mismatch, duplicate payments, delayed settlements, and unknown deposits." },
    { title: "Evidence audit trail", text: "Every match includes source row, file, matching reason, confidence, reviewer note, and approval history." },
    { title: "Accountant-ready exports", text: "Export matched records, exception reports, audit summary, and XLSX workpapers." },
  ];
  return (
    <section className="bg-surface px-5 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader title="An AI reconciliation worker for payment operations." copy="SettleProof ingests messy financial files, maps columns, normalizes records, runs deterministic matching, explains mismatches, and produces evidence-backed reports for accountant approval." />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{features.map((feature) => <FeatureCard key={feature.title} {...feature} />)}</div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    ["Upload or connect", "Razorpay, Stripe, bank statements, invoice exports, refunds, and settlement reports."],
    ["AI maps and normalizes", "SettleProof detects columns and converts messy files into clean financial records."],
    ["Matching engine reconciles", "Exact IDs, UTRs, amount/date windows, settlement breakdowns, fees, taxes, and refunds are checked."],
    ["Review exceptions", "Finance sees only the items that need human decision."],
    ["Approve and export", "Resolve exceptions, add notes, and export accountant-ready XLSX reports."],
  ];
  return (
    <section id="how-it-works" className="px-5 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader title="From messy files to approved reconciliation." />
        <div className="grid gap-4 lg:grid-cols-5">
          {steps.map(([title, text], index) => (
            <article key={title} className="relative rounded-xl border border-border bg-card p-5">
              <span className="mb-5 flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-sm font-bold text-primary-foreground">{index + 1}</span>
              <h3 className="text-lg font-semibold text-foreground">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Workflow() {
  const inputs = ["Razorpay", "Stripe", "Bank statement", "Invoice sheet", "Refunds", "Fees / GST", "UTR", "XLSX export"];
  return (
    <section className="bg-surface px-5 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader title="Built around how finance teams actually review reconciliation." />
        <div className="glass-panel rounded-2xl p-5 md:p-8">
          <div className="grid items-center gap-5 lg:grid-cols-[1fr_auto_1fr]">
            <div className="grid gap-3 sm:grid-cols-2">
              {["Payment gateway report", "Settlement report", "Bank statement", "Invoice export"].map((item) => <div key={item} className="rounded-xl border border-border bg-surface p-4 text-sm font-semibold text-foreground">{item}</div>)}
            </div>
            <div className="mx-auto flex h-32 w-32 items-center justify-center rounded-2xl bg-primary text-primary-foreground glow-ring"><LogoMark /></div>
            <div className="grid gap-3">
              {["Matches", "Exceptions", "Audit Export"].map((item) => <div key={item} className="rounded-xl border border-primary/30 bg-secondary p-5 text-center text-lg font-bold text-foreground">{item}</div>)}
            </div>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-3">{inputs.map((item) => <span key={item} className="rounded-full border border-border bg-surface px-4 py-2 text-sm text-muted-foreground">{item}</span>)}</div>
          <p className="mt-8 text-center text-lg font-semibold text-foreground">One bank credit is not one transaction. SettleProof unpacks the settlement and explains every rupee.</p>
        </div>
      </div>
    </section>
  );
}

function Exceptions() {
  const exceptions = [
    ["Missing bank credit", "High", "₹18,420", "Payment captured but no matching bank credit found.", "Check settlement delay or bank posting."],
    ["Net settlement difference", "Medium", "₹6.08", "Gateway expected ₹486.08, bank received ₹480.00.", "Review fee/GST split and approve variance."],
    ["Likely offline payment", "Review", "₹22,400", "Bank received money with no gateway reference or UTR.", "Attach invoice or mark as unknown deposit."],
    ["Refund adjustment", "Medium", "₹1,999", "Settlement amount changed due to refund deduction.", "Confirm refund row and customer reference."],
    ["Duplicate payment", "High", "₹7,500", "Multiple captured payments appear linked to one invoice/order.", "View evidence before marking duplicate."],
  ];
  return (
    <section className="px-5 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader title="Review clear exceptions, not endless rows." />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {exceptions.map(([type, severity, amount, finding, action]) => (
            <article key={type} className="glass-panel rounded-xl p-6">
              <div className="flex items-start justify-between gap-4"><h3 className="text-xl font-bold text-foreground">{type}</h3><span className="rounded-full border border-primary/40 px-3 py-1 text-xs font-semibold text-primary">{severity}</span></div>
              <p className="mt-4 text-3xl font-bold text-foreground">{amount}</p>
              <p className="mt-4 text-sm text-muted-foreground"><span className="font-semibold text-foreground">AI finding:</span> {finding}</p>
              <p className="mt-3 text-sm text-muted-foreground"><span className="font-semibold text-foreground">Recommended action:</span> {action}</p>
              <Button asChild variant="glass" size="sm" className="mt-5"><a href="#demo">View evidence</a></Button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Trust() {
  const columns: CardItem[] = [
    { title: "Rules first", text: "UTR, payout ID, payment ID, invoice ID, amount/date, and settlement formulas." },
    { title: "AI where messy", text: "Column mapping, narration understanding, probable root cause, and exception explanation." },
    { title: "Human approval", text: "Notes, reviewer action, timestamp, and evidence trail before export." },
  ];
  return (
    <section className="bg-surface px-5 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader title="AI helps. Rules prove." copy="SettleProof does not blindly let AI decide financial truth. Deterministic rules match what is certain. AI helps with messy columns, fuzzy references, explanations, and accountant summaries. Humans approve money-impacting decisions." />
        <div className="grid gap-5 md:grid-cols-3">{columns.map((item) => <FeatureCard key={item.title} {...item} />)}</div>
        <blockquote className="mx-auto mt-10 max-w-4xl rounded-2xl border border-primary/30 bg-card p-7 text-center text-2xl font-bold text-foreground">Deterministic rules decide when possible. AI assists when data is messy. Humans approve when money is affected.</blockquote>
      </div>
    </section>
  );
}

function UseCases() {
  const cases: CardItem[] = [
    { title: "Razorpay settlement reconciliation", text: "Match Razorpay settlements, fees, GST, UTRs, refunds, and bank credits." },
    { title: "Stripe payout reconciliation", text: "Connect payouts to charges, refunds, fees, invoices, and bank deposits." },
    { title: "Bank statement reconciliation", text: "Match bank credits, identify unknown deposits, and ignore irrelevant debits." },
    { title: "Invoice-to-payment matching", text: "Detect paid invoices, missing payments, duplicate payments, and unpaid invoices." },
    { title: "Accountants and outsourced CFOs", text: "Process client files faster and export audit-ready workpapers." },
    { title: "D2C and ecommerce finance", text: "Unpack marketplace/gateway settlements and identify leakage." },
  ];
  return <section id="use-cases" className="px-5 py-20 lg:px-8"><div className="mx-auto max-w-7xl"><SectionHeader title="Start with payment reconciliation. Expand into finance operations." /><div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{cases.map((item) => <FeatureCard key={item.title} {...item} />)}</div></div></section>;
}

function Metrics() {
  const metrics = ["60–80% less manual reconciliation work", "80%+ expected auto-match rate on clean data", "Review exceptions only", "Time to first reconciliation: under 10 minutes", "Export accountant-ready XLSX reports", "Faster month-end close"];
  return <section className="bg-surface px-5 py-20 lg:px-8"><div className="mx-auto max-w-7xl"><SectionHeader title="Reduce reconciliation work before month-end." /><div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">{metrics.map((metric) => <div key={metric} className="rounded-xl border border-border bg-card p-6 text-xl font-bold text-foreground">{metric}</div>)}</div><p className="mt-6 text-center text-sm text-muted-foreground">Actual results depend on file quality, volume, and available references.</p></div></section>;
}

function Integrations() {
  const mvp = ["CSV/XLSX upload", "Razorpay", "Stripe", "Bank statements", "Invoice exports"];
  const soon = ["Cashfree", "PayU", "Zoho Books", "Tally", "QuickBooks", "Xero", "Google Sheets", "Gmail ingestion"];
  return <section className="px-5 py-20 lg:px-8"><div className="mx-auto max-w-7xl"><SectionHeader title="Works with the tools finance teams already use." /><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">{mvp.map((item) => <div key={item} className="rounded-xl border border-primary/30 bg-card p-5 text-center font-bold text-foreground">{item}</div>)}</div><div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">{soon.map((item) => <div key={item} className="rounded-xl border border-border bg-surface p-4 text-center text-sm text-muted-foreground">{item} · Coming soon</div>)}</div></div></section>;
}

function Pricing() {
  const plans = [
    ["Starter", "₹9,999/month", "For small teams testing monthly reconciliation.", ["CSV/XLSX uploads", "AI column mapping", "Reconciliation runs", "Exception review", "XLSX exports"]],
    ["Growth", "₹24,999/month", "For SaaS/D2C teams with multiple reports and higher volume.", ["Everything in Starter", "Saved mapping templates", "Multi-file reconciliation", "Advanced exception types", "Accountant summary exports"]],
    ["Concierge Pilot", "Custom / early access", "For accountants, CFO firms, and businesses with real files.", ["Share last month’s reports", "We help set up reconciliation", "Custom matching rules", "Design partner support"]],
  ] as const;
  return <section id="pricing" className="bg-surface px-5 py-20 lg:px-8"><div className="mx-auto max-w-7xl"><SectionHeader title="Simple pricing for early teams." /><div className="grid gap-5 lg:grid-cols-3">{plans.map(([name, price, desc, items]) => <article key={name} className="glass-panel rounded-2xl p-7"><h3 className="text-2xl font-bold text-foreground">{name}</h3><p className="mt-4 text-3xl font-bold text-primary">{price}</p><p className="mt-3 text-sm leading-6 text-muted-foreground">{desc}</p><ul className="mt-6 space-y-3 text-sm text-surface-foreground">{items.map((item) => <li key={item}>✓ {item}</li>)}</ul><Button asChild variant="hero" size="lg" className="mt-7 w-full"><a href={appUrl}>Start pilot</a></Button></article>)}</div><p className="mt-6 text-center text-sm text-muted-foreground">Early design partner pricing available for selected teams.</p></div></section>;
}

function DemoAndResources() {
  const flags = ["missing bank credit", "settlement amount variance", "refund deduction", "offline payment candidate", "duplicate payment", "delayed settlement"];
  const resources = ["How to reconcile Razorpay settlements with bank statements", "Stripe payout reconciliation guide for SaaS companies", "What is UTR matching in payment reconciliation?", "How refunds affect gateway settlements", "Payment gateway fee and GST reconciliation", "Best payment reconciliation software for Indian businesses"];
  return <section id="resources" className="px-5 py-20 lg:px-8"><div className="mx-auto max-w-7xl"><div id="demo" className="glass-panel rounded-2xl p-7 md:p-10"><SectionHeader title="See what SettleProof can catch." copy="A finance team uploads Razorpay payments, settlement reports, bank statements, and invoices. SettleProof maps columns, runs reconciliation, matches clean records, and flags clear exceptions." /><div className="grid gap-3 md:grid-cols-3">{flags.map((flag) => <div key={flag} className="rounded-xl border border-border bg-surface p-4 text-sm font-semibold text-foreground">{flag}</div>)}</div><div className="mt-8 text-center"><Button asChild variant="hero" size="xl"><a href={appUrl}>Open SettleProof</a></Button></div></div><SectionHeader title="Learn payment reconciliation." copy="Static resource previews for finance teams working through gateway payouts, UTRs, refunds, fees, GST, and month-end close." /><div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{resources.map((title) => <a key={title} href="#resources" className="rounded-xl border border-border bg-card p-6 text-lg font-bold text-foreground transition hover:-translate-y-1 hover:border-primary/50">{title}</a>)}</div></div></section>;
}

function FAQ() {
  const faqs = [
    ["Is SettleProof an accounting system?", "No. SettleProof is a reconciliation execution layer. It works with payment gateways, bank statements, invoices, and accounting exports."],
    ["Does AI automatically change my books?", "No. AI prepares mappings, explanations, and suggestions. Finance users approve exceptions before export or write-back."],
    ["What files are supported?", "MVP supports CSV/XLSX uploads for Razorpay, Stripe, bank statements, settlement reports, and invoice exports."],
    ["Can it reconcile Razorpay settlements?", "Yes. The product is designed around settlement IDs, UTRs, fees, GST/tax, refunds, and bank credit matching."],
    ["Can it reconcile Stripe payouts?", "Yes. Stripe payout reconciliation is part of the core positioning and roadmap."],
    ["Who is this for?", "Finance teams, accountants, D2C brands, SaaS companies, agencies, founders, and outsourced CFO firms."],
    ["Is my data safe?", "Data security, workspace isolation, role-aware access, and audit logs are part of the product direction. Certifications are not claimed until implemented."],
  ];
  return <section className="bg-surface px-5 py-20 lg:px-8"><div className="mx-auto max-w-4xl"><SectionHeader title="Questions finance teams ask first." /><div className="space-y-4">{faqs.map(([q, a]) => <details key={q} className="rounded-xl border border-border bg-card p-5"><summary className="cursor-pointer text-lg font-bold text-foreground">{q}</summary><p className="mt-3 text-sm leading-6 text-muted-foreground">{a}</p></details>)}</div></div></section>;
}

function DemoForm() {
  return <section className="px-5 py-20 lg:px-8"><div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2"><div><h2 className="text-4xl font-bold text-foreground md:text-5xl">Request a demo walkthrough.</h2><p className="mt-5 text-lg leading-8 text-muted-foreground">This clean form UI can be wired to Lovable Cloud later. For now, use Book a demo to email hello@settleproof.app.</p><Button asChild variant="glass" size="xl" className="mt-7"><a href={demoEmail}>Email hello@settleproof.app</a></Button></div><form className="glass-panel rounded-2xl p-6" aria-label="Request demo form"><div className="grid gap-4"><input className="rounded-lg border border-input bg-background px-4 py-3 text-foreground" placeholder="Work email" type="email" /><input className="rounded-lg border border-input bg-background px-4 py-3 text-foreground" placeholder="Company" type="text" /><textarea className="min-h-28 rounded-lg border border-input bg-background px-4 py-3 text-foreground" placeholder="What do you reconcile today?" /><Button type="button" variant="hero" size="lg">Request demo</Button></div></form></div></section>;
}

function FinalCTA() {
  return <section className="settleproof-grid px-5 py-24 text-center lg:px-8"><div className="mx-auto max-w-4xl"><h2 className="text-balance text-4xl font-bold text-foreground md:text-6xl">Ready to stop reconciling payments in spreadsheets?</h2><p className="mt-6 text-lg leading-8 text-muted-foreground">Upload sample files and see how many rows SettleProof can auto-match before your accountant starts reviewing.</p><div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row"><Button asChild variant="hero" size="xl"><a href={appUrl}>Try SettleProof</a></Button><Button asChild variant="glass" size="xl"><a href={demoEmail}>Book a demo</a></Button></div></div></section>;
}

function Footer() {
  const groups = {
    Product: ["How it works", "Integrations", "Pricing", "Login"],
    "Use cases": ["Razorpay reconciliation", "Stripe reconciliation", "Bank reconciliation", "Invoice reconciliation", "Accountants"],
    Resources: ["Blog", "Guides", "Docs", "Demo data"],
    Company: ["About", "Contact", "Privacy", "Terms"],
  };
  return <footer className="border-t border-border px-5 py-12 lg:px-8"><div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1.4fr_2fr]"><div><div className="flex items-center gap-3"><LogoMark /><span className="text-xl font-bold text-foreground">SettleProof</span></div><p className="mt-4 max-w-sm text-sm text-muted-foreground">© 2026 SettleProof. AI reconciliation for finance teams.</p></div><div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">{Object.entries(groups).map(([group, links]) => <div key={group}><h3 className="font-bold text-foreground">{group}</h3><ul className="mt-4 space-y-3 text-sm text-muted-foreground">{links.map((link) => <li key={link}><a href={link === "Login" ? appUrl : link === "Pricing" ? "#pricing" : link === "How it works" ? "#how-it-works" : "#resources"} className="hover:text-foreground">{link}</a></li>)}</ul></div>)}</div></div></footer>;
}

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <Problem />
      <Solution />
      <HowItWorks />
      <Workflow />
      <Exceptions />
      <Trust />
      <UseCases />
      <Metrics />
      <Integrations />
      <Pricing />
      <DemoAndResources />
      <FAQ />
      <DemoForm />
      <FinalCTA />
      <Footer />
    </main>
  );
}