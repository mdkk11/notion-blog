'use client'

import { PictureInPictureIcon } from 'lucide-react'
import * as React from 'react'

import { Button } from '@/components/ui/Button'
import '@/app/globals.css'
import { cn } from '@/utils'

import { useDocumentPip, useDocumentPipProps } from './useDocumentPiP'

type Props = useDocumentPipProps
export const PictureInPicture = ({ ...props }: Props) => {
  const { isDocumentPipSupported, onClick } = useDocumentPip(props)
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
