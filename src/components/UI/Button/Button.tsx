import { IconDefinition } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { HTMLAttributes } from 'react'

import styles from './button.module.scss'

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children: string
  variant?: 'primary' | 'secondary' | 'menu'
  icon?: IconDefinition
}

function Button({ variant, icon, ...props }: ButtonProps) {
  const classNames = [styles.button, styles[variant!]]

  return (
    <button className={classNames.join(' ')} type="button" {...props}>
      {icon && <FontAwesomeIcon icon={icon} className={styles.icon} />}
      {props.children}
    </button>
  )
}

Button.defaultProps = {
  variant: 'primary',
  icon: undefined,
}

export default Button
