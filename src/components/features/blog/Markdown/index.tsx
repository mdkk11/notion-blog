import * as React from 'react'

export const Markdown = ({ markdown }: { markdown: React.ReactNode }) => {
  return (
    <div className="content prose w-full space-y-4 overflow-hidden dark:prose-invert prose-img:m-0">
      {markdown}
    </div>
  )
}
