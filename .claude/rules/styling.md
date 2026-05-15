# Styling

## Tailwind CSS 4

- Config lives in `src/app/globals.css` via `@import 'tailwindcss'` and `@theme { ... }` — NO `tailwind.config.js`
- PostCSS: `@tailwindcss/postcss` plugin only (autoprefixer is built-in via Lightning CSS)
- Plugins: `@plugin '@tailwindcss/typography';` inside `globals.css`
- Dark mode: class-based via `@custom-variant dark (&:where(.dark, .dark *))`
- Custom utilities use `@utility name { ... }` (e.g. `.container` with breakpoint-scoped overrides via `@variant tablet { ... }`)

## Design Tokens

| Token                  | Value     | Where                                 |
| ---------------------- | --------- | ------------------------------------- |
| `--color-mainGreen`    | `#00c976` | brand CTA bg, dark-mode active accent |
| `--breakpoint-small`   | 640px     | `small:` prefix                       |
| `--breakpoint-tablet`  | 768px     | `tablet:` prefix                      |
| `--breakpoint-laptop`  | 1024px    | `laptop:` prefix                      |
| `--breakpoint-desktop` | 1280px    | `desktop:` prefix                     |
| `--breakpoint-hr`      | 1536px    | `hr:` prefix                          |

Everything else uses Tailwind defaults — do NOT redefine `green`, `slate`, `teal`, `stone` etc.

## Color Pairs (theme-aware text)

Use these exact pairs; they're tested for AA contrast in both themes:

| Role                     | Light                 | Dark                       |
| ------------------------ | --------------------- | -------------------------- |
| Page bg                  | `bg-stone-50`         | `bg-slate-900`             |
| Surface (card hover)     | `bg-stone-200`        | `bg-slate-800`             |
| Heading H1/H2/H3         | `text-slate-900`      | `dark:text-slate-50`       |
| Body P16                 | `text-slate-900`      | `dark:text-slate-300`      |
| Muted P14 / descriptions | `text-slate-700`      | `dark:text-slate-400`      |
| Italic subhead           | `text-slate-700`      | `dark:text-slate-200`      |
| Accent (links/icons)     | `text-green-700`      | `dark:text-teal-300`       |
| Accent hover             | `text-green-800`      | `dark:text-teal-200`       |
| Active nav item          | `text-green-800`      | `dark:text-mainGreen`      |
| Border subtle            | `border-slate-300/50` | `dark:border-slate-700/50` |

## Hard Rules

- **No hardcoded hex in components** — always Tailwind tokens
- **No inline `style={{}}`** for colors or spacing — Tailwind classes
- Use `clsx()` / template strings for conditional classes — fine, but keep readable
- The `!` important prefix is allowed when overriding shared component defaults (`!text-...`); avoid otherwise
- For SSR-rendered SVG icons: `fill-slate-900 dark:fill-slate-50` baseline; hover-states `hover:fill-green-700 dark:hover:fill-teal-300`

## Reusable UI Patterns

- Long lists of arrow-link CTAs (`Resume`, `Projects`, archive back-link) → use `ArrowLink` from `@/shared/ui/ArrowLink`
- Tag/chip → use `Chip` (handles theme-aware bg/text)
- Section header (sticky on mobile) → `SectionHeader`
- Typography: `H1`, `H2`, `H3`, `P16`, `P14` from `@/shared/ui/Typography`. Don't use raw `<h1>`, `<p>`.

## When adding a new shared component

- Lives in `src/shared/ui/`
- Wrap in `memo()`
- Honour theme pairs (always provide both light + dark variants)
- Type props with `interface IProps`
- If a similar component exists, extend it instead of duplicating
