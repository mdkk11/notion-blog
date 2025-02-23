import { PageObjectResponse } from '@notionhq/client/build/src/api-endpoints'

import { NOTION_PROPERTIES } from './property'
import { NotionProperty } from './types'

export function isPropertyOfType<T extends NotionProperty['type']>(
  property: unknown,
  type: T,
): property is Extract<NotionProperty, { type: T }> {
  return (
    typeof property === 'object' &&
    property !== null &&
    'type' in property &&
    (property as { type: string }).type === type
  )
}

function getPropertyValue<
  T extends NotionProperty['type'],
  K extends keyof Extract<NotionProperty, { type: T }>,
>(
  property: unknown,
  type: T,
  key: K,
): Extract<NotionProperty, { type: T }>[K] | null {
  if (isPropertyOfType(property, type)) {
    return property[key]
  }
  return null
}

export function validatePage(page: PageObjectResponse): boolean {
  const properties = page.properties

  const hasTitle = isPropertyOfType(
    properties[NOTION_PROPERTIES.TITLE],
    'title',
  )
  const hasSummary = isPropertyOfType(
    properties[NOTION_PROPERTIES.SUMMARY],
    'rich_text',
  )
  const hasTags = isPropertyOfType(
    properties[NOTION_PROPERTIES.TAGS],
    'multi_select',
  )
  const hasCreatedAt = isPropertyOfType(
    properties[NOTION_PROPERTIES.CREATED_AT],
    'date',
  )
  const hasUpdatedAt = isPropertyOfType(
    properties[NOTION_PROPERTIES.UPDATED_AT],
    'date',
  )

  const hasDomain = isPropertyOfType(
    properties[NOTION_PROPERTIES.DOMAIN],
    'select',
  )

  return (
    hasTitle &&
    hasSummary &&
    hasTags &&
    hasCreatedAt &&
    hasUpdatedAt &&
    hasDomain
  )
}

export function extractPageProperties(page: PageObjectResponse) {
  const properties = page.properties

  const title =
    getPropertyValue(properties[NOTION_PROPERTIES.TITLE], 'title', 'title')?.[0]
      ?.plain_text ?? 'No Title'

  const richTextArray = getPropertyValue(
    properties[NOTION_PROPERTIES.SUMMARY],
    'rich_text',
    'rich_text',
  )

  const summary = richTextArray
    ? richTextArray.map((item) => item.plain_text).join(' ')
    : ''

  const tags =
    getPropertyValue(
      properties[NOTION_PROPERTIES.TAGS],
      'multi_select',
      'multi_select',
    )?.map((tag) => tag.name) ?? []

  const domain =
    getPropertyValue(properties[NOTION_PROPERTIES.DOMAIN], 'select', 'select')
      ?.name ?? 'unknown'

  const url =
    getPropertyValue(properties[NOTION_PROPERTIES.URL], 'url', 'url') ?? ''

  const createdAt =
    getPropertyValue(properties[NOTION_PROPERTIES.CREATED_AT], 'date', 'date')
      ?.start ?? ''
  const updatedAt =
    getPropertyValue(properties[NOTION_PROPERTIES.UPDATED_AT], 'date', 'date')
      ?.start ?? ''

  return {
    id: page.id,
    title,
    summary,
    tags,
    domain,
    createdAt,
    updatedAt,
    url,
  }
}
