import { redirect } from 'next/navigation'

import * as TagPosts from '@/components/pages/(tags)/TagPosts'
import { ROUTE } from '@/const/paths'
import { DATABASE_ID } from '@/lib/notion'
import {
  fetchAvailableTags,
  fetchPaginatedPosts,
} from '@/services/notion/fetcher'
import {
  createdAtSorts,
  publishedFilter,
  tagFilter,
} from '@/services/notion/property'
import { extractPageProperties } from '@/services/notion/utils'

const limitPerPage = 6

export async function generateStaticParams() {
  const tags = await fetchAvailableTags(DATABASE_ID)
  return tags.map((tag) => ({ tag: tag }))
}

export default async function TagsPage({
  params,
  searchParams,
}: {
  params: Promise<{ tag: string }>
  searchParams: Promise<{ page?: string }>
}) {
  const { tag } = await params
  const tagName = decodeURIComponent(tag)
  const { page } = await searchParams
  const currentPage = Math.max(1, parseInt(page ?? '1', 10))

  const { posts: data, totalCount } = await fetchPaginatedPosts({
    database_id: DATABASE_ID,
    filter: { and: [publishedFilter, tagFilter(tagName)] },
    sorts: [createdAtSorts],
    page: currentPage,
    limit: limitPerPage,
  })

  const posts = data.map(extractPageProperties)

  if (posts.length === 0) {
    redirect(ROUTE.tags.allTags())
  }

  const props = {
    tag,
    posts: { posts },
    pagination: {
      totalCount,
      perPage: limitPerPage,
      current: currentPage,
      basePath: ROUTE.tags.tagsPosts(tag),
    },
  } satisfies TagPosts.Props

  return <TagPosts.Page {...props} />
}
