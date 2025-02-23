import Link from 'next/link'
import * as React from 'react'

import { ROUTE } from '@/const/paths'
import { Post as PostType } from '@/models'

import { Post } from './Post'

export const Posts = ({ posts }: { posts: PostType[] }) => {
  return (
    <ul className="flex w-full overflow-x-scroll py-6">
      {posts.map((post) => (
        <li key={post.id} className="mx-auto max-w-[300px] px-8">
          <Link
            aria-labelledby={post.title}
            href={
              post.domain === 'zenn' ? post.url : ROUTE.blog.postDetail(post.id)
            }
            target={post.domain === 'zenn' ? '_blank' : undefined}
          >
            <Post
              title={post.title}
              domain={post.domain}
              createdAt={post.createdAt}
            />
          </Link>
        </li>
      ))}
    </ul>
  )
}
