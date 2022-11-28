import { faBars, faClose } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'

import MenuLinks from './MenuLinks'
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
      />

      <ul className={listClassNames.map((name) => styles[name]).join(' ')}>
        <MenuLinks menuType="mobile" />
      </ul>
    </div>
  )
}

export default MobileMenu
