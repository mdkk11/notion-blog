'use client'

import { Menu, X } from 'lucide-react'

import { NavLink } from '@/components/layouts/NavLink'
import { Button } from '@/components/ui/Button'
import { ThemeToggleButton } from '@/components/ui/ThemeToggleButton'
import { useCurrentPath } from '@/hooks/useCurrentPath'
import { Path } from '@/types/utils'
import { isCurrent } from '@/utils'

import { useMobileNav } from './useMobileNav'

export const MobileNav = ({ paths }: { paths: readonly Path[] }) => {
  const { isShow, onToggleNav } = useMobileNav()
  const { isMatchPath } = useCurrentPath()

  return (
    <div className="md:hidden">
      <Button
        aria-label="モバイルメニューを開く"
        onClick={onToggleNav}
        variant="outline"
        size="icon"
      >
        <Menu />
      </Button>
      <div
        className={`fixed left-0 top-0 z-10 size-full bg-primary duration-300 ease-in-out ${
          isShow ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="absolute right-4 top-2 flex gap-4">
          <ThemeToggleButton />
          <Button
            aria-label="モバイルメニューを閉じる"
            onClick={onToggleNav}
            variant="outline"
            size="icon"
          >
            <X />
          </Button>
        </div>
        <nav aria-label="モバイルメインメニュー" className="fixed mt-12 h-full">
          {paths.map((path) => (
            <ul key={path.title} className="px-12 py-4">
              <li>
                <NavLink
                  size="md"
                  href={path.href}
                  onClick={onToggleNav}
                  className="decoration-primary-foreground"
                  current={isMatchPath(path.href)}
                  {...isCurrent(isMatchPath(path.href))}
                >
                  {path.title}
                </NavLink>
              </li>
            </ul>
          ))}
        </nav>
      </div>
    </div>
  )
}
