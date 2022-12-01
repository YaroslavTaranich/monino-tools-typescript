import { faPhone, faSearch, faBars } from '@fortawesome/free-solid-svg-icons'

import HidebleSliderButton from '../UI/HidebleSliderButton/HidebleSliderButton'

import SearchInput from './search/SearchInput'
import DesktopMenu from './menu/DesktopMenu'
import PhoneLinkDesktop from './phoneLink/PhoneLinkDesktop'
import MobilePhoneLink from './phoneLink/PhoneLinkMobile'
import MobileMenu from './menu/MobileMenu'
import LogoHeader from './Logo'
import styles from './header.module.scss'

const Header = () => (
  <header className={styles.header}>
    <div className={styles.header__blocks}>
      {/* лого */}
      <LogoHeader />
      {/* кнопки-слайдеры для элементов навигации  */}
      <nav className={styles.header__nav}>
        <HidebleSliderButton icon={faBars}>
          {/* меню для десктопов */}
          <DesktopMenu />
        </HidebleSliderButton>

        <HidebleSliderButton icon={faPhone} transitionX={5}>
          {/* сслыка на телефон и кнопка перезвонить */}
          <PhoneLinkDesktop />
        </HidebleSliderButton>

        <HidebleSliderButton icon={faSearch} transitionX={10}>
          {/* поиск для десктопов */}
          <SearchInput />
        </HidebleSliderButton>
      </nav>

      <MobilePhoneLink />

      <MobileMenu />
    </div>
    {/* блоки только для моб устройств меньше 420px */}

    <div className={[styles.header__blocks, styles['header__blocks-mobile']].join(' ')}>
      {/* поиск для мобильных устройств */}
      <SearchInput />
    </div>
  </header>
)

export default Header