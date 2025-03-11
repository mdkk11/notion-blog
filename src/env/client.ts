import * as v from 'valibot'

const schema = v.object({
  NEXT_PUBLIC_SITE_URL: v.pipe(v.string(), v.url()),
  NEXT_PUBLIC_GOOGLE_ANALYTICS_ID: v.pipe(
    v.string(),
    v.regex(/^G-[A-Z0-9]{10}$/),
  ),
})

const parsed = v.safeParse(schema, {
  NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
  NEXT_PUBLIC_GOOGLE_ANALYTICS_ID: process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID,
})

if (!parsed.success) {
  console.error('Invalid environment variables:', v.flatten(parsed.issues))
  throw new Error('Invalid environment variables')
}

export const clientEnv = parsed.output
