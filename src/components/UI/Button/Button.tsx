import { IconDefinition } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { HTMLAttributes } from 'react'

import styles from './button.module.scss'

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children: string
  variant?: 'primary' | 'secondary' | 'menu'
  icon?: IconDefinition
  submit?: boolean
  className?: string
}

function Button({ variant, icon, submit, className, ...props }: ButtonProps) {
  const classNames = [styles.button, styles[variant!]]

  if (className) classNames.push(className)

  return (
    <button className={classNames.join(' ')} type={submit ? 'submit' : 'button'} {...props}>
      {icon && <FontAwesomeIcon icon={icon} className={styles.icon} />}
      {props.children}
    </button>
  )
}

Button.defaultProps = {
  variant: 'primary',
  icon: undefined,
  submit: false,
  className: undefined,
}

export default Button
