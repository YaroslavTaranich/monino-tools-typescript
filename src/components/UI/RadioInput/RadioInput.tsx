import styles from './RadioInput.module.scss'

interface RadioInputProps {
  name: string
  value: string
  label: string
  onClick?: () => void
}

function RadioInput({ name, value, label, onClick }: RadioInputProps) {
  return (
    <label htmlFor={value} className={styles.radio}>
      <input type="radio" id={value} name={name} onClick={onClick} className={styles.radio__input} />
      <span className={styles.radio__label}>{label}</span>
    </label>
  )
}

RadioInput.defaultProps = {
  onClick: () => {},
}

export default RadioInput
