import { useEffect, useState, useRef } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck, Zap, Layers, BrainCircuit, Activity, FileSpreadsheet, Cpu, Search, BarChart3, Database } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const appUrl = "https://cloud.settleproof.app/app";
const demoEmail = "mailto:hello@settleproof.app";

export const Route = createFileRoute("/")({
  component: Index,
});

function SpotlightCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -5 }}
      className={`relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-card transition-all hover:border-primary/40 ${className}`}
    >
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(800px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(168,85,247,0.15), transparent 40%)`,
        }}
      />
      {children}
    </motion.div>
  );
}

function LogoMark() {
  return (
    <svg viewBox="35 -5 155 130" className="h-9 w-auto text-white drop-shadow-sm" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M 80 75 L 115 75 L 145 45 L 110 45 Z" />
      <path d="M 165 35 L 105 35 L 65 75 L 40 100 L 40 35 A 25 25 0 0 1 65 10 L 165 10 L 165 0 L 185 17.5 Z" />
      <path d="M 60 85 L 120 85 L 160 45 L 185 20 L 185 85 A 25 25 0 0 1 160 110 L 60 110 L 60 120 L 40 102.5 Z" />
    </svg>
  );
}

function SectionHeader({ eyebrow, title, copy, align = "center" }: { eyebrow?: string; title: string; copy?: string; align?: "center" | "left" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={align === "center" ? "mx-auto mb-16 max-w-4xl text-center" : "mb-16 max-w-3xl"}
    >
      {eyebrow && <span className="mb-4 inline-block rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary">{eyebrow}</span>}
      <h2 className="text-balance text-4xl font-bold tracking-tight text-white md:text-6xl">{title}</h2>
      {copy && <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">{copy}</p>}
    </motion.div>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-black px-6 pt-32 pb-20 lg:px-8 lg:pt-48 lg:pb-32">
      <div className="absolute top-0 left-1/2 -z-10 h-[800px] w-full -translate-x-1/2 rounded-[100%] bg-primary/20 blur-[120px] opacity-30" />
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="mx-auto mb-8 flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white backdrop-blur-md">
            <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse" />
            Piloting with modern finance teams
          </div>
          <h1 className="mx-auto max-w-5xl text-balance text-5xl font-extrabold tracking-tight text-white md:text-8xl">
            Your AI Reconciliation <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary">Worker</span>.
          </h1>
          <p className="mx-auto mt-8 max-w-3xl text-pretty text-lg leading-8 text-muted-foreground md:text-2xl">
            Hire SettleProof to match Razorpay, Stripe, and bank credits.
            Automated proof for every settlement, so you only handle the exceptions.
          </p>
          <div className="mt-12 flex flex-col items-center justify-center gap-6 sm:flex-row">
            <Button asChild size="xl" className="h-16 rounded-2xl bg-primary px-10 text-xl font-bold shadow-lg hover:scale-105 transition">
              <a href={appUrl}>Launch App <ArrowRight className="ml-2 h-5 w-5" /></a>
            </Button>
            <Button asChild variant="outline" size="xl" className="h-16 rounded-2xl border-white/10 bg-white/5 px-10 text-xl font-bold backdrop-blur-md transition hover:bg-white/10">
              <a href={demoEmail}>Book a Demo</a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function IntegrationLogos() {
  return (
    <section className="border-y border-white/5 bg-black/50 py-12 backdrop-blur-sm relative z-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <p className="text-center text-sm font-semibold text-muted-foreground uppercase tracking-widest mb-8">Seamless integrations with your finance stack</p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8 opacity-40 grayscale transition hover:opacity-100 hover:grayscale-0">
          <img src="/media/logos/stripe.svg" alt="Stripe" className="h-8 w-auto object-contain brightness-0 invert" />
          <img src="/media/logos/razorpay.svg" alt="Razorpay" className="h-8 w-auto object-contain brightness-0 invert" />
          <span className="text-2xl font-bold tracking-tighter text-white">CASHFREE</span>
          <img src="/media/logos/zoho.svg" alt="Zoho Books" className="h-8 w-auto object-contain brightness-0 invert" />
          <span className="text-2xl font-bold tracking-tighter text-white">TALLY</span>
          <img src="/media/logos/quickbooks.svg" alt="QuickBooks" className="h-8 w-auto object-contain brightness-0 invert" />
        </div>
      </div>
    </section>
  );
}

const steps = [
  { id: "ingest", title: "Ingest", icon: <Layers className="h-4 w-4" />, img: "/media/settelproof_upload_screen.png", desc: "Connect Razorpay, Stripe, and your banks. SettleProof normalizes messy CSV and XLSX files in seconds.", value: "Saves 4 hours of manual data formatting per week." },
  { id: "map", title: "Map", icon: <BrainCircuit className="h-4 w-4" />, img: "/media/settelproof_ai_coloum_mapping.png", desc: "Our AI Worker automatically identifies transaction IDs, UTRs, fees, and GST columns across all your files.", value: "Eliminates endless VLOOKUP mapping." },
  { id: "match", title: "Match", icon: <Activity className="h-4 w-4" />, img: "/media/settelproof_reconsilation.png", desc: "The engine applies settlement formulas to prove every rupee. Match thousands of rows with mathematical certainty.", value: "Reconciles 10,000+ rows in under 2 minutes." },
  { id: "audit", title: "Audit", icon: <Search className="h-4 w-4" />, img: "/media/settelproof_exception.png", desc: "AI diagnosis explains variances. Finance teams review only the exceptions with deep-dive evidence.", value: "Reduces variance investigation time by 90%." },
  { id: "export", title: "Export", icon: <FileSpreadsheet className="h-4 w-4" />, img: "/media/settelproof_reports_export.png", desc: "Download accountant-ready XLSX reports with full traceability. Close your month-end in minutes, not days.", value: "Guarantees a zero-stress month-end close." },
];

function PlatformExplorer() {
  const [activeTab, setActiveTab] = useState(steps[0].id);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setActiveTab((current) => {
        const currentIndex = steps.findIndex((s) => s.id === current);
        const nextIndex = (currentIndex + 1) % steps.length;
        return steps[nextIndex].id;
      });
    }, 5000);
    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <section className="bg-black py-32 px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader title="The Reconciliation Workflow." copy="Experience how SettleProof orchestrates your finance data." />

        <div className="flex flex-col items-center" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
          {/* Navigation Pills */}
          <div className="mb-12 flex flex-wrap justify-center gap-2 rounded-full border border-white/10 bg-white/5 p-2 backdrop-blur-xl">
            {steps.map((step) => (
              <button
                key={step.id}
                onClick={() => setActiveTab(step.id)}
                className={`relative flex items-center gap-2 rounded-full px-6 py-3 text-sm font-bold transition-all ${activeTab === step.id ? "text-white scale-105" : "text-muted-foreground hover:text-white"
                  }`}
              >
                {activeTab === step.id && (
                  <motion.div
                    layoutId="active-tab"
                    className="absolute inset-0 rounded-full bg-primary"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-2">
                  <span className={activeTab === step.id ? "text-white" : "text-primary/70"}>{step.icon}</span>
                  {step.title}
                </span>
              </button>
            ))}
          </div>

          {/* Interactive Stage */}
          <div className="relative w-full max-w-6xl">
            <div className="absolute -inset-1 rounded-[3rem] bg-gradient-to-b from-primary/20 to-transparent blur-3xl opacity-50" />
            <div className="relative rounded-[2.5rem] border border-white/10 bg-card p-4 shadow-2xl overflow-hidden min-h-[500px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, ease: "circOut" }}
                  className="grid lg:grid-cols-[1fr_0.4fr] gap-12 p-8"
                >
                  <div className="overflow-hidden rounded-[2rem] border border-white/5 bg-black flex items-center justify-center p-4">
                    <img
                      src={steps.find(s => s.id === activeTab)?.img}
                      alt={activeTab}
                      className="w-full max-h-[450px] object-contain opacity-90 transition duration-700 hover:opacity-100 hover:scale-[1.02]"
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <h3 className="text-4xl font-extrabold text-white mb-6">
                      {steps.find(s => s.id === activeTab)?.title}
                    </h3>
                    <p className="text-xl leading-relaxed text-muted-foreground">
                      {steps.find(s => s.id === activeTab)?.desc}
                    </p>
                    <div className="mt-8 rounded-2xl bg-white/5 p-4 border border-white/10 backdrop-blur-sm">
                      <div className="flex items-center gap-3 text-primary font-bold mb-2">
                        <Zap className="h-5 w-5" />
                        AI Value Delivered
                      </div>
                      <p className="text-white">
                        {steps.find(s => s.id === activeTab)?.value}
                      </p>
                    </div>
                    <div className="mt-10">
                      <Button asChild size="lg" className="rounded-xl bg-primary hover:bg-primary/90 text-white font-bold transition-all hover:scale-105">
                        <a href={appUrl}>See it in action</a>
                      </Button>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AIEngineValue() {
  return (
    <section id="ai-value" className="bg-black px-6 py-32 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow="AI Intelligence" title="Let AI do the heavy lifting." copy="Stop wasting hours on VLOOKUPs. SettleProof's AI models analyze context, match patterns, and explain variances instantly." />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-12 md:grid-rows-2">
          {/* Top large row - The AI Analyzer */}
          <SpotlightCard className="col-span-1 flex flex-col justify-between p-8 md:col-span-12 md:row-span-1 lg:flex-row lg:items-center lg:gap-12">
            <div className="max-w-xl lg:w-1/2">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <BrainCircuit className="h-6 w-6" />
              </div>
              <h3 className="text-3xl font-bold text-white">Contextual Exception Analysis</h3>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                When a payout doesn't match the bank credit, the AI Worker reads the bank narration, analyzes missing GST, and flags exactly why the variance occurred. It doesn't just say "Error"—it tells you the story behind the mismatch.
              </p>
            </div>
            <div className="mt-8 lg:mt-0 lg:w-1/2 overflow-hidden rounded-[2rem] border border-white/5 bg-black">
              <img src="/media/settelproof_ai_analyer.png" alt="AI Context Analysis" className="w-full opacity-90 transition duration-700 hover:opacity-100 hover:scale-[1.02]" />
            </div>
          </SpotlightCard>

          {/* Bottom left - Smart Exception Routing */}
          <SpotlightCard className="col-span-1 flex flex-col justify-between p-8 md:col-span-7 md:row-span-1">
            <div>
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-bold text-white">Smart Exception Routing</h3>
              <p className="mt-4 text-muted-foreground">
                SettleProof's deterministic engine auto-matches 99% of your data. The remaining 1% of complex exceptions are grouped intuitively for your finance team to review and approve in seconds.
              </p>
            </div>
            <div className="mt-8 overflow-hidden rounded-[1.5rem] border border-white/5 bg-black">
              <img src="/media/settelproof_exception.png" alt="Exception Handling" className="w-full opacity-90 transition duration-500 hover:opacity-100" />
            </div>
          </SpotlightCard>

          {/* Bottom right - Zero Setup Integration */}
          <SpotlightCard className="col-span-1 flex flex-col justify-between p-8 md:col-span-5 md:row-span-1">
            <div>
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-500/10 text-orange-500">
                <Zap className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-bold text-white">Zero-Setup Ingestion</h3>
              <p className="mt-4 text-muted-foreground">
                Don't build custom parsers. Upload any CSV/XLSX and the AI automatically detects headers, normalizes amounts, and maps the columns.
              </p>
            </div>
            <div className="mt-8 overflow-hidden rounded-[1.5rem] border border-white/5 bg-black flex items-center justify-center">
              <img src="/media/settelproof_integration.png" alt="Zero-Setup Integrations" className="w-full object-contain opacity-90 transition duration-500 hover:opacity-100" />
            </div>
          </SpotlightCard>

        </div>
      </div>
    </section>
  );
}

function UseCases() {
  const cases = [
    { title: "Indian SaaS", desc: "Reconcile Razorpay/Stripe, GST, and bank credits.", icon: <BarChart3 className="h-6 w-6" /> },
    { title: "D2C Brands", desc: "Manage high-volume settlements, COD, and refunds.", icon: <Zap className="h-6 w-6" /> },
    { title: "CFO Teams", desc: "Accelerate month-end close with audit-ready trails.", icon: <ShieldCheck className="h-6 w-6" /> },
    { title: "CA Firms", desc: "Automate client reconciliations at scale.", icon: <Database className="h-6 w-6" /> },
  ];

  return (
    <section id="use-cases" className="bg-black px-6 py-32 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader title="Built for the modern finance stack." copy="Use cases designed for complex, high-volume reconciliations." />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cases.map((c, i) => (
            <SpotlightCard key={i} className="p-8 border border-white/10 bg-card transition hover:border-primary/40">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                {c.icon}
              </div>
              <h3 className="text-xl font-bold text-white">{c.title}</h3>
              <p className="mt-4 text-muted-foreground leading-relaxed">{c.desc}</p>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/5 bg-black/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
        <a href="/" className="flex items-center gap-3.5"><LogoMark /><span className="text-[28px] font-bold tracking-normal text-white">SettleProof</span></a>
        <div className="hidden lg:flex lg:gap-x-12">{[["Product", "/#product"], ["Use Cases", "/#use-cases"], ["Blog", "/blog"], ["Pilot", "/#pilot"]].map(([n, h]) => (<a key={n} href={h} className="text-sm font-bold text-muted-foreground hover:text-white transition">{n}</a>))}</div>
        <div className="flex items-center gap-8">
          <a href={appUrl} className="text-sm font-bold text-white hover:text-primary transition">Log in</a>
          <Button asChild size="lg" className="rounded-xl bg-primary font-bold hover:scale-105 transition">
            <a href={appUrl}>Launch App</a>
          </Button>
        </div>
      </nav>
    </header>
  );
}

function PilotSection() {
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult("");

    const formData = new FormData(event.currentTarget);
    formData.append("access_key", "bfcd5130-a9cd-4501-b230-651b4808b41b");
    formData.append("subject", "New SettleProof Design Partner Lead");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();
      if (data.success) {
        setResult("Success! We'll be in touch shortly.");
        (event.target as HTMLFormElement).reset();
      } else {
        setResult("Something went wrong. Please try again.");
      }
    } catch (error) {
      setResult("Error submitting form. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="pilot" className="bg-black px-6 py-32 lg:px-8">
      <div className="mx-auto max-w-5xl rounded-[3rem] border border-primary/20 bg-card p-8 text-center md:p-20 overflow-hidden relative">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 h-64 w-64 bg-primary/20 blur-[80px]" />
        <SectionHeader eyebrow="Pilot Program" title="Join our Design Partners." copy="Work directly with the founders to automate your reconciliation. Let's see if we're a good fit." />

        <form className="mx-auto mt-10 flex max-w-xl flex-col gap-5 text-left relative z-10" onSubmit={onSubmit}>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <div className="space-y-2">
              <label className="text-sm font-medium text-muted-foreground ml-2">Name</label>
              <input type="text" name="name" placeholder="John Doe" required className="h-14 w-full rounded-2xl border border-white/20 bg-white/5 px-6 text-white placeholder:text-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-muted-foreground ml-2">Work Email</label>
              <input type="email" name="email" placeholder="john@company.com" required className="h-14 w-full rounded-2xl border border-white/20 bg-white/5 px-6 text-white placeholder:text-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary" />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-muted-foreground ml-2">Primary Gateway / Bank Setup</label>
            <input type="text" name="gateway" placeholder="e.g. Razorpay + HDFC" required className="h-14 w-full rounded-2xl border border-white/20 bg-white/5 px-6 text-white placeholder:text-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary" />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-muted-foreground ml-2">Monthly Transaction Volume</label>
            <select name="volume" defaultValue="" required className="h-14 w-full rounded-2xl border border-white/20 bg-white/5 px-6 text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary appearance-none cursor-pointer hover:bg-white/10 transition">
              <option value="" disabled className="text-black">Select volume</option>
              <option value="< 10k" className="text-black">Less than 10,000</option>
              <option value="10k - 100k" className="text-black">10,000 - 100,000</option>
              <option value="100k+" className="text-black">100,000+</option>
            </select>
          </div>

          <Button type="submit" size="xl" disabled={isSubmitting} className="mt-4 h-14 w-full rounded-2xl bg-primary text-lg font-bold hover:scale-[1.02] transition">
            {isSubmitting ? "Submitting..." : "Request Access"}
          </Button>

          {result && (
            <p className={`text-center text-sm font-medium mt-2 ${result.includes("Success") ? "text-green-400" : "text-red-400"}`}>
              {result}
            </p>
          )}
        </form>

        <div className="mt-12 flex justify-center relative z-10">
          <Button asChild variant="outline" className="rounded-full border-white/10 bg-white/5 px-6 text-sm font-medium backdrop-blur-md transition hover:bg-white/10">
            <a href={appUrl}>Or try Early Access immediately <ArrowRight className="ml-2 h-4 w-4" /></a>
          </Button>
        </div>
      </div>
    </section>
  );
}

function Index() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const handleGlobalMouseMove = (e: MouseEvent) => setMousePosition({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handleGlobalMouseMove);
    return () => window.removeEventListener("mousemove", handleGlobalMouseMove);
  }, []);

  return (
    <main className="relative min-h-screen bg-black selection:bg-primary/30 selection:text-white overflow-hidden font-sans">
      <div className="pointer-events-none fixed -z-10 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-[120px]" style={{ left: mousePosition.x, top: mousePosition.y }} />
      <Navbar />
      <Hero />
      <IntegrationLogos />
      <PlatformExplorer />
      <AIEngineValue />
      <UseCases />
      <PilotSection />
      <footer className="border-t border-white/5 bg-black py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 flex justify-between items-center text-muted-foreground text-sm">
          <span>© {new Date().getFullYear()} SettleProof</span>
          <div className="flex gap-8"><a href={demoEmail} className="hover:text-primary transition">Contact</a><a href="#" className="hover:text-primary transition">Privacy</a></div>
        </div>
      </footer>
    </main>
  );
}
