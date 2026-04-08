import type { Meta, StoryObj } from '@storybook/react'
import { Search, DollarSign, TrendingUp } from 'lucide-react'
import { Input } from './Input'

const meta: Meta<typeof Input> = {
  title: 'Design System/Input',
  component: Input,
  parameters: {
    layout: 'centered',
    backgrounds: { default: 'dark', values: [{ name: 'dark', value: '#07090f' }] },
  },
  tags: ['autodocs'],
  decorators: [(Story) => <div style={{ width: 320 }}><Story /></div>],
}

export default meta
type Story = StoryObj<typeof Input>

export const Default: Story = {
  args: { label: 'Email', placeholder: 'trader@firm.com' },
}

export const WithIcon: Story = {
  args: {
    label: 'Search Tickers',
    placeholder: 'AAPL, TSLA, MSFT…',
    leftIcon: <Search size={14} />,
  },
}

export const MonoTicker: Story = {
  args: {
    label: 'Symbol',
    placeholder: 'AAPL',
    mono: true,
    leftIcon: <TrendingUp size={14} />,
  },
}

export const WithHint: Story = {
  args: {
    label: 'Price Alert',
    placeholder: '0.00',
    hint: 'Notify when price crosses this threshold',
    leftIcon: <DollarSign size={14} />,
    type: 'number',
  },
}

export const WithError: Story = {
  args: {
    label: 'Email',
    placeholder: 'trader@firm.com',
    value: 'invalid-email',
    error: 'Please enter a valid email address',
  },
}

export const Password: Story = {
  args: {
    label: 'Password',
    type: 'password',
    placeholder: '••••••••',
  },
}

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <Input size="sm" placeholder="Small input" />
      <Input size="md" placeholder="Medium input (default)" />
      <Input size="lg" placeholder="Large input" />
    </div>
  ),
}
