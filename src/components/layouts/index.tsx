import * as React from 'react'

import { Footer } from './Footer'
import { Header } from './Header'

export const DefaultLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative flex min-h-svh flex-col">
      <Header />
      <main className="mx-auto w-full flex-1 px-4 lg:max-w-7xl xl:px-0">
        {children}
      </main>
      <Footer />
    </div>
  )
}
