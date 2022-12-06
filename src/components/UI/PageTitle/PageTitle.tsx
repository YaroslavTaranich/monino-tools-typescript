import styles from './PageTitle.module.scss'

interface PageTitleProps {
  children: string
}

function PageTitle({ children }: PageTitleProps) {
  return <h1 className={styles.title}>{children}</h1>
}

export default PageTitle
