import { Link } from 'react-router-dom'

import styles from './header.module.scss'
import logo from './logo.svg'

function LogoHeader() {
  return (
    <Link to="/">
      <img src={logo} alt="monino-tools логотип" className={styles.header__logo} />
    </Link>
  )
}

export default LogoHeader
