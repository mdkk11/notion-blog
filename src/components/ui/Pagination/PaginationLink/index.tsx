import Link from 'next/link'
import * as React from 'react'

type Props = React.ComponentPropsWithoutRef<typeof Link>

export const PaginationLink = ({ ...props }: Props) => {
  return (
    <Link
      {...props}
      className="flex size-9 items-center justify-center hover:opacity-80 aria-[current]:pointer-events-none aria-[current]:bg-foreground aria-[current]:font-semibold aria-[current]:text-secondary hover:aria-[current]:opacity-100"
    />
  )
}
