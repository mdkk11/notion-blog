import Link from 'next/link'

import { ROUTE } from '@/const/paths'
import { Post as PostType } from '@/models'

import { Post } from './Post'

export const Posts = ({ posts }: { posts: PostType[] }) => {
  return (
    <div className="space-y-20">
      <ul className="grid w-full gap-6 md:grid-cols-2 lg:grid-cols-2 lg:gap-8">
        {posts.map((post) => (
          <li key={post.id} className="relative">
            <Link
              aria-labelledby={post.title}
              href={
                post.domain === 'zenn'
                  ? post.url
                  : ROUTE.blog.postDetail(post.id)
              }
              target={post.domain === 'zenn' ? '_blank' : undefined}
              className="absolute inset-0"
            />
            <Post
              title={post.title}
              tags={post.tags}
              domain={post.domain}
              createdAt={post.createdAt}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}
