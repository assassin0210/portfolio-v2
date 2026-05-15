# Next.js (App Router, v16)

## Server vs Client Components

- **Default is Server Component.** Add `'use client'` ONLY when the component uses hooks, event handlers, browser APIs, or React Context.
- Server Components CAN: `async`/`await`, `cookies()`, `headers()`, `getTranslations()`, direct DB calls.
- Client Components CANNOT: be `async` at the top level, use server-only APIs.
- Pattern: data-fetching in Server Components → pass data as props down to Client Components.

## Async Dynamic API (Next 15+)

- `cookies()` and `headers()` are async — `await cookies()`
- Route `params` and `searchParams` are now Promises — `params: Promise<{ locale: string }>`
- `setRequestLocale(locale)` early in async page/layout for next-intl static rendering

## Routing

- All routes live under `app/[locale]/` (locale-prefixed via `localePrefix: 'as-needed'`)
- `generateStaticParams` returns `routing.locales.map(locale => ({ locale }))`
- For internal navigation use `Link` and `useRouter` from `@/i18n/navigation` — NOT `next/link` or `next/navigation` directly
- The middleware file is `src/proxy.ts` — Next 16 deprecated the `middleware` filename → `proxy`
- 404: middleware/proxy or `notFound()` from `next/navigation` when `!hasLocale(routing.locales, locale)`

## Metadata

- Per-route async `generateMetadata({ params })` for localized titles
- Read translations via `getTranslations({ locale, namespace: 'metadata' })`
- Set `openGraph.images`, `twitter.card`, etc.

## Turbopack

- `next dev` and `next build` use Turbopack by default in v16
- Webpack-config-only options break the build
- For SVGR or any custom loader: configure under `turbopack.rules` in `next.config.js`:
  ```js
  turbopack: {
    rules: { '*.svg': { loaders: ['@svgr/webpack'], as: '*.js' } }
  }
  ```

## next-intl Plugin

- `withNextIntl('./src/i18n/request.ts')` wraps `nextConfig` in `next.config.js`
- The plugin reads `request.ts` to load messages per request

## next/image

- `quality={50}` (or any non-default value) requires `images.qualities: [...]` in `next.config.js`
- Don't use `objectFit` prop (deprecated since Next 13) — use `className="object-cover"`
- Static imports of images give you `StaticImageData` typing — prefer over `string` URLs

## Common Pitfalls

1. Don't import client-only hooks in Server Components — split into a Client child
2. Don't use `next/router` — App Router uses `next/navigation` (or for us, `@/i18n/navigation`)
3. Don't use `<img>` for static assets — use `next/image`
4. Don't `await` at the top of a Client Component — fetch on the server, pass props
5. Avoid putting heavy state providers in Server Component layouts — wrap in a `'use client'` provider component first
6. Don't read `cookies()` synchronously — `await cookies()` (Next 15+)
