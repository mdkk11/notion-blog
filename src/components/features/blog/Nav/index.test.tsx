import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'

import { ROUTE } from '@/const/paths'

import { blogNavRoutes, Nav } from '../Nav'

export const mockedPathname = ROUTE.blog.allPosts()

const { usePathname } = vi.hoisted(() => ({
  usePathname: () => mockedPathname,
}))

vi.mock('next/navigation', async () => ({
  ...(await vi.importActual('next/navigation')),
  usePathname,
}))

export { usePathname }

describe('features/blog/Nav', () => {
  it('role=["navigation"]', () => {
    render(<Nav />)
    expect(
      screen.getByRole('navigation', { name: '記事のドメインメニュー' }),
    ).toBeInTheDocument()
  })

  it('should render all nav links', () => {
    render(<Nav />)
    blogNavRoutes.forEach((path) => {
      expect(screen.getByText(path.title)).toBeInTheDocument()
    })
  })

  it('should mark current page correctly', () => {
    render(<Nav />)

    const currentNavLink = screen.getByText('All')
    expect(currentNavLink).toHaveAttribute('aria-current', 'page')
  })
})
