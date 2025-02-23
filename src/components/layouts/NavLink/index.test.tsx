import { render, screen } from '@testing-library/react'
import { expect, test } from 'vitest'

import { NavLink } from '.'

test('role=["link"]', () => {
  render(<NavLink href="#" />)
  expect(screen.getByRole('link')).toBeInTheDocument()
})
