import { ReactElement } from 'react'

import styles from './Container.module.scss'

interface ContainerProps {
  children: ReactElement | ReactElement[]
}

function Container({ children }: ContainerProps) {
  return <div className={styles.container}>{children}</div>
}

export default Container
