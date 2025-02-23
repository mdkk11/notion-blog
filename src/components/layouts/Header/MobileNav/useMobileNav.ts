import { usePathname, useSearchParams } from 'next/navigation'
import { useCallback, useEffect, useState } from 'react'

export const useMobileNav = () => {
  const [isShow, setIsShow] = useState(false)
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsShow(false)
      }
    }
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [isShow])

  useEffect(() => {
    setIsShow(false)
  }, [pathname, searchParams])

  const onToggleNav = useCallback(() => {
    setIsShow((status) => {
      if (status) {
        document.body.style.overflow = 'auto'
      } else {
        document.body.style.overflow = 'hidden'
      }
      return !status
    })
  }, [])

  return { isShow, onToggleNav }
}
