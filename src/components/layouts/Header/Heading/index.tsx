import { Link } from '@/components/ui/Link'
import { ROUTE } from '@/const/paths'

export const Heading = () => {
  return (
    <h1>
      <Link
        href={ROUTE.home()}
        className="text-xl font-bold hover:no-underline"
      >
        Vinyl
      </Link>
    </h1>
  )
}
