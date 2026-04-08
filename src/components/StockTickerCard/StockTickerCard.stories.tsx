import type { Meta, StoryObj } from '@storybook/react'
import { StockTickerCard } from './StockTickerCard'
import { mockStocks, generatePriceHistory } from '../../data/mockStocks'

const meta: Meta<typeof StockTickerCard> = {
  title: 'Components/StockTickerCard',
  component: StockTickerCard,
  parameters: {
    layout: 'centered',
    backgrounds: { default: 'dark', values: [{ name: 'dark', value: '#07090f' }] },
  },
  tags: ['autodocs'],
  decorators: [(Story) => <div style={{ width: 280 }}><Story /></div>],
}

export default meta
type Story = StoryObj<typeof StockTickerCard>

const aapl = mockStocks[0]
const tsla = mockStocks[2]
const msft = mockStocks[3]

export const PositiveWithSparkline: Story = {
  args: {
    stock: aapl,
    priceHistory: generatePriceHistory(aapl.price, 78, 0.006),
  },
}

export const NegativeWithSparkline: Story = {
  args: {
    stock: tsla,
    priceHistory: generatePriceHistory(tsla.price, 78, 0.01),
  },
}

export const WithoutSparkline: Story = {
  args: { stock: msft },
}

export const Grid: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 280px)', gap: 16 }}>
      {mockStocks.slice(0, 3).map((stock) => (
        <StockTickerCard
          key={stock.symbol}
          stock={stock}
          priceHistory={generatePriceHistory(stock.price, 78, 0.007)}
        />
      ))}
    </div>
  ),
  decorators: [(Story) => <div style={{ width: 'auto' }}><Story /></div>],
}
