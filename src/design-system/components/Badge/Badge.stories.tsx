import type { Meta, StoryObj } from '@storybook/react'
import { Badge } from './Badge'

const meta: Meta<typeof Badge> = {
  title: 'Design System/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
    backgrounds: { default: 'dark', values: [{ name: 'dark', value: '#07090f' }] },
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Badge>

export const Up: Story = { args: { variant: 'up', children: '+4.23%' } }
export const Down: Story = { args: { variant: 'down', children: '-1.87%' } }
export const Flat: Story = { args: { variant: 'flat', children: '+0.01%' } }
export const Info: Story = { args: { variant: 'info', children: 'LIVE' } }
export const Neutral: Story = { args: { variant: 'neutral', children: 'NYSE' } }
export const Amber: Story = { args: { variant: 'amber', children: 'EARNINGS' } }

export const WithDot: Story = {
  args: { variant: 'info', dot: true, children: 'Market Open' },
}

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', alignItems: 'center' }}>
      <Badge variant="up">+4.23%</Badge>
      <Badge variant="down">-1.87%</Badge>
      <Badge variant="flat">+0.01%</Badge>
      <Badge variant="info" dot>LIVE</Badge>
      <Badge variant="neutral">NYSE</Badge>
      <Badge variant="amber">EARNINGS</Badge>
    </div>
  ),
}

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
      <Badge size="sm" variant="up">+4.23%</Badge>
      <Badge size="md" variant="up">+4.23%</Badge>
      <Badge size="lg" variant="up">+4.23%</Badge>
    </div>
  ),
}
