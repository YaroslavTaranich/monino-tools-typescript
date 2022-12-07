import React, { ReactElement } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Scrollbar, Navigation } from 'swiper'

import { useWindowWidth } from '../../../hooks/useWindowWidth'
import 'swiper/swiper.min.css'
import './scrollbar.min.css'
import './navigation.min.css'
import './my-swiper.css'
import styles from '../PopularTools.module.scss'

interface ToolsSwiperProps {
  children: ReactElement | ReactElement[]
}

const getSlidesCountByWidth = (width?: number) => {
  if (width && width > 700) return 3
  if (width && width < 500) return 1
  return 2
}

function ToolsSwiper({ children }: ToolsSwiperProps) {
  const windowWidth = useWindowWidth()

  return (
    <Swiper
      spaceBetween={10}
      slidesPerView={getSlidesCountByWidth(windowWidth)}
      scrollbar={{
        hide: false,
        draggable: true,
      }}
      loop
      navigation={windowWidth > 900}
      modules={[Scrollbar, Navigation]}
      className={styles.swiper}
    >
      {React.Children.map(children, (child) => (
        <SwiperSlide>{React.cloneElement(child)}</SwiperSlide>
      ))}
    </Swiper>
  )
}

export default ToolsSwiper
