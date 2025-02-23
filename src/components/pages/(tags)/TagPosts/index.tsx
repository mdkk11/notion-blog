import * as React from 'react'

import { Posts } from '@/components/features/blog/CardPosts'
import { AnchorButton } from '@/components/ui/AnchorButton'
import { HeadGroup } from '@/components/ui/HeadGroup'
import { Pagination } from '@/components/ui/Pagination'
import { ROUTE } from '@/const/paths'

export type Props = {
  tag: string
  posts: React.ComponentProps<typeof Posts>
  pagination: React.ComponentProps<typeof Pagination>
}

export const Page = ({ ...props }: Props) => {
  return (
    <section aria-label={`${props.tag}記事一覧`} className="space-y-16 py-8">
      <HeadGroup title={`${props.tag} の記事一覧`} as="h1" variant="h1">
        <AnchorButton href={ROUTE.blog.allPosts()}>All POSTS</AnchorButton>
      </HeadGroup>
      <Posts {...props.posts} />
      <Pagination {...props.pagination} />
    </section>
  )
}
