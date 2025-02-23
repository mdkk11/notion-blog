import { render, screen } from '@testing-library/react'
import { describe, expect, test } from 'vitest'

import { PathNameContextProviderMock } from '@/tests/__mocks__/next/providers'

import { Header } from '.'

const setUp = () => {
  render(
    <PathNameContextProviderMock>
      <Header />
    </PathNameContextProviderMock>,
  )
}
describe('Layouts/Header', () => {
  test('role=["banner"]', () => {
    setUp()
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument()
  })
  test('role=["navigation"] in Desktop', () => {
    setUp()
    expect(
      screen.getByRole('navigation', { name: 'デスクトップメインメニュー' }),
    ).toBeInTheDocument()
  })

  test('role=["navigation"] in Mobile', () => {
    setUp()
    expect(
      screen.getByRole('navigation', { name: 'モバイルメインメニュー' }),
    ).toBeInTheDocument()
  })
})
