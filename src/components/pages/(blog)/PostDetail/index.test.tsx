import { render, screen } from '@testing-library/react'
import { afterEach, describe, expect, test, vi } from 'vitest'

import { ROUTE } from '@/const/paths'
import { markdownToHtml } from '@/lib/unified'
import { toMarkdown } from '@/services/notion/fetcher'
import {
  fetchMarkdownBlocksHandler,
  fetchNotionPageMetadataHandler,
} from '@/services/notion/msw/handlers'
import { extractPageProperties } from '@/services/notion/utils'
import {
  mockedFetchMarkdownBlocks,
  mockedFetchPageMetadata,
} from '@/tests/__mocks__/notion'
import { setupMockServer } from '@/tests/msw'

import * as PostDetail from '.'

setupMockServer(fetchMarkdownBlocksHandler(), fetchNotionPageMetadataHandler())

const setUp = async () => {
  const pageData = await mockedFetchPageMetadata()
  const mdBlocks = await mockedFetchMarkdownBlocks()
  const markdown = toMarkdown(mdBlocks)
  const children = await markdownToHtml(markdown.parent)
  const post = extractPageProperties(pageData)

  const props = {
    body: { children, ...post },
    link: { href: ROUTE.home() },
  } satisfies PostDetail.Props

  render(<PostDetail.Page {...props} />)
}

vi.mock('@/components/features/blog/Markdown', () => ({
  Markdown: () => <div>Content</div>,
}))

afterEach(() => {
  vi.clearAllMocks()
})

describe('pages/(blog)/PostDetail', () => {
  test('主要コンテンツの表示', async () => {
    await setUp()

    expect(
      screen.getByRole('article', { name: '記事詳細' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2 })).toBeInTheDocument()
    expect(
      screen.getByRole('link', { name: '記事一覧に戻る' }),
    ).toBeInTheDocument()
  })
})
