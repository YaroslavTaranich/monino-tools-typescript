import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'

import styles from './PnoneLink.module.scss'

function MobilePhoneLink() {
  return (
    <a href="tel:+79166773956" className={styles['mobile-phone-link']} aria-label="Позвонить">
      <FontAwesomeIcon icon={faPhone} className={styles['mobile-phone-link--icon']} />
    </a>
  )
}

export default MobilePhoneLink
