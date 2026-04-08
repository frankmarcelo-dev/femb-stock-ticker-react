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

```text
src/
├── App.tsx                    # Root router (/ → /login)
├── pages/                     # Login, Dashboard
├── components/                # App components: MarketTicker, Sidebar, StockTickerCard
├── design-system/
│   ├── components/            # Button, Input, Badge, Card
│   ├── tokens/                # TypeScript design tokens
│   └── styles/                # CSS custom properties, reset, globals
├── data/mockStocks.ts         # Mock stock data and price history generator
└── types/stock.ts             # TypeScript interfaces and formatting utilities
```

## Design System

Design tokens are defined in `src/design-system/tokens/` and exposed as CSS custom properties via `src/design-system/styles/tokens.css`. All components use these variables — never hardcode colors or spacing.

Path aliases: `@` → `src/`, `@ds` → `src/design-system/`

## Folder Structure 
```
frontend/
├── .storybook/
│   ├── main.ts           — Storybook config with path aliases
│   └── preview.tsx       — Dark theme + design token imports
├── src/
│   ├── design-system/
│   │   ├── tokens/       — colors, typography, spacing, shadows, animation (TS)
│   │   ├── styles/       — tokens.css, reset.css, global.css
│   │   └── components/
│   │       ├── Button/   — 5 variants, 5 sizes, loading, icons + stories
│   │       ├── Input/    — label, hint, error, icons, mono mode + stories
│   │       ├── Card/     — elevated, interactive, accent variants + stories
│   │       └── Badge/    — market up/down/flat/info/neutral/amber + stories
│   ├── components/
│   │   ├── StockTickerCard/  — sparkline, OHLV stats, direction theming + stories
│   │   ├── Sidebar/          — nav with active states, user area, logout
│   │   └── MarketTicker/     — live clock, market indices strip, header
│   ├── pages/
│   │   ├── Login/        — split-panel login with Auth0 SSO + email form
│   │   └── Dashboard/    — portfolio stats, performance chart, holdings, watchlist
│   ├── data/mockStocks.ts
│   └── types/stock.ts
├── package.json
└── vite.config.ts
```

## Backend

The Vite dev server proxies `/api` requests to `http://localhost:7236`. The backend is not included in this repository. All data currently uses mocks from `src/data/mockStocks.ts`.

## Authentication

The login page has placeholder Auth0 integration points. Currently uses a simulated login flow that redirects to the dashboard.

## AI Development

See [CLAUDE.md](./CLAUDE.md) for guidance used by Claude Code when working in this repository.
