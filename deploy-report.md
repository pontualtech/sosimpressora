# SOS Impressora — Deployment Guide
# GitHub Pages + Cloudflare DNS Migration

**Domain:** sosimpressora.com
**Origin:** Wix
**Target:** GitHub Pages + Cloudflare
**WhatsApp:** +55 11 96576-0126
**Date:** 2026-03-25
**Author:** Igor Integrador — DevOps, DNS & Deploy Engineer

---

## Pre-Flight Checklist

Before starting, confirm every item:

- [ ] GitHub account created and logged in
- [ ] Git installed locally (`git --version`)
- [ ] Cloudflare account created (free plan is sufficient)
- [ ] Access to Wix domain control panel (to change nameservers)
- [ ] All site files ready: `index.html`, `servicos.html`, `sobre.html`, `contato.html`, `css/style.css`, `js/main.js`
- [ ] TTL on current DNS records set to 300s (5 min) — do this at least 1 hour before migration
- [ ] Note current Wix nameservers as rollback reference
- [ ] Cloudflare zone already created for `sosimpressora.com` (free plan)

---

## Task 1 — GitHub Repository Setup

### 1.1 Initialize and Push Repository

Run these commands from the root of your site folder (where `index.html` lives):

```bash
# Initialize git repo
git init

# Stage all site files
git add index.html servicos.html sobre.html contato.html
git add css/style.css js/main.js
git add CNAME .nojekyll robots.txt sitemap.xml

# First commit
git commit -m "chore: initial deploy - SOS Impressora site"

# Set branch to main
git branch -M main

# Add remote — replace YOUR_USERNAME with your GitHub username
git remote add origin https://github.com/YOUR_USERNAME/sosimpressora.git

# Push
git push -u origin main
```

### 1.2 Create the CNAME File

Create a file named `CNAME` (no extension) in the repository root with exactly this content:

```
sosimpressora.com
```

Command to create it:

```bash
echo "sosimpressora.com" > CNAME
```

This tells GitHub Pages which custom domain to serve. Without this file the custom domain will not work.

### 1.3 Create the .nojekyll File

Create an empty `.nojekyll` file in the repository root:

```bash
touch .nojekyll
```

This prevents GitHub Pages from running Jekyll processing, which can break files that start with underscores or modify your HTML unexpectedly.

### 1.4 robots.txt

Create `robots.txt` in the repository root:

```
User-agent: *
Allow: /

Sitemap: https://sosimpressora.com/sitemap.xml
```

Command:

```bash
cat > robots.txt << 'EOF'
User-agent: *
Allow: /

Sitemap: https://sosimpressora.com/sitemap.xml
EOF
```

### 1.5 sitemap.xml Template

Create `sitemap.xml` in the repository root. Update `<lastmod>` dates as content changes:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">

  <url>
    <loc>https://sosimpressora.com/</loc>
    <lastmod>2026-03-25</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>

  <url>
    <loc>https://sosimpressora.com/servicos.html</loc>
    <lastmod>2026-03-25</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>

  <url>
    <loc>https://sosimpressora.com/servicos.html#epson</loc>
    <lastmod>2026-03-25</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>

  <url>
    <loc>https://sosimpressora.com/sobre.html</loc>
    <lastmod>2026-03-25</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.6</priority>
  </url>

  <url>
    <loc>https://sosimpressora.com/contato.html</loc>
    <lastmod>2026-03-25</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.7</priority>
  </url>

</urlset>
```

### 1.6 Enable GitHub Pages in Repository Settings

1. Go to `https://github.com/YOUR_USERNAME/sosimpressora`
2. Click **Settings** (top tabs)
3. Left sidebar: click **Pages**
4. Under **Source**: select **Deploy from a branch**
5. Branch: select **main**, folder: **/ (root)**
6. Click **Save**
7. Under **Custom domain**: type `sosimpressora.com` and click **Save**
8. Wait for the green checkmark — DNS check will fail until Cloudflare is configured (that is expected at this stage)
9. Check **Enforce HTTPS** only after DNS propagates and SSL is issued

GitHub Pages will be accessible at:
`https://YOUR_USERNAME.github.io/sosimpressora/` — test here before switching DNS.

---

## Task 2 — Cloudflare DNS Setup

### 2.1 Add SOS Impressora to Cloudflare

1. Log in to `dash.cloudflare.com`
2. Click **Add a Site**
3. Enter `sosimpressora.com` → Continue
4. Select **Free plan** → Continue
5. Cloudflare scans existing DNS — review but do not save yet

### 2.2 DNS Records to Create

Delete any A records Cloudflare imported pointing to Wix, then add these:

**GitHub Pages A Records** (4 records, all pointing apex domain):

| Type | Name | IPv4 Address      | Proxy Status | TTL  |
|------|------|-------------------|--------------|------|
| A    | @    | 185.199.108.153   | DNS only (grey cloud) | Auto |
| A    | @    | 185.199.109.153   | DNS only (grey cloud) | Auto |
| A    | @    | 185.199.110.153   | DNS only (grey cloud) | Auto |
| A    | @    | 185.199.111.153   | DNS only (grey cloud) | Auto |

**CNAME for www** (redirect www to root):

| Type  | Name | Target                        | Proxy Status | TTL  |
|-------|------|-------------------------------|--------------|------|
| CNAME | www  | YOUR_USERNAME.github.io       | DNS only (grey cloud) | Auto |

Replace `YOUR_USERNAME` with your actual GitHub username.

**IMPORTANT — Proxy Status:**
- Keep the proxy **OFF (grey cloud)** initially
- GitHub needs to validate the domain and issue an SSL certificate for `sosimpressora.com`
- If the proxy is ON (orange cloud), GitHub cannot reach your server to verify ownership and SSL issuance will fail
- After SSL is issued (GitHub Pages shows green padlock), then enable the orange cloud

### 2.3 SSL/TLS Mode in Cloudflare

Go to **SSL/TLS** → **Overview** and set mode to:

```
Full
```

Do NOT use **Full (Strict)**.

Reason: GitHub Pages issues a wildcard certificate for `*.github.io`, not for `sosimpressora.com`. Full (Strict) requires the origin cert to match the domain exactly — it would fail. "Full" validates that SSL exists at origin without checking the hostname match.

---

## Task 3 — Bulk Redirects (URL Mapping)

### 3.1 Redirect Rules Summary

| Source URL (Wix) | Target URL (New) | Status |
|---|---|---|
| `https://sosimpressora.com/` | `https://sosimpressora.com/index.html` | 301 |
| `https://sosimpressora.com/conserto-de-impressora` | `https://sosimpressora.com/servicos.html` | 301 |
| `https://sosimpressora.com/conserto-impressora-epson` | `https://sosimpressora.com/servicos.html#epson` | 301 |
| `https://sosimpressora.com/book-online` | `https://sosimpressora.com/contato.html` | 301 |
| `https://sosimpressora.com/members` | `https://sosimpressora.com/contato.html` | 301 |
| `https://sosimpressora.com/blog` | `https://sosimpressora.com/blog/index.html` | 301 |
| `https://sosimpressora.com/post/consertos-e-assistência-técnica-em-impressoras` | `https://sosimpressora.com/blog/consertos.html` | 301 |
| Czech post 1 (see note below) | — | 410 |
| Czech post 2 (see note below) | — | 410 |
| Czech post 3 (see note below) | — | 410 |

Note: The 3 Czech blog posts should return **410 Gone** (not 301 redirect). This tells Google the content is permanently removed — better for SEO than a 404.

### 3.2 CSV for Cloudflare Bulk Redirects Upload

Save this content as `redirects.csv`:

```csv
source_url,target_url,status_code,preserve_query_string,include_subdomains,subpath_matching
https://sosimpressora.com/conserto-de-impressora,https://sosimpressora.com/servicos.html,301,false,false,false
https://sosimpressora.com/conserto-impressora-epson,https://sosimpressora.com/servicos.html#epson,301,false,false,false
https://sosimpressora.com/book-online,https://sosimpressora.com/contato.html,301,false,false,false
https://sosimpressora.com/members,https://sosimpressora.com/contato.html,301,false,false,false
https://sosimpressora.com/blog,https://sosimpressora.com/blog/index.html,301,false,false,false
https://sosimpressora.com/post/consertos-e-assist%C3%AAncia-t%C3%A9cnica-em-impressoras,https://sosimpressora.com/blog/consertos.html,301,false,false,false
```

Note: The Czech post 410s must be handled via a Cloudflare Worker or Custom Rules (see section 3.4), since Bulk Redirects only supports 301/302.

### 3.3 Upload Bulk Redirects to Cloudflare Dashboard

1. Go to `dash.cloudflare.com` → select `sosimpressora.com`
2. Left sidebar: **Rules** → **Redirect Rules**
3. Click **Bulk Redirects**
4. Click **Create Bulk Redirect List**
5. Name: `sos-impressora-wix-migration`
6. Click **Or, upload a CSV file**
7. Upload the `redirects.csv` file created above
8. Review the parsed list — confirm 6 rows
9. Click **Next** → **Save and Deploy**

### 3.4 410 Gone for Czech Posts — Cloudflare Custom Rule

Since Bulk Redirects cannot issue 410, use a Custom Rule:

1. Go to **Rules** → **Custom Rules**
2. Click **Create Rule**
3. Name: `410 Czech Blog Posts`
4. Under **If incoming requests match...**:
   - Field: **URI Path**
   - Operator: **contains**
   - Value: `/post/` (or paste the exact Czech URLs if you have them)
5. Under **Then...**:
   - Action: **Block**
   - Response code: **410**
   - Response body: `Gone — this content no longer exists.`
6. Click **Deploy**

### 3.5 Verify Redirects with curl

Run these commands after DNS propagates to test each redirect:

```bash
# Test homepage
curl -I https://sosimpressora.com/

# Test service page redirect
curl -I https://sosimpressora.com/conserto-de-impressora

# Test Epson anchor redirect
curl -I https://sosimpressora.com/conserto-impressora-epson

# Test booking redirect
curl -I https://sosimpressora.com/book-online

# Test members redirect
curl -I https://sosimpressora.com/members

# Test blog redirect
curl -I https://sosimpressora.com/blog

# Test blog post redirect (URL-encoded)
curl -I "https://sosimpressora.com/post/consertos-e-assist%C3%AAncia-t%C3%A9cnica-em-impressoras"

# Test 410 Gone (Czech post — adjust URL to actual path)
curl -I https://sosimpressora.com/post/czech-post-example

# Expected outputs:
# 301 redirects → HTTP/2 301  location: https://sosimpressora.com/...
# 410 Gone      → HTTP/2 410
```

---

## Task 4 — Deploy Commands

### 4.1 Complete File Structure Before Push

Your repository root should look like this:

```
sosimpressora/
├── index.html
├── servicos.html
├── sobre.html
├── contato.html
├── CNAME
├── .nojekyll
├── robots.txt
├── sitemap.xml
├── css/
│   └── style.css
└── js/
    └── main.js
```

### 4.2 Full Git Sequence

```bash
# From inside the project folder:

# Create special files
echo "sosimpressora.com" > CNAME
touch .nojekyll

cat > robots.txt << 'EOF'
User-agent: *
Allow: /

Sitemap: https://sosimpressora.com/sitemap.xml
EOF

# Stage everything
git add .

# Verify what will be committed
git status

# Commit
git commit -m "chore: add CNAME, nojekyll, robots.txt, sitemap for GitHub Pages deploy"

# Push to GitHub
git push origin main
```

### 4.3 Verify GitHub Pages Build

1. Go to `https://github.com/YOUR_USERNAME/sosimpressora/actions`
2. You will see a workflow called **pages build and deployment**
3. Wait for the green checkmark (usually under 2 minutes)
4. If it fails, click the workflow run to see the error log

### 4.4 Test at github.io URL Before Switching DNS

```bash
# Test the GitHub Pages URL directly (before DNS switch)
curl -I https://YOUR_USERNAME.github.io/sosimpressora/

# Open in browser
open https://YOUR_USERNAME.github.io/sosimpressora/
```

Confirm:
- [ ] Homepage loads correctly
- [ ] Navigation links work
- [ ] CSS styles applied
- [ ] No broken images
- [ ] Contact page shows WhatsApp number +55 11 96576-0126

---

## Task 5 — DNS Switch: Wix → Cloudflare

### 5.1 Pre-Migration: Lower TTL

Do this at least 1 hour before the migration:

1. Log in to your domain registrar (the company where you registered `sosimpressora.com`)
2. Find DNS settings for `sosimpressora.com`
3. Change TTL on all records (A, CNAME, MX) to **300 seconds (5 minutes)**
4. Save and wait 1 hour for the old TTL to expire from caches

This ensures the DNS switch will propagate globally in ~5 minutes instead of hours.

### 5.2 Note Current Wix Nameservers (Rollback Reference)

Before changing anything, write down the current nameservers. They will look something like:

```
ns1.wixdns.net
ns2.wixdns.net
```

Keep these noted. If anything goes wrong, you can revert to these to restore Wix instantly.

### 5.3 Get Your Cloudflare Nameservers

1. In Cloudflare dashboard → select `sosimpressora.com`
2. Go to **DNS** → scroll to bottom
3. Note the two Cloudflare nameservers assigned to your account. They look like:

```
aiden.ns.cloudflare.com
priya.ns.cloudflare.com
```

(The actual names are unique to your Cloudflare account.)

### 5.4 Change Nameservers at Your Registrar

1. Log in to your domain registrar
2. Find **Nameservers** or **DNS Servers** settings for `sosimpressora.com`
3. Remove the Wix nameservers
4. Add the two Cloudflare nameservers noted in step 5.3
5. Save changes

**Common registrars — where to find nameserver settings:**
- **GoDaddy:** My Products → Manage Domain → DNS → Nameservers
- **Namecheap:** Domain List → Manage → Nameservers
- **Registro.br:** Meus Domínios → Configurar DNS → Servidores DNS
- **HostGator BR:** Painel → Domínios → Gerenciar DNS

### 5.5 Monitor DNS Propagation

Use these tools to check propagation progress:

```bash
# Check from command line (tests your local resolver)
nslookup sosimpressora.com
dig sosimpressora.com A

# Check what nameservers are active
dig sosimpressora.com NS
```

Online tool: `https://dnschecker.org/#A/sosimpressora.com`

Check every 5 minutes. Full global propagation typically takes 5–30 minutes with TTL=300.

### 5.6 After DNS Propagates — Enable Cloudflare Proxy

Once `dig sosimpressora.com A` returns the GitHub Pages IPs (185.199.108–111.153):

1. Go to Cloudflare dashboard → **DNS**
2. Click the grey cloud icon next to all A records → it turns orange
3. Click the grey cloud icon next to the www CNAME → orange
4. This enables Cloudflare CDN, DDoS protection, and performance features

### 5.7 After Proxy is ON — Enable HTTPS Enforcement

1. In Cloudflare: **SSL/TLS** → confirm mode is **Full**
2. **SSL/TLS** → **Edge Certificates** → enable **Always Use HTTPS** toggle
3. In GitHub Pages settings → check **Enforce HTTPS**

### 5.8 Verify Full Site is Live

```bash
# Final verification — all should return HTTP/2 200
curl -I https://sosimpressora.com/
curl -I https://sosimpressora.com/servicos.html
curl -I https://sosimpressora.com/sobre.html
curl -I https://sosimpressora.com/contato.html

# www should redirect to apex
curl -I https://www.sosimpressora.com/

# Check SSL certificate
curl -vI https://sosimpressora.com/ 2>&1 | grep "SSL certificate"
```

Expected results:
- All pages return **200 OK**
- `www.sosimpressora.com` returns **301** to `https://sosimpressora.com/`
- SSL certificate issued for `sosimpressora.com` (not `*.github.io`)

---

## Rollback Plan

If anything goes wrong after the DNS switch:

### Immediate Rollback (< 5 minutes)

1. Go to your domain registrar
2. Change nameservers back to the original Wix nameservers:
   ```
   ns1.wixdns.net
   ns2.wixdns.net
   ```
3. Save — propagation will complete in ~5 minutes (because TTL is still 300s)
4. Your Wix site will be back online

### Cloudflare Partial Rollback (keep Cloudflare, fix DNS records)

If Cloudflare is fine but GitHub Pages has an issue:

1. In Cloudflare DNS, temporarily change A records to point to Wix's IP
2. Or add a Page Rule to redirect all traffic to `yoursite.wixsite.com/sosimpressora` while you investigate

### When NOT to Roll Back

- SSL certificate pending (can take up to 24h) — wait, do not roll back
- `dnschecker.org` shows mixed results — wait, propagation is still in progress
- Only roll back if site is completely unreachable after 2+ hours

---

## Full Migration Timeline

| Time | Action |
|------|--------|
| T-60 min | Lower TTL to 300s on all DNS records at registrar |
| T-0 | Change nameservers to Cloudflare |
| T+5 min | Check dnschecker.org — first nodes should flip |
| T+30 min | Most global nodes should show new DNS |
| T+30 min | GitHub Pages SSL certificate should be issuing |
| T+60 min | Enable Cloudflare proxy (orange cloud) |
| T+60 min | Enable Always Use HTTPS in Cloudflare |
| T+60 min | Run full curl verification suite |
| T+90 min | Submit updated sitemap.xml to Google Search Console |
| T+24h | Confirm no 404 errors in Google Search Console |

---

## Google Search Console — Post-Migration Steps

1. Go to `search.google.com/search-console`
2. Add `sosimpressora.com` as a property (verify via Cloudflare DNS TXT record)
3. Submit sitemap: `https://sosimpressora.com/sitemap.xml`
4. Monitor **Coverage** report for any new 404 errors
5. Use **URL Inspection** to check redirect chains are clean (max 1 hop)

---

## Summary of Key Values

| Item | Value |
|------|-------|
| Domain | sosimpressora.com |
| GitHub Pages IPs | 185.199.108–111.153 |
| CNAME target | `YOUR_USERNAME.github.io` |
| Cloudflare SSL mode | Full (not Full Strict) |
| Pre-migration TTL | 300 seconds |
| WhatsApp contact | +55 11 96576-0126 |
| CNAME file content | `sosimpressora.com` |

---

*Generated by Igor Integrador — DevOps, DNS & Deploy Engineer*
*SOS Impressora Migration Project — 2026-03-25*
