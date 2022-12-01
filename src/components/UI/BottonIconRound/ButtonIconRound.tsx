import { HTMLAttributes, ReactElement } from 'react'

import styles from './ButtonIconRound.module.scss'

interface ButtonIconRoundProps extends HTMLAttributes<HTMLButtonElement> {
  onClick: () => void
  children: ReactElement
  className?: string
}

function ButtonIconRound({ onClick, children, className, ...props }: ButtonIconRoundProps) {
  const buttonClass = [styles.button]
  if (className) {
    buttonClass.push(className)
  }
  return (
    <button className={buttonClass.join(' ')} type="button" onClick={onClick} {...props}>
      {children}
    </button>
  )
}

ButtonIconRound.defaultProps = {
  className: undefined,
}

export default ButtonIconRound
