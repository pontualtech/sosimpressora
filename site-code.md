# SOS Impressora — Site Estático Completo
**Gerado em:** 2026-03-25
**Stack:** HTML5 + CSS3 + Vanilla JS — 100% estático, pronto para GitHub Pages
**Target:** PageSpeed 90+ mobile

---

## Estrutura de arquivos

```
/
├── index.html          — Homepage
├── servicos.html       — Página de Serviços
├── sobre.html          — Página Sobre
├── contato.html        — Página de Contato
├── css/
│   └── style.css       — Stylesheet principal (~700 linhas)
└── js/
    └── main.js         — FAQ accordion, mobile nav, formulário, contadores
```

Todos os arquivos foram salvos individualmente nas pastas correspondentes ao lado deste arquivo.

---

## css/style.css

Ver arquivo: `css/style.css`

Design tokens como CSS custom properties, mobile-first, bento grid, animações puras CSS.
Inclui: header fixo, hero, how-it-works, services, social proof, FAQ accordion, CTA,
footer, floating WhatsApp button, página de serviços detalhada, sobre, contato/formulário.

---

## js/main.js

Ver arquivo: `js/main.js`

Módulos:
- `initMobileNav()` — hamburger menu com acessibilidade ARIA
- `initHeaderScroll()` — sticky header com blur ao scroll
- `initActiveNav()` — marca link ativo por pathname
- `initFAQ()` — accordion com max-height transition, fecha outros ao abrir
- `initContactForm()` — monta mensagem WhatsApp e abre wa.me em nova aba
- `initPhoneMask()` — máscara (XX) XXXXX-XXXX
- `initScrollAnimations()` — Intersection Observer para data-animate
- `initSmoothScroll()` — anchor links suaves
- `initLazyLoad()` — polyfill lazy load para browsers antigos
- `initCounters()` — counter animation com ease-out cubic

---

## index.html

Ver arquivo: `index.html`

Seções:
1. Header fixo com nav + mobile hamburger
2. Hero com gradiente dark + cards bento + trust badges
3. Como Funciona (3 steps)
4. Serviços (preview 4 cards)
5. Social Proof com stats + brands
6. Testimonials (3 cards)
7. FAQ (6 perguntas com accordion)
8. CTA final
9. Footer com 4 colunas
10. Floating WhatsApp button (pulsing)

JSON-LD: LocalBusiness + FAQPage

---

## servicos.html

Ver arquivo: `servicos.html`

Seções:
1. Page Hero com breadcrumb
2. 4 service detail cards (Conserto Geral, Epson, Preventiva, Domicílio)
3. Como funciona (process steps)
4. 6 diferenciais
5. CTA
6. Footer + floating WhatsApp

JSON-LD: LocalBusiness com hasOfferCatalog

---

## sobre.html

Ver arquivo: `sobre.html`

Seções:
1. Page Hero com breadcrumb
2. História da empresa + stats visual grid
3. 6 diferenciais
4. Áreas de atendimento (20 cidades)
5. CTA
6. Footer + floating WhatsApp

---

## contato.html

Ver arquivo: `contato.html`

Seções:
1. Page Hero com breadcrumb
2. Contact grid: info card (dark) + formulário
   - Campos: nome*, telefone*, email, marca/modelo*, tipo serviço (select), problema*
   - Submit: monta mensagem WhatsApp formatada + abre wa.me + exibe success message
3. FAQ de contato (4 perguntas)
4. CTA
5. Footer + floating WhatsApp

---

## Build Notes

### Performance (PageSpeed 90+ mobile)

1. **Critical CSS inline** — cada página tem ~500 bytes de CSS crítico no `<head>` para evitar FOUC
2. **Font loading** — `font-display: swap` via Google Fonts + `<link rel="preconnect">` duplo (googleapis + gstatic)
3. **JS defer** — `<script src="js/main.js" defer>` — zero render-blocking
4. **No framework overhead** — HTML/CSS/JS puro, sem React, Vue, Bootstrap, jQuery
5. **CSS custom properties** — sem processamento em build time, native tokens
6. **Smooth scroll** — CSS `scroll-behavior: smooth` + JS fallback para anchor links
7. **Lazy loading** — `loading="lazy"` nativo + IO polyfill para imagens

### Acessibilidade (WCAG AA)

- Todos os SVGs têm `aria-hidden="true"` (decorativos) ou `aria-label` (funcionais)
- Botão hamburger com `aria-expanded` e `aria-controls`
- FAQ accordion com `aria-expanded` nos triggers e `role="region"` nos painéis
- `role="list"` em todas as `<ul>` de navegação
- `role="alert"` + `aria-live="polite"` no success message do formulário
- `:focus-visible` com outline 3px electric blue em todos os elementos interativos
- `.sr-only` para títulos de seções implícitos
- Breadcrumb com `aria-label="Trilha de navegação"` e `aria-current="page"`
- Contraste mínimo 4.5:1 em todos os textos (WCAG AA)

### SEO

- Canonical URL em todas as páginas
- Open Graph completo (type, url, title, description, image, locale, site_name)
- Twitter Card `summary_large_image`
- `robots: index, follow`
- JSON-LD LocalBusiness na homepage + FAQPage
- JSON-LD LocalBusiness com hasOfferCatalog na página de serviços
- `alt` text descritivos em todas as imagens
- Hierarquia H1 > H2 > H3 correta em todas as páginas
- URLs canônicas apontando para domínio final `sosimpressora.com.br`

### Deploy GitHub Pages

1. Criar repositório público no GitHub
2. Fazer upload dos arquivos (estrutura acima)
3. Settings → Pages → Source: `main` branch, `/ (root)`
4. Domínio customizado: adicionar CNAME `sosimpressora.com.br`
5. Aguardar propagação DNS (24–48h)

### Customizações pós-deploy recomendadas

- Substituir placeholder `og:image` por screenshots reais do site
- Adicionar Google Analytics 4 (snippet no `<head>` de todas as páginas)
- Adicionar Google Search Console e enviar sitemap
- Criar `sitemap.xml` com as 4 URLs
- Criar `robots.txt` com `Sitemap:` declarado
- Adicionar favicon (`.ico` + PNG 192/512 para PWA)
- Substituir fotos placeholder por imagens WebP reais do negócio
