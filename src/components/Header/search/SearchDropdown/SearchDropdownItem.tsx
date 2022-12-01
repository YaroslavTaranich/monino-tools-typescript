import { memo, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

import styles from '../search.module.scss'

interface SearchDropdownItemProps {
  url: string
  clearInput: () => void
  children: string
  active: boolean
}

function SearchDropdownItem({ url, clearInput, children, active }: SearchDropdownItemProps) {
  const linkRef = useRef<HTMLAnchorElement>(null)

  useEffect(() => {
    if (active && linkRef.current) {
      setTimeout(() => linkRef.current?.focus(), 0)
    }
  }, [active])

  return (
    <li className={styles['search-varinats-item']}>
      <Link ref={linkRef} to={url} onClick={clearInput} className={styles['search-varinats-item--link']}>
        {children}
      </Link>
    </li>
  )
}

export default memo(SearchDropdownItem)
