import test, { expect } from '@playwright/test'

import { storyInfos } from './config'

test.describe('visual regression testing', () => {
  for (const story of storyInfos) {
    test(`snapshot test ${story.title}: ${story.name}`, async ({ page }) => {
      await page.goto(`http://localhost:8080/iframe.html?id=${story.id}`, {
        waitUntil: 'networkidle',
      })
      await page.waitForSelector('body')
      await expect(page).toHaveScreenshot([story.title, `${story.id}.png`], {
        fullPage: true,
      })
    })
  }
})
