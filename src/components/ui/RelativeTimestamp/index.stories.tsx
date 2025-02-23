import { StoryObj, Meta } from '@storybook/react'

import { RelativeTimestamp } from '.'

const meta: Meta<typeof RelativeTimestamp> = {
  title: 'Common/RelativeTimestamp',
  component: RelativeTimestamp,
  args: {
    date: new Date('2025-01-01'),
  },
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof RelativeTimestamp>

export const Default: Story = {}
