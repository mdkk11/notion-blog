import { cva, VariantProps } from 'class-variance-authority'
import NextLink from 'next/link'
import * as React from 'react'

import { cn } from '@/utils'

export const linkVariants = cva(
  [
    'underline-offset-[6px] hover:underline hover:opacity-70 disabled:pointer-events-none disabled:opacity-50',
  ],
  {
    variants: {
      size: {
        sm: 'text-sm',
        md: 'text-base',
        lg: 'text-lg',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  },
)
type Props = React.ComponentPropsWithoutRef<typeof NextLink> &
  VariantProps<typeof linkVariants>

export const Link = React.forwardRef<HTMLAnchorElement, Props>(
  function AnchorButtonBase({ children, className, size, ...props }, ref) {
    return (
      <NextLink
        className={cn(linkVariants({ size }), className)}
        ref={ref}
        {...props}
      >
        {children}
      </NextLink>
    )
  },
)
