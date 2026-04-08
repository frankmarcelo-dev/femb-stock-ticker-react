import { useState, useEffect } from 'react'
import clsx from 'clsx'
import { Bell, Search } from 'lucide-react'
import { Button } from '@ds/components'
import { marketIndices } from '../../data/mockStocks'
import { getMarketDirection, formatPercent } from '../../types/stock'
import styles from './MarketTicker.module.css'

interface MarketTickerProps {
  pageTitle?: string
}

export function MarketTicker({ pageTitle = 'Dashboard' }: MarketTickerProps) {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const id = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(id)
  }, [])

  const timeStr = time.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  })

  return (
    <header className={styles.header}>
      <h1 className={styles.title}>{pageTitle}</h1>

      <div className={styles.divider} />

      {/* Market indices */}
      <div className={styles.indices}>
        {marketIndices.map((index) => {
          const dir = getMarketDirection(index.changePercent)
          return (
            <div key={index.symbol} className={styles.indexItem}>
              <span className={styles.indexSymbol}>{index.symbol}</span>
              <span className={styles.indexPrice}>
                {index.price.toLocaleString('en-US', {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </span>
              <span className={clsx(styles.indexChange, styles[dir])}>
                {formatPercent(index.changePercent)}
              </span>
            </div>
          )
        })}
      </div>

      {/* Right side */}
      <div className={styles.actions}>
        <div className={styles.statusIndicator}>
          <span className={styles.liveDot} />
          LIVE
        </div>
        <span className={styles.clock}>{timeStr}</span>
        <Button variant="ghost" size="sm" iconOnly aria-label="Search">
          <Search size={14} />
        </Button>
        <Button variant="ghost" size="sm" iconOnly aria-label="Notifications">
          <Bell size={14} />
        </Button>
      </div>
    </header>
  )
}
