import { describe, test, expect } from 'vitest'

import {
  cn,
  assertType,
  isExist,
  assertIsExist,
  isObject,
  assertIsObject,
  isCurrent,
  getFaviconUrl,
} from './'

describe('cn', () => {
  test('should merge class names correctly', () => {
    const result = cn('class1', 'class2', { class3: true, class4: false })
    expect(result).toBe('class1 class2 class3')
  })

  test('should handle empty inputs', () => {
    const result = cn('', undefined, null, false)
    expect(result).toBe('')
  })
})

describe('assertType', () => {
  test('should not throw an error when the type matches', () => {
    const obj = { type: 'test' }
    expect(() => {
      assertType('test', obj)
    }).not.toThrow()
  })

  test('should throw an error when the type does not match', () => {
    const obj = { type: 'wrong' }
    expect(() => {
      assertType('test', obj)
    }).toThrowError('unexpected type: wrong')
  })
})

describe('isExist', () => {
  test('should return true for non-null and non-undefined values', () => {
    expect(isExist('value')).toBe(true)
    expect(isExist(0)).toBe(true)
    expect(isExist(false)).toBe(true)
  })

  test('should return false for null or undefined values', () => {
    expect(isExist(null)).toBe(false)
    expect(isExist(undefined)).toBe(false)
  })
})

describe('assertIsExist', () => {
  test('should not throw an error for non-null and non-undefined values', () => {
    expect(() => {
      assertIsExist('value')
    }).not.toThrow()
  })

  test('should throw an error for null or undefined values', () => {
    expect(() => {
      assertIsExist(null, 'target')
    }).toThrowError('target should be specified')
    expect(() => {
      assertIsExist(undefined)
    }).toThrowError('should be specified')
  })
})

describe('isObject', () => {
  test('should return true for objects', () => {
    expect(isObject({})).toBe(true)
    expect(isObject({ key: 'value' })).toBe(true)
  })

  test('should return false for non-objects', () => {
    expect(isObject(null)).toBe(false)
    expect(isObject('string')).toBe(false)
    expect(isObject(123)).toBe(false)
  })
})

describe('assertIsObject', () => {
  test('should not throw an error for objects', () => {
    expect(() => {
      assertIsObject({})
    }).not.toThrow()
  })

  test('should throw an error for non-objects', () => {
    expect(() => {
      assertIsObject(null, 'target')
    }).toThrowError('target should be object')
    expect(() => {
      assertIsObject('string')
    }).toThrowError('should be object')
  })
})

describe('isCurrent', () => {
  test('should return an empty object when flag is false', () => {
    expect(isCurrent(false)).toEqual({})
  })

  test('should return aria-current attribute when flag is true', () => {
    expect(isCurrent(true)).toEqual({ 'aria-current': 'page' })
  })
})

describe('getFaviconUrl', () => {
  test('should generate a favicon URL with default size', () => {
    const url = getFaviconUrl('https://example.com')
    expect(url).toBe(
      'https://www.google.com/s2/favicons?domain=https%3A%2F%2Fexample.com&size=64',
    )
  })

  test('should generate a favicon URL with specified size', () => {
    const url = getFaviconUrl('https://example.com', 32)
    expect(url).toBe(
      'https://www.google.com/s2/favicons?domain=https%3A%2F%2Fexample.com&size=32',
    )
  })
})
