import * as React from 'react'

import { TagLinkList } from '@/components/features/ui/TagLinkList'
import { RelativeTimestamp } from '@/components/ui/RelativeTimestamp'
import { Typography } from '@/components/ui/Typography'
import { Post } from '@/models'

import { Markdown } from '../Markdown'
import { PictureInPicture } from '../PictureInPicture'
import { Toc } from '../Toc'

type Props = Post & { children: React.ReactNode }

export const Body = ({ ...props }: Props) => {
  return (
    <div className="grid w-full gap-16">
      <div className="grid w-full gap-4 lg:grid-cols-[1fr_280px] lg:items-start lg:gap-6 xl:gap-20">
        <div className="grid w-full gap-6 lg:gap-10">
          <Typography as="h1" variant="h2">
            {props.title}
          </Typography>
          <div className="flex items-center justify-between">
            <RelativeTimestamp
              className="mt-4 flex justify-start text-xs"
              date={new Date(props.createdAt)}
            />
            <PictureInPicture {...props} />
          </div>
          <TagLinkList tags={props.tags} />
          <React.Suspense>
            <Markdown markdown={props.children} />
          </React.Suspense>
        </div>
        <div className="sticky top-4 hidden w-full lg:block">
          <React.Suspense>
            <Toc />
          </React.Suspense>
        </div>
      </div>
    </div>
  )
}
