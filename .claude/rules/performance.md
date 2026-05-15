# Performance

## Memoization

- **`memo()`** — wrap EVERY exported React component
- **`useCallback`** — REQUIRED for:
  - Functions passed as props to memoized children
  - Functions used in dependency arrays of other hooks
  - Event handlers that capture external state and need stable identity
- **`useMemo`** — REQUIRED for:
  - Expensive computations (large array filtering/sorting)
  - Reference-stable objects/arrays passed as props or in deps
- **When NOT to memoize**:
  - Primitive values (string, number, boolean)
  - Functions used only inside the same component
  - Simple calculations that run fast
- **NEVER** set `Component.displayName = '...'` — explicit project preference

## Animations (Motion 12)

- Import from `motion/react` — NOT from `framer-motion` (Motion 12 is the renamed successor)
- Define `variants`, `initial`, `transition` outside the component (module scope) so they're reference-stable across renders
- For lazy-mount on intersection: `useInView` from `react-intersection-observer` + `animate={inView ? 'visible' : 'hidden'}`
- For continuous animations (mouse-tracking gradients, scroll-bound effects): use `requestAnimationFrame` + `style.setProperty` on a `useRef` element — NEVER `setState` per frame

## Scroll & mousemove

- Always pass `{ passive: true }` to scroll listeners on `window` / `document`
- Use `requestAnimationFrame` to throttle high-frequency events
- For "previous scroll position" / direction: use `useRef`, NOT `useState`
- Don't use deprecated `pageYOffset` — use `scrollY`

## next/image

- Always provide `alt`
- Declare every non-default `quality` value in `next.config.js` `images.qualities`
- Don't use `objectFit` prop — use `className="object-cover"`
- Static imports give you `StaticImageData` — prefer over string URLs (Next can pre-compute width/height)

## Theme & i18n contexts

- Single `MutationObserver` in `ThemeProvider` for the whole tree — don't add a per-component observer
- `useTheme()` value changes only when actual theme changes — fine to consume in many components
- Initial theme passed via prop from server (cookie) — avoids hydration mismatch

## Bundle hygiene

- No barrel `index.ts` files — every import targets an exact file (better tree-shaking + easier refactors)
- `next/font/google` for Google fonts (auto self-hosted, no external CSS request)
- Avoid client-only libraries in server components — they pull whole client runtimes into the server bundle

## Data files

- `experienceData`, `projectsData`, `intExpData` — pure data, lazy-evaluated only at render
- For sorting / filtering at render: use `.slice()` before mutating sorts (otherwise you mutate the module-level array — has caused subtle bugs across renders before)
