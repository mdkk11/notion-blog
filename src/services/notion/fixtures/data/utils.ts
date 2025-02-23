import { RichTextItemResponse } from '@notionhq/client/build/src/api-endpoints'

const NOTION_API_BASE_URL = 'https://api.notion.com/v1'

export const NOTION_ENDPOINTS = {
  DATABASE_QUERY: `${NOTION_API_BASE_URL}/databases/:databaseId/query`, // fetchNotionPageData
  PAGE_RETRIEVE: `${NOTION_API_BASE_URL}/pages/:pageId`, // fetchPageMetadata
  BLOCK_CHILDREN: `${NOTION_API_BASE_URL}/blocks/:blockId/children`,
  DATABASE_RETRIEVE: `${NOTION_API_BASE_URL}/databases/:databaseId`, // fetchAvailableTags
}

export const createRichTextItem = (text: string): RichTextItemResponse => ({
  type: 'text',
  text: { content: text, link: null },
  plain_text: text,
  annotations: {
    bold: false,
    italic: false,
    strikethrough: false,
    underline: false,
    code: false,
    color: 'default',
  },
  href: null,
})
