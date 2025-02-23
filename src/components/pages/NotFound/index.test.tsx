import { render, screen } from '@testing-library/react'
import { describe, expect, test } from 'vitest'

import { NotFound } from '.'

describe('pages/Home', () => {
  test('role=["heading"]', () => {
    render(<NotFound />)
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument()
  })
  test('role=["button"]', () => {
    render(<NotFound />)
    expect(screen.getByRole('button')).toBeInTheDocument()
    expect(screen.queryByRole('link')).not.toBeInTheDocument()
  })
})
