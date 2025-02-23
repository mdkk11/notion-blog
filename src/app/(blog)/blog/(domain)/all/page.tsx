import * as DomainPosts from '@/components/pages/(blog)/DomainPosts'
import { ROUTE } from '@/const/paths'
import { DATABASE_ID } from '@/lib/notion'
import { fetchPaginatedPosts } from '@/services/notion/fetcher'
import { createdAtSorts, publishedFilter } from '@/services/notion/property'
import { extractPageProperties } from '@/services/notion/utils'

const limitPerPage = 6

export default async function AllPostPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>
}) {
  const params = await searchParams
  const currentPage = Math.max(1, parseInt(params.page ?? '1', 10))

  const { posts: data, totalCount } = await fetchPaginatedPosts({
    database_id: DATABASE_ID,
    filter: publishedFilter,
    sorts: [createdAtSorts],
    page: currentPage,
    limit: limitPerPage,
  })
  const posts = data.map(extractPageProperties)

  const props = {
    posts: { posts },
    pagination: {
      totalCount,
      perPage: limitPerPage,
      current: currentPage,
      basePath: ROUTE.blog.allPosts(),
    },
  } satisfies DomainPosts.Props

  return <DomainPosts.Page {...props} />
}
