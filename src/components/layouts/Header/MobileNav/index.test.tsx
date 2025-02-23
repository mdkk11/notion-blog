import { render, screen } from '@testing-library/react'
import { describe, expect, test } from 'vitest'

import { PathNameContextProviderMock } from '@/tests/__mocks__/next/providers'

import { MobileNav } from '.'

const paths = [{ href: '/', title: 'Home' }]

describe('Layouts/Header/MobileNav', () => {
  test('role=["navigation"]', () => {
    render(
      <PathNameContextProviderMock>
        <MobileNav paths={paths} />
      </PathNameContextProviderMock>,
    )
    expect(
      screen.getByRole('navigation', { name: 'モバイルメインメニュー' }),
    ).toBeInTheDocument()
  })
})
