import type { Meta, StoryObj } from '@storybook/react'
import { Card } from './Card'

const meta: Meta<typeof Card> = {
  title: 'Design System/Card',
  component: Card,
  parameters: {
    layout: 'centered',
    backgrounds: { default: 'dark', values: [{ name: 'dark', value: '#07090f' }] },
  },
  tags: ['autodocs'],
  decorators: [(Story) => <div style={{ width: 320 }}><Story /></div>],
}

export default meta
type Story = StoryObj<typeof Card>

const Content = () => (
  <div style={{ color: '#e2e8f6' }}>
    <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.125rem', marginBottom: 8 }}>Card Title</p>
    <p style={{ color: '#8896ac', fontSize: '0.875rem' }}>Supporting information goes here.</p>
  </div>
)

export const Default: Story = {
  args: { children: <Content /> },
}

export const Elevated: Story = {
  args: { elevated: true, children: <Content /> },
}

export const Interactive: Story = {
  args: { interactive: true, children: <Content /> },
}

export const AccentCyan: Story = {
  args: { accent: 'cyan', children: <Content /> },
}

export const AccentGreen: Story = {
  args: { accent: 'green', children: <Content /> },
}

export const AccentRed: Story = {
  args: { accent: 'red', children: <Content /> },
}

export const AllAccents: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <Card accent="cyan"><Content /></Card>
      <Card accent="green"><Content /></Card>
      <Card accent="red"><Content /></Card>
    </div>
  ),
}
