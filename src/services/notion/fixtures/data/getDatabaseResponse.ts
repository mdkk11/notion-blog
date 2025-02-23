import { GetDatabaseResponse } from '@notionhq/client/build/src/api-endpoints'

import { NOTION_PROPERTIES } from '@/services/notion/property'
import { MultiSelectDatabasePropertyConfigResponse } from '@/services/notion/types/notion'

import { mockedAllTags } from './tags'

type Tags = MultiSelectDatabasePropertyConfigResponse['multi_select']['options']

export const createNotionAllTagsMock = () => {
  return createDatabaseResponseMock({
    id: `All Tags`,
    tags: mockedAllTags,
  })
}

// とりあえずたTagだけ
function createDatabaseResponseMock({
  id,
  tags,
}: {
  id: string
  tags: Tags
}): GetDatabaseResponse {
  return {
    id,
    object: 'database',
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
    public_url: null,
    properties: {
      [NOTION_PROPERTIES.TAGS]: {
        id: 'tags',
        type: 'multi_select',
        name: NOTION_PROPERTIES.TAGS,
        description: null,
        multi_select: { options: tags },
      },
    },
  }
}
