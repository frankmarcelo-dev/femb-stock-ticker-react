# femb-stock-ticker-react

A stock ticker and portfolio dashboard frontend built with React, TypeScript, and Vite. Features a dark-themed UI with real-time-style market data display, interactive charts, and a component library with Storybook documentation.

## Tech Stack

- **React 18** + **TypeScript** (strict mode)
- **Vite** — dev server on port 3000, API proxy to `localhost:7236`
- **React Router v6** — client-side routing
- **Recharts** — portfolio performance and sparkline charts
- **Lucide React** — icons
- **CSS Modules** — component-scoped styles
- **Storybook 8** — component development and documentation

## Getting Started

```bash
npm install
npm run dev        # Start dev server at http://localhost:3000
```

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start development server |
| `npm run build` | Type-check and build for production |
| `npm run lint` | Run ESLint |
| `npm run preview` | Preview production build locally |
| `npm run storybook` | Launch Storybook at [localhost:6006](http://localhost:6006) |
| `npm run build-storybook` | Build static Storybook |

## Project Structure

```
src/
├── App.tsx                    # Root router (/ → /login); stub routes for watchlist, portfolio, etc.
├── main.tsx
├── pages/
│   ├── Login/                 # Split-panel login with Auth0 SSO placeholder + email form
│   └── Dashboard/             # Portfolio stats, performance chart, holdings list, watchlist
├── components/
│   ├── MarketTicker/          # Top header: live clock, scrolling market indices strip
│   ├── Sidebar/               # Nav with active states, user area, logout
│   └── StockTickerCard/       # Sparkline chart, OHLV stats, direction theming + stories
├── design-system/
│   ├── components/
│   │   ├── Button/            # 5 variants, 5 sizes, loading state, icon support + stories
│   │   ├── Input/             # Label, hint, error, icons, mono mode + stories
│   │   ├── Card/              # Elevated, interactive, accent variants + stories
│   │   └── Badge/             # Market up/down/flat/info/neutral/amber variants + stories
│   ├── tokens/                # TypeScript token definitions: colors, typography, spacing, shadows, animation
│   └── styles/                # tokens.css (CSS custom properties), reset.css, global.css
├── data/mockStocks.ts         # Mock stock + portfolio data, generatePriceHistory() utility
└── types/stock.ts             # TypeScript interfaces + formatCurrency/formatPercent/formatVolume utils
```

**Path aliases:** `@` → `src/`, `@ds` → `src/design-system/`

## Design System

Design tokens are defined in `src/design-system/tokens/` as TypeScript and mirrored as CSS custom properties in `src/design-system/styles/tokens.css`. Always use CSS variables in stylesheets — never hardcode colors or spacing.

Key color semantics:
- `--color-interactive-primary` (cyan) — brand/interactive elements
- `--color-market-up` (green) — positive price movement
- `--color-market-down` (red) — negative price movement

Key layout variables: `--sidebar-width: 220px`, `--header-height: 56px`

Staggered entry animations: use `animate-in` and `animate-in-delay-{1..N}` CSS classes (defined in `global.css`).

## Storybook

All design system components and `StockTickerCard` have `.stories.tsx` files. The Storybook preview uses the app's own CSS tokens with a dark theme by default. Background presets: dark (default), surface, light.

## Backend

The Vite dev server proxies `/api` requests to `http://localhost:7236`. The backend is not included in this repository. All data currently uses mocks from `src/data/mockStocks.ts`.

## Authentication

The login page has placeholder Auth0 integration points. Currently uses a simulated login flow that redirects to the dashboard. Integration points are marked with comments like `// Replace with: await auth0Client.loginWithRedirect()`.

## AI Development

See [CLAUDE.md](./CLAUDE.md) for guidance used by Claude Code when working in this repository.
