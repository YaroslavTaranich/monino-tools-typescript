import { HTMLAttributes } from 'react'

import styles from './PageTitle.module.scss'

interface PageTitleProps extends HTMLAttributes<HTMLHeadingElement> {
  children: string
  variant?: 'primary' | 'secondary'
}

function PageTitle({ children, variant, ...props }: PageTitleProps) {
  return (
    <h1 className={styles[variant!]} {...props}>
      {children}
    </h1>
  )
}

PageTitle.defaultProps = {
  variant: 'primary',
}

export default PageTitle
