import { render, screen } from '@testing-library/react'
import { expect, test } from 'vitest'

import { Link } from '.'

test('role=["link"]', () => {
  render(<Link href="#" />)
  expect(screen.getByRole('link')).toBeInTheDocument()
})
