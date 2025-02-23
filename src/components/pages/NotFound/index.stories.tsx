import { StoryObj, Meta } from '@storybook/react'

import { NotFound } from '.'

const meta: Meta<typeof NotFound> = {
  title: 'pages/NotFound',
  component: NotFound,
}

export default meta

type Story = StoryObj<typeof NotFound>

export const Default: Story = {}
