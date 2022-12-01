import { useNavigate } from 'react-router'

import { menu } from '../../../router/AppRouter'
import Button from '../../UI/Button/Button'

import styles from './menu.module.scss'

function DesktopMenu() {
  const navigate = useNavigate()

  return (
    <ul className={styles['desktop-menu-list']}>
      {menu.map((link) => (
        <li key={link.path}>
          <Button variant="menu" onClick={() => navigate(link.path)}>
            {link.label}
          </Button>
        </li>
      ))}
    </ul>
  )
}

export default DesktopMenu
