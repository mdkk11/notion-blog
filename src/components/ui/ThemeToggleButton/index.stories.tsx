import type { Meta, StoryObj } from '@storybook/react'

import { ThemeToggleButton } from '.'

const meta: Meta<typeof ThemeToggleButton> = {
  title: 'Common/ThemeToggleButton',
  component: ThemeToggleButton,
}

export default meta
type Story = StoryObj<typeof ThemeToggleButton>

export const Default: Story = {}
