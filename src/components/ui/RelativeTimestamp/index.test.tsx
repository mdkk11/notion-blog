import { render, screen } from '@testing-library/react'
import { format, formatDistanceToNow } from 'date-fns'
import { ja } from 'date-fns/locale'
import { test, describe, expect } from 'vitest'

import { LONG_DATE_FORMAT, RelativeTimestamp, SHORT_DATE_FORMAT } from '.'

describe('dateFormat', () => {
  test('8日未満の日付の場合', () => {
    const date = new Date(new Date().setDate(new Date().getDate() - 3))
    render(<RelativeTimestamp date={date} />)
    const result = formatDistanceToNow(date, { locale: ja, addSuffix: true })
    expect(screen.getByText(result)).toBeInTheDocument()
  })

  test('365日未満の日付の場合', () => {
    const date = new Date(new Date().setMonth(new Date().getMonth() - 1))
    render(<RelativeTimestamp date={date} />)
    const result = format(date, SHORT_DATE_FORMAT)
    expect(screen.getByText(result)).toBeInTheDocument()
  })

  test('365日以上の日付の場合', () => {
    const date = new Date(new Date().setFullYear(new Date().getFullYear() - 2))
    render(<RelativeTimestamp date={date} />)
    const result = format(date, LONG_DATE_FORMAT)
    expect(screen.getByText(result)).toBeInTheDocument()
  })
})
