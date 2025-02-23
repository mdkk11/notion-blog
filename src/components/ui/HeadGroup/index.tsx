import * as React from 'react'

import { Typography } from '../Typography'

type Props = {
  title: string
} & Pick<React.ComponentPropsWithoutRef<typeof Typography>, 'variant' | 'as'> &
  Pick<React.ComponentPropsWithoutRef<'header'>, 'children'>

export const HeadGroup = ({ title, variant, as, children }: Props) => {
  return (
    <header className="flex items-end justify-between">
      <Typography variant={variant} as={as}>
        {title}
      </Typography>
      {children}
    </header>
  )
}
