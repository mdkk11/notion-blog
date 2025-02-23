import {
  PageObjectResponse,
  MultiSelectPropertyItemObjectResponse,
  UrlPropertyItemObjectResponse,
  SelectPropertyItemObjectResponse,
  DatePropertyItemObjectResponse,
  RichTextPropertyItemObjectResponse,
  TitlePropertyItemObjectResponse,
} from '@notionhq/client/build/src/api-endpoints'

import { NOTION_PROPERTIES } from '@/services/notion/property'

import { createRichTextItem } from './utils'

export const createNotionPostMock = (length: number) => {
  return [...new Array(length)].map((_, i) => {
    const n = (i + 1).toString()

    return createPageObjectResponseMock({
      id: `Post ${n}`,
      title: `Title ${n}`,
      summary: `Summary ${n}`,
      tags: [
        { id: `React ${n}`, name: 'React', color: 'default' },
        { id: `Next.js ${n}`, name: 'Next.js', color: 'default' },
      ],
      domain: { id: n, name: 'vinyl', color: 'default' },
      url: length % 2 ? 'sample.com' : null,
      createdAt: { start: '2025-01-07', end: null, time_zone: null },
      updatedAt: { start: '2025-01-07', end: null, time_zone: null },
    })
  })
}

function createPageObjectResponseMock({
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
}): PageObjectResponse {
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
