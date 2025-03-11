import { env } from '@/env'

export const SITE_TITLE = 'Vinyl Blog'

export const SITE_DESCRIPTION = ''

export const metadataBase = env.NEXT_PUBLIC_SITE_URL
  ? new URL(env.NEXT_PUBLIC_SITE_URL)
  : process.env.VERCEL_URL
    ? new URL(`https://${process.env.VERCEL_URL}`)
    : new URL(`http://localhost:${process.env.PORT ?? (3000).toString()}`)
