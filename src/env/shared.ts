import * as v from 'valibot'

const schema = v.object({
  NODE_ENV: v.union([
    v.literal('development'),
    v.literal('test'),
    v.literal('production'),
  ]),
})

const parsed = v.safeParse(schema, {
  NODE_ENV: process.env.NODE_ENV,
})

if (!parsed.success) {
  console.error('Invalid environment variables:', v.flatten(parsed.issues))
  throw new Error('Invalid environment variables')
}

export const sharedEnv = parsed.output
