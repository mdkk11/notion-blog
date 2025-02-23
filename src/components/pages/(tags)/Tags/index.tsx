import * as React from 'react'

import { TagLinkList } from '@/components/features/ui/TagLinkList'
import { HeadGroup } from '@/components/ui/HeadGroup'

export type Props = {
  tags: React.ComponentProps<typeof TagLinkList>
}

export const Page = ({ ...props }: Props) => {
  return (
    <section aria-label="タグ一覧" className="space-y-12 py-8">
      <HeadGroup title="Tags" variant="h1" as="h2" />
      <TagLinkList {...props.tags} />
    </section>
  )
}
