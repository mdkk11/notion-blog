import { http, HttpResponse } from 'msw'

import {
  createNotionAllTagsMock,
  createNotionPostMock,
  mockedMarkdownBlocks,
  createNotionPageMetadataMock,
} from '../fixtures'
import { NOTION_ENDPOINTS } from '../fixtures/data/utils'

const fetchNotionDatabaseDataHandler = (length: number) => {
  return http.post(NOTION_ENDPOINTS.DATABASE_QUERY, () => {
    return HttpResponse.json(createNotionPostMock(length))
  })
}

const fetchMarkdownBlocksHandler = () => {
  return http.get(NOTION_ENDPOINTS.BLOCK_CHILDREN, () => {
    return HttpResponse.json(mockedMarkdownBlocks)
  })
}

const fetchNotionDatabaseTagsHandler = () => {
  return http.get(NOTION_ENDPOINTS.DATABASE_RETRIEVE, () => {
    return HttpResponse.json(createNotionAllTagsMock())
  })
}

const fetchNotionPageMetadataHandler = () => {
  return http.get(NOTION_ENDPOINTS.PAGE_RETRIEVE, () => {
    return HttpResponse.json(createNotionPageMetadataMock())
  })
}

export {
  fetchNotionDatabaseDataHandler,
  fetchMarkdownBlocksHandler,
  fetchNotionDatabaseTagsHandler,
  fetchNotionPageMetadataHandler,
}
