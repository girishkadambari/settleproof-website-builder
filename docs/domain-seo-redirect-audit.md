# Domain, SEO, and Redirect Audit Report

## 1. Files Searched
A comprehensive search was performed across the entire codebase (`/Users/girish/girish-workspace/girish-own/settleproof-website-builder`) targeting domain-related keywords, including:
- `settleproof.app`
- `www.settleproof.app`
- `canonical`
- `redirect`
- `location.href`, `window.location`
- `router.replace`, `router.push`, `NextResponse.redirect`, `Response.redirect`

## 2. Redirect Logic Found in Codebase
**None.** I searched thoroughly for any programmatic redirects or routing configurations that strip the `www` from the hostname, or forcefully redirect `https://www.settleproof.app` to `https://settleproof.app`. No such logic exists in the codebase (no custom `_redirects`, no Cloudflare worker redirect logic, and no client-side/server-side React/TanStack router redirects matching this behavior).

**Conclusion on the Redirect Issue:**
The issue where `www` redirects to the apex root domain (or NXDOMAIN) is **100% Cloudflare-only / DNS-related**, not website-code-related. The codebase itself does not force any specific hostname behavior for the main page.

## 3. Hardcoded Non-WWW References & SEO Issues Found
Although the codebase was not causing the *redirect*, several SEO, canonical, and sitemap references incorrectly pointed to the non-www domain (`https://settleproof.app`):
- **Canonical Tags:** The `<link rel="canonical" ... />` tag was entirely missing from the application.
- **OpenGraph & JSON-LD Metadata:** `src/routes/__root.tsx` had `og:url` and JSON-LD `url` set to `https://settleproof.app`.
- **Sitemap URLs:** `public/sitemap.xml` contained several URLs using `https://settleproof.app`.
- **LLMs.txt:** `public/llms.txt` referenced the homepage as `https://settleproof.app`.
- **Robots.txt:** The `public/robots.txt` file was completely missing.

*Note: References to `cloud.settleproof.app` and `mailto:hello@settleproof.app` were intentionally ignored as they are correct per your instructions.*

## 4. Exact Files Changed
1. **`src/routes/__root.tsx`**: 
   - Changed `og:url` content from `https://settleproof.app` to `https://www.settleproof.app/`.
   - Changed JSON-LD `url` from `https://settleproof.app` to `https://www.settleproof.app/`.
   - Added the explicit canonical link tag: `<link rel="canonical" href="https://www.settleproof.app/" />` to the document `<head>`.
2. **`public/sitemap.xml`**:
   - Replaced all occurrences of `https://settleproof.app` with `https://www.settleproof.app`.
3. **`public/llms.txt`**:
   - Replaced the homepage URL string `https://settleproof.app` with `https://www.settleproof.app`.
4. **`public/robots.txt`**:
   - Created this file to define crawling rules and added the `Sitemap: https://www.settleproof.app/sitemap.xml` directive.

## 5. Final Expected Behavior (Code)
The application will now output all SEO signals indicating that `https://www.settleproof.app` is the definitive, canonical version of the marketing website. Search engines, social media platforms, and LLMs will properly index the `www` version. The app login properly remains `https://cloud.settleproof.app`.

## 6. Manual Cloudflare Checks Still Required
Since the redirect issue is happening at the DNS/CDN level, you **must** manually verify the following in your Cloudflare dashboard:
1. **Cloudflare Pages Custom Domains:** 
   - Ensure you have explicitly added **`www.settleproof.app`** as a custom domain for your Cloudflare Pages project. 
   - *If `www` is missing from Pages Custom Domains, Cloudflare might not route requests to your app correctly.*
2. **Review Page Rules / Redirect Rules:**
   - Double-check your "Redirect root to www" rule. Ensure the **Target URL** is correct (`https://www.settleproof.app/${1}`) and that you do not have an older rule doing the exact opposite (stripping `www`).
3. **DNS Proxy Status (Orange Cloud):**
   - Ensure the A Record (`@`) and CNAME (`www`) are both "Proxied" (Orange Cloud) so that Cloudflare's Page Rules can intercept and redirect the traffic. If they are "DNS Only" (Grey Cloud), the redirect rule will not trigger, which can cause the `DNS_PROBE_FINISHED_NXDOMAIN` error.
