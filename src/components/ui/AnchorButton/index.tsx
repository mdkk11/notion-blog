import { cva, VariantProps } from 'class-variance-authority'
import Link from 'next/link'
import * as React from 'react'

import { cn } from '@/utils'

export const anchorButtonVariants = cva(
  [
    'relative inline-flex items-center justify-center border font-semibold transition-all ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50',
  ],
  {
    variants: {
      size: {
        sm: 'px-2 py-1 text-base',
        md: 'px-3 py-2 text-xl',
      },
    },
    defaultVariants: {
      size: 'sm',
    },
  },
)

export type LinkProps = React.ComponentPropsWithRef<typeof Link> &
  VariantProps<typeof anchorButtonVariants> & { disabled?: boolean }

export const AnchorButton = React.forwardRef<HTMLAnchorElement, LinkProps>(
  function AnchorLink({ className, disabled, size, ...props }, ref) {
    return (
      <Link
        {...props}
        ref={ref}
        aria-disabled={disabled}
        className={cn(anchorButtonVariants({ size }), className)}
        role="button"
      />
    )
  },
)
