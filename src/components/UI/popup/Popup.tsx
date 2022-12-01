/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { ReactElement } from 'react'

import { useMount } from './useMount'
import Portal from './Portal'
import Layout from './Layout'

interface PopupProps {
  open: boolean
  onClose: () => void
  children: ReactElement | ReactElement[]
}

function Popup({ open, onClose, children }: PopupProps) {
  const { mounted } = useMount({ opened: open })

  if (!mounted) return null

  return (
    <Portal>
      <Layout open={open} onClose={onClose}>
        {children}
      </Layout>
    </Portal>
  )
}

export default Popup
