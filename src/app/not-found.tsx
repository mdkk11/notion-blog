import { Metadata } from 'next'

import { NotFound } from '@/components/pages/NotFound'

export const metadata = {
  robots: 'noindex',
  title: 'Not Found',
  description: '指定されたページが見つかりませんでした',
  openGraph: {
    type: 'website',
    title: 'Not Found',
    description: '指定されたページが見つかりませんでした',
  },
} satisfies Metadata

export default function NotFoundPage() {
  return <NotFound />
}
