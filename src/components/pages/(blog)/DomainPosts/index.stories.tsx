import { StoryObj, Meta } from '@storybook/react'

import { ROUTE } from '@/const/paths'
import { fetchNotionDatabaseDataHandler } from '@/services/notion/msw/handlers'
import { extractPageProperties } from '@/services/notion/utils'
import { mockedFetchNotionPosts } from '@/tests/__mocks__/notion'

import * as DomainPosts from '.'

const meta: Meta<typeof DomainPosts.Page> = {
  title: 'pages/(blog)/DomainPosts',
  component: DomainPosts.Page,
  parameters: {
    nextjs: {
      appDirectory: true,
      navigation: {
        pathname: ROUTE.blog.allPosts(),
      },
    },
    msw: [fetchNotionDatabaseDataHandler(6)],
  },
  loaders: [
    async (): Promise<{ props: DomainPosts.Props }> => {
      const data = await mockedFetchNotionPosts()
      const posts = data.map(extractPageProperties)
      const props = {
        posts: { posts },
        pagination: {
          totalCount: posts.length,
          perPage: 6,
          current: 1,
          basePath: '/',
        },
      } satisfies DomainPosts.Props

      return { props }
    },
  ],
}

export default meta

type Story = StoryObj<typeof DomainPosts.Page>

export const AllPosts: Story = {
  render: (_, { loaded }) => {
    const loadedProps = loaded.props as DomainPosts.Props
    const props = {
      ...loadedProps,
      pagination: {
        ...loadedProps.pagination,
        basePath: ROUTE.blog.allPosts(),
      },
    } satisfies DomainPosts.Props

    return <DomainPosts.Page {...props} />
  },
}

export const VinylPosts: Story = {
  parameters: {
    nextjs: {
      navigation: {
        pathname: ROUTE.blog.vinylPosts(),
      },
    },
  },
  render: (_, { loaded }) => {
    const loadedProps = loaded.props as DomainPosts.Props
    const props = {
      ...loadedProps,
      pagination: {
        ...loadedProps.pagination,
        basePath: ROUTE.blog.vinylPosts(),
      },
    } satisfies DomainPosts.Props

    return <DomainPosts.Page {...props} />
  },
}

export const ZennPosts: Story = {
  parameters: {
    nextjs: {
      navigation: {
        pathname: ROUTE.blog.zennPosts(),
      },
    },
  },
  render: (_, { loaded }) => {
    const loadedProps = loaded.props as DomainPosts.Props
    const props = {
      ...loadedProps,
      pagination: {
        ...loadedProps.pagination,
        basePath: ROUTE.blog.zennPosts(),
      },
    } satisfies DomainPosts.Props

    return <DomainPosts.Page {...props} />
  },
}
