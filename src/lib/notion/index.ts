import { Client } from '@notionhq/client'
import { NotionToMarkdown } from 'notion-to-md'

import { env } from '@/env'

const notion = new Client({
  auth: env.NOTION_TOKEN,
})

const n2m = new NotionToMarkdown({ notionClient: notion })

const DATABASE_ID = env.DATABASE_ID

export { notion, n2m, DATABASE_ID }
