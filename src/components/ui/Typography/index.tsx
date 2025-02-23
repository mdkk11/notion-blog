import { VariantProps, cva } from 'class-variance-authority'
import React from 'react'

import { cn } from '@/utils'

type Props<T extends React.ElementType> = {
  as?: T
} & React.ComponentPropsWithoutRef<T> &
  VariantProps<typeof TypographyVariants>

const TypographyVariants = cva([], {
  variants: {
    variant: {
      h1: 'scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl',
      h2: 'scroll-m-20 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0',
      h3: 'scroll-m-20 text-2xl font-semibold tracking-tight',
      h4: 'scroll-m-20 text-xl font-semibold tracking-tight',
      p: 'leading-7 [&:not(:first-child)]:mt-6',
      blockquote: 'mt-6 border-l-2 pl-6 italic',
    },
  },
  defaultVariants: {
    variant: 'h1',
  },
})

export const Typography = <T extends React.ElementType>({
  as,
  className,
  variant,
  ...props
}: Props<T>) => {
  const Component = as ?? 'h1'

  return (
    <Component
      {...props}
      className={cn(TypographyVariants({ variant, className }))}
    />
  )
}
