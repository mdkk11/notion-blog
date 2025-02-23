'use client'

import { usePathname } from 'next/navigation'

export function useCurrentPath() {
  const pathname = usePathname()

  function isMatchPath(href: string): boolean {
    const dynamicRoot = getDynamicRoot(href)
    if (dynamicRoot) {
      return pathname.startsWith(dynamicRoot)
    }
    return pathname === href
  }

  return {
    pathname,
    isMatchPath,
  }
}

export function getDynamicRoot(href: string): string | undefined {
  const match = /^\/[^/]+/.exec(href)
  return match ? match[0] : undefined
}
