export interface StockQuote {
  symbol: string
  name: string
  price: number
  change: number
  changePercent: number
  open: number
  high: number
  low: number
  volume: number
  marketCap: number
  exchange: string
  sector: string
  lastUpdated: string
}

export interface PricePoint {
  time: string
  price: number
  volume?: number
}

export interface WatchlistItem {
  symbol: string
  addedAt: string
  alertPrice?: number
}

export interface Portfolio {
  holdings: PortfolioHolding[]
  totalValue: number
  totalCost: number
  totalGain: number
  totalGainPercent: number
  dayGain: number
  dayGainPercent: number
}

export interface PortfolioHolding {
  symbol: string
  name: string
  shares: number
  avgCost: number
  currentPrice: number
  value: number
  gain: number
  gainPercent: number
  dayChange: number
  dayChangePercent: number
  weight: number
}

export type MarketDirection = 'up' | 'down' | 'flat'

export function getMarketDirection(change: number): MarketDirection {
  if (Math.abs(change) < 0.05) return 'flat'
  return change > 0 ? 'up' : 'down'
}

export function formatCurrency(value: number, compact = false): string {
  if (compact) {
    if (Math.abs(value) >= 1e12) return `$${(value / 1e12).toFixed(2)}T`
    if (Math.abs(value) >= 1e9)  return `$${(value / 1e9).toFixed(2)}B`
    if (Math.abs(value) >= 1e6)  return `$${(value / 1e6).toFixed(2)}M`
  }
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value)
}

export function formatPercent(value: number): string {
  const sign = value >= 0 ? '+' : ''
  return `${sign}${value.toFixed(2)}%`
}

export function formatVolume(value: number): string {
  if (value >= 1e9) return `${(value / 1e9).toFixed(1)}B`
  if (value >= 1e6) return `${(value / 1e6).toFixed(1)}M`
  if (value >= 1e3) return `${(value / 1e3).toFixed(1)}K`
  return value.toString()
}
