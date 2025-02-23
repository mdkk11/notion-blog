import { render, screen } from '@testing-library/react'
import { expect, test } from 'vitest'

import { OGPCard } from '.'
import metadata from './mock'

test('role=["link"]', () => {
  render(<OGPCard {...metadata} />)
  expect(screen.getByRole('link')).toBeInTheDocument()
})
