import { useEffect, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";

import { Button } from "@/components/ui/button";

const appUrl = "https://cloud.settleproof.app/";
const demoEmail = "mailto:hello@settleproof.app";

export const Route = createFileRoute("/")({
  component: Index,
});

type CardItem = {
  title: string;
  text: string;
};

type ProductScreenshotCardProps = {
  label: string;
  src: string;
  caption: string;
  tall?: boolean;
};

function LogoMark() {
  return (
    <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-primary/35 bg-surface-elevated text-primary glow-ring" aria-hidden="true">
      <svg viewBox="0 0 32 32" className="h-5 w-5" fill="none">
        <path d="M7 11.5h10.5L25 16l-7.5 4.5H7" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10 7.5h11M10 24.5h11" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      </svg>
    </span>
  );
}

function SectionHeader({ eyebrow, title, copy, align = "center" }: { eyebrow?: string; title: string; copy?: string; align?: "center" | "left" }) {
  return (
    <div className={align === "center" ? "mx-auto mb-10 max-w-3xl text-center md:mb-14" : "mb-10 max-w-3xl md:mb-14"}>
      {eyebrow && <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">{eyebrow}</p>}
      <h2 className="text-balance text-3xl font-bold tracking-normal text-foreground md:text-5xl">{title}</h2>
      {copy && <p className="mt-5 text-pretty text-base leading-7 text-muted-foreground md:text-lg">{copy}</p>}
    </div>
  );
}

function ProductScreenshotCard({ label, src, caption, tall }: ProductScreenshotCardProps) {
  return (
    <figure className="group overflow-hidden rounded-xl border border-border bg-card shadow-card transition duration-300 hover:-translate-y-1 hover:border-primary/45">
      <div className={tall ? "relative min-h-80 bg-screenshot" : "relative min-h-60 bg-screenshot"}>
        <div className="absolute inset-4 rounded-lg border border-primary/20 bg-surface-elevated p-4">
          <div className="mb-4 flex items-center justify-between border-b border-border pb-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">{label}</span>
            <span className="rounded-full border border-border px-2 py-1 text-[10px] text-muted-foreground">replace: {src}</span>
          </div>
          <div className="space-y-3">
            <div className="h-8 rounded-md bg-secondary" />
            <div className="grid grid-cols-3 gap-2">
              <div className="h-16 rounded-md bg-muted" />
              <div className="h-16 rounded-md bg-muted" />
              <div className="h-16 rounded-md bg-muted" />
            </div>
            <div className="space-y-2">
              <div className="h-3 w-11/12 rounded-full bg-border" />
              <div className="h-3 w-8/12 rounded-full bg-border" />
              <div className="h-3 w-10/12 rounded-full bg-primary/35" />
            </div>
          </div>
        </div>
      </div>
      <figcaption className="border-t border-border px-5 py-4 text-sm text-muted-foreground">{caption}</figcaption>
    </figure>
  );
}

function ProductVideoCard() {
  return (
    <div className="glass-panel relative overflow-hidden rounded-2xl p-4 md:p-6">
      <div className="bg-screenshot relative flex min-h-[340px] items-center justify-center overflow-hidden rounded-xl border border-border">
        <div className="absolute left-5 top-5 rounded-full border border-border bg-surface-elevated px-3 py-1 text-xs font-medium text-muted-foreground">60 sec product walkthrough</div>
        <div className="absolute bottom-5 left-5 right-5 flex flex-wrap items-center justify-between gap-3 rounded-xl border border-border bg-background/80 p-4 backdrop-blur">
          <p className="font-semibold text-foreground">Upload → Map → Reconcile → Review → Export</p>
          <p className="text-xs text-muted-foreground">VIDEO_PLACEHOLDER_PRODUCT_DEMO · /media/product-demo.mp4</p>
        </div>
        <button className="flex h-20 w-20 items-center justify-center rounded-full border border-primary/50 bg-primary text-primary-foreground shadow-glow transition hover:scale-105" aria-label="Play product demo video">
          <svg viewBox="0 0 24 24" className="ml-1 h-8 w-8" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
        </button>
      </div>
    </div>
  );
}

function WorkflowStep({ index, title, copy, media, caption }: { index: number; title: string; copy: string; media: string; caption: string }) {
  return (
    <article className="workflow-step relative grid gap-6 rounded-2xl border border-border bg-card p-5 shadow-card lg:grid-cols-[0.8fr_1.2fr] lg:p-6">
      <div>
        <span className="mb-5 flex h-11 w-11 items-center justify-center rounded-lg border border-primary/40 bg-primary text-sm font-bold text-primary-foreground glow-ring">{index}</span>
        <h3 className="text-2xl font-bold text-foreground">{title}</h3>
        <p className="mt-4 text-sm leading-6 text-muted-foreground">{copy}</p>
      </div>
      <ProductScreenshotCard label={title} src={media} caption={caption} />
    </article>
  );
}

function ExceptionCard({ title, description, action }: { title: string; description: string; action: string }) {
  return (
    <article className="rounded-xl border border-border bg-card p-6 transition duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-glow">
      <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-lg border border-primary/35 bg-secondary text-primary">
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 9v4m0 4h.01M10.3 3.9 2.7 17a2 2 0 0 0 1.7 3h15.2a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z" strokeLinecap="round" strokeLinejoin="round" /></svg>
      </div>
      <h3 className="text-xl font-bold text-foreground">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-muted-foreground">{description}</p>
      <p className="mt-4 border-t border-border pt-4 text-sm text-surface-foreground"><span className="font-semibold text-primary">Action:</span> {action}</p>
    </article>
  );
}

function EvidenceDrawerPreview() {
  const checks = ["Gateway settlement row", "Bank credit line", "Invoice reference", "Fee and GST split", "Reviewer note"];
  return (
    <div className="glass-panel overflow-hidden rounded-2xl">
      <div className="grid gap-6 p-5 lg:grid-cols-[1.1fr_0.9fr] lg:p-8">
        <ProductScreenshotCard label="Exception audit drawer" src="/media/exception-audit-drawer.gif" caption="Primary finding, calculation proof, source evidence, reviewer decision, and export status." tall />
        <div className="rounded-xl border border-border bg-surface p-5">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">Primary finding</p>
          <h3 className="mt-3 text-2xl font-bold text-foreground">Net settlement variance</h3>
          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {[["Expected", "₹486.08"], ["Bank received", "₹480.00"], ["Difference", "₹6.08"]].map(([label, value]) => <div key={label} className="rounded-lg border border-border bg-card p-3"><p className="text-xs text-muted-foreground">{label}</p><p className="mt-1 font-bold text-foreground">{value}</p></div>)}
          </div>
          <div className="mt-5 rounded-lg border border-primary/30 bg-secondary p-4">
            <p className="font-semibold text-foreground">Settlement calculation proof</p>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">Gross payment − gateway fee − GST + refund adjustment = expected bank credit.</p>
          </div>
          <ul className="mt-5 space-y-3 text-sm text-surface-foreground">
            {checks.map((check) => <li key={check} className="flex items-center gap-3"><span className="h-2 w-2 rounded-full bg-primary" />{check}</li>)}
          </ul>
          <div className="mt-5 rounded-lg border border-border bg-card p-4 text-sm text-muted-foreground"><span className="font-semibold text-foreground">AI diagnosis:</span> Fee/GST split likely explains the variance. Reviewer should verify deduction rows before approving.</div>
          <div className="mt-5 grid grid-cols-3 gap-2 text-xs font-semibold text-foreground"><span className="rounded-md border border-border px-3 py-2 text-center">Resolve</span><span className="rounded-md border border-border px-3 py-2 text-center">Escalate</span><span className="rounded-md border border-primary/40 px-3 py-2 text-center text-primary">Export</span></div>
        </div>
      </div>
    </div>
  );
}

function IntegrationBadge({ name, soon }: { name: string; soon?: boolean }) {
  return <div className={soon ? "rounded-xl border border-border bg-surface p-4 text-center text-sm text-muted-foreground" : "rounded-xl border border-primary/30 bg-card p-5 text-center font-bold text-foreground"}>{name}{soon ? " · Coming soon" : ""}</div>;
}

function PricingCard({ name, price, desc, items }: { name: string; price: string; desc: string; items: string[] }) {
  return (
    <article className="glass-panel rounded-2xl p-7 transition duration-300 hover:-translate-y-1 hover:border-primary/50">
      <h3 className="text-2xl font-bold text-foreground">{name}</h3>
      <p className="mt-4 text-3xl font-bold text-primary">{price}</p>
      <p className="mt-3 text-sm leading-6 text-muted-foreground">{desc}</p>
      <ul className="mt-6 space-y-3 text-sm text-surface-foreground">{items.map((item) => <li key={item} className="flex gap-2"><span className="text-primary">✓</span>{item}</li>)}</ul>
      <Button asChild variant="hero" size="lg" className="mt-7 w-full"><a href={appUrl}>Start pilot</a></Button>
    </article>
  );
}

function SEOResourceCard({ title }: { title: string }) {
  return <a href="#resources" className="rounded-xl border border-border bg-card p-6 text-lg font-bold text-foreground transition hover:-translate-y-1 hover:border-primary/50 hover:shadow-card">{title}</a>;
}

function Navbar() {
  const [theme, setTheme] = useState("dark");
  const nav = [["Product", "#product"], ["Workflow", "#workflow"], ["Use cases", "#use-cases"], ["Pricing", "#pricing"], ["Resources", "#resources"]];

  useEffect(() => {
    const savedTheme = localStorage.getItem("settleproof-theme") || "dark";
    setTheme(savedTheme);
    document.documentElement.classList.toggle("dark", savedTheme === "dark");
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    localStorage.setItem("settleproof-theme", nextTheme);
    document.documentElement.classList.toggle("dark", nextTheme === "dark");
  };

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/82 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-5 py-4 lg:px-8" aria-label="Main navigation">
        <a href="#top" className="flex items-center gap-3" aria-label="SettleProof home"><LogoMark /><span className="text-lg font-bold text-foreground">SettleProof</span></a>
        <div className="hidden items-center gap-7 text-sm font-medium text-muted-foreground lg:flex">{nav.map(([item, href]) => <a key={item} href={href} className="transition hover:text-foreground">{item}</a>)}</div>
        <div className="flex items-center gap-2"><button type="button" onClick={toggleTheme} className="flex h-8 w-8 items-center justify-center rounded-md border border-border bg-surface-elevated text-foreground transition hover:bg-secondary" aria-label="Toggle dark and light mode">{theme === "dark" ? "☾" : "☼"}</button><a href={appUrl} className="hidden text-sm font-medium text-muted-foreground transition hover:text-foreground sm:inline">Login</a><Button asChild variant="glass" size="sm"><a href={demoEmail}>Book a demo</a></Button><Button asChild variant="hero" size="sm"><a href={appUrl}>Try SettleProof</a></Button></div>
      </nav>
    </header>
  );
}

function HeroMockup() {
  const files = ["Razorpay payments.csv", "Bank statement.xlsx", "Invoices.csv", "Settlement report.csv"];
  const outputs = ["Matched", "Needs review", "Export ready"];
  return (
    <div className="float-proof relative mx-auto mt-14 max-w-6xl rounded-2xl border border-primary/25 bg-card p-3 shadow-glow md:p-4">
      <div className="glass-panel overflow-hidden rounded-xl">
        <div className="flex items-center justify-between border-b border-border px-4 py-3"><div className="flex gap-2"><span className="h-3 w-3 rounded-full bg-destructive" /><span className="h-3 w-3 rounded-full bg-chart-5" /><span className="h-3 w-3 rounded-full bg-chart-2" /></div><span className="text-xs text-muted-foreground">SettleProof Worker · product media placeholder</span></div>
        <div className="grid gap-6 p-5 lg:grid-cols-[0.9fr_1fr_0.9fr] lg:p-7">
          <div className="space-y-3">{files.map((file) => <div key={file} className="slide-card rounded-xl border border-border bg-surface p-4 text-sm font-semibold text-foreground">{file}</div>)}</div>
          <div className="relative flex min-h-72 items-center justify-center rounded-2xl border border-primary/30 bg-screenshot p-5">
            <div className="absolute inset-x-6 top-8 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
            <div className="flex h-36 w-36 flex-col items-center justify-center rounded-2xl border border-primary/45 bg-background/85 text-center shadow-glow backdrop-blur"><LogoMark /><p className="mt-3 text-sm font-bold text-foreground">SettleProof Worker</p><p className="mt-1 text-xs text-muted-foreground">rules + AI</p></div>
          </div>
          <div className="space-y-3">{outputs.map((item) => <div key={item} className="rounded-xl border border-primary/35 bg-secondary p-4 text-sm font-bold text-foreground">{item}</div>)}<div className="rounded-xl border border-border bg-surface p-4 text-xs leading-6 text-muted-foreground">UTR matched · Net settlement variance · Missing bank credit</div></div>
        </div>
        <div className="grid border-t border-border text-center text-xs font-semibold text-muted-foreground sm:grid-cols-5"><span className="p-3">Upload files</span><span className="p-3">AI maps columns</span><span className="p-3">Run reconciliation</span><span className="p-3">Review exceptions</span><span className="p-3">Export report</span></div>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section id="top" className="settleproof-grid transaction-rain relative overflow-hidden px-5 pb-20 pt-20 lg:px-8 lg:pb-28 lg:pt-24">
      <div className="relative mx-auto max-w-7xl text-center">
        <p className="mx-auto mb-5 w-fit rounded-full border border-border bg-surface-elevated px-4 py-2 text-sm font-medium text-muted-foreground">AI prepares reconciliation. Finance approves exceptions with evidence.</p>
        <h1 className="mx-auto max-w-6xl text-balance text-4xl font-bold tracking-normal text-foreground md:text-7xl">Reconcile payments, payouts, and bank credits without spreadsheet chaos.</h1>
        <p className="mx-auto mt-7 max-w-4xl text-pretty text-lg leading-8 text-muted-foreground md:text-xl">SettleProof turns Razorpay, Stripe, bank statements, and invoice exports into matched records, explained exceptions, and audit-ready reports.</p>
        <p className="mt-4 text-base font-semibold text-foreground">AI maps messy files. Rules reconcile the money. Your finance team approves only the exceptions.</p>
        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"><Button asChild variant="hero" size="xl"><a href={appUrl}>Try SettleProof</a></Button><Button asChild variant="glass" size="xl"><a href={demoEmail}>Book a demo</a></Button></div>
        <p className="mt-5 text-sm text-muted-foreground">Upload sample files and get your first reconciliation run in minutes.</p>
        <HeroMockup />
      </div>
    </section>
  );
}

function Problem() {
  const cards: CardItem[] = [
    { title: "Gateway payouts are not enough", text: "Razorpay or Stripe may show a payout, but finance still needs to prove which invoices, refunds, fees, and taxes were included." },
    { title: "Bank credits hide many transactions", text: "One bank credit can contain dozens or hundreds of payments, deductions, GST/tax, refunds, and adjustments." },
    { title: "References rarely match cleanly", text: "Invoices, payment IDs, UTRs, settlement IDs, customer names, and bank narrations often use different formats." },
    { title: "Accountants review too many rows", text: "Finance teams waste time checking rows that should have been matched automatically, instead of reviewing real exceptions." },
  ];
  return <section id="product" className="px-5 py-20 lg:px-8"><div className="mx-auto max-w-7xl"><SectionHeader title="Payment reconciliation is still manual because the truth is split across systems." /><div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">{cards.map((card) => <article key={card.title} className="rounded-xl border border-border bg-card p-6"><h3 className="text-xl font-bold text-foreground">{card.title}</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">{card.text}</p></article>)}</div><p className="mx-auto mt-10 max-w-3xl text-center text-xl font-semibold text-foreground">SettleProof reduces the work to what actually needs human judgment.</p></div></section>;
}

function ProductWorkflow() {
  const steps = [
    ["Upload files", "Upload Razorpay, Stripe, bank statements, invoices, settlements, refunds, or CSV/XLSX exports.", "/media/upload-files.png", "Upload files screenshot/GIF"],
    ["AI maps columns", "SettleProof detects fields like payment ID, order ID, invoice ID, UTR, gross amount, fee, GST/tax, refund, settlement amount, and bank narration.", "/media/ai-column-mapping.gif", "AI column mapping screenshot/GIF"],
    ["Run reconciliation", "Create a run from normalized files. The engine matches records using UTRs, IDs, amounts, dates, and settlement formulas.", "/media/reconciliation-run.gif", "Run reconciliation screenshot/GIF"],
    ["Review exceptions", "Finance sees only open issues like missing bank credit, net settlement variance, unknown deposit, missing invoice, duplicate payment, and refund adjustment.", "/media/exception-list.png", "Exception list screenshot/GIF"],
    ["Approve and export", "Open the evidence drawer, review the calculation proof, add notes, resolve exceptions, and export accountant-ready XLSX reports.", "/media/export-report.png", "Exception audit drawer + export screenshot/GIF"],
  ];
  return <section id="workflow" className="bg-surface px-5 py-20 lg:px-8"><div className="mx-auto max-w-7xl"><SectionHeader title="From messy payment files to approved reconciliation." copy="A workflow built for real finance files, not a generic dashboard." /><div className="relative space-y-5 before:absolute before:left-6 before:top-6 before:hidden before:h-[calc(100%-3rem)] before:w-px before:bg-gradient-to-b before:from-primary before:via-border before:to-transparent lg:before:block">{steps.map(([title, copy, media, caption], index) => <WorkflowStep key={title} index={index + 1} title={title} copy={copy} media={media} caption={caption} />)}</div></div></section>;
}

function VideoSection() {
  const highlights = ["AI maps messy finance files", "Matching engine proves every settlement", "Finance approves exceptions with evidence"];
  return <section className="px-5 py-20 lg:px-8"><div className="mx-auto max-w-6xl"><SectionHeader title="Watch SettleProof prepare a reconciliation run." /><ProductVideoCard /><div className="mt-6 grid gap-4 md:grid-cols-3">{highlights.map((item) => <div key={item} className="rounded-xl border border-border bg-card p-5 text-center font-semibold text-foreground">{item}</div>)}</div></div></section>;
}

function CoreValue() {
  const values: CardItem[] = [
    { title: "Fewer rows to review", text: "Automatically match clean records and show only the exceptions that need approval." },
    { title: "Clear settlement proof", text: "Unpack payouts into payments, fees, GST/tax, refunds, adjustments, and bank credits." },
    { title: "Evidence for every decision", text: "Every match and exception includes source rows, matching reason, confidence, and reviewer notes." },
    { title: "Faster month-end close", text: "Move from spreadsheet investigation to structured exception review and export." },
  ];
  return <section className="bg-surface px-5 py-20 lg:px-8"><div className="mx-auto max-w-7xl"><SectionHeader title="What SettleProof gives your finance team" /><div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">{values.map((value) => <article key={value.title} className="glass-panel rounded-xl p-6"><h3 className="text-xl font-bold text-foreground">{value.title}</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">{value.text}</p></article>)}</div></div></section>;
}

function ProductProof() {
  return (
    <section className="bg-surface px-5 py-20 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-center">
        <div>
          <SectionHeader align="left" title="Approval-ready evidence, without another long dashboard." copy="SettleProof keeps the workflow focused: upload files, run matching, inspect the few exceptions, and export the proof your accountant needs." />
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-border bg-card p-5"><h3 className="font-bold text-foreground">Rules prove the money</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">UTR, IDs, amounts, dates, fees, GST, refunds, and payout formulas.</p></div>
            <div className="rounded-xl border border-border bg-card p-5"><h3 className="font-bold text-foreground">AI explains the mess</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">Column mapping, narration clues, fuzzy references, and readable exception summaries.</p></div>
          </div>
        </div>
        <EvidenceDrawerPreview />
      </div>
    </section>
  );
}

function Exceptions() {
  const exceptions = [
    ["Missing bank credit", "Gateway says the settlement was paid, but no matching bank credit or UTR was found.", "Check settlement status or bank posting delay."],
    ["Net settlement variance", "Expected net settlement does not equal the bank credit after fees, tax, refunds, and adjustments.", "Review fee/GST split, adjustment, or gateway settlement correction."],
    ["Missing invoice", "Payment was captured and settled, but no matching invoice or order record exists.", "Create or attach the invoice before close."],
    ["Likely offline payment", "Bank received money, but no gateway payment record or invoice match was found.", "Attach customer/invoice or mark as unknown deposit."],
    ["Duplicate payment candidate", "Two captured payments look linked to the same customer, order, or invoice.", "Review before marking duplicate or refunding."],
    ["Delayed settlement", "Settlement matches the bank credit, but the bank date is outside the expected window.", "Approve as delayed or investigate posting issue."],
  ];
  return <section className="px-5 py-20 lg:px-8"><div className="mx-auto max-w-7xl"><SectionHeader title="Exceptions finance teams can actually act on." /><div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{exceptions.map(([title, description, action]) => <ExceptionCard key={title} title={title} description={description} action={action} />)}</div><div className="mt-8 text-center"><Button asChild variant="glass" size="lg"><a href="#workflow">View sample exceptions</a></Button></div></div></section>;
}

function UseCases() {
  const cases: CardItem[] = [
    { title: "Indian SaaS", text: "Reconcile Razorpay/Stripe payments, invoices, bank credits, refunds, and month-end exceptions." },
    { title: "D2C and ecommerce", text: "Unpack gateway settlements, refunds, fees, taxes, and order-level mismatches." },
    { title: "Accountants and CA firms", text: "Process client reconciliation files faster and export audit-ready workpapers." },
    { title: "Outsourced CFO teams", text: "Reduce manual reconciliation effort across clients and review exceptions with evidence." },
    { title: "Agencies and service businesses", text: "Match invoices, bank transfers, payment links, and offline customer payments." },
  ];
  return <section id="use-cases" className="bg-surface px-5 py-20 lg:px-8"><div className="mx-auto max-w-7xl"><SectionHeader title="Built for payment-heavy finance teams." /><div className="grid gap-5 md:grid-cols-2 lg:grid-cols-5">{cases.map((item) => <article key={item.title} className="rounded-xl border border-border bg-card p-6"><h3 className="text-lg font-bold text-foreground">{item.title}</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">{item.text}</p></article>)}</div></div></section>;
}

function Integrations() {
  const mvp = ["CSV/XLSX uploads", "Razorpay", "Stripe", "Bank statements", "Invoice exports"];
  const soon = ["Cashfree", "PayU", "Zoho Books", "Tally", "QuickBooks", "Xero", "Google Sheets", "Gmail ingestion"];
  return <section className="px-5 py-20 lg:px-8"><div className="mx-auto max-w-7xl"><SectionHeader title="Start with uploads. Connect systems as you grow." copy="You do not need deep integrations to start. Upload last month’s files and get a reconciliation run today." /><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">{mvp.map((item) => <IntegrationBadge key={item} name={item} />)}</div><div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">{soon.map((item) => <IntegrationBadge key={item} name={item} soon />)}</div></div></section>;
}

function Pricing() {
  const plans = [
    { name: "Starter", price: "₹9,999/month", desc: "For small teams running monthly reconciliation.", items: ["CSV/XLSX uploads", "AI column mapping", "Reconciliation runs", "Exception review", "XLSX exports"] },
    { name: "Growth", price: "₹24,999/month", desc: "For teams with multiple gateways or higher volume.", items: ["Everything in Starter", "Saved mapping templates", "Advanced exception types", "Multi-file reconciliation", "Accountant summary export"] },
    { name: "Concierge Pilot", price: "Custom", desc: "For design partners, accountants, and CFO firms.", items: ["Share sample files", "We help configure mappings", "Custom matching rules", "Guided onboarding"] },
  ];
  return <section id="pricing" className="bg-surface px-5 py-20 lg:px-8"><div className="mx-auto max-w-7xl"><SectionHeader title="Start with your real reconciliation files." /><div className="grid gap-5 lg:grid-cols-3">{plans.map((plan) => <PricingCard key={plan.name} {...plan} />)}</div></div></section>;
}

function FounderPartner() {
  return <section className="px-5 py-20 lg:px-8"><div className="mx-auto max-w-5xl rounded-2xl border border-primary/30 bg-card p-8 text-center shadow-glow md:p-12"><h2 className="text-3xl font-bold text-foreground md:text-5xl">Looking for finance teams who still reconcile manually.</h2><p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-muted-foreground">If your team spends hours matching Razorpay, Stripe, bank credits, invoices, refunds, and gateway fees, I want to work with you. Share last month’s sample files and I’ll show what SettleProof can automate.</p><Button asChild variant="hero" size="xl" className="mt-8"><a href={demoEmail}>Become a design partner</a></Button></div></section>;
}

function Resources() {
  const resources = ["How to reconcile Razorpay settlements with bank statements", "Stripe payout reconciliation guide for SaaS companies", "What is UTR matching?", "How refunds affect gateway settlements", "Payment gateway fee and GST reconciliation", "Best payment reconciliation software for Indian businesses"];
  return <section id="resources" className="bg-surface px-5 py-20 lg:px-8"><div className="mx-auto max-w-7xl"><SectionHeader title="Reconciliation guides for finance teams." /><div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{resources.map((title) => <SEOResourceCard key={title} title={title} />)}</div></div></section>;
}

function FAQ() {
  const faqs = [
    ["Is SettleProof an accounting system?", "No. SettleProof is a reconciliation execution layer. It helps prepare matched records, exceptions, and exports for your finance or accounting workflow."],
    ["Does AI decide financial truth?", "No. Deterministic rules match what is certain. AI helps with messy data, explanation, and summaries. Finance users approve exceptions."],
    ["What can I upload?", "CSV/XLSX files for Razorpay, Stripe, bank statements, settlements, invoices, refunds, and payment exports."],
    ["Can it handle Razorpay UTR reconciliation?", "Yes. The workflow is designed around settlement IDs, UTRs, net settlement amounts, fees, GST/tax, refunds, and bank credits."],
    ["Can I try it without connecting APIs?", "Yes. Start with file uploads. API connectors can come later."],
    ["What does the export include?", "Matched records, exceptions, evidence references, reviewer notes, and accountant-ready XLSX reports."],
    ["Who should use this?", "Finance teams, accountants, CA firms, founders, D2C teams, SaaS businesses, and outsourced CFO teams."],
  ];
  return <section className="px-5 py-20 lg:px-8"><div className="mx-auto max-w-4xl"><SectionHeader title="Questions finance teams ask first." /><div className="space-y-4">{faqs.map(([q, a]) => <details key={q} className="rounded-xl border border-border bg-card p-5"><summary className="cursor-pointer text-lg font-bold text-foreground">{q}</summary><p className="mt-3 text-sm leading-6 text-muted-foreground">{a}</p></details>)}</div></div></section>;
}

function FinalCTA() {
  return <section className="settleproof-grid px-5 py-24 text-center lg:px-8"><div className="mx-auto max-w-4xl"><h2 className="text-balance text-4xl font-bold text-foreground md:text-6xl">Stop reviewing every row. Start approving only the exceptions.</h2><p className="mt-6 text-lg leading-8 text-muted-foreground">Upload sample files, run reconciliation, review evidence, and export audit-ready reports.</p><div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row"><Button asChild variant="hero" size="xl"><a href={appUrl}>Try SettleProof</a></Button><Button asChild variant="glass" size="xl"><a href={demoEmail}>Book a demo</a></Button></div></div></section>;
}

function Footer() {
  const groups = { Product: ["Workflow", "Exception review", "Evidence audit", "Export reports", "Login"], "Use cases": ["Razorpay reconciliation", "Stripe reconciliation", "Bank reconciliation", "Invoice matching", "Accountants"], Resources: ["Guides", "Blog", "Demo data", "Docs"], Company: ["Contact", "Privacy", "Terms"] };
  return <footer className="border-t border-border px-5 py-12 lg:px-8"><div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1.3fr_2fr]"><div><div className="flex items-center gap-3"><LogoMark /><span className="text-xl font-bold text-foreground">SettleProof</span></div><p className="mt-4 max-w-sm text-sm leading-6 text-muted-foreground">SettleProof is an AI reconciliation worker for finance teams handling payment gateways, bank statements, invoices, settlements, refunds, and exceptions.</p></div><div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">{Object.entries(groups).map(([group, links]) => <div key={group}><h3 className="font-bold text-foreground">{group}</h3><ul className="mt-4 space-y-3 text-sm text-muted-foreground">{links.map((link) => <li key={link}><a href={link === "Login" ? appUrl : group === "Company" && link === "Contact" ? demoEmail : link === "Workflow" ? "#workflow" : "#resources"} className="hover:text-foreground">{link}</a></li>)}</ul></div>)}</div></div></footer>;
}

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <Problem />
      <ProductWorkflow />
      <CoreValue />
      <Exceptions />
      <ProductProof />
      <UseCases />
      <Integrations />
      <Pricing />
      <Resources />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
