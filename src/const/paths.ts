export const ROUTE = {
  home: () => '/',
  blog: {
    allPosts: () => '/blog/all',
    vinylPosts: () => '/blog/vinyl',
    zennPosts: () => '/blog/zenn',
    postDetail: (id: string) => `/blog/${id}`,
  },
  tags: {
    allTags: () => '/tags',
    tagsPosts: (tag: string) => `/tags/${tag}`,
  },
} as const
