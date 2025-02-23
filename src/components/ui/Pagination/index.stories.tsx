import type { Meta, StoryObj } from '@storybook/react'

import { Pagination } from '.'

const meta: Meta<typeof Pagination> = {
  title: 'Common/Pagination',
  component: Pagination,
  args: {
    totalCount: 18,
    current: 1,
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Pagination>

export const Default: Story = {
  args: {},
}
