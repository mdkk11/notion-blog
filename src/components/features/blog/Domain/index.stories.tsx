import { StoryObj, Meta } from '@storybook/react'

import { Domain } from '.'

const meta: Meta<typeof Domain> = {
  title: 'features/blog/Domain',
  component: Domain,
  args: {
    children: 'zenn',
  },
}

export default meta

type Story = StoryObj<typeof Domain>

export const Default: Story = {}
