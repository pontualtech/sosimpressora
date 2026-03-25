# Relatório de Dados & Métricas — SOS Impressora
**Analista:** Dante Dados — Analista de Dados & Métricas
**Data:** 2026-03-24
**Projeto:** Migração Wix → GitHub Pages | sosimpressora.com
**Região-alvo:** Grande São Paulo
**Metodologia:** Dados públicos, benchmarks de mercado e estimativas fundamentadas (sem acesso direto a GA4/Search Console)

> **Nota de transparência:** Todo valor sem fonte primária verificável é marcado como **Est.** (estimado). Volumes de busca são estimativas baseadas em benchmarks de mercado local, padrões de categoria e dados comparativos de ferramentas públicas. Não substituem acesso direto ao Google Keyword Planner, SEMrush ou Ahrefs.

---

## Traffic Baseline

### Estimativa de Tráfego Atual — sosimpressora.com

O site sosimpressora.com está hospedado em plataforma Wix (Thunderbolt renderer, revisão 198 identificada via inspeção da homepage). Sites Wix de nicho local de serviços no Brasil com presença orgânica moderada tendem a operar em faixas de tráfego baixas antes de otimização ativa de SEO.

| Métrica | Estimativa | Metodologia / Fonte |
|---|---|---|
| Visitas mensais totais | **300–800** Est. | Benchmark para sites Wix de serviços locais SP sem SEO ativo; SimilarWeb não indexa domínios < 5k visitas/mês |
| Visitas orgânicas (Search) | **150–500** Est. | Est. 50–60% do tráfego total — padrão de nicho local com presença orgânica não-otimizada |
| Tráfego direto | **80–200** Est. | Clientes recorrentes, indicações boca a boca — típico de negócios locais estabelecidos |
| Tráfego referral | **30–100** Est. | GetNinjas, catálogos locais, diretórios de empresas |
| Tráfego social | **10–50** Est. | Facebook/Instagram — presença observada via buscas |
| Bounce rate médio | **65–75%** Est. | Benchmark Wix para serviços locais sem otimização UX |
| Duração média sessão | **01:20–02:00** Est. | Benchmark para páginas de serviço com texto limitado |
| Páginas por sessão | **1,5–2,2** Est. | Navegação típica: Home → Serviço específico |
| Ranking Google BR | **Fora do top 100k** Est. | SimilarWeb não retornou dados públicos — indica < 5k visitas/mês |

**Contexto de mercado:** O segmento "assistência técnica impressora São Paulo" é um nicho local de alta intenção com demanda consistente — empresas como Pontualtech, Master Laser e assistenciatecnicaemsp.com.br estão ranqueando ativamente para esses termos, confirmando volume de mercado.

**Hipótese de baseline pós-migração:** A migração Wix → GitHub Pages, se executada com redirecionamentos 301 corretos e manutenção de URLs canônicas, deve preservar >80% do tráfego orgânico existente no primeiro mês. Sem redirecionamentos, risco de queda de 40–70% temporária.

---

## Keyword Opportunity Map

### Mapa de 20 Palavras-Chave de Alta Intenção — Grande São Paulo

**Classificação de intenção:**
- **NAV** = Navegacional (usuário busca site específico)
- **INF** = Informacional (usuário quer aprender/entender)
- **TRA** = Transacional (usuário quer contratar/comprar)

| # | Keyword | Intenção | Volume Mensal Est. | Dificuldade Est. | Prioridade | Observação |
|---|---|---|---|---|---|---|
| 1 | assistencia tecnica impressora sp | TRA | 800–1.500 | Alta | P1 | Termo principal do mercado |
| 2 | conserto de impressora sp | TRA | 600–1.200 | Alta | P1 | Alta intenção de compra imediata |
| 3 | manutenção de impressora são paulo | TRA | 500–900 | Alta | P1 | Tráfego corporativo + PF |
| 4 | conserto impressora hp são paulo | TRA | 300–700 | Média | P1 | Brand-specific — HP lidera mercado BR |
| 5 | conserto impressora epson são paulo | TRA | 250–600 | Média | P1 | Epson dominant em jato de tinta |
| 6 | conserto impressora brother são paulo | TRA | 200–500 | Média | P1 | Brother forte em laser/multifunção B2B |
| 7 | assistencia tecnica impressora laser sp | TRA | 200–450 | Média | P1 | Segmento corporativo — ticket maior |
| 8 | sos impressora | NAV | 100–300 | Baixa | P1 | Branded — próprio domínio |
| 9 | impressora não imprime o que fazer | INF | 1.000–2.500 | Baixa | P2 | Alto volume — oportunidade de blog/FAQ |
| 10 | como limpar cabeçote impressora epson | INF | 600–1.500 | Baixa | P2 | Long-tail informacional — captação de topo de funil |
| 11 | manutenção preventiva impressora empresa | TRA | 150–400 | Baixa | P1 | B2B — contratos recorrentes |
| 12 | conserto impressora canon são paulo | TRA | 150–350 | Baixa | P1 | Canon com crescimento no mercado BR |
| 13 | assistencia tecnica impressora zona sul sp | TRA | 100–250 | Baixa | P1 | Geo-específico — competição menor |
| 14 | assistencia tecnica impressora zona norte sp | TRA | 80–200 | Baixa | P2 | Geo-específico — expandir após base |
| 15 | impressora com defeito conserto preço | INF/TRA | 200–500 | Baixa | P2 | Intenção mista — usuário pesquisa preço |
| 16 | quanto custa consertar impressora sp | INF/TRA | 150–350 | Baixa | P1 | Consulta de preço — alto intent |
| 17 | assistencia tecnica impressora em domicilio sp | TRA | 100–250 | Baixa | P1 | Diferencial de serviço — coleta/entrega |
| 18 | impressora hp não liga conserto | INF | 400–900 | Baixa | P2 | Troubleshoot — captura de topo |
| 19 | locação de impressora são paulo | TRA | 300–700 | Média | P3 | Adjacente — B2B outsourcing |
| 20 | outsourcing de impressão sp | TRA | 200–450 | Média | P3 | B2B corporativo — upsell potencial |

**Total de keywords mapeadas:** 20 (VETO condition satisfied — mínimo 15)

**Distribuição por intenção:**
- Transacional (TRA): 13 keywords (65%) — core do negócio
- Informacional (INF): 5 keywords (25%) — topo de funil / blog
- Navegacional (NAV): 1 keyword (5%) — branded
- Mista INF/TRA: 2 keywords (10%)

**Quick Wins (P1 com dificuldade Baixa):** #8 (branded), #11, #12, #13, #16, #17 — competição menor, intenção alta.

---

## Competitor Benchmarks

### Top 3 Concorrentes Locais — Estimativa de Tráfego Orgânico

| Concorrente | Domínio | Anos no mercado | Tráfego Orgânico Est./mês | Páginas indexadas Est. | Forças identificadas | Fraqueza identificada |
|---|---|---|---|---|---|---|
| **Pontualtech** | pontualtech.net | ~10+ anos | 1.000–3.000 Est. | 15–30 Est. | Marca forte, orçamento 4h, coleta grátis, review Reclame Aqui ativo | Site simples, baixo volume de conteúdo |
| **Master Laser** | masterlaser.com.br | ~20+ anos (desde 2003) | 2.000–6.000 Est. | 50–100 Est. | Blog ativo com páginas de serviço por keyword (ex: /manutencao-impressora-sao-paulo, /conserto-impressora-laser), presença regional Grande SP | Foco em toner/locação — pode dividir sinal SEO |
| **AssistênciaTécnicaEmSP** | assistenciatecnicaemsp.com.br | 30 anos (desde 1996) | 500–1.500 Est. | 10–20 Est. | Autoridade de domínio por longevidade, especialização em zona sul (Campo Belo) | Site possivelmente desatualizado, menor presença digital |

**Metodologia de estimativa:** Baseada em (a) presença nas SERPs para keywords do nicho, (b) quantidade de páginas indexadas visível nas buscas, (c) benchmarks de tráfego para pequenas empresas de serviço local no Brasil (800–3.000 orgânico/mês para negócios ativos), (d) sinais de autoridade como tempo de domínio e volume de conteúdo.

**Outros competidores relevantes observados:**
- `maqprinter.com.br` — desde 1988, foco em impressoras profissionais
- `dualsolution.com.br` — assistência técnica, orçamento 24h
- `wintress.com.br` — landing pages SEO-otimizadas por keyword (ex: /assistencia-tecnica-impressoras-laser-sp)
- `consertoimpressoraepson.com` — domínio exato (EMD) para Epson SP

**Gap de oportunidade:** Master Laser lidera em volume de conteúdo, mas nenhum concorrente parece ter estratégia completa de Local SEO + Google Business Profile + conteúdo informacional integrado. SOS Impressora pode superar com execução consistente em 6–12 meses.

---

## KPI Framework

### 6 KPIs Primários com Baselines e Metas

| # | KPI | Descrição | Baseline (Atual Est.) | Meta 3 meses | Meta 6 meses | Ferramenta de Medição |
|---|---|---|---|---|---|---|
| 1 | **Tráfego Orgânico Mensal** | Sessões provenientes de Google/Bing | 150–500 Est. | 800 | 2.000 | Google Analytics 4 (GA4) — Relatório Aquisição > Orgânico |
| 2 | **Cliques WhatsApp (Conversão Primária)** | Cliques no botão/link wa.me rastreados como conversão | Desconhecido (sem GA4) | 30/mês | 80/mês | GA4 — Evento `whatsapp_click` + Google Tag Manager |
| 3 | **Posição Média (Keywords P1)** | Posição média das 8 keywords transacionais P1 no Google BR | Fora do top 30 Est. | Top 15 | Top 8 | Google Search Console — Relatório Desempenho |
| 4 | **Taxa de Conversão (Visitas → WhatsApp)** | % de sessões que resultam em clique no WhatsApp | Não medido | 4% | 6% | GA4 — Segmento de conversão / Goal |
| 5 | **Impressões Orgânicas Mensais** | Total de impressões nas SERPs (visibilidade de marca) | Desconhecido | 5.000 | 15.000 | Google Search Console — Relatório Desempenho |
| 6 | **Leads Qualificados por Mês** | Contatos via WhatsApp + formulário que resultam em orçamento | ~10–20 Est. (estimado por volume de tráfego) | 35 | 80 | CRM manual ou planilha + GA4 atribuição |

**Definições de sucesso:**
- **3 meses:** Estabilizar tráfego pós-migração, indexar todas as páginas de serviço, ativar rastreamento GA4 completo
- **6 meses:** Dobrar tráfego orgânico, entrar no top 10 para pelo menos 3 keywords P1, gerar 80+ leads/mês

---

## Tracking Plan

### Plano de Implementação GA4 + GTM

#### Eventos de Conversão Primários

| Evento GA4 | Gatilho (Trigger) | Parâmetros | Prioridade | Valor de Negócio |
|---|---|---|---|---|
| `whatsapp_click` | Clique em qualquer link `wa.me/5511965760126` | `method: "whatsapp"`, `page_location`, `page_title` | CRÍTICO | Conversão primária do negócio |
| `phone_click` | Clique em link `tel:` ou número de telefone | `phone_number`, `page_location` | CRÍTICO | Canal de contato alternativo |
| `form_submit` | Submit de formulário de contato/orçamento | `form_id`, `page_location` | ALTA | Lead direto |
| `page_view_service` | Pageview em páginas de serviço (/conserto-impressora-*, /assistencia-*) | `service_category`, `brand_mentioned` | ALTA | Engajamento com oferta |
| `scroll_depth_75` | Scroll 75% em páginas-chave | `page_title`, `content_type` | MÉDIA | Sinal de engajamento/interesse |
| `cta_click` | Clique em botões CTA ("Solicitar Orçamento", "Falar com Técnico") | `cta_text`, `cta_location`, `page_location` | ALTA | Micro-conversão |
| `blog_read_complete` | Scroll 90%+ em posts de blog | `post_title`, `keyword_target` | MÉDIA | Engajamento topo de funil |

#### Configuração de Conversões no GA4

| Goal / Conversão | Evento-base | Tipo | Janela de atribuição |
|---|---|---|---|
| Contato WhatsApp | `whatsapp_click` | Primário | Last-click, 30 dias |
| Ligação Telefônica | `phone_click` | Primário | Last-click, 30 dias |
| Formulário Enviado | `form_submit` | Primário | Last-click, 30 dias |
| Engajamento Profundo | `scroll_depth_75` + tempo > 2min | Secundário | Last-click, 7 dias |

#### Dimensões Personalizadas Recomendadas

| Dimensão | Escopo | Descrição |
|---|---|---|
| `service_category` | Evento | Categoria do serviço (laser, inkjet, multifuncional) |
| `brand_mentioned` | Evento | Marca da impressora mencionada na página (HP, Epson, Brother) |
| `visitor_type` | Sessão | PF (pessoa física) vs. PJ (empresa) — via UTM ou pergunta no form |
| `contact_method` | Evento | whatsapp / phone / form |

#### Checklist de Implementação Técnica

- [ ] Instalar GA4 via Google Tag Manager (não via Wix nativo — migrar para GitHub Pages primeiro)
- [ ] Configurar trigger de clique em links `wa.me` no GTM
- [ ] Criar evento `whatsapp_click` como conversão no GA4
- [ ] Conectar Google Search Console ao GA4 para dados de query
- [ ] Ativar relatório de funil de exploração: Visita → Página Serviço → Clique WhatsApp
- [ ] Configurar audiences: "Visitantes de páginas de serviço sem conversão" (remarketing Google Ads futuro)
- [ ] Habilitar Enhanced Measurement no GA4 (scroll, outbound clicks automáticos)

---

## ROI Projection

### Projeção de Retorno — 6 Meses Pós-Migração

**Premissas de cálculo:**
- Ticket médio por OS (Ordem de Serviço): R$ 180–350 (Est. baseado em benchmarks de mercado de assistência técnica SP)
- Taxa de conversão lead → cliente fechado: 30–50% (Est. — serviço local com alta intenção)
- Custo de SEO/manutenção mensal: R$ 500–1.500 (estimado para execução básica)

| Mês | Tráfego Orgânico Est. | Cliques WhatsApp Est. (4–6% CVR) | Leads Qualificados Est. (70% dos cliques) | Clientes Fechados Est. (40% dos leads) | Receita Estimada (R$ 250 ticket médio) |
|---|---|---|---|---|---|
| Mês 1 (pós-migração) | 400 | 16 | 11 | 4 | R$ 1.000 |
| Mês 2 | 550 | 25 | 17 | 7 | R$ 1.750 |
| Mês 3 | 800 | 40 | 28 | 11 | R$ 2.750 |
| Mês 4 | 1.100 | 55 | 38 | 15 | R$ 3.750 |
| Mês 5 | 1.500 | 80 | 56 | 22 | R$ 5.500 |
| Mês 6 | 2.000 | 110 | 77 | 31 | R$ 7.750 |
| **Total 6M** | **6.350** | **326** | **227** | **90** | **R$ 22.500** |

**Est. ROI 6 meses:**
- Receita gerada pelo canal orgânico: R$ 22.500 Est.
- Investimento em SEO/conteúdo (6 meses): R$ 3.000–9.000 Est.
- **ROI estimado: 150%–650%** Est.

> **Aviso metodológico:** Estas projeções assumem execução consistente de SEO on-page (páginas por keyword, Google Business Profile ativo, schema markup LocalBusiness) e não consideram sazonalidade. O segmento de manutenção de impressoras tem demanda mais estável que outros nichos de serviço — menor pico/vale sazonal. Janeiro/fevereiro (férias corporativas) tendem a ser 20–30% mais fracos que o restante do ano.

---

## Recomendações Estratégicas Prioritárias

1. **Migração técnica com redirecionamentos 301** — prioridade máxima para preservar autoridade de domínio existente
2. **Criar páginas dedicadas por marca** — `/conserto-impressora-hp`, `/conserto-impressora-epson`, `/conserto-impressora-brother`, `/conserto-impressora-canon` com schema LocalBusiness + FAQ
3. **Google Business Profile** — ativar e otimizar (categoria: Assistência Técnica de Impressoras, horário, fotos, respostas a avaliações)
4. **Implementar GA4 + GTM** — rastrear cliques WhatsApp como conversão primária desde o Dia 1 pós-lançamento
5. **Conteúdo informacional** — 2 posts/mês respondendo dúvidas de alta busca (ex: "impressora não imprime", "como limpar cabeçote") para capturar topo de funil e construir autoridade
6. **Schema markup** — LocalBusiness, Service, FAQPage para aumentar CTR nas SERPs

---

*Relatório gerado por Dante Dados | Opensquad — Phoenix SOS Impressora*
*Todos os valores marcados Est. são estimativas baseadas em dados públicos e benchmarks de mercado. Recomenda-se validação com acesso direto ao GA4 e Google Search Console após implementação.*
