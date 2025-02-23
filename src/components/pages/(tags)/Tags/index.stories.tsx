import { StoryObj, Meta } from '@storybook/react'

import { fetchNotionDatabaseTagsHandler } from '@/services/notion/msw/handlers'
import { NOTION_PROPERTIES } from '@/services/notion/property'
import { isPropertyOfType } from '@/services/notion/utils'
import { mockedFetchDatabaseTags } from '@/tests/__mocks__/notion'

import * as Tags from '.'

const meta: Meta<typeof Tags.Page> = {
  title: 'pages/(tags)/Tags',
  component: Tags.Page,
  parameters: {
    msw: [fetchNotionDatabaseTagsHandler()],
  },
  loaders: [
    async () => {
      const data = await mockedFetchDatabaseTags()
      const tagsProperty = data.properties[NOTION_PROPERTIES.TAGS]
      if (!isPropertyOfType(tagsProperty, 'multi_select')) {
        console.warn(
          'Tags property is not a multi_select type or options are not available.',
        )
        return []
      }
      const tags = tagsProperty.multi_select.options.map(
        (option) => option.name,
      )
      const props = {
        tags: { tags },
      } satisfies Tags.Props

      return { props }
    },
  ],
}

export default meta

type Story = StoryObj<typeof Tags.Page>

export const Default: Story = {
  render: (_, { loaded }) => {
    return <Tags.Page {...loaded.props} />
  },
}
