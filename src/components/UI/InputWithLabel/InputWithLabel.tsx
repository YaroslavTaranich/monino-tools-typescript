import { HTMLAttributes } from 'react'

import styles from './InputWithLabel.module.scss'

interface InputWithLabelProps extends HTMLAttributes<HTMLInputElement> {
  name: string
  label: string
  type?: 'text' | 'email' | 'password' | 'date'
}

function InputWithLabel({ name, label, type, ...props }: InputWithLabelProps) {
  return (
    <div className={styles.wrapper}>
      <input id={name} type={type} className={styles.input} placeholder={label} required {...props} />
      <label htmlFor={name} className={styles.label}>
        {label}:
      </label>
    </div>
  )
}

InputWithLabel.defaultProps = {
  type: 'text',
}

export default InputWithLabel
