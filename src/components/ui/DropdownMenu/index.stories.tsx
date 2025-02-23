import type { Meta, StoryObj } from '@storybook/react'

import { DropdownMenu } from './'

const meta = {
  title: 'Common/DropdownMenu',
  component: DropdownMenu,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DropdownMenu>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: (
      <ul>
        <li>List1</li>
        <li>List2</li>
        <li>List3</li>
        <li>List4</li>
      </ul>
    ),
    trigger: <button>OPEN</button>,
  },
}
