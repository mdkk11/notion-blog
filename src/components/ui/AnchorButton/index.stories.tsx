import type { Meta, StoryObj } from '@storybook/react'

import { AnchorButton } from '.'

const meta: Meta<typeof AnchorButton> = {
  title: 'Common/AnchorButton',
  component: AnchorButton,
  args: {
    href: '#',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof AnchorButton>

export const Small: Story = {
  args: {
    size: 'sm',
    children: 'Link',
  },
}

export const Medium: Story = {
  args: {
    size: 'md',
    children: 'Link',
  },
}

export const Disabled: Story = {
  args: {
    size: 'sm',
    children: 'Link',
    disabled: true,
  },
}
