/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { ReactElement, useEffect, useRef, useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import { faClose } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import ButtonIconRound from '../BottonIconRound/ButtonIconRound'

import styles from './Popup.module.css'
import animationStyles from './animation.module.css'
import { ANIMATION_TIME } from './const'

const overlayAnimation = {
  enter: animationStyles.overlayEnter,
  enterActive: animationStyles.overlayEnterActive,
  exit: animationStyles.overlayExit,
  exitActive: animationStyles.overlayExitActive,
}

const contentAnimation = {
  enter: animationStyles.contentEnter,
  enterActive: animationStyles.contentEnterActive,
  exit: animationStyles.contentExit,
  exitActive: animationStyles.contentExitActive,
}

interface LayoutProps {
  open: boolean
  onClose: () => void
  children: ReactElement | ReactElement[]
}

function Layout({ open, onClose, children }: LayoutProps) {
  const overlayRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  const [animationIn, setAnimationIn] = useState(false)

  const keyHandler = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose()
    }
  }

  useEffect(() => {
    setAnimationIn(open)
    if (open) {
      document.getElementById('root')?.setAttribute('inert', 'true')
    } else {
      document.getElementById('root')?.removeAttribute('inert')
    }
  }, [open])

  useEffect(() => {
    window.addEventListener('keydown', keyHandler)
    return () => {
      window.addEventListener('keydown', keyHandler)
    }
  }, [])

  return (
    <div className={styles.container}>
      <CSSTransition
        in={animationIn}
        nodeRef={overlayRef}
        timeout={ANIMATION_TIME}
        mountOnEnter
        unmountOnExit
        classNames={overlayAnimation}
      >
        <div ref={overlayRef} className={styles.overlay} onClick={onClose} />
      </CSSTransition>
      <CSSTransition
        in={animationIn}
        nodeRef={contentRef}
        timeout={ANIMATION_TIME}
        mountOnEnter
        unmountOnExit
        classNames={contentAnimation}
      >
        <div ref={contentRef} className={styles.content}>
          <ButtonIconRound onClick={onClose} className={styles.close} aria-label="Закрыть окно">
            <FontAwesomeIcon icon={faClose} />
          </ButtonIconRound>
          {children}
        </div>
      </CSSTransition>
    </div>
  )
}

export default Layout
