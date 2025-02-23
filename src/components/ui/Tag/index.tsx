import * as React from 'react'

export const Tag = ({ children }: { children: React.ReactNode }) => {
  return (
    <span className="rounded-full bg-primary px-2 py-1 text-xs font-semibold text-primary-foreground hover:underline">
      {children}
    </span>
  )
}
