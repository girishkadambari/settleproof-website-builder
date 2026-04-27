const fs = require('fs');
const path = require('path');

const dirs = [
  'docs',
  'content/blog',
  'content/use-cases'
];

dirs.forEach(d => fs.mkdirSync(d, { recursive: true }));

// BLOG POSTS
const blogs = [
  {
    slug: '2026-04-28-how-to-reconcile-razorpay-settlements-with-bank-statements.md',
    content: `---
title: "How to Reconcile Razorpay Settlements with Bank Statements"
description: "A step-by-step guide for finance teams on matching Razorpay payouts, UTRs, fees, and GST against bank credits without spreadsheet chaos."
slug: "how-to-reconcile-razorpay-settlements-with-bank-statements"
date: "2026-04-28"
category: "Reconciliation Guide"
tags: ["Razorpay", "Bank Statements", "UTR", "Settlement"]
primary_keyword: "Razorpay reconciliation"
secondary_keywords: ["Razorpay settlement reconciliation", "Razorpay UTR reconciliation"]
---
# How to Reconcile Razorpay Settlements with Bank Statements

Reconciling Razorpay settlements with bank credits is one of the most frustrating parts of the month-end close for Indian SaaS and D2C brands. The sheer volume of transactions, combined with complex fee structures and GST deductions, makes manual spreadsheet matching an absolute nightmare.

## The Problem: Why Razorpay Settlement Matching is Hard

When a customer pays you ₹1000 via Razorpay, you don't receive ₹1000 in your bank. You receive the net settlement amount after Razorpay deducts its gateway fee (usually around 2%) and the applicable 18% GST on that fee. Furthermore, payouts are batched. A single bank credit might represent hundreds of individual transactions.

To manually reconcile this, you have to:
1. Download the Razorpay settlement report.
2. Download your bank statement.
3. Identify the UTR (Unique Transaction Reference) in both files.
4. Verify that the sum of gross transactions minus fees and GST equals the exact bank credit.

## A Practical Workflow for Finance Teams

### Step 1: Export the Right Reports
Always export the detailed **Settlement Report** from Razorpay, not just the standard transaction list. This report contains the crucial UTR numbers and the breakdown of fees and taxes for each payout batch.

### Step 2: Extract UTRs from Bank Narrations
Bank statement narrations are famously messy. You'll need to use Excel formulas like \`MID\` or \`REGEXEXTRACT\` (if using Google Sheets) to pull the 16-character UTR string out of the cluttered bank description.

### Step 3: Match and Verify
Use \`VLOOKUP\` or \`INDEX/MATCH\` to map the Razorpay UTR to the Bank UTR. Then, ensure the "Net Settlement Amount" from Razorpay matches the "Credit Amount" in the bank.

## Where Manual Processes Break Down
- **Refunds:** When refunds are processed, they are often adjusted against future settlements, making the math incredibly hard to trace manually.
- **Timing Differences:** A transaction made at 11:59 PM might fall into the next day's settlement batch.
- **Scale:** VLOOKUPs crash when dealing with 50,000+ rows.

## How SettleProof Helps

This is exactly why we built SettleProof. 

SettleProof acts as your AI payment reconciliation worker. You simply upload your Razorpay settlement files and your bank statements. 

- **AI Prepares the Reconciliation:** It automatically parses messy bank narrations to extract UTRs and maps the columns without you needing to create templates.
- **Rules Match the Money:** Deterministic rules apply the exact fee and GST formulas to prove every rupee.
- **Finance Approves Exceptions:** Instead of staring at 10,000 rows, your team only reviews the 1% of transactions that actually failed to match, complete with AI-generated audit evidence explaining *why*.

### Ready to stop the spreadsheet chaos?
[Try SettleProof](https://cloud.settleproof.app/) or [Book a demo](mailto:hello@settleproof.app) today.
`
  },
  {
    slug: '2026-04-28-stripe-payout-reconciliation-guide.md',
    content: `---
title: "Stripe Payout Reconciliation: A Practical Guide for SaaS Finance Teams"
description: "Learn how to reconcile Stripe payouts, handle currency conversions, and manage gateway fees efficiently."
slug: "stripe-payout-reconciliation-guide"
date: "2026-04-28"
category: "Reconciliation Guide"
tags: ["Stripe", "SaaS", "Payouts"]
primary_keyword: "Stripe payout reconciliation"
---
# Stripe Payout Reconciliation: A Practical Guide for SaaS Finance Teams

For SaaS businesses, Stripe is incredible for collecting payments globally. However, for the finance team, reconciling Stripe payouts against bank accounts is a complex puzzle involving multi-currency conversions, rolling reserves, and platform fees.

## The Challenge with Stripe Payouts
Stripe groups multiple charges, refunds, and disputes into a single payout. Reconciling means you must unpack that single bank deposit into its component parts to properly recognize revenue and account for expenses (fees).

## How SettleProof Helps
SettleProof automates the unpacking of Stripe payouts. It reads the Stripe payout reports, matches them against your bank deposits, and automatically accounts for the gateway fees, presenting you with a clean, accountant-ready exception report.

[Try SettleProof](https://cloud.settleproof.app/) or [Book a demo](mailto:hello@settleproof.app).
`
  },
  {
    slug: '2026-04-28-what-is-utr-in-payment-reconciliation.md',
    content: `---
title: "What is UTR in Payment Reconciliation?"
description: "Understand the Unique Transaction Reference (UTR) number and why it is the golden key to automating payment reconciliation."
slug: "what-is-utr-in-payment-reconciliation"
date: "2026-04-28"
category: "Glossary"
tags: ["UTR", "Banking"]
primary_keyword: "UTR reconciliation"
---
# What is UTR in Payment Reconciliation?

UTR stands for Unique Transaction Reference. It is a unique alphanumeric code attached to every bank transfer in India (NEFT, RTGS, IMPS).

## Why UTR Matters
In payment reconciliation, the UTR is the primary key. When a payment gateway (like Razorpay or Cashfree) settles funds to your bank account, they provide a UTR. Finding that exact UTR in your bank statement is how you prove the money arrived.

## The Automation Problem
Bank statement narrations often bury the UTR in a string of random characters. SettleProof uses AI to automatically parse and extract these UTRs, enabling instant deterministic matching.

[Try SettleProof](https://cloud.settleproof.app/) or [Book a demo](mailto:hello@settleproof.app).
`
  },
  {
    slug: '2026-04-28-how-payment-gateway-fees-affect-reconciliation.md',
    content: `---
title: "How Payment Gateway Fees and GST Affect Reconciliation"
description: "A deep dive into why your gross sales never match your bank credits and how to automate fee and tax reconciliation."
slug: "how-payment-gateway-fees-affect-reconciliation"
date: "2026-04-28"
category: "Education"
tags: ["Fees", "GST"]
primary_keyword: "payment gateway fee reconciliation"
---
# How Payment Gateway Fees and GST Affect Reconciliation

If you sell ₹10,000 worth of goods, you won't see ₹10,000 in your bank. 

Payment gateways deduct their processing fee, and the government requires an 18% GST on that fee. Reconciling this manually means calculating these deductions row by row.

SettleProof's deterministic engine applies these exact formulas to validate that the net settlement matches your bank credit perfectly.

[Try SettleProof](https://cloud.settleproof.app/) or [Book a demo](mailto:hello@settleproof.app).
`
  },
  {
    slug: '2026-04-28-refund-reconciliation-guide.md',
    content: `---
title: "Refund Reconciliation: How to Match Refunds, Settlements and Bank Credits"
description: "Handling refunds breaks manual reconciliation workflows. Learn how to track refund adjustments efficiently."
slug: "refund-reconciliation-guide"
date: "2026-04-28"
category: "Guide"
tags: ["Refunds", "Ecommerce"]
primary_keyword: "refund reconciliation"
---
# Refund Reconciliation

Refunds are the enemy of clean spreadsheets. When a refund occurs, the gateway often deducts the amount from your *next* settlement batch. This creates timing mismatches and makes manual tracing nearly impossible.

SettleProof tracks refunds across batches, ensuring that negative adjustments are properly matched and accounted for.

[Try SettleProof](https://cloud.settleproof.app/) or [Book a demo](mailto:hello@settleproof.app).
`
  },
  {
    slug: '2026-04-28-payment-reconciliation-checklist-for-month-end-close.md',
    content: `---
title: "Payment Reconciliation Checklist for Month-End Close"
description: "A practical checklist to help finance teams speed up their month-end close process."
slug: "payment-reconciliation-checklist-for-month-end-close"
date: "2026-04-28"
category: "Checklist"
tags: ["Month End Close", "Finance Ops"]
primary_keyword: "payment reconciliation checklist"
---
# Payment Reconciliation Checklist for Month-End Close

Closing the books shouldn't take 15 days. Use this checklist to streamline the process:
1. Export all payment gateway settlement reports.
2. Export all bank statements.
3. Verify gross sales against your internal database/invoices.
4. Reconcile net settlements against bank credits using UTRs.
5. Account for gateway fees and GST.
6. Isolate and investigate exceptions.

SettleProof automates steps 1-5 so your team only focuses on step 6.

[Try SettleProof](https://cloud.settleproof.app/) or [Book a demo](mailto:hello@settleproof.app).
`
  },
  {
    slug: '2026-04-28-reconciliation-exceptions-explained.md',
    content: `---
title: "Common Payment Reconciliation Exceptions Explained"
description: "What causes reconciliation exceptions and how to investigate them efficiently."
slug: "reconciliation-exceptions-explained"
date: "2026-04-28"
category: "Education"
tags: ["Exceptions", "AI"]
primary_keyword: "reconciliation exceptions"
---
# Common Payment Reconciliation Exceptions Explained

Exceptions occur when the expected settlement doesn't match the bank credit. 

Common causes include:
- Unaccounted refunds
- Chargebacks/Disputes
- Rolling reserves held by the gateway
- Cross-border currency fluctuations

SettleProof doesn't just flag an error; its AI analyzes the context and provides audit-ready evidence explaining *why* the exception occurred.

[Try SettleProof](https://cloud.settleproof.app/) or [Book a demo](mailto:hello@settleproof.app).
`
  },
  {
    slug: '2026-04-28-bank-statement-reconciliation-for-startups.md',
    content: `---
title: "Bank Statement Reconciliation for Startups: What to Automate First"
description: "Startups shouldn't waste time on manual VLOOKUPs. Learn how to automate bank reconciliation from day one."
slug: "bank-statement-reconciliation-for-startups"
date: "2026-04-28"
category: "Startups"
tags: ["Startups", "Bank Statements"]
primary_keyword: "bank statement reconciliation"
---
# Bank Statement Reconciliation for Startups

Founders and early finance hires often spend weekends matching bank statements to invoices. This is unscalable.

By implementing an exception-based workflow early, you can scale payment volumes without scaling your finance headcount.

[Try SettleProof](https://cloud.settleproof.app/) or [Book a demo](mailto:hello@settleproof.app).
`
  },
  {
    slug: '2026-04-28-payment-gateway-reconciliation-for-d2c-brands.md',
    content: `---
title: "Payment Gateway Reconciliation for D2C Brands"
description: "D2C brands face massive transaction volumes. Here is how to automate COD, prepaid, and refund reconciliation."
slug: "payment-gateway-reconciliation-for-d2c-brands"
date: "2026-04-28"
category: "D2C"
tags: ["D2C", "Ecommerce"]
primary_keyword: "payment gateway reconciliation"
---
# Payment Gateway Reconciliation for D2C Brands

D2C brands deal with high volume, low ticket size transactions. When you have 10,000 orders a day across Razorpay, Cashfree, and COD logistics partners, manual matching is impossible.

SettleProof ingests massive datasets and matches them with mathematical certainty, ensuring no revenue leaks.

[Try SettleProof](https://cloud.settleproof.app/) or [Book a demo](mailto:hello@settleproof.app).
`
  },
  {
    slug: '2026-04-28-ai-in-payment-reconciliation.md',
    content: `---
title: "Where AI Helps in Payment Reconciliation — and Where Rules Should Decide"
description: "AI is great for unstructured data, but deterministic rules are needed for money. Learn SettleProof's hybrid approach."
slug: "ai-in-payment-reconciliation"
date: "2026-04-28"
category: "Technology"
tags: ["AI", "Rules Engine"]
primary_keyword: "AI payment reconciliation software"
---
# Where AI Helps in Payment Reconciliation

SettleProof's philosophy: **AI prepares. Finance approves.**

AI is perfect for parsing messy CSV files, extracting UTRs from terrible bank narrations, and mapping columns without setup.

However, when it comes to matching the actual money, we use deterministic rules. You don't want an AI "hallucinating" a financial match. Rules prove the money. AI handles the grunt work.

[Try SettleProof](https://cloud.settleproof.app/) or [Book a demo](mailto:hello@settleproof.app).
`
  }
];

blogs.forEach(b => {
  fs.writeFileSync(path.join('content/blog', b.slug), b.content);
});

// USE CASES
const useCases = [
  {
    slug: 'razorpay-reconciliation.md',
    content: `---
title: "Razorpay Reconciliation Software for Settlements, UTRs, Fees and Bank Credits"
description: "Automate your Razorpay reconciliation. Match settlements, UTRs, and fees against bank statements instantly without complex spreadsheets."
primary_keyword: "Razorpay reconciliation software"
---
# Reconcile Razorpay settlements with bank credits faster

Stop downloading CSVs and running VLOOKUPs. SettleProof is the exception-first reconciliation layer for finance teams using Razorpay.

## Why Razorpay settlement matching is hard
Fees, 18% GST, rolling reserves, and refunds mean your gross sales never neatly match the bank credit.

## How SettleProof helps
AI maps your messy files. Deterministic rules apply the exact fee structures to prove the payout. Finance only reviews the exceptions with clear evidence.

[Try SettleProof](https://cloud.settleproof.app/) | [Book a demo](mailto:hello@settleproof.app)
`
  },
  {
    slug: 'stripe-payout-reconciliation.md',
    content: `---
title: "Stripe Payout Reconciliation Software"
description: "Reconcile Stripe payouts, currency conversions, and platform fees with ease."
primary_keyword: "Stripe payout reconciliation software"
---
# Stripe Payout Reconciliation
Automate the unpacking of Stripe payouts to your bank accounts.
[Try SettleProof](https://cloud.settleproof.app/) | [Book a demo](mailto:hello@settleproof.app)
`
  },
  {
    slug: 'bank-statement-reconciliation.md',
    content: `---
title: "AI Bank Statement Reconciliation Software"
description: "Stop manually matching bank lines. AI extracts UTRs and matches payments automatically."
primary_keyword: "AI bank statement reconciliation software"
---
# Bank Statement Reconciliation
Let AI read the messy bank narrations and match credits to your invoices and gateways.
[Try SettleProof](https://cloud.settleproof.app/) | [Book a demo](mailto:hello@settleproof.app)
`
  },
  {
    slug: 'invoice-payment-matching.md',
    content: `---
title: "Invoice Payment Matching Software"
description: "Match incoming bank credits directly to open invoices."
primary_keyword: "invoice payment matching software"
---
# Invoice Payment Matching
Close your AR faster by automatically matching payments to invoices.
[Try SettleProof](https://cloud.settleproof.app/) | [Book a demo](mailto:hello@settleproof.app)
`
  },
  {
    slug: 'accountants-ca-firms.md',
    content: `---
title: "Payment Reconciliation Software for Accountants and CA Firms"
description: "Scale your CA firm by automating client reconciliations."
primary_keyword: "payment reconciliation software for accountants"
---
# Built for Accountants and CA Firms
Stop wasting billable hours on data entry. Provide your clients with audit-ready exception reports.
[Try SettleProof](https://cloud.settleproof.app/) | [Book a demo](mailto:hello@settleproof.app)
`
  },
  {
    slug: 'd2c-payment-reconciliation.md',
    content: `---
title: "Payment Reconciliation Software for D2C Brands"
description: "Handle massive D2C transaction volumes, COD, and prepaid reconciliations."
primary_keyword: "payment reconciliation software for D2C brands"
---
# D2C Payment Reconciliation
Scale your D2C brand without scaling your finance team.
[Try SettleProof](https://cloud.settleproof.app/) | [Book a demo](mailto:hello@settleproof.app)
`
  }
];

useCases.forEach(u => {
  fs.writeFileSync(path.join('content/use-cases', u.slug), u.content);
});

console.log("Content generated successfully.");
