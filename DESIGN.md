---
name: Conclave
description: Estruturadora e desenvolvedora de negócios — plataforma institucional em preto, dourado e serifa editorial.
colors:
  gold: "#C5A059"
  graphite: "#1A1A1A"
  emerald: "#004D40"
  emerald-light: "#2E8B74"
  ivory: "#F5F5F0"
  black: "#000000"
typography:
  display:
    fontFamily: "Playfair Display, serif"
    fontSize: "clamp(2.25rem, 6vw, 4.5rem)"
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: "normal"
  title:
    fontFamily: "Playfair Display, serif"
    fontSize: "clamp(1.125rem, 2.5vw, 3rem)"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "normal"
  body:
    fontFamily: "Montserrat, sans-serif"
    fontSize: "clamp(0.875rem, 1vw, 1rem)"
    fontWeight: 300
    lineHeight: 1.7
    letterSpacing: "0.01em"
  label:
    fontFamily: "Montserrat, sans-serif"
    fontSize: "0.625rem"
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: "0.2em"
spacing:
  section-y: "8rem"
  section-y-lg: "12rem"
  container-x: "1.5rem"
components:
  button-primary:
    backgroundColor: "transparent"
    textColor: "{colors.gold}"
    padding: "20px 40px"
  button-primary-hover:
    backgroundColor: "{colors.gold}"
    textColor: "{colors.black}"
---

# Design System: Conclave

## Overview

**Creative North Star: "A Sala do Conselho"**

Conclave é uma mesa de decisão, não uma vitrine. O sistema visual reproduz a atmosfera de uma sala de conselho discreta: quase escuridão total, dourado tratado como coisa rara e valiosa, silêncio visual entre uma mensagem e outra. Nada compete por atenção — cada elemento aparece devagar, ocupa seu momento, e cede espaço.

A base é preto absoluto e grafite, quase sem variação de superfície. O dourado (`#C5A059`) é o único acento que carrega peso institucional — usado em títulos, links ativos e o símbolo do leão em marca d'água — nunca como preenchimento decorativo. O verde-esmeralda aparece só como traço fino: uma borda, um sublinhado no hover. É o sistema mais próximo do silêncio que ainda comunica hierarquia.

Rejeições confirmadas: nada de rugir/agressividade no símbolo do leão, sem coroas/brasões/estética esportiva, sem carrosséis automáticos, sem excesso de botões, sem números sem lastro ou promessas de retorno na copy.

**Key Characteristics:**
- Fundo preto/grafite quase sem variação — a "sala escura" é constante em toda a página
- Dourado como singular ponto de foco por seção, nunca em massa
- Tipografia serifada (Playfair Display) para toda mensagem que carrega peso institucional; sans (Montserrat) para tudo funcional/legenda
- Composição extremamente respirada — uma mensagem central por seção, muito espaço negativo
- Movimento lento e sutil (fade + translate curto, 1–1.5s, easing suave) — nunca abrupto

## Colors

Paleta de alto contraste e baixa saturação — o dourado é a única cor que "brilha"; tudo o mais é tonal.

### Primary
- **Dourado Fosco** (`#C5A059`): cor de autoridade da marca. Headlines, links ativos, bordas de CTA, marca d'água do leão. Regra: nunca preenche áreas grandes — aparece em traço, texto ou detalhe.

### Secondary
- **Verde-Esmeralda Profundo** (`#004D40`): acento raro. Bordas de seção (footer), hover de cards de Princípios.
- **Verde-Esmeralda Claro** (`#2E8B74`): variante de hover sobre o verde profundo — usado em `hover:border-emerald-light`.

### Neutral
- **Preto Absoluto** (`#000000`): fundo predominante — Hero, Units, Principles.
- **Grafite** (`#1A1A1A`): fundo alternativo institucional — Essence, Footer. Diferença sutil do preto, nunca um "card" claramente elevado.
- **Marfim** (`#F5F5F0`): cor de texto padrão do corpo, quase sempre aplicada com opacidade reduzida (`/80`, `/60`, `/40`, `/30`, `/10`) para criar hierarquia sem trocar de matiz.

### Named Rules
**The Rare Gold Rule.** Dourado nunca é cor de fundo nem preenche formas grandes. É reservado a texto de peso institucional, bordas finas e o símbolo — sua raridade visual é o que sinaliza valor.

**The Opacity Hierarchy Rule.** Hierarquia de texto secundário não troca de cor — troca de opacidade sobre marfim (`text-ivory/80` → corpo principal, `/60` → corpo secundário, `/40` → legendas, `/30` → rodapé/legal, `/10` → divisores).

## Typography

**Display/Title Font:** Playfair Display (serif, fallback `serif`)
**Body/Label Font:** Montserrat (sans-serif, fallback `sans-serif`)

**Character:** Contraste clássico editorial — serifa alta para tudo que carrega autoridade institucional (headlines, títulos de unidade, princípios), sans leve e espaçada para tudo funcional (navegação, legendas, corpo, CTAs). A serifa nunca aparece em peso bold; o peso vem do tamanho e do dourado, não da gordura da fonte.

### Hierarchy
- **Display** (400, `clamp(2.25rem, 6vw, 4.5rem)`, leading tight): headline do Hero — única aparição por página.
- **Title** (400, `clamp(1.125rem, 2.5vw, 3rem)`, leading relaxed a 1.6): título de seção (Essence), título de unidade (Units), título de princípio.
- **Body** (300 light, `0.875–1rem`, leading 1.7): parágrafos descritivos, sempre com opacidade reduzida sobre marfim.
- **Label** (400, `0.625–0.75rem`, letter-spacing `0.2em`, uppercase): navegação, eyebrow ("A Conclave"), CTAs, legendas de rodapé. Sempre versalete/uppercase com tracking largo — é a assinatura tipográfica mais reconhecível do sistema.

### Named Rules
**The Wide Label Rule.** Todo texto funcional/de apoio (nav, eyebrow, botão, legal) é uppercase com `tracking-[0.2em]` em tamanho pequeno (10–12px). Nunca corpo de texto normal nesse tratamento — reservado a rótulos.

## Layout

Container máximo `max-w-7xl` (seções de conteúdo largo como Units) ou `max-w-3xl`/`max-w-4xl`/`max-w-5xl` (blocos de mensagem central), sempre centralizado com `px-6`. Uma seção = uma mensagem: cada `<section>` ocupa no mínimo `min-h-screen` (Hero) ou grandes blocos de padding vertical (`py-32 md:py-48`, ou `py-24 md:py-32`) — o ritmo vertical generoso é o que sustenta a sensação de "sala silenciosa".

Responsivo: navegação desktop com links laterais colapsa (`hidden md:flex`) em mobile — sem menu hambúrguer implementado ainda. Grid de Princípios muda de 1 coluna (mobile) → 2 (`md`) → 3 (`lg`) colunas. Cards de Units empilham verticalmente em todas as resoluções (`flex flex-col`), com imagem full-bleed atrás do texto em vez de layout lado a lado.

## Elevation & Depth

Sistema flat por toda a implementação atual — nenhum `box-shadow` em uso. Profundidade vem inteiramente de camadas tonais: overlay de gradiente preto sobre imagem (`bg-gradient-to-b/r from-black`), filtros de imagem (`grayscale`, `brightness`, `contrast`) e opacidade de texto. Não há decisão de marca confirmada sobre se isso é definitivo — registrado como em aberto: uma leve elevação futura em hover de card não estaria automaticamente descartada, mas qualquer sombra introduzida deve permanecer discreta (baixo blur, baixa opacidade) para não quebrar a sobriedade do sistema.

## Shapes

Sem uso de `border-radius` em nenhum componente — cantos retos em toda parte (botões, blocos, imagens). Bordas finas de 1px (`border-t`, `border`) em opacidade baixa (`ivory/10`, `gold/40`, `emerald/40`) são o único recurso de contorno, usadas para separar seções e sinalizar interatividade (mudança de cor de borda no hover). A ausência de curvatura reforça a precisão institucional pedida no manifesto.

## Components

### Buttons
- **Shape:** cantos retos (0), sem radius.
- **Primary (CTA "Agendar Conversa Confidencial"):** borda `1px solid gold/40`, texto dourado, padding generoso (`px-10 py-5`), label uppercase com tracking largo.
- **Hover:** inversão total — fundo vira dourado sólido, texto vira preto (`hover:bg-gold hover:text-black`), transição lenta (`duration-500`).
- Não há variante secundária/ghost distinta implementada — um único estilo de CTA no site.

### Navigation
- Barra fixa no topo do Hero, transparente sobre a imagem com overlay.
- Links em label style (uppercase, tracking `0.2em`, `text-ivory/70`), viram dourado no hover (`duration-500`).
- Logo centralizado entre dois grupos de links (2 à esquerda, 2 à direita) — sem menu mobile implementado.

### Cards (Units)
- **Corner Style:** reto, sem radius.
- **Background:** imagem full-bleed com `grayscale(80%) brightness(0.25) contrast(1.2)` + gradiente preto lateral (`from-black/90 via-black/60 to-transparent`).
- **Shadow Strategy:** nenhuma — profundidade só pelo overlay de imagem.
- **Border:** nenhuma.
- Texto sempre ancorado à esquerda dentro de `max-w-xl`, título serifado dourado + descrição sans em `ivory/80`.

### Watermark Logo (componente de assinatura)
Logo aplicado em opacidade muito baixa (`opacity-[0.15]`) centralizado atrás do texto da seção Essence — a aplicação literal da diretriz do manifesto de usar o símbolo do leão "com moderação, inclusive como marca d'água". É o único lugar do sistema onde a marca aparece em escala grande.

## Do's and Don'ts

### Do:
- **Do** usar dourado só em texto, borda fina ou marca d'água — nunca como preenchimento de área grande (The Rare Gold Rule).
- **Do** manter uma mensagem central por seção com bastante espaço negativo ao redor.
- **Do** aplicar hierarquia de texto secundário via opacidade sobre marfim, não trocando de cor (The Opacity Hierarchy Rule).
- **Do** manter todo rótulo funcional (nav, CTA, legenda, eyebrow) em uppercase com tracking largo (The Wide Label Rule).
- **Do** usar transições lentas e discretas (`duration-500` a `1500ms`, easing suave) em qualquer novo elemento animado.
- **Do** manter cantos retos (sem `border-radius`) em qualquer novo componente.

### Don't:
- **Don't** introduzir cor saturada fora da paleta dourado/esmeralda/marfim/preto/grafite.
- **Don't** usar peso bold na serifa (Playfair) — o peso visual vem do tamanho e da cor, não da gordura da fonte.
- **Don't** adicionar carrossel automático, excesso de botões ou qualquer elemento que compita com a mensagem central da seção.
- **Don't** escrever copy com números sem lastro, promessas de retorno, ou linguagem da lista de termos evitados no manifesto (garantido, revolucionário, disruptivo, etc.).
- **Don't** sugerir oferta pública de investimento, captação regulada ou atuação como instituição financeira em qualquer copy sobre Capital & Ventures.
