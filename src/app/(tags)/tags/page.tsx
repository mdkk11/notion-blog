import * as Tags from '@/components/pages/(tags)/Tags'
import { DATABASE_ID } from '@/lib/notion'
import { fetchAvailableTags } from '@/services/notion/fetcher'

export default async function TagsPage() {
  const tags = await fetchAvailableTags(DATABASE_ID)

  const props = {
    tags: { tags },
  } satisfies Tags.Props

  return <Tags.Page {...props} />
}
