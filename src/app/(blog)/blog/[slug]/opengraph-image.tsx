import fs from 'fs/promises'
import path from 'path'

import { ImageResponse } from 'next/og'

import { fetchPageMetadata } from '@/services/notion/fetcher'
import { extractPageProperties } from '@/services/notion/utils'

type Props = {
  params: Promise<{
    slug: string
  }>
}

const assetsDirectory = process.cwd() + '/assets'

const handler = async ({ params }: Props) => {
  const { slug } = await params
  const data = await fetchPageMetadata(slug)
  const post = extractPageProperties(data)

  const fontInterPromise = fs.readFile(
    path.join(assetsDirectory, 'Inter-Bold.ttf'),
  )
  const fontNotSansJPPromise = fs.readFile(
    path.join(assetsDirectory, 'NotoSansJP-Bold.ttf'),
  )
  const ogImageBasePromise = fs
    .readFile(path.join(assetsDirectory, 'ogImage-base.png'), {
      encoding: 'base64',
    })
    .then((base64) => `data:image/png;base64,${base64}`)

  return new ImageResponse(
    (
      <div
        lang="ja-JP"
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          padding: '80px 100px 120px',
          position: 'relative',
        }}
      >
        {}
        <img
          alt=""
          src={await ogImageBasePromise}
          width={1200}
          height={630}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
          }}
        />
        <div
          style={{
            display: 'flex',
            fontFamily: 'Inter, NotoSansJP',
            fontSize: 64,
            fontWeight: 700,
            lineHeight: 1.4,
            letterSpacing: '-0.01em',
            color: '#F1F1F4',
            width: '100%',
            maxHeight: '100%',
            overflow: 'hidden',
          }}
        >
          {post.title}
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: 'Inter',
          data: await fontInterPromise,
          style: 'normal',
          weight: 700,
        },
        {
          name: 'NotoSansJP',
          data: await fontNotSansJPPromise,
          style: 'normal',
          weight: 700,
        },
      ],
    },
  )
}

export default handler

export const size = {
  width: 1200,
  height: 630,
}
