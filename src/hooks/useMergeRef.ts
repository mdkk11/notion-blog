import * as React from 'react'

type ReactRef<T> = React.Ref<T>

function assignRef<T = unknown>(ref: ReactRef<T> | undefined, value: T) {
  if (ref == null) return

  if (typeof ref === 'function') {
    ref(value)
    return
  }

  try {
    ref.current = value
  } catch {
    throw new Error(`Cannot assign value '${value as string}' to ref `)
  }
}

export function useMergeRefs<T>(...refs: (ReactRef<T> | undefined)[]) {
  return React.useMemo(() => {
    if (refs.every((ref) => ref == null)) {
      return null
    }
    return (node: T) => {
      refs.forEach((ref) => {
        if (ref) assignRef(ref, node)
      })
    }
  }, [refs])
}
