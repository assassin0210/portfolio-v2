# Portfolio v2 — Project Rules

## Tech Stack (LOCKED)

**Next.js 16** (App Router, Turbopack) + **React 19** + **TypeScript 6** strict,
**Tailwind CSS 4** (CSS config via `@theme`), **Motion 12** (framer-motion successor),
**next-intl 4** (en/ru with `localePrefix: 'as-needed'`),
react-intersection-observer 10, react-scroll, sharp,
ESLint 9 (flat config) + Prettier 3, Yarn 1.

## Commands

```bash
yarn dev             # Next dev (Turbopack, default port 3000)
yarn build           # Production build (Turbopack)
yarn start           # Run production build
yarn lint            # eslint .
yarn lint --fix      # Autofix
```

## Project Structure (FSD-flavoured)

```
src/
├── app/[locale]/         # Next.js App Router routes (locale-prefixed)
│   ├── layout.tsx        # Root layout: theme + i18n + providers (Server Component)
│   ├── page.tsx
│   └── archive/page.tsx
├── features/             # Feature modules
│   ├── header/
│   ├── about/
│   ├── experience/       # data.ts (meta) + Experience.tsx + Resume.tsx
│   ├── interestingExperience/
│   ├── projects/         # data.ts + Projects.tsx + Slider.tsx
│   ├── socials/
│   ├── homePage/
│   └── mouseEffect/      # Cursor radial-gradient overlay (rAF + CSS var)
├── widgets/              # App-level widgets / providers
│   └── providers/
│       ├── theme/        # ThemeProvider (single MutationObserver), Switch, ThemeSwitcherButton
│       └── locale/       # LanguageSwitcher
├── shared/
│   ├── ui/               # Typography, Chip, ArrowLink, SectionHeader, button/, experienseCard/
│   ├── animate/          # AnimateFromSide, AnimationOneByOne, useAnimateInTurn
│   ├── hooks/            # useHoverHelper
│   ├── helpers/          # cookie helpers
│   ├── consts/           # COOKIES_KEYS (as-const), sidebarMenu
│   ├── lib/types/        # Theme, TComponentSize, TComponentType
│   └── assets/           # icons.ts (SVG aggregator), images.ts
├── i18n/                 # next-intl config: routing, navigation (Link/useRouter), request config
├── proxy.ts              # Locale middleware (Next 16: `proxy` not `middleware`)
└── messages/{en,ru}.json # All UI text
```

## Critical Rules (always enforced)

- **NO `index.ts`** — never create barrel/re-export files
- **NO `any`** — no `@ts-ignore`, no `eslint-disable` without discussion
- **`memo()`** on ALL exported React components
- **NEVER** set `Component.displayName = '...'` — we don't use it; the lint rule is off
- **Arrow functions ONLY** — no `function` declarations
- **Named exports only** — `default export` ONLY for Next.js route/page/layout files
- **Always import from exact path** — never from barrel: `from '@/shared/ui/Chip'` not `from '@/shared/ui'`
- **`'use client'`** only when component uses hooks, browser APIs, or event handlers — default is Server Component
- **All user text through `useTranslations()` / `getTranslations()`** — no hardcoded strings (English or Russian)
- **All colors through Tailwind tokens** — never hardcode hex in components; brand colors in `globals.css` `@theme`
- **`Link` from `@/i18n/navigation`** — not `next/link` — for locale-aware routing
- **No emojis in code or commits** unless user explicitly asks
- **Never add `Co-Authored-By: Claude`** to commits

## Internationalization

- All UI strings live in `messages/en.json` and `messages/ru.json`
- Server components: `await getTranslations('namespace')`
- Client components: `useTranslations('namespace')`
- Inline-link rich text: `t.rich('key', { tagName: (chunks) => <El>{chunks}</El> })`
- `data.ts` files keep ONLY meta (href, chips, name, year) — text lives in messages
- For arrays (bullets, items): `t.raw('key') as string[]`
- New language → add `locales` in `src/i18n/config.ts` + `messages/{locale}.json`

## Theme

- `class`-based dark mode via Tailwind 4 `@custom-variant dark (&:where(.dark, .dark *))`
- Single `MutationObserver` in `ThemeProvider` watches `<html>` class — child components subscribe via `useTheme()` context
- Initial theme comes from cookie at SSR (passed to provider via `initialTheme` prop) — avoids hydration mismatch
- Cookie writes through `setThemeToCookie` — NEVER `encodeURIComponent(path)` (browsers store `%2F` literally and can't read the cookie back)

## Tailwind 4 specifics

- No `tailwind.config.js` — config lives in `globals.css` via `@theme { ... }`
- Brand color: `--color-mainGreen: #00c976`
- Custom breakpoints: `--breakpoint-{small,tablet,laptop,desktop,hr}`
- Custom utilities: `@utility container { ... @variant tablet { ... } }`
- PostCSS plugin: `@tailwindcss/postcss` (autoprefixer is built-in via Lightning CSS — no separate dep)
- Plugins: `@plugin '@tailwindcss/typography';` in CSS

## Accessibility & contrast

- WCAG AA minimum (4.5:1 for normal text)
- Muted text always paired: `text-slate-700 dark:text-slate-400` (P14), `text-slate-900 dark:text-slate-300` (P16)
- Brand accent text: `text-green-700 dark:text-teal-300` (light/dark), hover `text-green-800 dark:text-teal-200`
- Surface hover: `bg-stone-200 dark:bg-slate-800`
- `mainGreen` only as background (CTA buttons) or active-menu accent in dark — too low contrast for body text on light bg

## Performance

- `memo()` on every exported component (rule above) — pairs with proper deps in `useCallback`/`useMemo`
- `useCallback` for handlers passed as props or in dep arrays; `useMemo` for derived data and reference-stable objects
- No `setState` in scroll/mousemove handlers — use `useRef` + `requestAnimationFrame` + CSS variable (see `MouseEffect`)
- Scroll listeners: always `{ passive: true }`
- `next/image` with `quality` declared in `images.qualities` of `next.config.js`
- Animations through Motion (`motion/react`) — keep variants outside the component to avoid re-creation per render

## Detailed Rules (lazy-loaded from .claude/rules/)

| File             | Topics                                                       |
| ---------------- | ------------------------------------------------------------ |
| `code-style.md`  | TypeScript, components, file naming, imports, prettier       |
| `styling.md`     | Tailwind 4, design tokens, dark mode, contrast pairs         |
| `nextjs.md`      | App Router, server vs client, async dynamic API, metadata    |
| `i18n.md`        | next-intl patterns, message structure, rich text, navigation |
| `performance.md` | memo, motion, scroll listeners, images, prefetching          |
