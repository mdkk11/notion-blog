import { render, screen } from '@testing-library/react'
import { describe, expect, test } from 'vitest'

import { fetchNotionDatabaseTagsHandler } from '@/services/notion/msw/handlers'
import { NOTION_PROPERTIES } from '@/services/notion/property'
import { isPropertyOfType } from '@/services/notion/utils'
import { mockedFetchDatabaseTags } from '@/tests/__mocks__/notion'
import { setupMockServer } from '@/tests/msw'

import * as Tags from '.'

setupMockServer(fetchNotionDatabaseTagsHandler())

const setUp = async () => {
  const data = await mockedFetchDatabaseTags()
  const tagsProperty = data.properties[NOTION_PROPERTIES.TAGS]
  if (!isPropertyOfType(tagsProperty, 'multi_select')) {
    console.warn(
      'Tags property is not a multi_select type or options are not available.',
    )
    return []
  }
  const tags = tagsProperty.multi_select.options.map((option) => option.name)

  const props = {
    tags: { tags },
  } satisfies Tags.Props

  render(<Tags.Page {...props} />)
}

describe('pages/(tags)/Tags', () => {
  test('見出しの表示', async () => {
    await setUp()
    expect(screen.getByRole('heading', { level: 2 })).toBeInTheDocument()
  })
  test('主要コンテンツの表示', async () => {
    await setUp()
    expect(screen.getByRole('region', { name: 'タグ一覧' })).toBeInTheDocument()
  })
})
