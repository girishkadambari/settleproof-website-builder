---
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
Bank statement narrations are famously messy. You'll need to use Excel formulas like `MID` or `REGEXEXTRACT` (if using Google Sheets) to pull the 16-character UTR string out of the cluttered bank description.

### Step 3: Match and Verify
Use `VLOOKUP` or `INDEX/MATCH` to map the Razorpay UTR to the Bank UTR. Then, ensure the "Net Settlement Amount" from Razorpay matches the "Credit Amount" in the bank.

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
