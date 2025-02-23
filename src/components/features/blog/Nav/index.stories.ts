import { StoryObj, Meta } from '@storybook/react'

import { ROUTE } from '@/const/paths'

import { Nav } from '.'

const meta: Meta<typeof Nav> = {
  title: 'features/blog/Nav',
  component: Nav,
  parameters: {
    nextjs: {
      appDirectory: true,
      navigation: {
        pathname: ROUTE.blog.allPosts(),
      },
    },
  },
}

export default meta

type Story = StoryObj<typeof Nav>

export const AllPostsActive: Story = {}

export const VinylPostsActive: Story = {
  parameters: {
    nextjs: {
      navigation: {
        pathname: ROUTE.blog.vinylPosts(),
      },
    },
  },
}
export const ZennPostsActive: Story = {
  parameters: {
    nextjs: {
      navigation: {
        pathname: ROUTE.blog.zennPosts(),
      },
    },
  },
}
