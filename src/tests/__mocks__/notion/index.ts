import {
  GetDatabaseResponse,
  PageObjectResponse,
} from '@notionhq/client/build/src/api-endpoints'
import { MdBlock } from 'notion-to-md/build/types'

import { NOTION_ENDPOINTS } from '@/services/notion/fixtures/data/utils'

export const mockedFetchNotionPosts = async () => {
  const response = await fetch(NOTION_ENDPOINTS.DATABASE_QUERY, {
    method: 'POST',
  })
  const data = (await response.json()) as PageObjectResponse[]
  return data
}

export const mockedFetchMarkdownBlocks = async () => {
  const response = await fetch(NOTION_ENDPOINTS.BLOCK_CHILDREN, {
    method: 'GET',
  })
  const data = (await response.json()) as MdBlock[]

  return data
}

export const mockedFetchDatabaseTags = async () => {
  const response = await fetch(NOTION_ENDPOINTS.DATABASE_RETRIEVE, {
    method: 'GET',
  })

  const data = (await response.json()) as GetDatabaseResponse
  return data
}

export const mockedFetchPageMetadata = async () => {
  const response = await fetch(NOTION_ENDPOINTS.PAGE_RETRIEVE, {
    method: 'GET',
  })

  const data = (await response.json()) as PageObjectResponse
  return data
}
