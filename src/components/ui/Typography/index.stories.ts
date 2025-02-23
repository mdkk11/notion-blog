import type { Meta, StoryObj } from '@storybook/react'

import { Typography } from '.'

const meta: Meta<typeof Typography> = {
  title: 'Common/Typography',
  component: Typography,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Typography>

const SampleString = 'Typography Sample in Storybook'

export const Heading1: Story = {
  args: {
    children: SampleString,
    variant: 'h1',
    as: 'h1',
  },
}

export const Heading2: Story = {
  args: {
    children: SampleString,
    variant: 'h2',
    as: 'h2',
  },
}

export const Heading3: Story = {
  args: {
    children: SampleString,
    variant: 'h3',
    as: 'h3',
  },
}

export const Heading4: Story = {
  args: {
    children: SampleString,
    variant: 'h4',
    as: 'h4',
  },
}

export const Paragraph: Story = {
  args: {
    children: SampleString,
    variant: 'p',
    as: 'p',
  },
}
