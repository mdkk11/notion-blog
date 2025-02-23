import { StoryObj, Meta } from '@storybook/react'

import { fetchNotionDatabaseDataHandler } from '@/services/notion/msw/handlers'
import { extractPageProperties } from '@/services/notion/utils'
import { mockedFetchNotionPosts } from '@/tests/__mocks__/notion'

import * as TagPosts from '.'

const meta: Meta<typeof TagPosts.Page> = {
  title: 'pages/(tags)/TagPosts',
  component: TagPosts.Page,
  parameters: {
    msw: {
      handlers: [fetchNotionDatabaseDataHandler(6)],
    },
  },
  loaders: [
    async () => {
      const data = await mockedFetchNotionPosts()
      const posts = data.map(extractPageProperties)
      const tag = 'TypeScript'
      const props = {
        tag,
        posts: { posts },
        pagination: {
          totalCount: posts.length,
          perPage: 6,
          current: 1,
          basePath: '/',
        },
      } satisfies TagPosts.Props
      return { props }
    },
  ],
}

export default meta

type Story = StoryObj<typeof TagPosts.Page>

export const Default: Story = {
  render: (_, { loaded }) => {
    return <TagPosts.Page {...loaded.props} />
  },
}
