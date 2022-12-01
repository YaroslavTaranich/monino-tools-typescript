/* eslint-disable jsx-a11y/tabindex-no-positive */
import { Link } from 'react-router-dom'

import { menu } from '../../../router/AppRouter'

import styles from './menu.module.scss'

interface MenuLinksProps {
  menuType: 'mobile' | 'desktop'
}

function MenuLinks({ menuType }: MenuLinksProps) {
  return (
    <>
      {menu.map((link) => (
        <li key={link.path}>
          <Link to={link.path} className={styles[`${menuType}-menu-item`]}>
            {link.label}
          </Link>
        </li>
      ))}
    </>
  )
}

export default MenuLinks
