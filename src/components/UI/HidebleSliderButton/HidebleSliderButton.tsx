import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose, IconDefinition } from '@fortawesome/free-solid-svg-icons'
import { FC, ReactElement, useEffect, useState } from 'react'

import ButtonIconRound from '../BottonIconRound/ButtonIconRound'
import { useMount } from '../../../hooks/useMount'

import styles from './HidebleSliderButton.module.scss'

interface HidebleSliderButtonProps {
  icon: IconDefinition
  children: ReactElement | ReactElement[]
  transitionX?: number
  onClose?: () => void
}

const HidebleSliderButton: FC<HidebleSliderButtonProps> = ({ icon, children, transitionX, onClose }) => {
  const [open, setOpen] = useState(false)

  const mount = useMount(open, 1000)

  const keyHandler = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      setOpen(false)
    }
  }

  const buttonHandler = () => {
    setOpen((prev) => {
      if (prev) onClose!()
      return !prev
    })
  }

  useEffect(() => {
    window.addEventListener('keydown', keyHandler)
    return () => {
      window.removeEventListener('keydown', keyHandler)
    }
  }, [])

  const wrapperClassNames = [styles.wrapper]
  if (open) wrapperClassNames.push(styles.open)
  return (
    <div
      className={wrapperClassNames.join(' ')}
      style={
        open
          ? { transform: 'translate(0, -50%)', zIndex: 999 }
          : { transform: `translate(-${transitionX}rem, -50%)`, zIndex: 0 }
      }
    >
      <div className={styles.child}>{mount ? children : null}</div>
      <ButtonIconRound onClick={buttonHandler}>
        <FontAwesomeIcon icon={open ? faClose : icon} />
      </ButtonIconRound>
    </div>
  )
}

HidebleSliderButton.defaultProps = {
  transitionX: 0,
  onClose: () => {},
}

export default HidebleSliderButton
