import NextLink from 'next/link'

import { Tag } from '@/components/ui/Tag'
import { ROUTE } from '@/const/paths'
import { Post } from '@/models'

export const TagLinkList = ({ tags }: Pick<Post, 'tags'>) => {
  return (
    <ul className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <li key={tag}>
          <NextLink href={ROUTE.tags.tagsPosts(tag)} className="relative z-10">
            <Tag> {tag}</Tag>
          </NextLink>
        </li>
      ))}
    </ul>
  )
}
