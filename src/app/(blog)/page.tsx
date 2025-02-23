import * as React from 'react'

import * as Home from '@/components/pages/Home'
import { DATABASE_ID } from '@/lib/notion'
import { fetchNotionPagePosts } from '@/services/notion/fetcher'
import { createdAtSorts, publishedFilter } from '@/services/notion/property'
import { extractPageProperties } from '@/services/notion/utils'

export default async function TopPage() {
  const data = await fetchNotionPagePosts({
    database_id: DATABASE_ID,
    filter: publishedFilter,
    sorts: [createdAtSorts],
    limit: 4,
  })
  const posts = data.map(extractPageProperties)

  const props = { posts } satisfies Home.Props

  return <Home.Page {...props} />
}
