import { forwardRef, HTMLAttributes } from 'react'

import styles from './InputFancyLabel.module.scss'

interface TextareaFancyLabelProps extends HTMLAttributes<HTMLTextAreaElement> {
  name: string
  label: string
  className?: string
  error?: string
}

const TextareaFancyLabel = forwardRef<HTMLTextAreaElement, TextareaFancyLabelProps>(
  ({ name, label, className, error, ...props }, ref) => {
    const textareaClassName = [styles.Textarea, className]

    return (
      <div className={styles.wrapper}>
        <textarea id={name} className={textareaClassName.join(' ')} placeholder={label} ref={ref} {...props} />
        <label htmlFor={name} className={styles.label}>
          {label}:
        </label>
        {error && <p className={styles.error}>{error}</p>}
      </div>
    )
  }
)

TextareaFancyLabel.defaultProps = {
  className: '',
  error: undefined,
}

export default TextareaFancyLabel
