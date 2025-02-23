import { type RefObject, useEffect } from 'react'

type ElementRef = RefObject<HTMLElement | null>

export function useClickOutside(
  refs: ElementRef | ElementRef[],
  handler: (event: MouseEvent | TouchEvent) => void,
) {
  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      const elements = Array.isArray(refs) ? refs : [refs]

      const areRefsValid = elements.every((ref) => ref.current != null)
      if (!areRefsValid) return

      const isClickInside = elements.some((ref) =>
        ref.current?.contains(event.target as Node),
      )

      if (isClickInside) return

      handler(event)
    }

    document.addEventListener('mousedown', listener)
    document.addEventListener('touchstart', listener)

    return () => {
      document.removeEventListener('mousedown', listener)
      document.removeEventListener('touchstart', listener)
    }
  }, [refs, handler])
}
