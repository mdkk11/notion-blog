import { ROUTE } from '@/const/paths'

export type TestRoute = {
  name: string
  path: string
}

export const testRoutes = [
  {
    name: 'Home',
    path: ROUTE.home(),
  },
  {
    name: 'All Posts',
    path: ROUTE.blog.allPosts(),
  },
  {
    name: 'Vinyl Posts',
    path: ROUTE.blog.vinylPosts(),
  },
  {
    name: 'Zenn Posts',
    path: ROUTE.blog.zennPosts(),
  },
  {
    name: 'All Tags',
    path: ROUTE.tags.allTags(),
  },
  {
    name: 'Tag',
    path: ROUTE.tags.tagsPosts('Next.js'),
  },
] as const satisfies TestRoute[]
