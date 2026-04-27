const fs = require('fs');
const path = require('path');

const docs = [
  {
    name: 'seo-content-audit.md',
    content: `# SEO & Content Audit
## Summary
The current landing page provides a strong foundation but lacks SEO depth and specific target keywords. 

## Must-fix SEO issues
- Add JSON-LD schema.
- Implement structured URLs for specific use-cases.
- Fix internal linking to blog posts.

## Priority action list
1. Publish Use Case pages.
2. Publish first 10 blogs.
3. Update robots.txt and sitemap.xml.
`
  },
  {
    name: 'seo-keyword-strategy.md',
    content: `# SEO Keyword Strategy
## Core Product Keywords
- AI payment reconciliation software
- payment reconciliation software

## Razorpay Keywords
- Razorpay reconciliation
- Razorpay settlement reconciliation

## Stripe Keywords
- Stripe payout reconciliation
`
  },
  {
    name: 'seo-url-map.md',
    content: `# SEO URL Map
## Core Pages
- /
- /product
- /how-it-works

## Use Cases
- /use-cases/razorpay-reconciliation
- /use-cases/stripe-payout-reconciliation
`
  },
  {
    name: 'ai-crawler-seo-rules.md',
    content: `# AI Crawler SEO Rules
Ensure the site exposes \`/llms.txt\` and structured JSON-LD data on every page to properly feed context to ChatGPT and Gemini.
`
  },
  {
    name: 'blog-content-calendar.md',
    content: `# Blog Content Calendar
90-day plan targeting Razorpay, Stripe, and Bank Reconciliation queries.
2 posts per week.
`
  },
  {
    name: 'landing-page-copy-v2.md',
    content: `# Landing Page Copy V2
## H1
Reconcile payments, payouts, and bank credits without spreadsheet chaos.

## Subheadline
SettleProof turns Razorpay, Stripe, bank statements, invoices, refunds, fees, GST, and settlement files into matched records, explained exceptions, and audit-ready reports.
`
  },
  {
    name: 'schema-plan.md',
    content: `# Schema Plan
Implementation requirements for JSON-LD WebSite, Organization, and FAQPage schemas.
`
  },
  {
    name: 'technical-seo-checklist.md',
    content: `# Technical SEO Checklist
- [x] robots.txt
- [x] sitemap.xml
- [x] llms.txt
- [ ] OG tags
- [ ] lazy loading
`
  },
  {
    name: 'content-publishing-guide.md',
    content: `# Content Publishing Guide
How to publish, write meta tags, and distribute on LinkedIn.
`
  },
  {
    name: 'linkedin-content-plan.md',
    content: `# LinkedIn Content Plan
30 days of founder-led content on reconciliation pain points.
`
  }
];

docs.forEach(d => fs.writeFileSync(path.join('docs', d.name), d.content));
console.log('Docs generated');
