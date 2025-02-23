import {
  autoUpdate,
  flip,
  offset,
  shift,
  useClick,
  useDismiss,
  useFloating,
  useId,
  useInteractions,
  useRole,
  Placement,
} from '@floating-ui/react'
import * as React from 'react'

export type DropdownMenuOptions = {
  initialOpen?: boolean
  placement?: Placement
  open?: boolean
  onOpenChange?: (open: boolean) => void
}
export const useDropdownMenu = ({
  initialOpen = false,
  placement = 'bottom',
  open: controlledOpen,
  onOpenChange: setControlledOpen,
}: DropdownMenuOptions) => {
  const id = useId()
  const [uncontrolledOpen, setUncontrolledOpen] = React.useState(initialOpen)
  const open = controlledOpen ?? uncontrolledOpen
  const setOpen = setControlledOpen ?? setUncontrolledOpen

  const data = useFloating({
    open,
    onOpenChange: setOpen,
    middleware: [
      offset(5),
      flip({
        crossAxis: placement.includes('-'),
        fallbackAxisSideDirection: 'end',
        padding: 5,
      }),
      shift({ padding: 5 }),
    ],
    whileElementsMounted: autoUpdate,
  })
  const click = useClick(data.context)
  const dismiss = useDismiss(data.context)
  const role = useRole(data.context)
  const interActions = useInteractions([click, dismiss, role])

  return React.useMemo(
    () => ({
      id,
      open,
      setOpen,
      ...data,
      ...interActions,
    }),
    [id, open, setOpen, data, interActions],
  )
}
