'use client'

import { FloatingFocusManager } from '@floating-ui/react'
import * as React from 'react'

import { useMergeRefs } from '@/hooks/useMergeRef'
import { cn } from '@/utils'

import { DropdownMenuOptions, useDropdownMenu } from './hooks'

type DropdownMenuProps = {
  children: React.ReactNode
  options?: DropdownMenuOptions
  trigger: React.ReactElement
}

export const DropdownMenu = ({
  children,
  options,
  trigger,
}: DropdownMenuProps) => {
  const {
    refs,
    floatingStyles,
    getFloatingProps,
    getReferenceProps,
    open,
    id,
    context,
  } = useDropdownMenu(options ?? {})

  return (
    <>
      <DropdownMenuTrigger
        trigger={trigger}
        getReferenceProps={getReferenceProps}
        setReference={refs.setReference}
      />
      {open && (
        <FloatingFocusManager context={context} modal={false}>
          <div
            aria-labelledby={id}
            ref={refs.setFloating}
            style={floatingStyles}
            {...getFloatingProps()}
            className={cn(
              'z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md',
              'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
            )}
          >
            {children}
          </div>
        </FloatingFocusManager>
      )}
    </>
  )
}

type DropdownMenuTriggerProps = {
  trigger: React.ReactElement
  getReferenceProps: () => React.HTMLProps<HTMLElement>
  setReference: (node: HTMLElement | null) => void
}

export const DropdownMenuTrigger = React.forwardRef<
  HTMLElement,
  DropdownMenuTriggerProps
>(function DropdownMenuTrigger(
  { trigger, getReferenceProps, setReference },
  propRef,
) {
  const childrenRef = (
    trigger as React.ReactElement & { ref?: React.Ref<HTMLElement> }
  ).ref
  const ref = useMergeRefs(setReference, propRef, childrenRef)

  return React.cloneElement(trigger, {
    ref,
    ...getReferenceProps(),
  })
})
