import * as React from 'react'

import { metadataBase } from '@/const/metadata'
import { fetchSiteMetadata, OgpMetadata } from '@/lib/ogp'

const Container = ({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex h-32 w-full items-center justify-between gap-2 overflow-hidden rounded-md border hover:underline"
    >
      {children}
    </a>
  )
}

const Main = ({ children }: { children: React.ReactNode }) => {
  return <span className="grid w-full min-w-0 gap-4 p-4">{children}</span>
}

const Title = ({ children }: { children: React.ReactNode }) => {
  return <span className="line-clamp-1 font-bold">{children}</span>
}

const Description = ({ children }: { children: React.ReactNode }) => {
  return <span className="line-clamp-1 text-sm">{children}</span>
}

const Meta = ({
  favicon_url,
  url,
}: Pick<OgpMetadata, 'favicon_url' | 'url'>) => {
  return (
    <span className="flex h-8 items-center gap-2">
      {favicon_url && (
        <img src={favicon_url} className="size-4 shrink-0" alt="favicon icon" /> // eslint-disable-line @next/next/no-img-element
      )}
      <span className="line-clamp-1 text-xs">{url}</span>
    </span>
  )
}

const OgpErrorCard = ({ href }: { href: string }) => {
  return (
    <Container href={href}>
      <Main>
        <span>ページを読み込めませんでした</span>
        <span className="text-sm">{href}</span>
      </Main>
    </Container>
  )
}

export const OgpCardWrapper = async ({ url }: Pick<OgpMetadata, 'url'>) => {
  const metadata = await fetchSiteMetadata(url)
  if (!metadata) {
    return <OgpErrorCard href={url} />
  }

  return <OGPCard {...metadata} />
}

export const OGPCard = (metadata: OgpMetadata) => {
  const href = new URL(metadata.url, metadataBase)

  return (
    <Container href={href.href}>
      <Main>
        <Title>{metadata.title}</Title>
        <Description>{metadata.description}</Description>
        <Meta url={href.hostname} favicon_url={metadata.favicon_url} />
      </Main>
    </Container>
  )
}
