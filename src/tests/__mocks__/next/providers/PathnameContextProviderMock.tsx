import { PathnameContext } from 'next/dist/shared/lib/hooks-client-context.shared-runtime'
import { ReactNode } from 'react'

type PathNameContextProviderMockProps = {
  pathname?: string
  children: ReactNode
}

export const PathNameContextProviderMock = ({
  pathname = '/',
  children,
}: PathNameContextProviderMockProps): ReactNode => {
  return (
    <PathnameContext.Provider value={pathname}>
      {children}
    </PathnameContext.Provider>
  )
}
