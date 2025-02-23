import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react'

import { cn, isCurrent } from '@/utils'

import { PaginationLink } from './PaginationLink'

type Props = {
  totalCount: number
  perPage: number
  current: number
  basePath: string
}

export const Pagination = ({
  totalCount,
  perPage,
  current,
  basePath,
}: Props) => {
  const range = (start: number, end: number) =>
    [...Array(end - start + 1)].map((_, i) => start + i)

  return (
    <nav aria-label="ページネーション">
      <ul className="flex justify-center gap-2">
        <li className={cn('justify-self-start', current > 1 ? '' : 'hidden')}>
          <PaginationLink
            aria-label="前のページ"
            href={`${basePath}?page=${(current - 1).toString()}`}
          >
            <ChevronLeftIcon className="w-5" />
          </PaginationLink>
        </li>
        {range(1, Math.ceil(totalCount / perPage)).map((number, index) => (
          <li key={index}>
            <PaginationLink
              href={`${basePath}?page=${number.toString()}`}
              {...isCurrent(number === current)}
            >
              {number}
            </PaginationLink>
          </li>
        ))}
        <li
          className={cn(
            current < Math.ceil(totalCount / perPage) ? '' : 'hidden',
          )}
        >
          <PaginationLink
            aria-label="次のページ"
            href={`${basePath}/?page=${(current + 1).toString()}`}
          >
            <ChevronRightIcon className="w-5" />
          </PaginationLink>
        </li>
      </ul>
    </nav>
  )
}
