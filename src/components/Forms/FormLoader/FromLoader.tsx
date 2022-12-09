import styles from './FormLoader.module.scss'

function FormLoader() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.spinner}>
        <div>
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
        </div>
      </div>
    </div>
  )
}

export default FormLoader
