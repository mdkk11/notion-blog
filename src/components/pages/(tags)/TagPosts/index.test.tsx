import { render, screen } from '@testing-library/react'
import { describe, expect, test } from 'vitest'

import { fetchNotionDatabaseDataHandler } from '@/services/notion/msw/handlers'
import { extractPageProperties } from '@/services/notion/utils'
import { PathNameContextProviderMock } from '@/tests/__mocks__/next/providers'
import { mockedFetchNotionPosts } from '@/tests/__mocks__/notion'
import { setupMockServer } from '@/tests/msw'

import * as TagPosts from '.'

setupMockServer(fetchNotionDatabaseDataHandler(6))

const setUp = async () => {
  const data = await mockedFetchNotionPosts()
  const posts = data.map(extractPageProperties)
  const tag = 'TypeScript'
  const props = {
    tag,
    posts: { posts },
    pagination: {
      totalCount: posts.length,
      perPage: 6,
      current: 1,
      basePath: '/',
    },
  } satisfies TagPosts.Props
  render(
    <PathNameContextProviderMock>
      <TagPosts.Page {...props} />
    </PathNameContextProviderMock>,
  )

  return { tag }
}

describe('pages/(blog)/TagPosts', () => {
  test('見出しの表示', async () => {
    const { tag } = await setUp()
    expect(
      screen.getByRole('heading', { name: `${tag} の記事一覧` }),
    ).toBeInTheDocument()
  })

  test('主要コンテンツの表示', async () => {
    const { tag } = await setUp()
    expect(
      screen.getByRole('region', { name: `${tag}記事一覧` }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('navigation', { name: 'ページネーション' }),
    ).toBeInTheDocument()
  })
})
