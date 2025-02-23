import * as React from 'react'

import { ROUTE } from '@/const/paths'
import { Path } from '@/types/utils'

import { Heading } from './Heading'
import { MobileNav } from './MobileNav'
import { Nav } from './Nav'

export const HeaderNavPaths = [
  { href: ROUTE.home(), title: 'Home' },
  { href: ROUTE.blog.allPosts(), title: 'Posts' },
  { href: ROUTE.tags.allTags(), title: 'Tags' },
] as const satisfies readonly Path[]

export const Header = () => {
  return (
    <header className="grid h-14 border-b px-4 md:h-20">
      <div className="mx-auto flex w-full items-center justify-between lg:max-w-7xl">
        <Heading />
        <div>
          <React.Suspense>
            <MobileNav paths={HeaderNavPaths} />
          </React.Suspense>
          <Nav paths={HeaderNavPaths} />
        </div>
      </div>
    </header>
  )
}
