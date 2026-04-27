import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "SettleProof — AI Payment Reconciliation Software for Finance Teams" },
      {
        name: "description",
        content:
          "SettleProof reconciles Razorpay, Stripe, bank statements, invoices, refunds, fees, and settlements. AI prepares reconciliation, finance teams approve exceptions, and exports are audit-ready.",
      },
      {
        name: "keywords",
        content:
          "AI payment reconciliation software, automated payment reconciliation, Razorpay reconciliation software, Stripe payout reconciliation, bank statement reconciliation, invoice reconciliation automation, settlement reconciliation software, AI accounting reconciliation, payment gateway reconciliation India",
      },
      { name: "author", content: "SettleProof" },
      { property: "og:title", content: "SettleProof — AI Payment Reconciliation Software" },
      {
        property: "og:description",
        content:
          "Reconcile payment gateway payouts, bank credits, invoices, refunds, fees, and settlement mismatches in minutes.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://settleproof.app" },
      { property: "og:image", content: "/og-image.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "SettleProof — AI Payment Reconciliation Software" },
      {
        name: "twitter:description",
        content:
          "Reconcile Razorpay, Stripe, bank statements, invoices, refunds, fees, and settlements with exception-first AI workflows.",
      },
      { name: "twitter:image", content: "/og-image.png" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: "SettleProof",
          applicationCategory: "FinanceApplication",
          operatingSystem: "Web",
          description:
            "AI reconciliation software for payment gateways, bank statements, invoices, refunds, fees, and settlements.",
          url: "https://settleproof.app",
          offers: {
            "@type": "Offer",
            price: "9999",
            priceCurrency: "INR",
            description: "Starter pricing placeholder for early teams",
          },
        }),
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return <Outlet />;
}
