import { cva, VariantProps } from 'class-variance-authority'
import Link from 'next/link'
import * as React from 'react'

import { cn } from '@/utils'

const navLinkVariants = cva(
  [
    'ease whitespace-nowrap p-2 decoration-primary underline-offset-8 transition-all hover:underline',
  ],
  {
    variants: {
      size: {
        sm: 'text-base',
        md: 'text-lg',
        lg: 'text-2xl font-bold',
      },
      current: {
        true: 'aria-[current]:font-semibold aria-[current]:underline',
        false: '',
      },
    },
    defaultVariants: {
      size: 'sm',
      current: false,
    },
  },
)
type Props = React.ComponentPropsWithoutRef<typeof Link> &
  VariantProps<typeof navLinkVariants>

export const NavLink = ({ size, current, className, ...props }: Props) => {
  return (
    <Link
      {...props}
      className={cn(navLinkVariants({ size, current, className }))}
    />
  )
}
