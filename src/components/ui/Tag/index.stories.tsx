import { StoryObj, Meta } from '@storybook/react'

import { Tag } from '.'

const meta: Meta<typeof Tag> = {
  title: 'Common/Tag',
  component: Tag,
  args: { children: 'Next.js' },
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof Tag>

export const Default: Story = {}
