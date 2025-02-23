import * as React from 'react'

import { Posts } from '@/components/features/blog/BookPosts'
import { HeaderWithLink } from '@/components/features/blog/Header'

export type Props = React.ComponentProps<typeof Posts>

export const Page = ({ ...props }: Props) => {
  return (
    <section aria-label="記事一覧" className="space-y-12 py-8">
      <HeaderWithLink title="Current" />
      <Posts posts={props.posts} />
    </section>
  )
}
