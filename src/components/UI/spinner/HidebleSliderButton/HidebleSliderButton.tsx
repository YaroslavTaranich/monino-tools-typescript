import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose, IconDefinition } from '@fortawesome/free-solid-svg-icons'
import { FC, ReactElement, useEffect, useState } from 'react'

import styles from './HidebleSliderButton.module.scss'

interface HidebleSliderButtonProps {
  icon: IconDefinition
  children: ReactElement | ReactElement[]
  transitionX?: number
}

const HidebleSliderButton: FC<HidebleSliderButtonProps> = ({ icon, children, transitionX }) => {
  const [open, setOpen] = useState(false)

  const keyHandler = (e: KeyboardEvent) => {
    console.log(e.key)
    if (e.key === 'Escape') {
      setOpen(false)
    }
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
      <div className={styles.child}>{open ? children : null}</div>
      <button className={styles.button} type="button" onClick={() => setOpen((prev) => !prev)}>
        <FontAwesomeIcon icon={open ? faClose : icon} />
      </button>
    </div>
  )
}

HidebleSliderButton.defaultProps = {
  transitionX: 0,
}

export default HidebleSliderButton
