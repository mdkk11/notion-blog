import * as React from 'react'

import Card from '@/components/features/blog/Card'
import { Domain } from '@/components/features/blog/Domain'
import { TagLinkList } from '@/components/features/ui/TagLinkList'
import { RelativeTimestamp } from '@/components/ui/RelativeTimestamp'
import { Typography } from '@/components/ui/Typography'
import { Post as PostType } from '@/models'

export const Post = ({
  ...props
}: Pick<PostType, 'title' | 'domain' | 'tags' | 'createdAt'>) => {
  return (
    <Card>
      <Card.CardContent className="justify-between">
        <Typography as="h3" variant="h4">
          {props.title}
        </Typography>
        <div className="grid gap-4">
          <TagLinkList tags={props.tags} />
          <div className="flex justify-between">
            <Domain>{props.domain}</Domain>
            <RelativeTimestamp
              className="text-xs"
              date={new Date(props.createdAt)}
            />
          </div>
        </div>
      </Card.CardContent>
    </Card>
  )
}
