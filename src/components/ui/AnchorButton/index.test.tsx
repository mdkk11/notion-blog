import { render, screen } from '@testing-library/react'
import { expect, test } from 'vitest'

import { AnchorButton } from '.'

test('role="button"', () => {
  render(<AnchorButton href="/">AnchorButton</AnchorButton>)
  expect(screen.getByRole('button')).toBeInTheDocument()
  expect(screen.queryByRole('link')).not.toBeInTheDocument()
})

test('aria-disabled=["true"]', () => {
  render(
    <AnchorButton href="/" disabled>
      AnchorButton
    </AnchorButton>,
  )
  expect(screen.getByRole('button')).toHaveAttribute('aria-disabled', 'true')
})
