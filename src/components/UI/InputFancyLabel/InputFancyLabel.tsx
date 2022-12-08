import { HTMLAttributes } from 'react'

import styles from './InputFancyLabel.module.scss'

interface InputFancyLabelProps extends HTMLAttributes<HTMLInputElement> {
  name: string
  label: string
  type?: 'text' | 'email' | 'password' | 'date' | 'number'
  className?: string
}

function InputFancyLabel({ name, label, type, className, ...props }: InputFancyLabelProps) {
  const inputClassName = [styles.input, className]

  return (
    <div className={styles.wrapper}>
      <input id={name} type={type} className={inputClassName.join(' ')} placeholder={label} required {...props} />
      <label htmlFor={name} className={styles.label}>
        {label}:
      </label>
    </div>
  )
}

InputFancyLabel.defaultProps = {
  className: '',
  type: 'text',
}

export default InputFancyLabel
