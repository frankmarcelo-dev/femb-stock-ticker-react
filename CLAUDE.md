# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev          # Start dev server on port 3000
npm run build        # TypeScript check + Vite production build
npm run lint         # ESLint
npm run preview      # Preview production build
npm run storybook    # Launch Storybook on port 6006
npm run build-storybook  # Build static Storybook
```

There is no test runner configured.

## Architecture

**Tech stack:** React 18 + TypeScript + Vite, React Router v6, Recharts for charts, Lucide React for icons, CSS Modules for styling.

**Path aliases:**
- `@` → `src/`
- `@ds` → `src/design-system/`

**API proxy:** `/api` requests proxy to `http://localhost:7236` (backend not yet implemented).

### Key Structure

```
src/
├── App.tsx                    # BrowserRouter with routes; / redirects to /login
├── pages/                     # Route-level components (Login, Dashboard)
├── components/                # App-specific components (MarketTicker, Sidebar, StockTickerCard)
├── design-system/             # Component library + token system
│   ├── components/            # Button, Input, Badge, Card — all with Storybook stories
│   ├── tokens/                # TypeScript token definitions (colors, typography, spacing, etc.)
│   └── styles/                # tokens.css (CSS custom properties), reset.css, global.css
├── data/mockStocks.ts         # All mock data + generatePriceHistory() utility
└── types/stock.ts             # Interfaces + formatCurrency/formatPercent/formatVolume utils
```

### Design System

All design tokens are defined in `src/design-system/tokens/` as TypeScript and mirrored as CSS custom properties in `src/design-system/styles/tokens.css`. Always use CSS variables (e.g. `var(--color-text-primary)`) in stylesheets — never hardcode colors or spacing.

Key CSS layout variables: `--sidebar-width: 220px`, `--header-height: 56px`.

Color semantics: cyan (`--color-interactive-primary`) for brand/interactive, green (`--color-market-up`) for positive price movement, red (`--color-market-down`) for negative.

### Styling Conventions

- Each component has a co-located `*.module.css` file
- Use `clsx` for conditional classnames
- Staggered entry animations use `animate-in-delay-{1..N}` CSS classes defined in `global.css`

### Storybook

All design system components have `.stories.tsx` files. The preview uses a dark theme with the app's own CSS tokens loaded. Background presets: dark (default), surface, light.

### Routes

`App.tsx` defines routes for `/watchlist`, `/portfolio`, `/markets`, `/alerts`, and `/settings`, but all are placeholder stubs that render `DashboardPage`. Only `/login` and `/dashboard` are real pages.

### Authentication

`LoginPage` has placeholder Auth0 integration — simulated login that navigates to `/dashboard`. Real integration points are marked with comments like `// Replace with: await auth0Client.loginWithRedirect()`.
