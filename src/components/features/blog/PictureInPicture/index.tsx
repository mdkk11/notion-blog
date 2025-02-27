'use client'

import { PictureInPictureIcon } from 'lucide-react'
import * as React from 'react'
import * as ReactDOMClient from 'react-dom/client'

import { Body } from '@/components/features/blog/Body'
import { Button } from '@/components/ui/Button'
import '@/app/globals.css'
import { cn } from '@/utils'

declare global {
  // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
  interface DocumentPictureInPictureOptions {
    width?: number
    height?: number
    disallowReturnToOpener?: boolean
    preferInitialWindowPlacement?: boolean
  }
  // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
  interface DocumentPictureInPicture {
    requestWindow: (
      options?: DocumentPictureInPictureOptions,
    ) => Promise<Window>
  }

  // eslint-disable-next-line no-var
  var documentPictureInPicture: DocumentPictureInPicture
}

type Props = React.ComponentProps<typeof Body>
export const PictureInPicture = ({ ...props }: Props) => {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  const noop = () => () => {}

  const isDocumentPipSupported = React.useSyncExternalStore(
    noop,
    () => 'documentPictureInPicture' in window,
    () => false,
  )

  async function onClick() {
    const pipWindow = await documentPictureInPicture.requestWindow({
      width: 320,
      height: 480,
      preferInitialWindowPlacement: true,
    })

    const styleElements = document.querySelectorAll(
      'link[rel="stylesheet"], style',
    )
    const clonedStyles = Array.from(styleElements).map((el) =>
      el.cloneNode(true),
    )
    pipWindow.document.head.append(...clonedStyles)
    pipWindow.document.documentElement.dataset.colorMode =
      document.documentElement.dataset.colorMode

    const metaViewport = document.createElement('meta')
    metaViewport.name = 'viewport'
    metaViewport.content = 'width=device-width, initial-scale=1'
    pipWindow.document.head.appendChild(metaViewport)

    const rootElement = pipWindow.document.createElement('div')
    rootElement.id = 'root'
    pipWindow.document.body.appendChild(rootElement)

    const root = ReactDOMClient.createRoot(rootElement)

    root.render(
      <article className="p-2">
        <Body {...props} />
      </article>,
    )
  }
  return (
    <Button
      suppressHydrationWarning={isDocumentPipSupported}
      hidden={!isDocumentPipSupported}
      onClick={onClick}
      type="button"
      aria-label="Picture in Pictureで記事を表示する"
      variant="outline"
      size="icon"
      className={cn(
        'hidden lg:inline-flex',
        !isDocumentPipSupported && 'lg:hidden',
      )}
    >
      <PictureInPictureIcon />
    </Button>
  )
}
