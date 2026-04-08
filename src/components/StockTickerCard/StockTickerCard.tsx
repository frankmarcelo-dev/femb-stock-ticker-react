import { useMemo } from 'react'
import clsx from 'clsx'
import { AreaChart, Area, ResponsiveContainer, Tooltip } from 'recharts'
import { Badge } from '@ds/components'
import type { StockQuote, PricePoint } from '../../types/stock'
import { getMarketDirection, formatCurrency, formatPercent, formatVolume } from '../../types/stock'
import styles from './StockTickerCard.module.css'

interface StockTickerCardProps {
  stock: StockQuote
  priceHistory?: PricePoint[]
  onClick?: () => void
  className?: string
}

const SPARKLINE_UP_COLOR   = '#00c874'
const SPARKLINE_DOWN_COLOR = '#f03d26'
const SPARKLINE_FLAT_COLOR = '#607290'

export function StockTickerCard({
  stock,
  priceHistory,
  onClick,
  className,
}: StockTickerCardProps) {
  const direction = getMarketDirection(stock.changePercent)

  const sparkColor = useMemo(() => {
    if (direction === 'up')   return SPARKLINE_UP_COLOR
    if (direction === 'down') return SPARKLINE_DOWN_COLOR
    return SPARKLINE_FLAT_COLOR
  }, [direction])

  const chartData = priceHistory?.map((p) => ({ time: p.time, price: p.price }))

  const changeSign = stock.change >= 0 ? '+' : ''

  return (
    <article
      className={clsx(styles.card, styles[direction], className)}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && onClick?.()}
      aria-label={`${stock.symbol} stock card`}
    >
      {/* Header */}
      <div className={styles.header}>
        <div className={styles.symbolBlock}>
          <span className={styles.symbol}>{stock.symbol}</span>
          <span className={styles.name} title={stock.name}>{stock.name}</span>
        </div>
        <div className={styles.badgeRow}>
          <Badge variant="neutral" size="sm">{stock.exchange}</Badge>
          <Badge
            variant={direction === 'up' ? 'up' : direction === 'down' ? 'down' : 'flat'}
            size="sm"
          >
            {formatPercent(stock.changePercent)}
          </Badge>
        </div>
      </div>

      {/* Price */}
      <div className={styles.priceSection}>
        <div className={styles.price}>{formatCurrency(stock.price)}</div>
        <div className={styles.changeRow}>
          <span className={clsx(styles.change, styles[direction])}>
            {changeSign}{formatCurrency(stock.change)}
          </span>
        </div>
      </div>

      {/* Sparkline */}
      {chartData && chartData.length > 0 && (
        <div className={styles.sparkline}>
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={chartData} margin={{ top: 0, right: 0, bottom: 0, left: 0 }}>
              <defs>
                <linearGradient id={`grad-${stock.symbol}`} x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%"  stopColor={sparkColor} stopOpacity={0.25} />
                  <stop offset="95%" stopColor={sparkColor} stopOpacity={0} />
                </linearGradient>
              </defs>
              <Area
                type="monotone"
                dataKey="price"
                stroke={sparkColor}
                strokeWidth={1.5}
                fill={`url(#grad-${stock.symbol})`}
                dot={false}
                isAnimationActive={false}
              />
              <Tooltip
                contentStyle={{
                  background: 'var(--color-bg-overlay)',
                  border: '1px solid var(--color-border-default)',
                  borderRadius: '4px',
                  padding: '4px 8px',
                  fontSize: '11px',
                  fontFamily: 'var(--font-mono)',
                  color: 'var(--color-text-primary)',
                }}
                itemStyle={{ color: sparkColor }}
                formatter={(value: number) => [formatCurrency(value), '']}
                labelStyle={{ display: 'none' }}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      )}

      {/* Stats */}
      <div className={styles.stats}>
        <div className={styles.stat}>
          <span className={styles.statLabel}>Open</span>
          <span className={styles.statValue}>{formatCurrency(stock.open)}</span>
        </div>
        <div className={styles.stat}>
          <span className={styles.statLabel}>High</span>
          <span className={styles.statValue}>{formatCurrency(stock.high)}</span>
        </div>
        <div className={styles.stat}>
          <span className={styles.statLabel}>Low</span>
          <span className={styles.statValue}>{formatCurrency(stock.low)}</span>
        </div>
        <div className={styles.stat}>
          <span className={styles.statLabel}>Vol</span>
          <span className={styles.statValue}>{formatVolume(stock.volume)}</span>
        </div>
      </div>
    </article>
  )
}
