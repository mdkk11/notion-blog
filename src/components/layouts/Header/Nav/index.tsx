'use client'

import * as React from 'react'

import { NavLink } from '@/components/layouts/NavLink'
import { ThemeToggleButton } from '@/components/ui/ThemeToggleButton'
import { useCurrentPath } from '@/hooks/useCurrentPath'
import { Path } from '@/types/utils'
import { isCurrent } from '@/utils'

export const Nav = ({ paths }: { paths: readonly Path[] }) => {
  const { isMatchPath } = useCurrentPath()

  return (
    <nav aria-label="デスクトップメインメニュー" className="hidden md:flex">
      <ul className="flex items-center gap-5">
        {paths.map((path) => (
          <li key={path.title}>
            <NavLink
              href={path.href}
              current={isMatchPath(path.href)}
              {...isCurrent(isMatchPath(path.href))}
            >
              {path.title}
            </NavLink>
          </li>
        ))}
      </ul>
      <div className="ml-20">
        <ThemeToggleButton />
      </div>
    </nav>
  )
}
