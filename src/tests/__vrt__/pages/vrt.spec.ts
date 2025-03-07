import test, { expect } from '@playwright/test'

import { testRoutes } from './config'

test.describe('Visual Regression Testing', () => {
  for (const route of testRoutes) {
    test(`snapshot test ${route.name}`, async ({ page }) => {
      await page.goto(route.path, {
        waitUntil: 'networkidle',
      })
      await expect(page).toHaveScreenshot(
        [route.name, `${route.path === '/' ? 'home' : route.path}.png`],
        {
          fullPage: true,
        },
      )
    })
  }
})
