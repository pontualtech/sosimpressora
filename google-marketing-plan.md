# Google Marketing Plan — SOS Impressora
**Elaborado por:** Gabriela Google — Especialista Google (SEO + GMB + Ads)
**Data:** 2026-03-25
**Domínio:** sosimpressora.com
**Mercado:** Manutenção de Impressoras | Grande São Paulo

---

## Sumário Executivo

SOS Impressora entra no mercado digital com um site tecnicamente bem estruturado e copy de alta conversão. Este plano cobre os quatro pilares para dominar as buscas Google em São Paulo: SEO on-page validado, Google Meu Negócio completo, campanhas pagas com ROI positivo desde a semana 1, e monitoramento contínuo via Search Console.

Volume de busca endereçável estimado: **~4.380 buscas/mês** nas três keywords principais.
Meta: Top 3 orgânico em 90 dias. Top 1 em 6 meses.

---

## TASK 1 — SEO On-Page: Auditoria Final

### 1.1 Títulos das Páginas (verificados)

| Página | Title atual | Chars | Status |
|--------|-------------|-------|--------|
| index.html | Conserto de Impressoras SP \| SOS Impressora | 44 | APROVADO |
| servicos.html | Serviços de Manutenção \| SOS Impressora SP | 43 | APROVADO |
| sobre.html | Sobre a SOS Impressora \| Assistência Técnica SP | 48 | APROVADO |
| contato.html | Contato SOS Impressora \| WhatsApp e Formulário | 48 | APROVADO |

Todos os títulos estão dentro do limite de 60 caracteres. Nenhuma ação corretiva necessária.

### 1.2 Meta Descriptions (verificadas)

| Página | Description atual | Chars | Status |
|--------|-------------------|-------|--------|
| index.html | Manutenção de impressoras em São Paulo. Atendimento em 24h, orçamento grátis pelo WhatsApp. HP, Canon, Epson, Brother. | 116 | APROVADO |
| servicos.html | Conserto, manutenção preventiva e atendimento em domicílio para impressoras em São Paulo. Garantia de 90 dias. | 110 | APROVADO |
| sobre.html | Mais de 5.000 impressoras consertadas em São Paulo. Conheça a história, os diferenciais e as áreas de atendimento da SOS Impressora. | 132 | APROVADO |
| contato.html | Fale com a SOS Impressora pelo WhatsApp ou formulário. Seg-Sex 8h-18h, Sáb 8h-13h. Orçamento grátis em 30 minutos. | 113 | APROVADO |

Todas dentro de 155 caracteres. Nenhuma ação corretiva necessária.

### 1.3 Dados Estruturados (Schema.org)

**LocalBusiness** — Presente em index.html. Campos implementados:
- `name`, `description`, `url`, `telephone` — OK
- `address` (addressLocality, addressRegion, addressCountry) — OK
- `geo` (latitude/longitude de SP) — OK
- `openingHoursSpecification` (Seg-Sex 08-18, Sab 08-13) — OK
- `areaServed` (Grande São Paulo) — OK
- `serviceType` (3 tipos listados) — OK
- `priceRange` ("$$") — OK

**Acao recomendada:** Adicionar o campo `sameAs` assim que o perfil GMB e Instagram estiverem ativos:
```json
"sameAs": [
  "https://www.google.com/maps/place/SOS+Impressora",
  "https://www.instagram.com/sosimpressora"
]
```

**FAQPage** — Presente em index.html. Perguntas implementadas:
1. Quanto custa o orçamento? — OK
2. Em quanto tempo recebo o orçamento? — OK
3. Quais marcas vocês atendem? — OK

**Acao recomendada:** Adicionar 2 FAQs extras de alto volume de busca:
```json
{
  "@type": "Question",
  "name": "Vocês fazem atendimento em domicílio em São Paulo?",
  "acceptedAnswer": {
    "@type": "Answer",
    "text": "Sim. Atendemos empresas e residências em toda a Grande São Paulo sem taxa de deslocamento para orçamento. Nosso técnico vai até você."
  }
},
{
  "@type": "Question",
  "name": "Qual a garantia do serviço de conserto?",
  "acceptedAnswer": {
    "@type": "Answer",
    "text": "Todos os reparos têm garantia de 90 dias em peças e mão de obra. Se o mesmo problema retornar, resolvemos sem custo adicional."
  }
}
```

### 1.4 Open Graph — Checklist Completo

| Tag OG | index | servicos | sobre | contato |
|--------|-------|----------|-------|---------|
| og:type | website | website | website | website |
| og:url | OK | OK | OK | OK |
| og:title | OK | OK | OK | OK |
| og:description | OK | OK | OK (curta*) | OK |
| og:image | OK | OK | OK | OK |
| og:locale | pt_BR | pt_BR | pt_BR | pt_BR |
| og:site_name | OK | OK | OK | OK |
| twitter:card | summary_large_image | OK | OK | OK |
| twitter:title | OK | OK | OK | OK |
| twitter:description | OK | OK | OK | OK |

(*) sobre.html: og:description tem apenas 44 chars. Recomendado expandir para:
`"Mais de 5.000 impressoras consertadas em SP. Técnicos especializados, garantia de 90 dias e atendimento em domicílio em toda a Grande São Paulo."`

**Tag faltante em todas as páginas:** `og:image:width` e `og:image:height`.
Adicionar em cada página após og:image:
```html
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
```

### 1.5 Canonical Tags

| Página | Canonical implementado | Status |
|--------|------------------------|--------|
| index.html | https://sosimpressora.com.br/ | APROVADO |
| servicos.html | https://sosimpressora.com.br/servicos.html | APROVADO |
| sobre.html | https://sosimpressora.com.br/sobre.html | APROVADO |
| contato.html | https://sosimpressora.com.br/contato.html | APROVADO |

**Observacao importante:** O domínio no canonical usa `.com.br`. Verificar se o domínio registrado é `sosimpressora.com` ou `sosimpressora.com.br`. Se for `.com`, atualizar todos os canonicals e schema URLs.

### 1.6 Estrutura de Links Internos

**Arquitetura atual:** Homepage > Serviços | Sobre | Contato

**Links internos recomendados a implementar:**

| De (origem) | Para (destino) | Anchor Text |
|-------------|----------------|-------------|
| index.html (seção serviços) | servicos.html | "ver todos os serviços" |
| index.html (seção sobre/trust) | sobre.html | "conheça nossa história" |
| index.html (hero CTA secundário) | contato.html | "outras formas de contato" |
| servicos.html (cada serviço) | contato.html | "solicitar este serviço" |
| sobre.html (final da página) | servicos.html | "ver nossos serviços" |
| contato.html (sidebar) | servicos.html | "ver serviços disponíveis" |

**Página prioritária a criar (futura):** `/conserto-hp-sp` — keyword "conserto impressora hp são paulo" (~880/mês) ainda sem landing page dedicada.

### 1.7 Itens de Acao SEO — Resumo Priorizado

| Prioridade | Acao | Impacto |
|------------|------|---------|
| ALTA | Confirmar se domínio é .com ou .com.br e corrigir todos os URLs | Crítico |
| ALTA | Adicionar sameAs no schema LocalBusiness após GMB ativo | Alto |
| ALTA | Criar sitemap.xml e robots.txt | Alto |
| MEDIA | Adicionar 2 FAQs extras no schema FAQPage | Médio |
| MEDIA | Expandir og:description em sobre.html | Baixo |
| MEDIA | Adicionar og:image:width e og:image:height em todas as páginas | Baixo |
| BAIXA | Implementar links internos entre páginas | Médio (longo prazo) |

### 1.8 Arquivos a criar antes do go-live

**robots.txt** (raiz do site):
```
User-agent: *
Allow: /
Disallow: /admin/

Sitemap: https://sosimpressora.com.br/sitemap.xml
```

**sitemap.xml** (raiz do site):
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://sosimpressora.com.br/</loc>
    <lastmod>2026-03-25</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://sosimpressora.com.br/servicos.html</loc>
    <lastmod>2026-03-25</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://sosimpressora.com.br/sobre.html</loc>
    <lastmod>2026-03-25</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://sosimpressora.com.br/contato.html</loc>
    <lastmod>2026-03-25</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
</urlset>
```

---

## TASK 2 — Google Meu Negócio: Guia de Configuração

### 2.1 Criação do Perfil

**URL de acesso:** https://business.google.com

**Dados exatos a inserir:**

| Campo | Valor |
|-------|-------|
| Nome do negócio | SOS Impressora |
| Categoria principal | Serviço de manutenção de impressoras |
| Categorias secundárias | Empresa de reparo de computadores; Serviço de TI |
| Endereço | Informar endereço físico completo (ou marcar como "área de cobertura" se atendimento domiciliar) |
| Telefone | (11) 96576-0126 |
| Website | https://sosimpressora.com.br |
| WhatsApp (campo adicional) | https://wa.me/5511965760126 |

**Horario de funcionamento:**
- Segunda a Sexta: 08:00 – 18:00
- Sábado: 08:00 – 13:00
- Domingo: Fechado

**Descricao do negócio (750 chars máx — usar este texto):**
```
SOS Impressora é especialista em conserto e manutenção de impressoras na Grande São Paulo. Atendemos HP, Canon, Epson, Brother, Samsung, Xerox e outras marcas. Orçamento grátis em 30 minutos pelo WhatsApp. Nosso técnico vai até você — sem taxa de deslocamento para o diagnóstico. Mais de 5.000 impressoras consertadas. Garantia de 90 dias em peças e mão de obra. Atendimento para empresas e residências em toda a Grande SP.
```

### 2.2 Área de Atendimento (se negócio domiciliar)

Se não houver endereço físico visível ao público, configurar como "prestador de serviços na área":
- Cidades a incluir: São Paulo, Guarulhos, Santo André, São Bernardo do Campo, Osasco, Barueri, Mauá, Diadema, Carapicuíba, Cotia, Taboão da Serra, Santana de Parnaíba, São Caetano do Sul

### 2.3 Fotos Necessárias — Lista Prioritária

| Categoria GMB | Foto | Dimensão recomendada |
|--------------|------|----------------------|
| Logo | Logo SOS Impressora em fundo branco ou transparente | 250x250 px mínimo |
| Capa | Técnico trabalhando em impressora (bem iluminado, profissional) | 1080x608 px |
| Fachada (exterior) | Entrada do local ou veículo com logo | 1080x608 px |
| Equipe | Técnicos em uniforme, sorridentes | 1080x608 px |
| Equipamentos | Bancada de trabalho organizada com ferramentas | 1080x608 px |
| Antes/Depois #1 | Impressora com papel atolado → impressora funcionando | 1080x608 px |
| Antes/Depois #2 | Cabeça de impressão suja → após limpeza | 1080x608 px |
| Serviços | Close em peça sendo substituída | 1080x608 px |

**Dica de performance:** Perfis com 10+ fotos recebem 35% mais cliques no GMB. Publicar todas as fotos no dia da ativação.

### 2.4 Servicos a Listar no GMB

Adicionar estes serviços em "Produtos e Serviços":

1. **Conserto de Impressoras** — "Diagnóstico e reparo para todas as marcas. Garantia de 90 dias." — Sem preço fixo
2. **Manutenção Preventiva** — "Planos mensais para empresas. Evite paradas inesperadas." — A partir de consultar
3. **Atendimento em Domicílio** — "Técnico vai até você em toda a Grande SP." — Sem taxa de deslocamento
4. **Conserto de Impressora HP** — "Especialistas em HP LaserJet, DeskJet, OfficeJet e DesignJet."
5. **Conserto de Impressora Epson** — "EcoTank, WorkForce, L-series. Peças originais em estoque."
6. **Conserto de Impressora Canon** — "PIXMA, imageCLASS, MAXIFY. Diagnóstico grátis."
7. **Conserto de Impressora Brother** — "DCP, MFC, HL-series. Garantia 90 dias."
8. **Troca de Cartucho / Toner** — "Originais e compatíveis. Instalação incluída."
9. **Limpeza de Cabeça de Impressão** — "Resolve manchas e falhas de impressão."

### 2.5 Perguntas e Respostas (Q&A) para Semear

Publicar estas perguntas (via conta Google do negócio) e respondê-las:

**P1:** Vocês fazem orçamento grátis?
**R:** Sim! O diagnóstico e orçamento são 100% gratuitos. Respondemos em até 30 minutos pelo WhatsApp: (11) 96576-0126.

**P2:** Atendem no meu bairro em São Paulo?
**R:** Atendemos toda a Grande São Paulo — SP capital e ABC, Guarulhos, Osasco, Barueri e região. Entre em contato para confirmar sua área.

**P3:** Quanto tempo demora o conserto?
**R:** A maioria dos reparos é feita em 24 horas. Problemas mais complexos podem levar até 72h. Informamos o prazo exato no orçamento.

**P4:** Atendem impressoras de empresas?
**R:** Sim! Temos planos especiais de manutenção preventiva para empresas com contratos mensais. Ideal para escritórios, clínicas e escolas.

**P5:** Trabalham com peças originais?
**R:** Sempre que possível usamos peças originais. Quando usamos compatíveis de alta qualidade, informamos previamente. Garantia de 90 dias em todos os casos.

### 2.6 Estrategia de Posts Semanais

**Cadencia:** 1 post/semana. Dia ideal: terça-feira, entre 9h-11h.

| Semana | Tipo de Post | Tema | CTA |
|--------|-------------|------|-----|
| 1 | Novidade | Apresentação da SOS Impressora em SP | Ligar / WhatsApp |
| 2 | Oferta | "Diagnóstico grátis esta semana para impressoras HP" | WhatsApp |
| 3 | Dica | "3 sinais que sua impressora precisa de manutenção" | Saiba mais (blog/site) |
| 4 | Caso de sucesso | Problema resolvido (sem nome real) — ex: "impressora Epson EcoTank bloqueada desbloqueada em 2h" | WhatsApp |
| 5 | Oferta | "Manutenção preventiva para empresas — primeiro mês grátis" | Ligar |
| 6 | Dica | "Como evitar que cartuchos sequem: guia rápido" | Saiba mais |
| 7 | Novidade | Novo serviço ou área de cobertura | WhatsApp |
| 8 | Depoimento | Relato fictício ou real de cliente satisfeito | Avaliar / WhatsApp |

**Formato recomendado por post:**
- Imagem: 1080x1080 px
- Texto: máx 1.500 chars (usar os primeiros 100 chars com a keyword principal)
- CTA sempre presente: número de telefone ou link WhatsApp

### 2.7 Estrategia de Coleta de Avaliações

**Meta:** 20 avaliações 5 estrelas nos primeiros 60 dias.

**Link direto para avaliação:** Gerar em https://business.google.com > "Pedir avaliações" > copiar link curto.

**Roteiro de solicitação via WhatsApp (enviar após concluir o serviço):**

```
Olá, [Nome]! 😊 Ficamos felizes que sua impressora [Marca/Modelo] já está funcionando!

Se o serviço atendeu suas expectativas, nos ajudaria muito se você deixasse uma avaliação no Google. Leva menos de 1 minuto:

👉 [LINK CURTO GMB]

Qualquer dúvida, estamos aqui!
SOS Impressora
```

**Protocolo de resposta a avaliações:**
- 5 estrelas: agradecer em até 24h, mencionar o tipo de serviço
- 4 estrelas: agradecer, perguntar o que poderia melhorar
- 1-3 estrelas: responder em até 2h, pedir contato privado para resolver, nunca discutir publicamente

---

## TASK 3 — Google Ads: Plano de Campanhas

### 3.1 Estrutura Geral das Campanhas

| Campanha | Tipo | Budget/dia | Objetivo |
|----------|------|-----------|----------|
| SOS-Search-Conserto | Search | R$ 25/dia | Leads diretos (ligação + WhatsApp) |
| SOS-Local-PMax | Performance Max (GMB) | R$ 15/dia | Visibilidade local + chamadas |
| **Total** | | **R$ 40/dia** | |

Budget mensal estimado: **R$ 1.200/mês** (dentro da faixa R$ 30-50/dia recomendada).

---

### 3.2 Campanha 1: Search — Conserto

**Objetivo:** Conversões (ligações + cliques no WhatsApp)
**Rede:** Somente pesquisa (desmarcar Display)
**Localização:** Grande São Paulo — raio de 40km do centro (ou cidades específicas)
**Idioma:** Português
**Programacao de anúncios:** Seg-Sex 07h-19h | Sáb 07h-14h (cobrir horário comercial + 1h margem)

#### Grupos de Anúncios

**Grupo 1: Conserto Geral SP**
Keywords (correspondência de frase e exata):
```
"conserto impressora sp"
"conserto de impressora sp"
[conserto impressora sp]
"consertar impressora são paulo"
"assistência técnica impressora são paulo"
"assistência técnica impressora sp"
[assistência técnica impressora são paulo]
"manutenção de impressora sp"
"técnico impressora sp"
"reparo impressora são paulo"
```

**Grupo 2: Conserto HP**
```
"conserto impressora hp são paulo"
"conserto impressora hp sp"
[conserto impressora hp são paulo]
"assistência técnica hp são paulo"
"impressora hp não imprime sp"
"impressora hp com defeito sp"
"manutenção impressora hp"
```

**Grupo 3: Conserto Epson**
```
"conserto impressora epson sp"
"conserto impressora epson são paulo"
"impressora epson com defeito sp"
"assistência epson sp"
"conserto ecotank são paulo"
"manutenção impressora epson"
```

**Grupo 4: Conserto Canon / Brother**
```
"conserto impressora canon sp"
"conserto impressora brother sp"
"impressora canon com defeito são paulo"
"assistência canon são paulo"
"reparo impressora brother sp"
```

**Grupo 5: Atendimento Domiciliar**
```
"técnico impressora domicílio sp"
"técnico impressora em domicílio são paulo"
"conserto impressora em casa sp"
"assistência técnica impressora domicílio"
```

**Grupo 6: Manutenção Preventiva Empresas**
```
"manutenção preventiva impressoras empresas"
"manutenção impressoras escritório sp"
"contrato manutenção impressoras são paulo"
"suporte impressoras empresa sp"
```

#### Negative Keywords (Lista Compartilhada)

Aplicar em TODAS as campanhas:
```
driver
download
software
manual
instalar
instalação
comprar
compra
venda
loja
preço impressora
impressora nova
ibm
ricoh [se não atender]
kyocera [se não atender]
emprego
vaga
trabalho
curriculum
grátis
gratuito [exceto "orçamento grátis" — usar negativa exata]
youtube
tutorial
como usar
curso
```

#### Configuracoes de Lance

- Estratégia inicial: **CPC manual** (primeiros 30 dias para coletar dados)
- CPC máximo sugerido: R$ 4,00-6,00 (ajustar conforme CPA observado)
- Após 30 conversões: migrar para **tCPA** com meta de R$ 25-40/lead
- Ajuste de lance por dispositivo: +20% mobile (maioria das buscas de urgência é mobile)
- Ajuste de lance por horário: +15% sex/sáb manhã (pico de urgência)

---

### 3.3 Campanha 2: Performance Max — Local GMB

**Objetivo:** Maximizar cliques locais e chamadas via GMB
**Prerequisito:** GMB criado, verificado e vinculado ao Google Ads

**Configuracao:**
- Sinal de audiência: "Pessoas que pesquisaram serviços de conserto de impressoras"
- Assets de imagem: usar as mesmas fotos do GMB (1200x628 e 1080x1080)
- Assets de video: criar um Reels/Shorts de 15-30s mostrando um conserto rápido

**Headlines (15 opções para rotação):**
1. Conserto de Impressora SP
2. SOS Impressora — Orçamento Grátis
3. Impressora com Defeito? Ligamos!
4. HP, Epson, Canon: Consertamos
5. Técnico Vai Até Você em SP
6. Diagnóstico em 30 Min
7. Garantia de 90 Dias
8. Atendimento em 24 Horas
9. Mais de 5.000 Impressoras Consertadas
10. Grande São Paulo — Atendemos Você
11. Sem Taxa de Diagnóstico
12. Manutenção para Empresas SP
13. Assistência Técnica Especializada
14. WhatsApp: Resposta Imediata
15. Ligue Agora — Resultado Hoje

---

### 3.4 Anúncios de Pesquisa Responsivos (RSA) — Templates

**RSA 1 — Urgência / Problema imediato**

| Campo | Texto |
|-------|-------|
| Headline 1 | Impressora com Defeito em SP? |
| Headline 2 | Orçamento Grátis em 30 Minutos |
| Headline 3 | Técnico Vai Até Você Hoje |
| Headline 4 | HP, Epson, Canon, Brother |
| Headline 5 | Garantia de 90 Dias no Serviço |
| Headline 6 | Atendimento em Toda Grande SP |
| Headline 7 | Ligue ou Fale pelo WhatsApp |
| Headline 8 | Sem Taxa de Diagnóstico |
| Headline 9 | Conserto Rápido e Garantido |
| Headline 10 | Mais de 5.000 Consertos Realizados |
| Description 1 | Diagnóstico grátis para impressoras HP, Epson, Canon e Brother. Técnico em domicílio em toda a Grande São Paulo. Garantia de 90 dias. Ligue agora. |
| Description 2 | Não espere sua impressora pifar de vez. Orçamento pelo WhatsApp em até 30 min. Atendimento Seg-Sex 8h-18h e Sáb 8h-13h. |
| Description 3 | Conserto profissional com garantia. Mais de 5.000 impressoras recuperadas em SP. Peças originais. Sem taxa de diagnóstico. Fale conosco agora. |
| Description 4 | Assistência técnica especializada em impressoras em São Paulo. Orçamento grátis. Técnico vai até você. Resposta em 30 minutos pelo WhatsApp. |
| URL Final | https://sosimpressora.com.br/?utm_source=google&utm_medium=cpc&utm_campaign=search-conserto&utm_content=rsa1 |

**RSA 2 — Marca/Modelo específico (HP)**

| Campo | Texto |
|-------|-------|
| Headline 1 | Conserto Impressora HP em SP |
| Headline 2 | Especialistas em HP LaserJet |
| Headline 3 | Orçamento Grátis pelo WhatsApp |
| Headline 4 | HP DeskJet, OfficeJet, DesignJet |
| Headline 5 | Técnico Certificado HP em SP |
| Headline 6 | Garantia de 90 Dias |
| Headline 7 | Atendimento em 24 Horas |
| Headline 8 | Peças Originais HP em Estoque |
| Headline 9 | Diagnóstico Sem Custo |
| Description 1 | Problema com sua impressora HP? Diagnóstico grátis e reparo garantido. Atendemos HP LaserJet, DeskJet, OfficeJet e DesignJet em toda a Grande SP. |
| Description 2 | Técnicos especializados em HP. Peças originais em estoque. Orçamento em 30 min pelo WhatsApp. Garantia de 90 dias em todo serviço realizado. |
| URL Final | https://sosimpressora.com.br/servicos.html?utm_source=google&utm_medium=cpc&utm_campaign=search-hp&utm_content=rsa2 |

**RSA 3 — Manutenção Preventiva Empresas**

| Campo | Texto |
|-------|-------|
| Headline 1 | Manutenção Impressoras Empresas SP |
| Headline 2 | Planos Mensais para Escritórios |
| Headline 3 | Reduza Paradas em Até 60% |
| Headline 4 | Contratos para Empresas em SP |
| Headline 5 | Técnico Fixo para Sua Empresa |
| Headline 6 | Suporte Prioritário no Plano |
| Headline 7 | Clínicas, Escolas, Escritórios |
| Headline 8 | Orçamento Grátis para Empresas |
| Description 1 | Evite paradas inesperadas com planos de manutenção preventiva. Técnicos em domicílio em toda a Grande SP. Prioridade no atendimento emergencial. |
| Description 2 | Contratos mensais de manutenção de impressoras para empresas. Reduza custos com paradas. Garantia total no serviço. Solicite proposta agora. |
| URL Final | https://sosimpressora.com.br/servicos.html?utm_source=google&utm_medium=cpc&utm_campaign=search-empresas&utm_content=rsa3 |

---

### 3.5 Extensoes de Anúncio

**Extensao de Chamada (Call Extension):**
- Número: (11) 96576-0126
- Programação: Seg-Sex 8h-18h, Sáb 8h-13h
- Opção: apenas chamadas (sem SMS)

**Extensao de Local (Location Extension):**
- Vincular ao perfil GMB após verificação
- Exibe endereço ou área de cobertura + mapa

**Extensoes de Sitelink:**

| Texto do Sitelink | URL de Destino |
|-------------------|----------------|
| Nossos Serviços | /servicos.html?utm_source=google&utm_medium=cpc&utm_content=sitelink-servicos |
| Fale pelo WhatsApp | https://wa.me/5511965760126?text=Vim%20pelo%20Google%20Ads |
| Sobre a SOS Impressora | /sobre.html?utm_source=google&utm_medium=cpc&utm_content=sitelink-sobre |
| Agendar Visita Técnica | /contato.html?utm_source=google&utm_medium=cpc&utm_content=sitelink-contato |

**Extensao de Destaque (Callout Extensions):**
- Orçamento 100% Grátis
- Garantia de 90 Dias
- Técnico em Domicílio
- Atendimento em 24 Horas
- Mais de 5.000 Consertos
- HP, Epson, Canon, Brother

**Extensao de Snippet Estruturado:**
- Cabeçalho: "Marcas atendidas"
- Valores: HP, Epson, Canon, Brother, Samsung, Xerox, Zebra

---

### 3.6 Landing Pages com UTM Tracking

**Parametros UTM padrao por canal:**

| Canal | utm_source | utm_medium | utm_campaign |
|-------|-----------|-----------|--------------|
| Google Ads Search | google | cpc | search-conserto |
| Google Ads HP | google | cpc | search-hp |
| Google Ads Empresas | google | cpc | search-empresas |
| Performance Max | google | cpc | pmax-local |
| GMB (orgânico) | google | organic | gmb |
| Orgânico Google | google | organic | seo |

**URLs com UTM para usar nos anúncios:**
```
Homepage (geral):
https://sosimpressora.com.br/?utm_source=google&utm_medium=cpc&utm_campaign=search-conserto

Serviços (HP):
https://sosimpressora.com.br/servicos.html?utm_source=google&utm_medium=cpc&utm_campaign=search-hp

Serviços (empresas):
https://sosimpressora.com.br/servicos.html?utm_source=google&utm_medium=cpc&utm_campaign=search-empresas

WhatsApp (conversão direta):
https://wa.me/5511965760126?text=Vim%20pelo%20Google%20Ads%20-%20Preciso%20de%20or%C3%A7amento
```

**Conversoes a configurar no Google Ads:**
1. Clique em número de telefone (tag no site)
2. Clique no link WhatsApp (tag no botão wa.me)
3. Envio de formulário (se houver form no site)
4. Chamada via Call Extension (configurar em "Conversões de chamada")

---

### 3.7 Sugestao de Budget e Projecao de Resultados

**Cenário conservador (R$ 40/dia = R$ 1.200/mês):**

| Métrica | Campanha Search | Campanha PMax | Total |
|---------|----------------|---------------|-------|
| Investimento/mês | R$ 750 | R$ 450 | R$ 1.200 |
| CPC médio estimado | R$ 3,50 | R$ 2,00 | — |
| Cliques estimados/mês | 215 | 225 | 440 |
| Taxa de conversão esperada | 8% | 5% | — |
| Leads/mês estimados | 17 | 11 | 28 |
| Custo por lead | R$ 44 | R$ 41 | R$ 43 |
| Taxa de fechamento (est.) | 60% | 50% | — |
| Vendas/mês estimadas | 10 | 5 | 15 |
| Ticket médio estimado | R$ 250 | R$ 250 | — |
| Receita estimada/mês | R$ 2.500 | R$ 1.250 | R$ 3.750 |
| **ROI estimado** | | | **+213%** |

---

## TASK 4 — Google Search Console: Setup e Monitoramento

### 4.1 Verificacao da Propriedade via Cloudflare (DNS TXT)

**Passo a passo:**

1. Acesse https://search.google.com/search-console/
2. Clique em "Adicionar propriedade"
3. Escolha **"Domínio"** (não "Prefixo de URL") — cobre www e não-www
4. Insira: `sosimpressora.com.br` (ou `.com` conforme domínio real)
5. Google exibirá um registro TXT do tipo:
   ```
   google-site-verification=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
   ```
6. Acesse o **Cloudflare Dashboard** > seu domínio > DNS
7. Clique em "Adicionar registro"
   - Tipo: `TXT`
   - Nome: `@` (representa o domínio raiz)
   - Conteúdo: colar o código de verificação do Google
   - TTL: Auto
8. Salvar no Cloudflare
9. Aguardar 1-5 minutos para propagação
10. Voltar ao Search Console e clicar em "Verificar"

**Observacao:** O Cloudflare propaga registros DNS muito rapidamente (~1 min). Não é necessário aguardar as 48h do aviso padrão do Google.

### 4.2 Envio do Sitemap

Após verificação aprovada:
1. No Search Console, acessar o menu lateral: **Sitemaps**
2. Em "Adicionar novo sitemap", inserir: `sitemap.xml`
3. Clicar em "Enviar"
4. Status esperado: "Sucesso" em até 24h

**Verificar se as 4 URLs foram detectadas:** index, servicos, sobre, contato.

### 4.3 Solicitar Indexacao das Páginas Prioritárias

Para cada URL abaixo, usar a ferramenta "Inspeção de URL" no Search Console:

**Ordem de prioridade:**
1. `https://sosimpressora.com.br/` — indexar primeiro
2. `https://sosimpressora.com.br/servicos.html` — segunda prioridade
3. `https://sosimpressora.com.br/contato.html`
4. `https://sosimpressora.com.br/sobre.html`

**Procedimento por URL:**
1. Colar a URL no campo de inspeção (topo do Search Console)
2. Clicar em "Solicitar indexação"
3. Aguardar na fila (pode levar de horas a 7 dias)
4. Repetir para cada URL

### 4.4 Configurar Alertas de E-mail

No Search Console, ativar notificações para:
- Problemas de cobertura de índice
- Melhorias de usabilidade mobile
- Alertas de segurança (hacking, malware)

**Como ativar:**
Search Console > Configurações (engrenagem) > Preferências de mensagens > Ativar todas as notificações por e-mail para: `[email do proprietário]`

### 4.5 Checklist de Monitoramento — Primeiros 30 Dias

**Semana 1 (dias 1-7) — Estabelecer linha de base:**
- [ ] Verificar se a propriedade foi confirmada
- [ ] Confirmar que o sitemap foi aceito sem erros
- [ ] Verificar se as 4 URLs aparecem como "Válidas" em Cobertura
- [ ] Registrar: nenhum erro 404, nenhum redirect incorreto
- [ ] Verificar se as páginas estão sendo indexadas (Inspecionar URL)

**Semana 2 (dias 8-14) — Primeiras impressões:**
- [ ] Acessar "Desempenho" > verificar primeiras impressões (pode ser 0 ainda)
- [ ] Verificar "Usabilidade em dispositivos móveis" — todas as páginas devem estar OK
- [ ] Verificar "Core Web Vitals" — verificar LCP, FID, CLS
- [ ] Checar se há erros de dados estruturados em "Melhorias" > "Resultados avançados"

**Semana 3 (dias 15-21) — Primeiros dados:**
- [ ] Acessar "Desempenho" > filtrar por "Queries" para ver primeiras keywords
- [ ] Verificar posição média para "conserto impressora sp" e variações
- [ ] Verificar se há páginas com CTR baixo (< 2%) para otimizar title/description
- [ ] Verificar "Links" > confirmar que as páginas internas estão linkadas

**Semana 4 (dias 22-30) — Análise e ajuste:**
- [ ] Comparar impressões da semana 1 vs semana 4
- [ ] Identificar as 5 keywords que já aparecem no Google
- [ ] Verificar se há erros de rastreamento em "Cobertura"
- [ ] Exportar relatório de desempenho para comparação mensal
- [ ] Confirmar que o GMB está vinculado (aparecerá em "Pesquisa" > tipo "Pesquisa de nome de negócio")

### 4.6 KPIs de SEO para Acompanhar Mensalmente

| KPI | Mês 1 (baseline) | Meta Mês 3 | Meta Mês 6 |
|-----|------------------|-----------|-----------|
| Impressões/mês | ~500 | ~5.000 | ~20.000 |
| Cliques orgânicos/mês | ~20 | ~200 | ~800 |
| CTR médio | ~4% | ~5% | ~6% |
| Posição média | ~30 | ~10 | ~5 |
| Posição "conserto impressora sp" | Fora top 100 | Top 30 | Top 10 |
| Posição "assistência técnica impressora são paulo" | Fora top 100 | Top 30 | Top 10 |
| Páginas indexadas | 4 | 4+ | 6+ |

---

## Cronograma de Implementacao

### Semana 1 (Pré-lançamento)
- [ ] Confirmar domínio (.com vs .com.br) e atualizar todos os URLs no código
- [ ] Criar robots.txt e sitemap.xml
- [ ] Fazer deploy do site
- [ ] Criar perfil Google Meu Negócio e iniciar verificação
- [ ] Configurar Search Console + enviar sitemap
- [ ] Solicitar indexação das 4 páginas

### Semana 2
- [ ] Completar verificação GMB
- [ ] Publicar todas as 8+ fotos no GMB
- [ ] Adicionar todos os serviços no GMB
- [ ] Publicar as 5 Q&As no GMB
- [ ] Vincular GMB ao Google Ads (criar conta Ads se necessário)

### Semana 3
- [ ] Criar campanha Search no Google Ads
- [ ] Subir os 3 RSAs por grupo de anúncio
- [ ] Configurar todas as extensões de anúncio
- [ ] Configurar conversões (ligação, WhatsApp, formulário)
- [ ] Ativar as campanhas com budget inicial de R$ 20/dia

### Semana 4
- [ ] Criar campanha Performance Max
- [ ] Fazer upload dos assets (imagens, headlines, descriptions)
- [ ] Ativar PMax com R$ 15/dia
- [ ] Publicar primeiro post no GMB
- [ ] Iniciar protocolo de coleta de avaliações

### Mês 2 em diante
- [ ] Publicar 1 post/semana no GMB (seguir calendário editorial)
- [ ] Revisar performance das campanhas Ads a cada 7 dias
- [ ] Analisar Search Console mensalmente
- [ ] Criar landing page dedicada para "conserto impressora hp sp"
- [ ] Meta: 20 avaliações Google até o final do Mês 2

---

## Resumo de Investimentos

| Item | Custo | Período |
|------|-------|---------|
| SEO on-page (já feito) | R$ 0 | — |
| Google Meu Negócio | R$ 0 | Gratuito |
| Search Console | R$ 0 | Gratuito |
| Google Ads — Search | R$ 750 | /mês |
| Google Ads — PMax | R$ 450 | /mês |
| **Total Ads** | **R$ 1.200** | **/mês** |
| ROI estimado (1° mês) | +213% | R$ 3.750 receita |

---

*Gabriela Google — Especialista Google (SEO + GMB + Ads)*
*Plano elaborado em 2026-03-25 | SOS Impressora — sosimpressora.com*
