import * as React from 'react'

import { Posts } from '@/components/features/blog/CardPosts'
import { Nav } from '@/components/features/blog/Nav'
import { HeadGroup } from '@/components/ui/HeadGroup'
import { Pagination } from '@/components/ui/Pagination'

export type Props = {
  posts: React.ComponentProps<typeof Posts>
  pagination: React.ComponentProps<typeof Pagination>
}

export const Page = ({ ...props }: Props) => {
  return (
    <section aria-label="記事一覧" className="space-y-16 py-8">
      <HeadGroup title="Posts" as="h2" variant="h1" />
      <Nav />
      <Posts {...props.posts} />
      <Pagination {...props.pagination} />
    </section>
  )
}
