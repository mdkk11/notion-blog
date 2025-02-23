import type { Meta, StoryObj } from '@storybook/react'

import { NavLink } from '.'

const meta: Meta<typeof NavLink> = {
  title: 'Layouts/NavLink',
  component: NavLink,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof NavLink>

export const Default: Story = {
  args: {
    href: '#',
    children: 'NavLink',
  },
}

export const Current: Story = {
  args: {
    href: '#',
    'aria-current': true,
    current: true,
    children: 'NavLink',
  },
}

export const Medium: Story = {
  args: {
    href: '#',
    size: 'md',
    children: 'NavLink',
  },
}
