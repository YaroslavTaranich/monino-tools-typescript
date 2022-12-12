import { ChangeEvent, forwardRef, HTMLAttributes } from 'react'

import styles from './RadioInput.module.scss'

interface RadioInputProps extends HTMLAttributes<HTMLInputElement> {
  name: string
  value: string
  label: string
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
}

const RadioInput = forwardRef<HTMLInputElement, RadioInputProps>(({ name, value, label, onChange, ...props }, ref) => (
  <label htmlFor={value} className={styles.radio}>
    <input
      ref={ref}
      type="radio"
      id={value}
      value={value}
      name={name}
      onChange={onChange}
      className={styles.radio__input}
      {...props}
    />
    <span className={styles.radio__label}>{label}</span>
  </label>
))

// function RadioInput({ name, value, label, onChange }: RadioInputProps) {
//   return (
//     <label htmlFor={value} className={styles.radio}>
//       <input type="radio" id={value} value={value} name={name} onChange={onChange} className={styles.radio__input} />
//       <span className={styles.radio__label}>{label}</span>
//     </label>
//   )
// }

RadioInput.defaultProps = {
  onChange: () => {},
}

export default RadioInput
