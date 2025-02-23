import { renderHook } from '@testing-library/react'
import { usePathname } from 'next/navigation'
import { describe, it, expect, test } from 'vitest'

import { PathNameContextProviderMock } from '@/tests/__mocks__/next/providers'

import { getDynamicRoot } from '.'

const setUp = (pathname: string) => {
  const { result } = renderHook(() => usePathname(), {
    wrapper: ({ children }) => (
      <PathNameContextProviderMock pathname={pathname}>
        {children}
      </PathNameContextProviderMock>
    ),
  })

  return { result }
}

describe('useCurrentPath', () => {
  it('should return the current pathname', () => {
    const { result } = setUp('/home')
    expect(result.current).toBe('/home')
  })
})

describe('getDynamicRoot', () => {
  test('正常に最初のパスセグメントを抽出できる場合', () => {
    expect(getDynamicRoot('/example/path')).toBe('/example')
    expect(getDynamicRoot('/test')).toBe('/test')
    expect(getDynamicRoot('/123/abc')).toBe('/123')
  })

  test('href が空文字列の場合', () => {
    expect(getDynamicRoot('')).toBeUndefined()
  })

  test('href がスラッシュで始まらない場合', () => {
    expect(getDynamicRoot('no-leading-slash')).toBeUndefined()
    expect(getDynamicRoot('relative/path')).toBeUndefined()
  })

  test('href に複数のスラッシュが含まれる場合', () => {
    expect(getDynamicRoot('//double-slash')).toBeUndefined()
    expect(getDynamicRoot('/valid//invalid')).toBe('/valid')
  })

  test('href が特殊文字を含む場合', () => {
    expect(getDynamicRoot('/@special')).toBe('/@special')
    expect(getDynamicRoot('/%encoded')).toBe('/%encoded')
    expect(getDynamicRoot('/!@#$%^&*()')).toBe('/!@#$%^&*()')
  })
})
