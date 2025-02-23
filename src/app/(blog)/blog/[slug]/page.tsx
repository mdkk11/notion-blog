import { Metadata } from 'next'

import * as PostDetail from '@/components/pages/(blog)/PostDetail'
import { ROUTE } from '@/const/paths'
import { DATABASE_ID } from '@/lib/notion'
import { markdownToHtml } from '@/lib/unified'
import {
  fetchNotionPagePosts,
  fetchNotionPageMarkdown,
  fetchPageMetadata,
} from '@/services/notion/fetcher'
import { extractPageProperties } from '@/services/notion/utils'

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = (await params).slug

  const data = await fetchPageMetadata(slug)
  const post = extractPageProperties(data)

  return {
    title: post.title,
    description: post.summary,
    alternates: {
      canonical: `/blog/${slug}`,
    },
    openGraph: {
      type: 'article',
      url: `/blog/${slug}`,
      title: post.title,
      description: post.summary,
      publishedTime: post.createdAt,
      modifiedTime: post.updatedAt,
      tags: post.tags,
    },
  }
}

export async function generateStaticParams() {
  const posts = await fetchNotionPagePosts({ database_id: DATABASE_ID })

  return posts.map((post) => ({
    slug: post.id,
  }))
}

export default async function PostDetailPage({ params }: Props) {
  const slug = (await params).slug
  const data = await fetchPageMetadata(slug)
  const post = extractPageProperties(data)
  const markdown = await fetchNotionPageMarkdown(slug)
  const children = await markdownToHtml(markdown.parent)

  const props = {
    body: { children, ...post },
    link: { href: ROUTE.home() },
  } satisfies PostDetail.Props

  return <PostDetail.Page {...props} />
}
