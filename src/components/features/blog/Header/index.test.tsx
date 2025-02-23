import { render, screen } from '@testing-library/react'
import { describe, expect, test } from 'vitest'

import { Header } from '.'

describe('features/blog/Header', () => {
  test('role=["banner"]', () => {
    render(<Header title="All Posts" />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
  })
})
