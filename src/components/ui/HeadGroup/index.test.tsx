import { composeStories } from '@storybook/react'
import { render } from '@testing-library/react'
import { expect, test } from 'vitest'

import * as stories from './index.stories'

const { Default } = composeStories(stories)

test('role=["banner"]', () => {
  const { getByRole } = render(<Default />)

  expect(getByRole('banner')).toBeInTheDocument()
})

test('role=["heading"]', () => {
  const { getByRole } = render(<Default />)
  expect(getByRole('heading')).toBeInTheDocument()
})

test('childrenをrenderできる', () => {
  const { getByText } = render(<Default>テキスト</Default>)
  expect(getByText('テキスト')).toBeInTheDocument()
})
