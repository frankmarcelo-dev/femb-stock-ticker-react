import { useState, useMemo } from 'react'
import clsx from 'clsx'
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer,
} from 'recharts'
import { TrendingUp, TrendingDown, Plus } from 'lucide-react'
import { Sidebar } from '../../components/Sidebar'
import { MarketTicker } from '../../components/MarketTicker'
import { StockTickerCard } from '../../components/StockTickerCard'
import { Button, Badge } from '@ds/components'
import {
  mockStocks,
  mockPortfolio,
  mockWatchlist,
  generatePriceHistory,
} from '../../data/mockStocks'
import {
  formatCurrency,
  formatPercent,
  getMarketDirection,
} from '../../types/stock'
import styles from './DashboardPage.module.css'

const RANGES = ['1D', '1W', '1M', '3M', 'YTD', '1Y'] as const
type Range = (typeof RANGES)[number]

function generatePortfolioHistory(range: Range): { time: string; value: number }[] {
  const points = { '1D': 78, '1W': 35, '1M': 30, '3M': 90, 'YTD': 72, '1Y': 52 }[range]
  const base = mockPortfolio.totalValue
  let val = base * 0.82
  return Array.from({ length: points }, (_, i) => {
    val = val * (1 + (Math.random() - 0.46) * 0.012)
    return {
      time: `${i}`,
      value: parseFloat(val.toFixed(2)),
    }
  }).concat([{ time: String(points), value: base }])
}

export function DashboardPage() {
  const [activeRange, setActiveRange] = useState<Range>('1D')

  const portfolioHistory = useMemo(
    () => generatePortfolioHistory(activeRange),
    [activeRange],
  )

  const watchlistStocks = useMemo(
    () => mockStocks.filter((s) => mockWatchlist.includes(s.symbol)),
    [],
  )

  const priceHistories = useMemo(
    () =>
      Object.fromEntries(
        watchlistStocks.map((s) => [
          s.symbol,
          generatePriceHistory(s.price, 78, 0.007),
        ]),
      ),
    [watchlistStocks],
  )

  const portfolio = mockPortfolio
  const isPortfolioUp = portfolio.dayGain >= 0

  return (
    <div className={styles.layout}>
      <Sidebar userName="Alex Trader" />

      <div className={styles.main}>
        <MarketTicker pageTitle="Dashboard" />

        <main className={styles.content}>
          {/* ─── Summary Stats ─── */}
          <div className={styles.statsRow}>
            <div className={`${styles.statCard} animate-in`}>
              <p className={styles.statLabel}>Portfolio Value</p>
              <p className={styles.statValue}>
                {formatCurrency(portfolio.totalValue)}
              </p>
              <div className={clsx(styles.statChange, isPortfolioUp ? styles.up : styles.down)}>
                {isPortfolioUp ? <TrendingUp size={10} /> : <TrendingDown size={10} />}
                {formatCurrency(portfolio.dayGain)} today
              </div>
            </div>

            <div className={`${styles.statCard} animate-in animate-in-delay-1`}>
              <p className={styles.statLabel}>Day Gain</p>
              <p className={styles.statValue} style={{
                color: isPortfolioUp
                  ? 'var(--color-market-up)'
                  : 'var(--color-market-down)',
              }}>
                {formatPercent(portfolio.dayGainPercent)}
              </p>
              <div className={clsx(styles.statChange, styles.neutral)}>
                {formatCurrency(portfolio.dayGain)} change
              </div>
            </div>

            <div className={`${styles.statCard} animate-in animate-in-delay-2`}>
              <p className={styles.statLabel}>Total Return</p>
              <p className={styles.statValue} style={{
                color: portfolio.totalGain >= 0
                  ? 'var(--color-market-up)'
                  : 'var(--color-market-down)',
              }}>
                {formatPercent(portfolio.totalGainPercent)}
              </p>
              <div className={clsx(styles.statChange, styles.neutral)}>
                {formatCurrency(portfolio.totalGain)} all time
              </div>
            </div>

            <div className={`${styles.statCard} animate-in animate-in-delay-3`}>
              <p className={styles.statLabel}>Positions</p>
              <p className={styles.statValue}>{portfolio.holdings.length}</p>
              <div className={clsx(styles.statChange, styles.neutral)}>
                across {new Set(portfolio.holdings.map((h) => mockStocks.find(s => s.symbol === h.symbol)?.exchange)).size} exchanges
              </div>
            </div>
          </div>

          {/* ─── Chart + Holdings ─── */}
          <div className={styles.middleRow}>
            {/* Portfolio chart */}
            <div className={`${styles.chartPanel} animate-in animate-in-delay-2`}>
              <div className={styles.chartHeader}>
                <div>
                  <p className={styles.chartTitle}>Portfolio Performance</p>
                  <p className={styles.chartSubtitle}>
                    {formatCurrency(portfolio.totalValue)} · {formatPercent(portfolio.totalGainPercent)} total return
                  </p>
                </div>
                <div className={styles.rangeButtons}>
                  {RANGES.map((r) => (
                    <button
                      key={r}
                      className={clsx(styles.rangeBtn, activeRange === r && styles.active)}
                      onClick={() => setActiveRange(r)}
                    >
                      {r}
                    </button>
                  ))}
                </div>
              </div>

              <div className={styles.chartArea}>
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={portfolioHistory} margin={{ top: 4, right: 0, bottom: 0, left: 0 }}>
                    <defs>
                      <linearGradient id="portfolioGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%"  stopColor="#00d4f5" stopOpacity={0.2} />
                        <stop offset="95%" stopColor="#00d4f5" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid
                      strokeDasharray="3 3"
                      stroke="var(--color-border-subtle)"
                      vertical={false}
                    />
                    <XAxis
                      dataKey="time"
                      tick={false}
                      axisLine={false}
                      tickLine={false}
                    />
                    <YAxis
                      domain={['auto', 'auto']}
                      tick={{ fontSize: 10, fill: 'var(--color-text-tertiary)', fontFamily: 'var(--font-mono)' }}
                      axisLine={false}
                      tickLine={false}
                      tickFormatter={(v) => `$${(v / 1000).toFixed(0)}k`}
                      width={48}
                    />
                    <Tooltip
                      contentStyle={{
                        background: 'var(--color-bg-overlay)',
                        border: '1px solid var(--color-border-default)',
                        borderRadius: '6px',
                        padding: '8px 12px',
                        fontSize: '12px',
                        fontFamily: 'var(--font-mono)',
                        color: 'var(--color-text-primary)',
                      }}
                      formatter={(value: number) => [formatCurrency(value), 'Portfolio']}
                      labelStyle={{ display: 'none' }}
                    />
                    <Area
                      type="monotone"
                      dataKey="value"
                      stroke="#00d4f5"
                      strokeWidth={2}
                      fill="url(#portfolioGrad)"
                      dot={false}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Holdings list */}
            <div className={`${styles.holdingsPanel} animate-in animate-in-delay-3`}>
              <div className={styles.holdingsHeader}>
                <span className={styles.holdingsTitle}>Holdings</span>
                <Badge variant="neutral" size="sm">{portfolio.holdings.length}</Badge>
              </div>
              <div className={styles.holdingsList}>
                {portfolio.holdings.map((h) => {
                  const dir = getMarketDirection(h.dayChangePercent)
                  return (
                    <div key={h.symbol} className={styles.holdingRow}>
                      <span className={styles.holdingSymbol}>{h.symbol}</span>
                      <div className={styles.holdingInfo}>
                        <p className={styles.holdingName}>{h.name}</p>
                        <p className={styles.holdingShares}>{h.shares} shares · {h.weight.toFixed(1)}%</p>
                      </div>
                      <div className={styles.holdingValues}>
                        <p className={styles.holdingValue}>{formatCurrency(h.value)}</p>
                        <p className={clsx(styles.holdingChange, styles[dir])}>
                          {formatPercent(h.dayChangePercent)}
                        </p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>

          {/* ─── Watchlist ─── */}
          <div className={styles.watchlistSection}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>Watchlist</h2>
              <Button variant="outline" size="sm" leftIcon={<Plus size={12} />}>
                Add Ticker
              </Button>
            </div>

            <div className={styles.tickerGrid}>
              {watchlistStocks.map((stock, i) => (
                <StockTickerCard
                  key={stock.symbol}
                  stock={stock}
                  priceHistory={priceHistories[stock.symbol]}
                  className={`animate-in animate-in-delay-${i + 1}`}
                />
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
