import { HTMLAttributes, ReactElement } from 'react'

import styles from './ButtonIconRound.module.scss'

interface ButtonIconRoundProps extends HTMLAttributes<HTMLButtonElement> {
  onClick: () => void
  children: ReactElement
}

function ButtonIconRound({ onClick, children, ...props }: ButtonIconRoundProps) {
  return (
    <button className={styles.button} type="button" onClick={onClick} {...props}>
      {children}
    </button>
  )
}

export default ButtonIconRound
