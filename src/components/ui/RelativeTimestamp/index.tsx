import {
  differenceInDays,
  format,
  formatDistanceToNow,
  formatISO,
} from 'date-fns'
import { ja } from 'date-fns/locale'

import { cn } from '@/utils'

type Props = {
  date: Date
} & Pick<React.ComponentPropsWithoutRef<'time'>, 'className'>

export const SHORT_DATE_FORMAT = 'MM月dd日'
export const LONG_DATE_FORMAT = 'yyyy年MM月dd日'

export const RelativeTimestamp = ({ date, className }: Props) => {
  const diffInDays = differenceInDays(new Date(), date)

  const dateFormat = (date: Date) => {
    switch (true) {
      case diffInDays < 8:
        return formatDistanceToNow(date, {
          locale: ja,
          addSuffix: true,
        })
      case diffInDays < 365:
        return format(date, SHORT_DATE_FORMAT)
      default:
        return format(date, LONG_DATE_FORMAT)
    }
  }

  return (
    <time dateTime={formatISO(date)} className={cn(className)}>
      {dateFormat(date)}
    </time>
  )
}
