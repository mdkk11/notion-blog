/* eslint-disable */

import * as prod from 'react/jsx-runtime'
import rehypePrettyCode from 'rehype-pretty-code'
import rehypeReact from 'rehype-react'
import rehypeSlug from 'rehype-slug'
import remarkGfm from 'remark-gfm'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import { unified } from 'unified'

import { CustomLink } from '@/lib/ogp/CustomLink'

const production = { Fragment: prod.Fragment, jsx: prod.jsx, jsxs: prod.jsxs }

export async function markdownToHtml(markdown: string) {
  const file = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypeSlug)
    .use(rehypePrettyCode)
    .use(rehypeReact, {
      ...production,
      components: {
        a: CustomLink,
      },
    })
    .process(markdown)

  return file.result
}
