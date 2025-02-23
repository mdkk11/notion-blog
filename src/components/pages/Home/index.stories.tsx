import { StoryObj, Meta } from '@storybook/react'

import { fetchNotionDatabaseDataHandler } from '@/services/notion/msw/handlers'
import { extractPageProperties } from '@/services/notion/utils'
import { mockedFetchNotionPosts } from '@/tests/__mocks__/notion'

import * as Home from '.'

const meta: Meta<typeof Home.Page> = {
  title: 'pages/Home',
  component: Home.Page,
  parameters: {
    nextjs: {
      appDirectory: true,
      navigation: {
        pathname: '/',
      },
    },
    msw: {
      handlers: [fetchNotionDatabaseDataHandler(4)],
    },
  },
  loaders: [
    async () => {
      const data = await mockedFetchNotionPosts()
      const posts = data.map(extractPageProperties)
      const props = { posts } satisfies Home.Props
      return { props }
    },
  ],
}

export default meta

type Story = StoryObj<typeof Home.Page>

export const Default: Story = {
  render: (_, { loaded }) => {
    return <Home.Page {...loaded.props} />
  },
}
