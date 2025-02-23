import { render, screen } from '@testing-library/react'
import { describe, expect, test } from 'vitest'

import { fetchNotionDatabaseDataHandler } from '@/services/notion/msw/handlers'
import { extractPageProperties } from '@/services/notion/utils'
import { PathNameContextProviderMock } from '@/tests/__mocks__/next/providers'
import { mockedFetchNotionPosts } from '@/tests/__mocks__/notion'
import { setupMockServer } from '@/tests/msw'

import * as DomainPosts from '.'

setupMockServer(fetchNotionDatabaseDataHandler(10))

const setUp = async () => {
  const data = await mockedFetchNotionPosts()
  const posts = data.map(extractPageProperties)
  const props = {
    posts: { posts },
    pagination: {
      totalCount: 10,
      perPage: 6,
      current: 1,
      basePath: '/',
    },
  } satisfies DomainPosts.Props
  render(
    <PathNameContextProviderMock>
      <DomainPosts.Page {...props} />
    </PathNameContextProviderMock>,
  )
}

describe('pages/(blog)/DomainPosts', () => {
  test('見出しの表示', async () => {
    await setUp()
    expect(screen.getByRole('heading', { name: 'Posts' })).toBeInTheDocument()
  })

  test('主要コンテンツの表示', async () => {
    await setUp()
    expect(screen.getByRole('region', { name: '記事一覧' })).toBeInTheDocument()
    expect(
      screen.getByRole('navigation', { name: '記事のドメインメニュー' }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('navigation', { name: 'ページネーション' }),
    ).toBeInTheDocument()
  })
})
