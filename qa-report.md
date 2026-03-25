# QA Validation Report — SOS Impressora
## Pre-Launch & Post-Launch Checklist

**Auditor:** Antônio Auditor — QA & Validador
**Date:** 2026-03-25
**Project:** Phoenix SOS Impressora Migration (Wix → GitHub Pages)
**Domain:** sosimpressora.com
**Scope:** index.html, servicos.html, sobre.html, contato.html + css/style.css + js/main.js

---

## Executive Summary

This document provides a full QA validation plan for the SOS Impressora static site migration. It covers browser and device testing, performance auditing, SEO post-launch verification, and a phased launch checklist with a APPROVE/REJECT scoring system.

**Site Profile:**
- Static HTML/CSS/JS — no backend, no database
- Contact form routes through WhatsApp (`wa.me/5511965760126`) — no server needed
- Font: Inter via Google Fonts (preconnect + display=swap implemented)
- Critical CSS: inlined in `<head>` for above-the-fold rendering
- JS: single IIFE (`main.js`) with IntersectionObserver, no framework dependencies
- CSS: mobile-first with design tokens (~700 lines)

---

## Task 1: Browser & Device Testing Plan

### 1.1 Device Test Matrix

| Device | Viewport | Priority | Notes |
|---|---|---|---|
| iPhone SE (3rd gen) | 375 × 667px | CRITICAL | Smallest modern viewport — minimum viable layout |
| iPhone 14 | 390 × 844px | CRITICAL | Most common iOS viewport in BR market |
| Samsung Galaxy S22 | 412 × 915px | CRITICAL | Most common Android viewport in BR market |
| iPad (9th gen) | 768 × 1024px | HIGH | Breakpoint boundary — nav switches desktop ↔ mobile |
| Desktop 1080p | 1280 × 800px | HIGH | Laptop minimum |
| Desktop 1440p | 1440 × 900px | HIGH | Primary desktop target |
| Desktop 1920p | 1920 × 1080px | MEDIUM | Wide monitor layout check |

### 1.2 Browser Test Matrix

| Browser | Versions | Desktop | Mobile | Notes |
|---|---|---|---|---|
| Chrome | 120+ | YES | YES (Android) | Primary — highest BR market share |
| Safari | 17+ | YES | YES (iOS) | Required — iOS WebKit-only engine |
| Firefox | 120+ | YES | NO | Desktop only test |
| Edge | 120+ | YES | NO | Desktop fallback |
| Samsung Internet | 23+ | NO | YES | Significant share in Android Brazil |

### 1.3 Feature Test Cases

#### Navigation

| Test ID | Test Case | Expected | Devices |
|---|---|---|---|
| NAV-01 | Desktop nav links visible | All 4 links render in single row | 1280px+ |
| NAV-02 | Mobile hamburger visible | Hamburger icon visible, desktop links hidden | <768px |
| NAV-03 | Hamburger opens menu | Menu slides/fades in, `aria-expanded="true"` set | <768px |
| NAV-04 | Outside click closes menu | Menu closes, `aria-expanded="false"` set | <768px |
| NAV-05 | Nav link click closes menu | Menu closes after clicking any link | <768px |
| NAV-06 | Active state highlights current page | Correct link has `.active` class | All |
| NAV-07 | Header scroll effect | Header adds `.scrolled` class after 20px scroll | All |
| NAV-08 | Logo click returns to homepage | Navigation to index.html | All |

#### Contact Form & WhatsApp

| Test ID | Test Case | Expected | Devices |
|---|---|---|---|
| FORM-01 | All fields accept input | nome, telefone, email, modelo, problema fill correctly | All |
| FORM-02 | Phone mask applies | `(11) 96576-0126` format auto-applied on input | All |
| FORM-03 | Form submit — valid data | WhatsApp opens in new tab with pre-filled message | All |
| FORM-04 | Form submit — loading state | Button shows "Enviando..." for 800ms | All |
| FORM-05 | Form submit — success message | `#form-success` becomes visible after submit | All |
| FORM-06 | Form resets after submit | All fields clear after successful submission | All |
| FORM-07 | WhatsApp CTA buttons (header/hero/footer) | Opens `wa.me/5511965760126` in new tab | All |
| FORM-08 | WhatsApp URL correct | Number is `5511965760126` (no dashes, no spaces) | All |
| FORM-09 | `noopener noreferrer` on WA links | window.open uses `noopener,noreferrer` flags | All |

#### FAQ Accordion

| Test ID | Test Case | Expected | Devices |
|---|---|---|---|
| FAQ-01 | First item opens by default | `aria-expanded="true"`, panel visible on page load | All |
| FAQ-02 | Click item opens panel | Panel expands with height animation | All |
| FAQ-03 | Click open item closes panel | Panel collapses to `maxHeight: 0` | All |
| FAQ-04 | Opening one closes others | Only one panel open at a time (exclusive) | All |
| FAQ-05 | Keyboard navigation | Tab to trigger, Enter/Space to toggle | Desktop |
| FAQ-06 | Panel height calculation | `scrollHeight` correctly computed, no clipping | All |

#### Responsive Breakpoints

| Test ID | Breakpoint | Element to Check |
|---|---|---|
| RESP-01 | 375px | Hero headline single column, CTA full-width |
| RESP-02 | 375px | Nav hamburger visible, no overflow-x |
| RESP-03 | 412px | Service cards stack vertically |
| RESP-04 | 768px | Nav transitions from hamburger to full links |
| RESP-05 | 768px | Service grid switches to 2-column layout |
| RESP-06 | 1280px | Max-width container centered, side padding correct |
| RESP-07 | All | No horizontal scrollbar at any width |
| RESP-08 | All | Touch targets minimum 44×44px (WCAG 2.5.5) |

#### Scroll Animations & Counters

| Test ID | Test Case | Expected |
|---|---|---|
| ANIM-01 | Elements with `[data-animate]` | Add `.animated` class when 10% in viewport |
| ANIM-02 | Counters with `[data-count]` | Count animation triggers when 50% visible |
| ANIM-03 | Counter format | Numbers use `pt-BR` locale (e.g., "5.000") |
| ANIM-04 | Smooth scroll on anchor links | Page scrolls smoothly to target section |
| ANIM-05 | IntersectionObserver fallback | Elements visible on older browsers without animation |

### 1.4 Accessibility (WCAG AA)

#### Color Contrast

| Element | Foreground | Background | Ratio | Required | Status |
|---|---|---|---|---|---|
| Body text | `#f8f9ff` (gray-50) | `#1a1a2e` (dark) | ~15:1 | 4.5:1 | PASS |
| Hero headline (white) | `#ffffff` | `#1a1a2e` | ~17:1 | 4.5:1 | PASS |
| Electric blue buttons | `#ffffff` | `#4361ee` | ~4.7:1 | 4.5:1 | PASS (verify) |
| Accent pink buttons | `#ffffff` | `#f72585` | ~4.5:1 | 4.5:1 | BORDERLINE — verify with tool |
| Gray-400 on dark | `#8892b0` | `#1a1a2e` | ~5.2:1 | 4.5:1 | PASS |
| WhatsApp green | `#ffffff` | `#25d366` | ~2.9:1 | 4.5:1 | FAIL — use `#128c7e` or white text on darker bg |

**Critical Check:** WhatsApp button `#25d366` with white text fails WCAG AA. Use `var(--color-whatsapp-dark)` (`#128c7e`) as background or switch to black text on the green.

#### Focus States

| Test ID | Check | Method |
|---|---|---|
| A11Y-01 | All interactive elements receive visible focus ring | Tab through entire page |
| A11Y-02 | Focus ring not suppressed by `outline: none` without replacement | Inspect CSS |
| A11Y-03 | FAQ triggers have `aria-expanded` attribute | Check DOM in DevTools |
| A11Y-04 | Mobile menu button has `aria-expanded` | Check hamburger DOM |
| A11Y-05 | Form fields have associated `<label>` elements | Inspect form HTML |
| A11Y-06 | Images have descriptive `alt` text | Inspect all `<img>` tags |
| A11Y-07 | Page `lang="pt-BR"` is set | Check `<html>` tag (confirmed in index.html) |
| A11Y-08 | Skip navigation link (optional but recommended) | Check for `#main-content` anchor |

#### Screen Reader Compatibility

Test with NVDA (Windows/Firefox) or VoiceOver (iOS Safari):
- Navigate page by headings — verify H1 → H2 → H3 hierarchy
- Navigate by landmarks — `<header>`, `<main>`, `<nav>`, `<footer>` present
- Form: labels announce field purpose, error states are communicated
- FAQ accordion: state change (expanded/collapsed) announced

---

## Task 2: Performance Audit Plan

### 2.1 Target Scores

| Metric | Mobile Target | Desktop Target |
|---|---|---|
| PageSpeed Insights Performance | ≥ 90 | ≥ 95 |
| Accessibility | ≥ 90 | ≥ 95 |
| Best Practices | ≥ 95 | ≥ 100 |
| SEO | ≥ 95 | ≥ 100 |

### 2.2 Core Web Vitals Targets

| Metric | Target | Description |
|---|---|---|
| LCP (Largest Contentful Paint) | < 2.5s | Hero section headline or image |
| INP (Interaction to Next Paint) | < 200ms | FAQ accordion click, form submit |
| CLS (Cumulative Layout Shift) | < 0.1 | Font swap, lazy images, dynamic content |
| TTFB (Time to First Byte) | < 800ms | GitHub Pages CDN response |
| FCP (First Contentful Paint) | < 1.8s | Critical CSS inline ensures fast first paint |

### 2.3 Static Site Performance Advantages

For a static HTML/CSS/JS site hosted on GitHub Pages (CDN-backed), the following should be naturally achievable:
- No server-side rendering delay (TTFB target easily met)
- No database queries
- No dynamic content generation
- Gzip/Brotli compression available on GitHub Pages CDN
- No third-party runtime scripts (React, Vue, etc.)

**Expected score range for this stack:** Mobile 88–95, Desktop 96–100 (assuming images are optimized)

### 2.4 Performance Checklist

#### HTML Structure
- [ ] Critical CSS inlined in `<head>` — CONFIRMED (index.html lines 31–40)
- [ ] External `style.css` loads after critical inline block — CONFIRMED
- [ ] `<script>` for `main.js` uses `defer` attribute — VERIFY in HTML
- [ ] No render-blocking scripts in `<head>` — VERIFY
- [ ] `<link rel="preconnect">` for Google Fonts — CONFIRMED (index.html lines 26–27)
- [ ] Google Fonts uses `display=swap` — CONFIRMED (line 28)
- [ ] No `@import` for fonts in CSS (slow) — VERIFY (style.css line 7 uses `@import` — ISSUE, should use `<link>` in HTML only)

**Note:** `style.css` line 7 contains `@import url('https://fonts.googleapis.com/css2?family=Inter...')`. This creates a render-blocking chain: browser parses CSS, finds `@import`, makes additional network request. This should be removed since fonts are already loaded via `<link>` in HTML.

#### Images
- [ ] All `<img>` tags have `loading="lazy"` except above-the-fold hero image
- [ ] Hero image has `loading="eager"` or no lazy attribute
- [ ] All images have explicit `width` and `height` attributes (prevents CLS)
- [ ] Images served in WebP format (or AVIF)
- [ ] Image dimensions: hero max 1920px wide, cards max 800px wide
- [ ] `og:image` exists and is ≥ 1200×630px
- [ ] No images > 200KB after compression
- [ ] `fetchpriority="high"` on LCP image (hero)

#### JavaScript
- [ ] `main.js` loaded with `defer` attribute
- [ ] No third-party JS libraries (jQuery, etc.) — CONFIRMED (vanilla JS only)
- [ ] IntersectionObserver used instead of scroll listeners — CONFIRMED
- [ ] Passive scroll event listener — CONFIRMED (`{ passive: true }` in initHeaderScroll)
- [ ] IIFE pattern prevents global scope pollution — CONFIRMED
- [ ] No console.log statements in production code — VERIFY

#### CSS
- [ ] `style.css` is minified in production
- [ ] No unused CSS (no framework bloat — clean slate confirmed)
- [ ] CSS custom properties (design tokens) used throughout — CONFIRMED
- [ ] `overflow-x: hidden` on body prevents horizontal scroll — VERIFY
- [ ] Animations use `transform` and `opacity` (GPU-accelerated) — VERIFY

#### Network
- [ ] HTTP/2 or HTTP/3 active on hosting (GitHub Pages: YES)
- [ ] Gzip/Brotli compression enabled (GitHub Pages: YES via CDN)
- [ ] HTTPS forced (GitHub Pages: YES with custom domain CNAME)
- [ ] Total page weight (HTML+CSS+JS) < 150KB (estimate: ~80KB for this stack)
- [ ] Total page weight including hero image < 500KB

### 2.5 PageSpeed Audit Steps

**Step 1: Pre-Deploy Test (using localhost)**
```bash
# Start local server
npx serve . -l 5000
# Or
python -m http.server 5000

# Then run PageSpeed CLI (optional)
npx lighthouse http://localhost:5000 --output=html --output-path=./lighthouse-report.html
```

**Step 2: Post-Deploy Test (production)**
1. Navigate to https://pagespeed.web.dev/
2. Test `https://sosimpressora.com` — Mobile tab first
3. Screenshot scores for LCP, INP, CLS
4. Test `https://sosimpressora.com/servicos.html`
5. Test `https://sosimpressora.com/contato.html`

**Step 3: Chrome DevTools Audit**
```
DevTools → Lighthouse → Performance + Accessibility + SEO
Throttling: Moto G Power (mobile emulation)
Network: Slow 4G
```

**Step 4: Core Web Vitals Field Data (after 28 days)**
- Check Google Search Console → Core Web Vitals report
- Compare field vs. lab data

### 2.6 CLS Prevention Checklist

CLS sources for this site:
1. **Google Fonts swap** — Mitigated by `display=swap` + `size-adjust` (optional)
2. **Lazy-loaded images without dimensions** — Add `width`/`height` to all `<img>` tags
3. **FAQ accordion** — Animation uses `maxHeight` CSS property (does not cause CLS)
4. **Counter animation** — Uses `textContent` change, minimal CLS risk
5. **Mobile nav appearing** — Positioned `fixed`, does not push content

---

## Task 3: SEO Post-Launch Validation

### 3.1 Redirect Verification

Run the following after DNS points to GitHub Pages. Confirm all old Wix URLs return 301 to new location:

```bash
# Homepage
curl -I -L https://www.sosimpressora.com/
curl -I -L https://sosimpressora.com/

# Service pages
curl -I -L https://www.sosimpressora.com/conserto-de-impressora
curl -I -L https://www.sosimpressora.com/conserto-impressora-epson

# Support pages
curl -I -L https://www.sosimpressora.com/book-online
curl -I -L https://www.sosimpressora.com/members

# Blog section
curl -I -L https://www.sosimpressora.com/blog
curl -I -L "https://www.sosimpressora.com/post/consertos-e-assis%C3%AAncia-t%C3%A9cnica-em-impressoras"

# Czech-language posts (should return 410 Gone or 301 to blog index)
curl -I -L "https://www.sosimpressora.com/post/blogujte-ze-sv%C3%A9ho-zve%C5%99ejn%C4%9Bn%C3%A9ho-webu-a-z-mobilu"
curl -I -L "https://www.sosimpressora.com/post/navrhněte-si-úchvatný-blog"
```

**Expected responses:**
- Primary pages: `HTTP/2 301` → new URL → `HTTP/2 200`
- Czech posts: `HTTP/2 410` (Gone) — do NOT 301 foreign-language template content to PT-BR pages

**GitHub Pages _redirects file format (if using Netlify/Cloudflare Pages):**
```
/conserto-de-impressora    /servicos/conserto-impressora.html    301
/conserto-impressora-epson /servicos/conserto-impressora-epson.html    301
/book-online               /contato.html    301
/members                   /index.html    301
/blog                      /index.html    301
```

**GitHub Pages native redirects** (via `jekyll-redirect-from` plugin or `meta refresh` in stub HTML files):
```html
<!-- /conserto-de-impressora/index.html -->
<meta http-equiv="refresh" content="0; url=/servicos/conserto-impressora.html">
<link rel="canonical" href="https://sosimpressora.com/servicos/conserto-impressora.html">
```

### 3.2 Internal Link Crawl (404 Check)

After deployment, crawl all internal links with Screaming Frog (free up to 500 URLs) or ahrefs webmaster tools:

```bash
# Quick manual check with wget
wget --spider --recursive --no-verbose --output-file=crawl-log.txt https://sosimpressora.com

# Check for 404s
grep "404" crawl-log.txt
```

**Expected result:** 0 internal 404 errors.

**Manual check list:**
- [ ] All nav links resolve correctly (index, servicos, sobre, contato)
- [ ] All CTA buttons link to correct WhatsApp URL (`wa.me/5511965760126`)
- [ ] All anchor links (`#faq`, `#servicos`, `#contato`) scroll to correct sections
- [ ] Footer links resolve correctly

### 3.3 sitemap.xml Validation

**Access test:**
```bash
curl -I https://sosimpressora.com/sitemap.xml
# Expected: HTTP/2 200, Content-Type: application/xml
```

**Content validation:**
```bash
curl https://sosimpressora.com/sitemap.xml
```

Checklist:
- [ ] File accessible at `/sitemap.xml` (HTTP 200)
- [ ] Valid XML — no parse errors
- [ ] Includes all 4 main pages: `/`, `/servicos.html`, `/sobre.html`, `/contato.html`
- [ ] `<lastmod>` dates present and realistic
- [ ] `<changefreq>` set (recommended: `monthly` for static)
- [ ] `<priority>` set (homepage: 1.0, services: 0.9, about/contact: 0.7)
- [ ] No disallowed URLs included (no 404 pages in sitemap)

**Minimum valid sitemap structure:**
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://sosimpressora.com/</loc>
    <lastmod>2026-03-24</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://sosimpressora.com/servicos.html</loc>
    <lastmod>2026-03-24</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://sosimpressora.com/sobre.html</loc>
    <lastmod>2026-03-24</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://sosimpressora.com/contato.html</loc>
    <lastmod>2026-03-24</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
</urlset>
```

### 3.4 robots.txt Validation

**Access test:**
```bash
curl https://sosimpressora.com/robots.txt
```

**Expected content:**
```
User-agent: *
Allow: /
Sitemap: https://sosimpressora.com/sitemap.xml
```

Checklist:
- [ ] Accessible at `/robots.txt` (HTTP 200)
- [ ] `User-agent: *` present
- [ ] `Allow: /` — no accidental `Disallow: /`
- [ ] Sitemap URL points to correct domain
- [ ] No pages accidentally disallowed (check for leftover Wix rules)

### 3.5 Structured Data Validation

**Google Rich Results Test:**
1. Go to https://search.google.com/test/rich-results
2. Enter `https://sosimpressora.com`
3. Verify `LocalBusiness` schema renders without errors

**Expected output from schema (confirmed in index.html):**
- Business Name: "SOS Impressora"
- Telephone: "+55-11-96576-0126"
- Address: São Paulo, SP, BR
- Opening Hours: Mon–Fri 08:00–18:00, Sat 08:00–13:00
- areaServed: Grande São Paulo

**Schema validation checklist:**
- [ ] No errors in Rich Results Test
- [ ] `@type: LocalBusiness` detected
- [ ] Telephone in E.164 format (`+55-11-96576-0126`)
- [ ] `areaServed` array includes key cities (São Paulo, Santo André, São Bernardo, etc.)
- [ ] `priceRange` set (`$$`)
- [ ] `openingHoursSpecification` valid

**Additional schema recommendations (optional, high impact):**
```json
{
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Quanto custa o conserto de uma impressora?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "..."
      }
    }
  ]
}
```

### 3.6 Google Search Console Post-Launch

**Steps (day of launch):**
1. Verify property ownership in GSC (HTML file or DNS TXT method)
2. Submit sitemap: GSC → Sitemaps → Add sitemap URL
3. Use URL Inspection tool on homepage — request indexing
4. Do the same for `/servicos.html`, `/sobre.html`, `/contato.html`

**Monitoring checklist (first 7 days):**
- [ ] D+1: GSC shows site as verified
- [ ] D+2: Sitemap submitted and read by Google
- [ ] D+3: 0 coverage errors in Coverage report
- [ ] D+5: No 404 spike (signals all redirects working)
- [ ] D+7: Homepage appearing in index (URL Inspection shows "URL is on Google")

**Monitoring checklist (first 30 days):**
- [ ] D+14: Check Core Web Vitals — first field data appears
- [ ] D+14: Old Wix rankings stable or increasing on target keywords
- [ ] D+28: Core Web Vitals report shows Good/Needs Improvement distribution
- [ ] D+30: Impressions recovering to pre-migration levels in Performance report

**Target keywords to track in GSC:**
- "conserto de impressora são paulo"
- "assistência técnica impressora"
- "manutenção impressora epson"
- "conserto impressora hp são paulo"
- "impressora não imprime são paulo"

---

## Task 4: Final Launch Checklist

### Scoring System

Each item is scored **0–10**. Final decision:
- **APPROVE:** Overall average ≥ 7.0 AND no single criterion scores < 4
- **REJECT:** Overall average < 7.0 OR any criterion scores < 4
- **CONDITIONAL APPROVE:** Overall ≥ 7.0 but 1–2 items between 4–5 (fix within 48h post-launch)

---

### 4.1 Pre-Launch Checklist (Before DNS Switch)

| # | Item | Priority | Score (0–10) | Notes |
|---|---|---|---|---|
| 1 | All 4 HTML files validated via W3C Validator (no errors) | CRITICAL | ___ | https://validator.w3.org/ |
| 2 | CSS validates (no major errors) | HIGH | ___ | https://jigsaw.w3.org/css-validator/ |
| 3 | All internal links tested locally (0 broken) | CRITICAL | ___ | Test with `npx serve .` |
| 4 | WhatsApp number confirmed: `5511965760126` | CRITICAL | ___ | Test wa.me link from phone |
| 5 | Contact form submits → WhatsApp opens with correct message | CRITICAL | ___ | Test full form flow |
| 6 | FAQ accordion works on mobile (375px) | HIGH | ___ | Test in Chrome DevTools mobile emulation |
| 7 | Mobile nav hamburger opens/closes correctly | CRITICAL | ___ | Test on real iPhone and Android |
| 8 | No horizontal scroll on 375px viewport | CRITICAL | ___ | `overflow-x` check |
| 9 | `sitemap.xml` file present and valid XML | HIGH | ___ | Validate at https://www.xml-sitemaps.com/validate-xml-sitemap.html |
| 10 | `robots.txt` file present with correct Allow rules | HIGH | ___ | Manual check |
| 11 | All `<img>` have non-empty `alt` attributes | HIGH | ___ | Inspect each page |
| 12 | Canonical tags point to production domain (`sosimpressora.com`) | CRITICAL | ___ | Check `<head>` on all 4 pages |
| 13 | Google Fonts `@import` removed from `style.css` (loaded via `<link>` in HTML only) | MEDIUM | ___ | Check style.css line 7 |
| 14 | `main.js` loaded with `defer` attribute in all HTML files | HIGH | ___ | Check `<script>` tags |
| 15 | WhatsApp CLS check — `#25d366` button contrast ≥ 4.5:1 | HIGH | ___ | Test with https://webaim.org/resources/contrastchecker/ |

**Pre-Launch Score:** ___ / 150 → Average: ___ / 10

**GATE DECISION:**
- [ ] APPROVE (average ≥ 7.0, no item < 4)
- [ ] CONDITIONAL APPROVE (average ≥ 7.0, fix flagged items within 48h)
- [ ] REJECT (average < 7.0 or any item < 4)

---

### 4.2 Launch Day Checklist

| # | Item | Priority | Score (0–10) | Notes |
|---|---|---|---|---|
| 1 | DNS switched (A record or CNAME to GitHub Pages) | CRITICAL | ___ | Propagation: up to 24h |
| 2 | HTTPS active and redirecting HTTP→HTTPS | CRITICAL | ___ | `curl -I http://sosimpressora.com` → 301 |
| 3 | `www` redirecting to apex or vice versa (consistent) | HIGH | ___ | Choose www or non-www and enforce |
| 4 | Old Wix site unpublished or redirecting | HIGH | ___ | Check sosimpressora.com in Wix dashboard |
| 5 | Redirect stubs in place for all 10 old Wix URLs | CRITICAL | ___ | Test each curl command from Task 3.1 |
| 6 | Google Search Console property verified | HIGH | ___ | Ownership confirmed |
| 7 | Sitemap submitted to GSC | HIGH | ___ | GSC → Sitemaps → Submit |
| 8 | URL Inspection requested for homepage | MEDIUM | ___ | GSC → URL Inspection → Request indexing |
| 9 | PageSpeed Mobile score ≥ 90 confirmed | HIGH | ___ | https://pagespeed.web.dev/ |
| 10 | Site tested from mobile device on 4G (not WiFi) | HIGH | ___ | Real device, real network |

**Launch Day Score:** ___ / 100 → Average: ___ / 10

**GATE DECISION:**
- [ ] APPROVE
- [ ] CONDITIONAL APPROVE
- [ ] REJECT

---

### 4.3 Post-Launch: First 7 Days

| # | Item | Priority | Score (0–10) | Notes |
|---|---|---|---|---|
| 1 | 0 new 404 errors in GSC Coverage report | CRITICAL | ___ | Check D+3 |
| 2 | All 10 redirect chains return 200 at final destination | CRITICAL | ___ | Re-run curl commands |
| 3 | Sitemap status in GSC: "Success" | HIGH | ___ | No "Could not fetch" errors |
| 4 | Homepage indexed (URL Inspection → "URL is on Google") | HIGH | ___ | Check D+5 to D+7 |
| 5 | WhatsApp CTA receives at least 1 real test click | MEDIUM | ___ | Test from real mobile device |
| 6 | No JS errors in browser console on any page | HIGH | ___ | Open DevTools on all 4 pages |
| 7 | Google Analytics or Search Console showing traffic | MEDIUM | ___ | Verify tracking is receiving data |
| 8 | Site loads in < 3s on mobile 4G (measured with WebPageTest) | HIGH | ___ | https://webpagetest.org/ |
| 9 | Social sharing preview correct (OG image + title) | MEDIUM | ___ | Test with https://metatags.io/ |
| 10 | No unexpected ranking drops for brand name "SOS Impressora" | HIGH | ___ | Search Google directly |

**7-Day Score:** ___ / 100 → Average: ___ / 10

---

### 4.4 Post-Launch: First 30 Days

| # | Item | Priority | Score (0–10) | Notes |
|---|---|---|---|---|
| 1 | Organic impressions recovering to pre-migration level | HIGH | ___ | GSC Performance → Compare date ranges |
| 2 | Core Web Vitals: LCP Good (< 2.5s) in field data | HIGH | ___ | GSC → Core Web Vitals report |
| 3 | Zero spam form submissions (form routes to WA — no server spam risk) | LOW | ___ | Confirm no exploit attempts |
| 4 | Ranking stable/improving for "conserto de impressora são paulo" | HIGH | ___ | Track in GSC → Queries |
| 5 | Any 404 errors found and resolved (add redirect stubs) | MEDIUM | ___ | GSC Coverage weekly check |

**30-Day Score:** ___ / 50 → Average: ___ / 10

---

### 4.5 Overall APPROVE/REJECT Summary

| Phase | Max Score | Score | Average |
|---|---|---|---|
| Pre-Launch (15 items) | 150 | ___ | ___ |
| Launch Day (10 items) | 100 | ___ | ___ |
| Post-Launch 7 Days (10 items) | 100 | ___ | ___ |
| Post-Launch 30 Days (5 items) | 50 | ___ | ___ |
| **TOTAL** | **400** | **___** | **___/10** |

**Minimum thresholds for APPROVE:**
- Pre-Launch average ≥ 7.0 (105/150) AND no item < 4
- Launch Day average ≥ 7.0 (70/100) AND no item < 4
- No CRITICAL item scored < 6 at any phase

**Final Status:**
- [ ] APPROVED FOR LAUNCH
- [ ] CONDITIONAL APPROVAL — fix items: ______________________
- [ ] REJECTED — blockers: ______________________

---

## Appendix A: Quick Smoke Test Script

Run after deployment to verify basics in 5 minutes:

```bash
#!/bin/bash
DOMAIN="https://sosimpressora.com"

echo "=== SOS Impressora Smoke Test ==="
echo ""

# 1. HTTP → HTTPS redirect
echo "1. HTTP redirect:"
curl -sI http://sosimpressora.com | grep -E "HTTP|Location"

# 2. Homepage
echo "2. Homepage:"
curl -sI $DOMAIN | grep "HTTP"

# 3. All pages
for page in servicos sobre contato; do
  echo "3. /$page.html:"
  curl -sI "$DOMAIN/$page.html" | grep "HTTP"
done

# 4. sitemap + robots
echo "4. sitemap.xml:"
curl -sI "$DOMAIN/sitemap.xml" | grep "HTTP"
echo "5. robots.txt:"
curl -sI "$DOMAIN/robots.txt" | grep "HTTP"

# 5. Old Wix URLs (should 301)
echo "6. Old URL redirect:"
curl -sI "https://www.sosimpressora.com/conserto-de-impressora" | grep -E "HTTP|Location"

echo ""
echo "=== Smoke Test Complete ==="
```

---

## Appendix B: Known Issues Flagged for Resolution

| ID | Issue | Severity | Fix |
|---|---|---|---|
| BUG-01 | `@import` for Google Fonts in `style.css` line 7 creates render-blocking chain | HIGH | Remove from CSS — fonts already loaded via `<link>` in HTML |
| BUG-02 | WhatsApp button `#25d366` with white text fails WCAG AA contrast | HIGH | Use `var(--color-whatsapp-dark)` (`#128c7e`) as background |
| BUG-03 | `main.js` — verify `defer` attribute present on all `<script>` tags | HIGH | Add `defer` to `<script src="js/main.js">` in all 4 HTML files |
| BUG-04 | LCP image may lack `fetchpriority="high"` attribute | MEDIUM | Add `fetchpriority="high"` to hero image `<img>` tag |
| BUG-05 | Images may lack explicit `width`/`height` attributes causing CLS | MEDIUM | Add dimensions to all `<img>` tags |
| BUG-06 | Czech-language blog posts at old domain need 410 response | MEDIUM | Configure 410 Gone for the 3 Czech post URLs |
| SEO-01 | Canonical uses `sosimpressora.com.br` in index.html — confirm correct TLD | CRITICAL | Verify final domain: `.com` or `.com.br`? Update all canonicals |

**Critical note on SEO-01:** The `index.html` canonical tag reads `https://sosimpressora.com.br/` but the project brief states `sosimpressora.com`. This discrepancy must be resolved before launch — all canonical tags, OG URLs, structured data URLs, and sitemap must use the same domain.

---

## Appendix C: Tools Reference

| Tool | URL | Use |
|---|---|---|
| PageSpeed Insights | pagespeed.web.dev | Performance scoring |
| Google Rich Results Test | search.google.com/test/rich-results | Schema validation |
| W3C Validator | validator.w3.org | HTML validation |
| WebAIM Contrast Checker | webaim.org/resources/contrastchecker/ | WCAG AA contrast |
| WebPageTest | webpagetest.org | Real-device load test |
| Screaming Frog SEO Spider | screamingfrog.co.uk/seo-spider | Internal link crawl |
| Meta Tags Tester | metatags.io | OG/Twitter card preview |
| XML Sitemap Validator | xml-sitemaps.com/validate-xml-sitemap.html | Sitemap verification |
| Google Search Console | search.google.com/search-console | GSC indexing/coverage |

---

*Report Generated: 2026-03-25*
*Auditor: Antônio Auditor — QA & Validador*
*Project: Phoenix SOS Impressora Migration*
