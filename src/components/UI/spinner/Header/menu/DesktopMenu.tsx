import MenuLinks from './MenuLinks'
import styles from './menu.module.scss'

function DesktopMenu() {
  return (
    <ul className={styles['desktop-menu-list']}>
      <MenuLinks menuType="desktop" />
    </ul>
  )
}

export default DesktopMenu
