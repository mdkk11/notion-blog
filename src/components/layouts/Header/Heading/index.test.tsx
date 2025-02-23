import { render, screen } from '@testing-library/react'
import { describe, expect, test } from 'vitest'

import { Heading } from '.'

describe('Layouts/Header/Heading', () => {
  test('role=["heading"]', () => {
    render(<Heading />)
    expect(screen.getByRole('heading')).toBeInTheDocument()
  })

  test('role=["link"]', () => {
    render(<Heading />)
    expect(screen.getByRole('link')).toBeInTheDocument()
  })
})
