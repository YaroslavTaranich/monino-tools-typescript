import { useEffect, useState } from 'react'
import { Route, Routes, useLocation } from 'react-router'

import { useAppSelector } from '../redux/hooks'
import { selectAllCategory } from '../redux/slices/categorySlice'
import { selectAllTools } from '../redux/slices/toolsSlice'

import styles from './transition.module.scss'

export const menu = [
  { path: '/', label: 'Каталог', component: <h1>Главная</h1> },
  { path: '/rent-terms', label: 'Условия аренды', component: <h1>Условия аренды</h1> },
  { path: '/delivery', label: 'Доставка', component: <h1>Доставка</h1> },
  { path: '/contacts', label: 'Контакты', component: <h1>Контакты</h1> },
]

function AppRouter() {
  const tools = useAppSelector(selectAllTools.selectAll)
  const category = useAppSelector(selectAllCategory.selectAll)
  const location = useLocation()
  const [displayLocation, setDisplayLocation] = useState(location)
  const [transitionStage, setTransistionStage] = useState('fadeIn')

  useEffect(() => {
    if (location !== displayLocation) setTransistionStage('fadeOut')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [displayLocation, location])

  return (
    <main
      className={styles.transitionStage}
      onAnimationEnd={() => {
        if (transitionStage === 'fadeOut') {
          setTransistionStage('fadeIn')
          setDisplayLocation(location)
        }
      }}
    >
      <Routes location={displayLocation}>
        {menu.map((item) => (
          <Route path={item.path} element={item.component} />
        ))}
        {category.map((item) => (
          <Route path={item.url} key={item.url} element={<div>{item.name}</div>} />
        ))}
        {tools.map((item) => (
          <Route path={item.toolUrl} key={item.toolUrl} element={<div>{item.toolName}</div>} />
        ))}
      </Routes>
    </main>
  )
}

export default AppRouter
