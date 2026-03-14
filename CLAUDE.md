# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Dev server on port 3010 (Turbopack)
npm run build    # Production build
npm start        # Production server on port 3010
npm run lint     # ESLint
```

No test framework is configured.

## Environment Variables

```
TMDB_API_URL=   # TMDB API base URL
TMDB_API_KEY=   # TMDB API key
```

## Architecture

**Next.js 15 App Router** with React Server Components. All pages are under `src/app/[locale]/` — the `[locale]` segment is required because the app is fully internationalized via `next-intl` middleware (`src/middleware.ts`). The locale is persisted in cookies.

**Data fetching** happens server-side: page components are async and call functions from `src/services/api.ts` directly. The API module wraps the TMDB API using Axios.

**State management** is minimal: `src/context/favotires-contex.tsx` (note the typo) provides favorites via React Context backed by localStorage. No global state library.

**Styling** uses Tailwind CSS v4 with shadcn/ui components in `src/components/ui/`. Feature-specific components are named `watchlist-*.tsx` at the top level of `src/components/`. Shared reusables live in `src/components/common/`.

**i18n** supports 15 locales defined in `src/i18n/locales.ts`. Route helpers are in `src/i18n/navigation.ts` — use these instead of Next.js native `Link`/`useRouter` so locale prefixes are handled automatically.

**Global types** are declared in `src/global.d.ts`: `IMovieData`, `IActor`, `IResponse<T>`, `IFilterState`, `TMediaType` (`'movie' | 'tv'`), etc.

**Path alias**: `@/*` maps to `src/*`.

## Code Style

Prettier config: single quotes, no semicolons, print width 100.
