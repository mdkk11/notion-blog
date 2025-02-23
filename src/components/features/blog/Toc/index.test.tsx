import { render, screen } from '@testing-library/react'
import { expect, test } from 'vitest'

import { Toc } from '.'

test('role=["navigation"]', () => {
  render(<Toc />)
  expect(screen.getByRole('navigation')).toBeInTheDocument()
})

test('role=["heading"]', () => {
  render(<Toc />)
  expect(screen.getByRole('heading', { level: 2 })).toBeInTheDocument()
})
