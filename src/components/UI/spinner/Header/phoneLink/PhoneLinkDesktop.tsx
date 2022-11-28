import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'

// import CallMeBackForm from '../../callMeBackForm/callMeBackForm'
import styles from './PnoneLink.module.scss'

const PhoneLinkDesktop = () => {
  const [showPopup, setShowPopup] = useState(false)

  return (
    <>
      <button
        type="button"
        className={styles['phone-links__btn']}
        onClick={() => {
          setShowPopup(true)
        }}
      >
        Перезвоните мне! {showPopup}
      </button>
      <a className={styles['phone-links__tel']} href="tel:+79166773956" title="Наш телефон">
        <div className={styles['phone-icon']}>
          <FontAwesomeIcon icon={faPhone} />
        </div>
        8 <span>916</span> 677 39 56
      </a>
    </>
  )
}

export default PhoneLinkDesktop
