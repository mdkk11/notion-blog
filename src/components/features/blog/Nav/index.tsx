'use client'

import { usePathname } from 'next/navigation'
import * as React from 'react'

import { NavLink } from '@/components/layouts/NavLink'
import { ROUTE } from '@/const/paths'
import { Path } from '@/types/utils'
import { isCurrent } from '@/utils'

type NavProps = React.ComponentPropsWithoutRef<'nav'>

export const blogNavRoutes = [
  { href: ROUTE.blog.allPosts(), title: 'All' },
  { href: ROUTE.blog.vinylPosts(), title: 'Vinyl' },
  { href: ROUTE.blog.zennPosts(), title: 'Zenn' },
] as const satisfies readonly Path[]

export const Nav = ({ ...props }: NavProps) => {
  const pathname = usePathname()

  return (
    <nav {...props} aria-label="記事のドメインメニュー">
      <ul className="flex gap-8">
        {blogNavRoutes.map((path) => (
          <li key={path.title}>
            <NavLink
              href={path.href}
              current={pathname.includes(path.href)}
              {...isCurrent(pathname.includes(path.href))}
              size="md"
            >
              {path.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}
