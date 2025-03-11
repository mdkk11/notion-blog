import * as v from 'valibot'

const schema = v.object({
  NOTION_TOKEN: v.pipe(v.string(), v.regex(/[a-zA-Z0-9_]{50}/)),
  DATABASE_ID: v.pipe(v.string(), v.regex(/[a-zA-Z0-9]{32}/)),
})

const parsed = v.safeParse(schema, {
  NOTION_TOKEN: process.env.NOTION_TOKEN,
  DATABASE_ID: process.env.DATABASE_ID,
})

if (!parsed.success) {
  console.error('Invalid environment variables:', v.flatten(parsed.issues))
  throw new Error('Invalid environment variables')
}

export const serverEnv = parsed.output
