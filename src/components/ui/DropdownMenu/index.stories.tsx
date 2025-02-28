import type { Meta, StoryObj } from '@storybook/react'

import { DropdownMenu } from './'

const meta = {
  title: 'Common/DropdownMenu',
  component: DropdownMenu,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
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
} satisfies Meta<typeof DropdownMenu>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const InitialOpen: Story = {
  args: { options: { initialOpen: true } },
}

export const PlacementTop: Story = {
  args: { options: { placement: 'top', initialOpen: true } },
}
export const PlacementRight: Story = {
  args: { options: { placement: 'right', initialOpen: true } },
}

export const PlacementLeft: Story = {
  args: { options: { placement: 'left', initialOpen: true } },
}

export const PlacementBottom: Story = {
  args: { options: { placement: 'bottom', initialOpen: true } },
}
