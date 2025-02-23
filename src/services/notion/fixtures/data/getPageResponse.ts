import {
  DatePropertyItemObjectResponse,
  GetPageResponse,
  MultiSelectPropertyItemObjectResponse,
  RichTextPropertyItemObjectResponse,
  SelectPropertyItemObjectResponse,
  TitlePropertyItemObjectResponse,
  UrlPropertyItemObjectResponse,
} from '@notionhq/client/build/src/api-endpoints'

import { createRichTextItem } from './utils'
import { NOTION_PROPERTIES } from '../../property'

export const createNotionPageMetadataMock = () => {
  return createPageResponseMock({
    id: `Post`,
    title: `Title`,
    summary: `Summary`,
    tags: [
      { id: `React`, name: 'React', color: 'default' },
      { id: `Next.js`, name: 'Next.js', color: 'default' },
    ],
    domain: { id: 'id', name: 'vinyl', color: 'default' },
    url: null,
    createdAt: { start: '2025-01-07', end: null, time_zone: null },
    updatedAt: { start: '2025-01-07', end: null, time_zone: null },
  })
}

function createPageResponseMock({
  id,
  title,
  summary,
  tags,
  domain,
  url,
  createdAt,
  updatedAt,
}: {
  id: string
  title: TitlePropertyItemObjectResponse['title']['plain_text']
  summary: RichTextPropertyItemObjectResponse['rich_text']['plain_text']
  tags: MultiSelectPropertyItemObjectResponse['multi_select']
  domain: SelectPropertyItemObjectResponse['select']
  url: UrlPropertyItemObjectResponse['url']
  createdAt: DatePropertyItemObjectResponse['date']
  updatedAt: DatePropertyItemObjectResponse['date']
}): GetPageResponse {
  return {
    id,
    object: 'page',
    created_time: new Date().toISOString(),
    last_edited_time: new Date().toISOString(),
    created_by: { object: 'user', id: 'mock-user-id' },
    last_edited_by: { object: 'user', id: 'mock-user-id' },
    cover: null,
    icon: null,
    parent: {
      type: 'database_id',
      database_id: 'mock-database-id',
    },
    archived: false,
    in_trash: false,
    url: `https://www.notion.so/${title.replace(/\s+/g, '-')}-${id}`,
    public_url: null,
    properties: {
      [NOTION_PROPERTIES.TITLE]: {
        id: 'title',
        type: 'title',
        title: [createRichTextItem(title)],
      },
      [NOTION_PROPERTIES.SUMMARY]: {
        id: 'summary',
        type: 'rich_text',
        rich_text: [createRichTextItem(summary)],
      },
      [NOTION_PROPERTIES.TAGS]: {
        id: 'tags',
        type: 'multi_select',
        multi_select: tags,
      },
      [NOTION_PROPERTIES.DOMAIN]: {
        id: 'domain',
        type: 'select',
        select: domain,
      },
      [NOTION_PROPERTIES.URL]: {
        id: 'url',
        type: 'url',
        url,
      },
      [NOTION_PROPERTIES.CREATED_AT]: {
        id: 'created_at',
        type: 'date',
        date: createdAt,
      },
      [NOTION_PROPERTIES.UPDATED_AT]: {
        id: 'updated_at',
        type: 'date',
        date: updatedAt,
      },
    },
  }
}
