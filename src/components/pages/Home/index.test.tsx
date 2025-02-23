import { render, screen } from '@testing-library/react'
import { describe, expect, test } from 'vitest'

import { fetchNotionDatabaseDataHandler } from '@/services/notion/msw/handlers'
import { extractPageProperties } from '@/services/notion/utils'
import { mockedFetchNotionPosts } from '@/tests/__mocks__/notion'
import { setupMockServer } from '@/tests/msw'

import * as Home from '.'

setupMockServer(fetchNotionDatabaseDataHandler(4))

const setUp = async () => {
  const data = await mockedFetchNotionPosts()
  const posts = data.map(extractPageProperties)

  const props = { posts } satisfies Home.Props

  render(<Home.Page {...props} />)
}

describe('pages/Home', () => {
  test('見出しの表示', async () => {
    await setUp()
    expect(screen.getByRole('heading', { name: 'Current' })).toBeInTheDocument()
  })

  test('主要コンテンツの表示', async () => {
    await setUp()
    expect(screen.getByRole('region', { name: '記事一覧' })).toBeInTheDocument()
  })
})
