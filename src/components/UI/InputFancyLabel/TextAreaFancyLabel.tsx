import { forwardRef, HTMLAttributes } from 'react'

import styles from './InputFancyLabel.module.scss'

interface TextareaFancyLabelProps extends HTMLAttributes<HTMLTextAreaElement> {
  name: string
  label: string
  rows?: number
  className?: string
  error?: string
}

const TextareaFancyLabel = forwardRef<HTMLTextAreaElement, TextareaFancyLabelProps>(
  ({ name, label, className, error, rows, ...props }, ref) => {
    const textareaClassName = [styles.input, className]

    return (
      <div className={styles.wrapper}>
        <textarea
          id={name}
          className={textareaClassName.join(' ')}
          placeholder={label}
          ref={ref}
          rows={rows}
          {...props}
        />
        <label htmlFor={name} className={styles.label}>
          {label}:
        </label>
        {error && <p className={styles.error}>{error}</p>}
      </div>
    )
  }
)

TextareaFancyLabel.defaultProps = {
  rows: 3,
  className: '',
  error: undefined,
}

export default TextareaFancyLabel
