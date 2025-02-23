import { VariantProps, cva } from 'class-variance-authority'

import { cn } from '@/utils'

const spinnerVariants = cva(
  ['animate-spin rounded-full border-foreground border-t-transparent'],
  {
    variants: {
      size: {
        sm: ['size-4 border-2'],
        md: ['size-5 border-[3px]'],
        lg: ['size-7 border-4'],
        icon: ['size-4 border-2'],
      },
    },
    defaultVariants: {
      size: 'md',
    },
  },
)

type Props = VariantProps<typeof spinnerVariants>

export const Spinner = ({ size }: Props) => {
  return (
    <div
      role="status"
      aria-label="読み込み中"
      className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 justify-center"
    >
      <div className={cn(spinnerVariants({ size }))} />
    </div>
  )
}
