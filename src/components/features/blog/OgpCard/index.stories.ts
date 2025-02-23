import type { Meta, StoryObj } from '@storybook/react'

import { OGPCard } from '.'
import metadata from './mock'

const meta: Meta<typeof OGPCard> = {
  title: 'features/blog/OGPCard',
  component: OGPCard,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof OGPCard>

export const Default: Story = {
  args: {
    ...metadata,
  },
}
