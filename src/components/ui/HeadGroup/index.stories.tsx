import type { Meta, StoryObj } from '@storybook/react'

import { HeadGroup } from '.'
import { AnchorButton } from '../AnchorButton'

const meta: Meta<typeof HeadGroup> = {
  title: 'Common/HeadGroup',
  component: HeadGroup,
  args: {
    title: 'タイトル',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof HeadGroup>

export const Default: Story = {
  args: {
    children: <AnchorButton href="#">Link</AnchorButton>,
    title: 'タイトル',
  },
}
