import { faBars, faClose } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import { Link } from 'react-router-dom'

import { menu } from '../../../router/AppRouter'

import styles from './menu.module.scss'

function MobileMenu() {
  const [showMenu, setShowMenu] = useState(false)

  const listClassNames = ['mobile-menu-list']
  listClassNames.push(showMenu ? 'mobile-menu--show' : 'mobile-menu--hide')

  return (
    <div className={styles['mobile-menu']}>
      <FontAwesomeIcon
        className={styles['mobile-menu-icon']}
        icon={showMenu ? faClose : faBars}
        onClick={() => setShowMenu(!showMenu)}
        aria-label={showMenu ? 'Закрыть меню' : 'Открыть меню'}
      />

      <ul className={listClassNames.map((name) => styles[name]).join(' ')}>
        {menu.map((link) => (
          <li key={link.path}>
            <Link to={link.path} className={styles['mobile-menu-item']}>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default MobileMenu
