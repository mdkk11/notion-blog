import { GoogleTagManager } from '@next/third-parties/google'
import type { Metadata } from 'next'

import './globals.css'
import { DefaultLayout } from '@/components/layouts'
import { metadataBase, SITE_DESCRIPTION, SITE_TITLE } from '@/const/metadata'
import { GA_TRACKING_ID } from '@/lib/google'
import { ThemeProvider } from '@/providers/ThemeProvider'

export const metadata: Metadata = {
  title: {
    template: `%s | ${SITE_TITLE}`,
    default: `Home | ${SITE_TITLE}`,
  },
  description: SITE_DESCRIPTION,
  openGraph: {
    type: 'website',
    url: '/',
    title: {
      template: `%s | ${SITE_TITLE}`,
      default: `Home | ${SITE_TITLE}`,
    },
    description: SITE_DESCRIPTION,
    siteName: SITE_TITLE,
  },
  metadataBase: metadataBase,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja" suppressHydrationWarning>
      {process.env.NODE_ENV === 'production' && (
        <GoogleTagManager gtmId={GA_TRACKING_ID} />
      )}
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <DefaultLayout>{children}</DefaultLayout>
        </ThemeProvider>
      </body>
    </html>
  )
}
