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
        <HidebleSliderButton icon={faSearch} transitionX={10} ariaName="Поиск">
          {/* поиск для десктопов */}
          <SearchInput />
        </HidebleSliderButton>

        <HidebleSliderButton icon={faPhone} transitionX={5} ariaName="Телефон">
          {/* сслыка на телефон и кнопка перезвонить */}
          <PhoneLinkDesktop />
        </HidebleSliderButton>

        <HidebleSliderButton icon={faBars} ariaName="Меню">
          {/* меню для десктопов */}
          <DesktopMenu />
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
