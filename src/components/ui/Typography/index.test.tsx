import { render, screen } from '@testing-library/react'
import { expect, test } from 'vitest'

import { Typography } from '.'

test('h1', () => {
  render(
    <Typography variant="h1" as="h1">
      h1
    </Typography>,
  )
  expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument()
})

test('h2', () => {
  render(
    <Typography variant="h2" as="h2">
      h2
    </Typography>,
  )
  expect(screen.getByRole('heading', { level: 2 })).toBeInTheDocument()
})
test('h3', () => {
  render(
    <Typography variant="h3" as="h3">
      h1
    </Typography>,
  )
  expect(screen.getByRole('heading', { level: 3 })).toBeInTheDocument()
})
test('h4', () => {
  render(
    <Typography variant="h4" as="h4">
      h1
    </Typography>,
  )
  expect(screen.getByRole('heading', { level: 4 })).toBeInTheDocument()
})
