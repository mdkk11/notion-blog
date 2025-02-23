import type { Meta, StoryObj } from '@storybook/react'

import { Link } from '.'

const meta: Meta<typeof Link> = {
  title: 'Common/Link',
  component: Link,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Link>

export const Small: Story = {
  args: {
    href: '#',
    size: 'sm',
    children: 'Link',
  },
}

export const Medium: Story = {
  args: {
    href: '#',
    size: 'md',
    children: 'Link',
  },
}

export const Large: Story = {
  args: {
    href: '#',
    size: 'lg',
    children: 'Link',
  },
}
