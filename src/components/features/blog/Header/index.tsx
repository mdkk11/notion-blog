import { AnchorButton } from '@/components/ui/AnchorButton'
import { HeadGroup } from '@/components/ui/HeadGroup'
import { ROUTE } from '@/const/paths'

export const HeaderWithLink = ({ title }: { title: string }) => {
  return (
    <HeadGroup title={title} variant="h1" as="h2">
      <AnchorButton
        className="hover:bg-foreground hover:text-primary-foreground"
        href={ROUTE.blog.allPosts()}
      >
        All POSTS
      </AnchorButton>
    </HeadGroup>
  )
}

export const Header = ({ title }: { title: string }) => {
  return <HeadGroup title={title} variant="h1" as="h2" />
}
