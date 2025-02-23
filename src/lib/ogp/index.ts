import * as cheerio from 'cheerio'

export type OgpMetadata = {
  url: string
  favicon_url: string
  site_name?: string
  title?: string
  description?: string
  image?: string
  type?: string
}

export async function fetchSiteMetadata(
  url: string,
): Promise<OgpMetadata | null> {
  try {
    const response = await fetch(url, {
      next: { revalidate: 60 * 60 * 24 * 7 },
    })

    if (!response.ok) {
      return null
    }

    const html = await response.text()
    const metadata: OgpMetadata = {
      url: encodeURI(url),
      favicon_url: `https://www.google.com/s2/favicons?domain=${encodeURI(url)}`,
    }
    const $ = cheerio.load(html)

    const title = $('title').text().trim()
    metadata.title = title

    const metaTags = $('meta')

    for (const meta of metaTags) {
      const property = meta.attribs.property

      if (property === 'og:site_name') {
        metadata.site_name = meta.attribs.content || undefined
      }
      if (property === 'og:title') {
        metadata.title = meta.attribs.content || title
      }
      if (property === 'og:description') {
        metadata.description = meta.attribs.content || undefined
      }
      if (property === 'og:image') {
        metadata.image = meta.attribs.content || undefined
      }
      if (property === 'og:type') {
        metadata.type = meta.attribs.content || undefined
      }

      const metaName = meta.attribs.name

      if (metaName === 'description') {
        metadata.description = meta.attribs.content || undefined
      }
    }

    return metadata
  } catch (e) {
    console.error(e)
    return null
  }
}
