import {
  PageObjectResponse,
  QueryDatabaseParameters,
  QueryDatabaseResponse,
} from '@notionhq/client/build/src/api-endpoints'
import { MdBlock } from 'notion-to-md/build/types'
import * as React from 'react'

import { n2m, notion } from '@/lib/notion'

import { handleNotionError } from './error'
import { NOTION_PROPERTIES } from '../property'
import { isPropertyOfType } from '../utils'

export const fetchPaginatedPosts = React.cache(async function (
  props: QueryDatabaseParameters & { page: number; limit: number },
) {
  try {
    const { database_id, filter, sorts, page, limit } = props
    const allPosts = await fetchNotionPagePosts({ database_id, filter, sorts })
    const totalCount = allPosts.length
    const paginatedPosts = paginateResults(allPosts, page, limit)
    return { posts: paginatedPosts, totalCount }
  } catch (error) {
    const notionError = handleNotionError(error)
    console.error('Error fetching paginated posts:', notionError)
    throw new Error('Failed to fetch paginated posts.')
  }
})

export const fetchNotionPagePosts = React.cache(async function (
  props: Omit<QueryDatabaseParameters, 'start_cursor'> & { limit?: number },
): Promise<PageObjectResponse[]> {
  try {
    const { database_id, limit, filter, sorts } = props
    let allResults: PageObjectResponse[] = []
    let cursor: string | null = null
    let hasMore = true

    while (hasMore && (!limit || allResults.length < limit)) {
      const pageSize = limit ? Math.min(limit - allResults.length, 100) : 100
      const response = await fetchNotionPageData({
        database_id,
        filter,
        sorts,
        start_cursor: cursor ?? undefined,
        page_size: pageSize,
      })
      const results = response.results as PageObjectResponse[]
      allResults = allResults.concat(results)
      hasMore = response.has_more
      cursor = response.next_cursor ?? null
    }

    return limit ? allResults.slice(0, limit) : allResults
  } catch (error) {
    const notionError = handleNotionError(error)
    console.error('Error fetching all data:', notionError)
    throw new Error('Failed to fetch all data.')
  }
})

const fetchNotionPageData = React.cache(async function (
  props: QueryDatabaseParameters & { limit?: number },
): Promise<QueryDatabaseResponse> {
  try {
    const { database_id, filter, sorts, start_cursor, page_size } = props
    const response = await notion.databases.query({
      database_id,
      filter,
      sorts,
      start_cursor: start_cursor ?? undefined,
      page_size,
    })
    return response
  } catch (error) {
    const notionError = handleNotionError(error)
    console.error('Error fetching Notion page data:', notionError)
    throw new Error('Failed to fetch Notion page data.')
  }
})

export const fetchPageBlock = React.cache(async function (pageId: string) {
  try {
    const mdBlocks = await n2m.pageToMarkdown(pageId, 2)
    return mdBlocks
  } catch (error) {
    const notionError = handleNotionError(error)
    console.error('Error fetching page block:', notionError)
    throw new Error('Failed to fetch page block.')
  }
})

export const fetchNotionPageMarkdown = React.cache(async function (
  pageId: string,
) {
  const mbBlocks = await fetchPageBlock(pageId)
  const markdown = toMarkdown(mbBlocks)
  return markdown
})

export function toMarkdown(mdBlocks: MdBlock[]) {
  try {
    const markdown = n2m.toMarkdownString(mdBlocks)

    return markdown
  } catch (error) {
    const notionError = handleNotionError(error)
    console.error('Error convert notion block to markdown:', notionError)
    throw new Error('Error convert notion block to markdown.')
  }
}

// fetchPageMetadata をキャッシュ化
export const fetchPageMetadata = React.cache(async function (pageId: string) {
  try {
    const response = await notion.pages.retrieve({ page_id: pageId })
    return response as PageObjectResponse
  } catch (error) {
    console.error('Error fetching page metadata:', error)
    throw new Error('Failed to fetch page metadata.')
  }
})

export const fetchAvailableTags = React.cache(async function (
  databaseId: string,
) {
  try {
    const database = await notion.databases.retrieve({
      database_id: databaseId,
    })
    const tagsProperty = database.properties[NOTION_PROPERTIES.TAGS]
    if (!isPropertyOfType(tagsProperty, 'multi_select')) {
      console.warn(
        'Tags property is not a multi_select type or options are not available.',
      )
      return []
    }
    return tagsProperty.multi_select.options.map((option) => option.name)
  } catch (error) {
    const notionError = handleNotionError(error)
    console.error('Error fetching available tags:', notionError)
    throw new Error('Failed to fetch available tags.')
  }
})
/**
 * ページネーション用のユーティリティ関数
 */
function paginateResults<T>(results: T[], page: number, limit: number): T[] {
  const start = (page - 1) * limit
  const end = start + limit
  return results.slice(start, end)
}
