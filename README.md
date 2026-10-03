# Conclave — Estruturadora de Negócios

Site institucional multilíngue (PT, EN, 中文, ES, FR) da Conclave, estruturadora e desenvolvedora de negócios. Página única com vídeo de fundo otimizado e identidade visual em preto, dourado e esmeralda.

## Stack

- [Vite](https://vite.dev) 6
- [React](https://react.dev) 19 + TypeScript
- [Tailwind CSS](https://tailwindcss.com) v4
- [motion](https://motion.dev) para animações

## Como rodar

Pré-requisito: Node.js.

```bash
npm install
npm run dev      # http://localhost:3000
```

Outros comandos:

```bash
npm run build    # gera a pasta dist/
npm run preview  # serve o build localmente
npm run lint     # checagem de tipos (tsc --noEmit)
```

## Estrutura

```
src/
├── App.tsx                  # composição das seções
├── components/Sections.tsx  # Hero, Essence, Units, Principles, Footer
├── i18n/
│   ├── translations.ts      # dicionários e lista de idiomas
│   └── LanguageContext.tsx  # provider e hook useLanguage()
└── assets/
    ├── images/              # poster do vídeo (fallback)
    └── videos/              # versões WebM, MP4 e mobile do fundo
public/
└── logo.png
```

## Internacionalização

Os textos ficam em `src/i18n/translations.ts`. O idioma inicial vem da escolha salva no navegador ou, na falta dela, do idioma do navegador; o padrão é o português. Para adicionar um idioma, inclua-o em `LANGUAGES` e crie o dicionário correspondente em `translations`.

## Vídeo de fundo

A hero usa um vídeo em loop com três versões (WebM e MP4 para desktop, MP4 menor para celular). A imagem `hero-buildings-poster.jpg` aparece enquanto o vídeo carrega, se ele falhar, se o autoplay for bloqueado ou se o usuário tiver `prefers-reduced-motion` ativo.
