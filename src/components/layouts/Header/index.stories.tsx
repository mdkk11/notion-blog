import type { Meta, StoryObj } from '@storybook/react'

import { Header } from '.'

const meta: Meta<typeof Header> = {
  title: 'Layouts/Header',
  component: Header,
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
type Story = StoryObj<typeof Header>

export const Home: Story = {
  args: {
    children: '',
  },
}

export const Posts: Story = {
  parameters: {
    nextjs: {
      appDirectory: true,
      navigation: {
        pathname: '/blog/all',
      },
    },
  },
}

export const Tags: Story = {
  parameters: {
    nextjs: {
      appDirectory: true,
      navigation: {
        pathname: '/tags',
      },
    },
  },
}
