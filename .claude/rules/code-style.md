# Code Style

## TypeScript

- Strict mode — no `any`, no `@ts-ignore`, no `eslint-disable` without discussion
- All files `.ts` or `.tsx` — never `.js`
- `const` always, never `let` or `var`
- **`interface` for ALL object shapes**. `type` ONLY for unions, intersections, primitives, function types:

  ```ts
  // GOOD
  interface IProps {
    name: string
    age: number
  }
  interface IExperienceItem {
    key: string
    href: string
  }

  // type for non-object
  type Theme = 'dark' | 'light'
  type Handler = (id: number) => void
  ```

- Discriminated unions over boolean flags for complex states
- Always type function params and return values for exported functions

## Components

- Functional components only with `memo()` wrapper on every export
- **Arrow functions ONLY** — no `function` declarations (exception: a `default export` for a Next.js route/page/layout may be either, but project convention is still arrow)
- Props interface defined ABOVE component: `interface IProps { ... }`
- One component per file — file name = component name (`PascalCase.tsx`)
- Destructure props in function signature
- Event handlers prefix `handle` (`handleClick`); callback props prefix `on` (`onClick`)
- **Component body order**: Props → Hooks → Computed → Handlers → Effects → JSX

## File Naming

- Components: `PascalCase.tsx` — `Header.tsx`, `ArrowLink.tsx`
- Hooks: `useCamelCase.ts` — `useHoverHelper.tsx`
- Utils/helpers: `camelCase.ts` — `setThemeToCookie.ts`
- Types per domain: `types.ts`
- Constants per domain: `consts.ts`
- Data files: `data.ts` (meta only, no text)
- Directories: `camelCase/` (e.g. `experienseCard/`, `homePage/`) — match the component name where there's only one component inside

## Exports

- Named exports only: `export const Foo = memo(() => ...)`
- Default exports ONLY for Next.js route files (`page.tsx`, `layout.tsx`, `not-found.tsx`)
- **NEVER** set `Component.displayName = '...'` — the user dislikes the noise; `react/display-name` ESLint rule is off

## Imports

- `simple-import-sort` (auto-sorted)
- Order: builtins → external → `@/...` (internal) → relative → CSS
- Newline between groups
- Always import from exact file path — never from barrel (`@/shared/ui/Chip` not `@/shared/ui`)
- Use `Link` from `@/i18n/navigation`, NOT `next/link`, for any internal link (locale-aware)

## Prettier (enforced)

- No semicolons
- Single quotes
- Trailing comma: `es5`
- Print width: 80
- Tab width: 2

## Error Handling

- Don't swallow errors silently
- `console.error()` and `console.warn()` allowed; `console.log()` is forbidden by ESLint
- Boundary errors at user input or external API — no defensive checks for impossible internal states

## Comments

- Default to writing none. Add a comment only when WHY is non-obvious (a constraint, an invariant, a workaround).
- Don't explain WHAT the code does; well-named identifiers do that.
- Don't reference current task or PR ("added for X") — that belongs in commit message / PR description.
