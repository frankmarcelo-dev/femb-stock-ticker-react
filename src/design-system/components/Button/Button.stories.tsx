import type { Meta, StoryObj } from '@storybook/react'
import { TrendingUp, Plus, ArrowRight, Trash2 } from 'lucide-react'
import { Button } from './Button'

const meta: Meta<typeof Button> = {
  title: 'Design System/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'dark',
      values: [{ name: 'dark', value: '#07090f' }],
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'ghost', 'danger', 'outline'],
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
  },
}

export default meta
type Story = StoryObj<typeof Button>

export const Primary: Story = {
  args: { variant: 'primary', children: 'Connect Portfolio' },
}

export const Secondary: Story = {
  args: { variant: 'secondary', children: 'View Details' },
}

export const Ghost: Story = {
  args: { variant: 'ghost', children: 'Dismiss' },
}

export const Danger: Story = {
  args: { variant: 'danger', children: 'Remove Ticker' },
}

export const Outline: Story = {
  args: { variant: 'outline', children: 'Add to Watchlist' },
}

export const WithLeftIcon: Story = {
  args: {
    variant: 'primary',
    children: 'Add Ticker',
    leftIcon: <Plus size={14} />,
  },
}

export const WithRightIcon: Story = {
  args: {
    variant: 'outline',
    children: 'View Market',
    rightIcon: <ArrowRight size={14} />,
  },
}

export const Loading: Story = {
  args: { variant: 'primary', children: 'Fetching Data', loading: true },
}

export const FullWidth: Story = {
  args: { variant: 'primary', children: 'Sign In', fullWidth: true },
  decorators: [(Story) => <div style={{ width: 300 }}><Story /></div>],
}

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
        <Button variant="primary" leftIcon={<TrendingUp size={14} />}>Buy</Button>
        <Button variant="secondary">View Chart</Button>
        <Button variant="outline">Add to Watchlist</Button>
        <Button variant="ghost">Dismiss</Button>
        <Button variant="danger" leftIcon={<Trash2 size={14} />}>Remove</Button>
      </div>
      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
        <Button variant="primary" size="xs">XS</Button>
        <Button variant="primary" size="sm">SM</Button>
        <Button variant="primary" size="md">MD</Button>
        <Button variant="primary" size="lg">LG</Button>
        <Button variant="primary" size="xl">XL</Button>
      </div>
    </div>
  ),
}
