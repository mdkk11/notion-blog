import * as React from 'react'
import * as ReactDOMClient from 'react-dom/client'

import { Body } from '@/components/features/blog/Body'

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

export type useDocumentPipProps = React.ComponentProps<typeof Body>

export function useDocumentPip({ ...props }: useDocumentPipProps) {
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

    pipWindow.document.documentElement.style.fontSize = '0.85rem'
    pipWindow.document.documentElement.style.padding = '0.8rem'

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

  return {
    isDocumentPipSupported,
    onClick,
  }
}
