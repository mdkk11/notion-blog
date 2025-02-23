import { render, screen } from '@testing-library/react'
import { expect, test } from 'vitest'

import { Spinner } from '.'

test('role=["status"]', () => {
  render(<Spinner />)
  expect(screen.getByRole('status')).toBeInTheDocument()
})
