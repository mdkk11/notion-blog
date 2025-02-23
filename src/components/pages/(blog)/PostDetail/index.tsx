import * as React from 'react'

import { Body } from '@/components/features/blog/Body'
import { Link } from '@/components/ui/Link'

export type Props = {
  body: React.ComponentProps<typeof Body>
  link: React.ComponentProps<typeof Link>
}

export const Page = ({ ...props }: Props) => {
  return (
    <article className="grid gap-10 py-12 lg:gap-52" aria-label="記事詳細">
      <Body {...props.body} />
      <div className="border-t py-4 md:py-20">
        <Link {...props.link} aria-label="記事一覧に戻る">
          記事一覧に戻る
        </Link>
      </div>
    </article>
  )
}
