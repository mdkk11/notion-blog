import { render, screen } from '@testing-library/react'
import { describe, expect, test } from 'vitest'

import { PathNameContextProviderMock } from '@/tests/__mocks__/next/providers'

import { Nav } from '.'

const Paths = [{ href: '/', title: 'Home' }] as const

describe('Layouts/Header/Nav', () => {
  test('role=["navigation"]', () => {
    render(
      <PathNameContextProviderMock>
        <Nav paths={Paths} />
      </PathNameContextProviderMock>,
    )
    expect(
      screen.getByRole('navigation', { name: 'デスクトップメインメニュー' }),
    ).toBeInTheDocument()
  })
})
