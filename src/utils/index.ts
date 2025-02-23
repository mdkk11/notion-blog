import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...classes: ClassValue[]) {
  return twMerge(clsx(classes))
}

export function assertType<T extends string>(
  type: T,
  obj: { type: string },
): asserts obj is { type: T } {
  if (obj.type !== type) {
    throw new Error(`unexpected type: ${obj.type}`)
  }
}

export function isExist<T>(v: T | null | undefined): v is NonNullable<T> {
  return typeof v !== 'undefined' && v !== null
}

export function assertIsExist<T>(
  v: T | null | undefined,
  target = '',
): asserts v is NonNullable<T> {
  if (!isExist(v)) {
    throw new Error(`${target} should be specified`.trim())
  }
}

export function isObject(v: unknown): v is Record<string, unknown> {
  return typeof v === 'object' && v !== null
}

export function assertIsObject(
  v: unknown,
  target = '',
): asserts v is Record<string, unknown> {
  if (!isObject(v)) {
    throw new Error(`${target} should be object`.trim())
  }
}

export function isCurrent(
  flag: boolean,
): React.AnchorHTMLAttributes<HTMLAnchorElement> {
  if (!flag) return {}
  return { 'aria-current': 'page' }
}

export function getFaviconUrl(pageUrl: string, size: 16 | 32 | 64 = 64) {
  return `https://www.google.com/s2/favicons?domain=${encodeURIComponent(
    pageUrl,
  )}&size=${size.toString()}`
}
