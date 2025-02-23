import { QueryDatabaseParameters } from '@notionhq/client/build/src/api-endpoints'

export const NOTION_PROPERTIES = {
  TITLE: 'Title',
  STATUS: 'Status',
  SUMMARY: 'Summary',
  TAGS: 'Tags',
  DOMAIN: 'Domain',
  URL: 'Url',
  CREATED_AT: 'CreatedAt',
  UPDATED_AT: 'UpdatedAt',
} as const

/**
 * NotionのQueryDatabaseParametersに対応した定義
 */
export type ExtractNotionDatabaseProperty<T, K extends keyof T> =
  NonNullable<T[K]> extends (infer U)[] // 配列の場合
    ? Extract<U, { property: string }>
    : Extract<NonNullable<T[K]>, { property: string }> // 単一の場合

export const createdAtSorts = {
  property: NOTION_PROPERTIES.CREATED_AT,
  direction: 'descending',
} as const satisfies ExtractNotionDatabaseProperty<
  QueryDatabaseParameters,
  'sorts'
>

export const publishedFilter = {
  property: NOTION_PROPERTIES.STATUS,
  status: {
    equals: 'Published',
  },
} as const satisfies ExtractNotionDatabaseProperty<
  QueryDatabaseParameters,
  'filter'
>

export const tagFilter = (
  tag: string,
): ExtractNotionDatabaseProperty<QueryDatabaseParameters, 'filter'> => ({
  property: NOTION_PROPERTIES.TAGS,
  multi_select: {
    contains: tag,
  },
})

export const domainFilter = (
  domain: string,
): ExtractNotionDatabaseProperty<QueryDatabaseParameters, 'filter'> => ({
  property: NOTION_PROPERTIES.DOMAIN,
  select: {
    equals: domain,
  },
})
