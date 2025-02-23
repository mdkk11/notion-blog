'use client'

import { Moon, Sun, MonitorCog, LucideProps } from 'lucide-react'
import { useTheme } from 'next-themes'
import * as React from 'react'

import { Button } from '../Button'
import { DropdownMenu } from '../DropdownMenu'

type Theme = 'system' | 'light' | 'dark'

export const Trigger = React.forwardRef<
  HTMLButtonElement,
  React.ComponentPropsWithoutRef<typeof Button>
>(function Trigger(props, ref) {
  return (
    <Button ref={ref} variant="outline" size="icon" {...props}>
      <Sun className="size-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute size-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
})

export const ThemeToggleButton = () => {
  const items = [
    { value: 'system', label: 'System', icon: MonitorCog },
    { value: 'light', label: 'Light', icon: Sun },
    { value: 'dark', label: 'Dark', icon: Moon },
  ] as const satisfies readonly {
    value: Theme
    label: string
    icon: React.ForwardRefExoticComponent<
      Omit<LucideProps, 'ref'> & React.RefAttributes<SVGSVGElement>
    >
  }[]
  const { setTheme } = useTheme()
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <DropdownMenu
      options={{ open: isOpen, onOpenChange: setIsOpen }}
      trigger={<Trigger />}
    >
      <ul>
        {items.map(({ value, label, icon: Icon }) => (
          <li key={label}>
            <button
              onClick={() => {
                setTheme(value)
                setIsOpen(false)
              }}
              className="flex w-full cursor-pointer select-none items-center gap-3 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:opacity-70 data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
            >
              <Icon className="size-4 text-foreground" />
              {label}
            </button>
          </li>
        ))}
      </ul>
    </DropdownMenu>
  )
}
