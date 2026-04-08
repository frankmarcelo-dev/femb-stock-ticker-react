import type { StockQuote, PricePoint, Portfolio } from '../types/stock'

export const mockStocks: StockQuote[] = [
  {
    symbol: 'AAPL',
    name: 'Apple Inc.',
    price: 227.84,
    change: 4.23,
    changePercent: 1.89,
    open: 223.61,
    high: 228.42,
    low: 223.01,
    volume: 52_430_000,
    marketCap: 3_520_000_000_000,
    exchange: 'NASDAQ',
    sector: 'Technology',
    lastUpdated: new Date().toISOString(),
  },
  {
    symbol: 'NVDA',
    name: 'NVIDIA Corporation',
    price: 875.39,
    change: 18.74,
    changePercent: 2.19,
    open: 856.65,
    high: 881.90,
    low: 851.20,
    volume: 41_200_000,
    marketCap: 2_160_000_000_000,
    exchange: 'NASDAQ',
    sector: 'Technology',
    lastUpdated: new Date().toISOString(),
  },
  {
    symbol: 'TSLA',
    name: 'Tesla, Inc.',
    price: 248.42,
    change: -7.61,
    changePercent: -2.97,
    open: 256.03,
    high: 257.88,
    low: 246.15,
    volume: 88_700_000,
    marketCap: 792_000_000_000,
    exchange: 'NASDAQ',
    sector: 'Consumer Discretionary',
    lastUpdated: new Date().toISOString(),
  },
  {
    symbol: 'MSFT',
    name: 'Microsoft Corporation',
    price: 415.32,
    change: 2.18,
    changePercent: 0.53,
    open: 413.14,
    high: 416.70,
    low: 412.50,
    volume: 19_800_000,
    marketCap: 3_090_000_000_000,
    exchange: 'NASDAQ',
    sector: 'Technology',
    lastUpdated: new Date().toISOString(),
  },
  {
    symbol: 'META',
    name: 'Meta Platforms, Inc.',
    price: 558.76,
    change: 11.44,
    changePercent: 2.09,
    open: 547.32,
    high: 561.20,
    low: 546.80,
    volume: 16_300_000,
    marketCap: 1_420_000_000_000,
    exchange: 'NASDAQ',
    sector: 'Communication Services',
    lastUpdated: new Date().toISOString(),
  },
  {
    symbol: 'GOOGL',
    name: 'Alphabet Inc.',
    price: 171.95,
    change: -1.32,
    changePercent: -0.76,
    open: 173.27,
    high: 174.10,
    low: 171.40,
    volume: 22_100_000,
    marketCap: 2_130_000_000_000,
    exchange: 'NASDAQ',
    sector: 'Communication Services',
    lastUpdated: new Date().toISOString(),
  },
  {
    symbol: 'AMZN',
    name: 'Amazon.com, Inc.',
    price: 198.73,
    change: 3.55,
    changePercent: 1.82,
    open: 195.18,
    high: 199.42,
    low: 194.88,
    volume: 34_600_000,
    marketCap: 2_090_000_000_000,
    exchange: 'NASDAQ',
    sector: 'Consumer Discretionary',
    lastUpdated: new Date().toISOString(),
  },
  {
    symbol: 'JPM',
    name: 'JPMorgan Chase & Co.',
    price: 234.58,
    change: -4.12,
    changePercent: -1.73,
    open: 238.70,
    high: 239.50,
    low: 233.90,
    volume: 11_200_000,
    marketCap: 672_000_000_000,
    exchange: 'NYSE',
    sector: 'Financials',
    lastUpdated: new Date().toISOString(),
  },
]

export const mockWatchlist = ['AAPL', 'NVDA', 'TSLA', 'MSFT', 'META']

export function generatePriceHistory(
  basePrice: number,
  points = 78,
  volatility = 0.008,
): PricePoint[] {
  const now = new Date()
  const marketOpen = new Date(now)
  marketOpen.setHours(9, 30, 0, 0)

  let price = basePrice * (1 - volatility * points * 0.5)
  const history: PricePoint[] = []

  for (let i = 0; i < points; i++) {
    const time = new Date(marketOpen.getTime() + i * 5 * 60 * 1000)
    const change = (Math.random() - 0.48) * volatility * price
    price = Math.max(price + change, 1)
    history.push({
      time: time.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
      price: parseFloat(price.toFixed(2)),
      volume: Math.floor(Math.random() * 500000) + 100000,
    })
  }

  // End near basePrice
  history[history.length - 1].price = basePrice
  return history
}

export const mockPortfolio: Portfolio = {
  totalValue: 142_847.32,
  totalCost: 118_240.00,
  totalGain: 24_607.32,
  totalGainPercent: 20.81,
  dayGain: 1_284.56,
  dayGainPercent: 0.91,
  holdings: [
    {
      symbol: 'AAPL', name: 'Apple Inc.',
      shares: 50, avgCost: 180.00, currentPrice: 227.84,
      value: 11_392.00, gain: 2_392.00, gainPercent: 26.58,
      dayChange: 211.50, dayChangePercent: 1.89, weight: 7.98,
    },
    {
      symbol: 'NVDA', name: 'NVIDIA Corporation',
      shares: 20, avgCost: 650.00, currentPrice: 875.39,
      value: 17_507.80, gain: 4_507.80, gainPercent: 34.68,
      dayChange: 374.80, dayChangePercent: 2.19, weight: 12.26,
    },
    {
      symbol: 'TSLA', name: 'Tesla, Inc.',
      shares: 30, avgCost: 290.00, currentPrice: 248.42,
      value: 7_452.60, gain: -1_247.40, gainPercent: -14.34,
      dayChange: -228.30, dayChangePercent: -2.97, weight: 5.22,
    },
    {
      symbol: 'MSFT', name: 'Microsoft Corporation',
      shares: 80, avgCost: 320.00, currentPrice: 415.32,
      value: 33_225.60, gain: 7_625.60, gainPercent: 29.78,
      dayChange: 174.40, dayChangePercent: 0.53, weight: 23.26,
    },
    {
      symbol: 'META', name: 'Meta Platforms, Inc.',
      shares: 25, avgCost: 420.00, currentPrice: 558.76,
      value: 13_969.00, gain: 3_469.00, gainPercent: 33.04,
      dayChange: 286.00, dayChangePercent: 2.09, weight: 9.78,
    },
    {
      symbol: 'AMZN', name: 'Amazon.com, Inc.',
      shares: 100, avgCost: 160.00, currentPrice: 198.73,
      value: 19_873.00, gain: 3_873.00, gainPercent: 24.21,
      dayChange: 355.00, dayChangePercent: 1.82, weight: 13.91,
    },
    {
      symbol: 'GOOGL', name: 'Alphabet Inc.',
      shares: 150, avgCost: 140.00, currentPrice: 171.95,
      value: 25_792.50, gain: 4_792.50, gainPercent: 22.82,
      dayChange: -198.00, dayChangePercent: -0.76, weight: 18.06,
    },
    {
      symbol: 'JPM', name: 'JPMorgan Chase & Co.',
      shares: 30, avgCost: 215.00, currentPrice: 234.58,
      value: 7_037.40, gain: 587.40, gainPercent: 9.11,
      dayChange: -123.60, dayChangePercent: -1.73, weight: 4.93,
    },
  ],
}

export const marketIndices = [
  { symbol: 'SPY', name: 'S&P 500', price: 5432.10, change: 18.42, changePercent: 0.34 },
  { symbol: 'QQQ', name: 'NASDAQ 100', price: 18924.67, change: 124.30, changePercent: 0.66 },
  { symbol: 'DIA', name: 'DOW 30', price: 39847.20, change: -87.15, changePercent: -0.22 },
  { symbol: 'VIX', name: 'Volatility', price: 14.82, change: -0.93, changePercent: -5.91 },
]
