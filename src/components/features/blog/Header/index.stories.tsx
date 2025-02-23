import { StoryObj, Meta } from '@storybook/react'

import { HeaderWithLink } from '.'

const meta: Meta<typeof HeaderWithLink> = {
  title: 'features/blog/Header',
  component: HeaderWithLink,
  args: {
    title: 'ALL POSTS',
  },
  parameters: {
    nextjs: {
      appDirectory: true,
      navigation: {
        pathname: '/',
      },
    },
  },
}
export default meta

type Story = StoryObj<typeof HeaderWithLink>

export const Default: Story = {}
