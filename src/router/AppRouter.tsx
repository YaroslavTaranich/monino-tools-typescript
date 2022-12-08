import { useEffect, useState } from 'react'
import { Route, Routes, useLocation } from 'react-router'

import AboutPage from '../Pages/AboutPage'
import CategoryPage from '../Pages/CategoryPage'
import DeliveryPage from '../Pages/DeliveryPage'
import ErrorPage from '../Pages/ErrorPage'
import MainPage from '../Pages/MainPage'
import RentTermsPage from '../Pages/RentTermsPage'
import SearchResultPage from '../Pages/SearchResultPage'
import ToolPage from '../Pages/ToolPage'
import { useAppSelector } from '../redux/hooks'
import { selectAllCategory } from '../redux/slices/categorySlice'
import { selectAllTools } from '../redux/slices/toolsSlice'

import styles from './transition.module.scss'

export const menu = [
  { path: '/', label: 'Каталог', component: <MainPage /> },
  { path: 'rent-terms', label: 'Условия аренды', component: <RentTermsPage /> },
  { path: 'delivery', label: 'Доставка', component: <DeliveryPage /> },
  { path: 'contacts', label: 'Контакты', component: <AboutPage /> },
]

function AppRouter() {
  const tools = useAppSelector(selectAllTools.selectAll)
  const categores = useAppSelector(selectAllCategory.selectAll)
  const location = useLocation()
  const [displayLocation, setDisplayLocation] = useState(location)
  const [transitionStage, setTransistionStage] = useState('fadeIn')

  useEffect(() => {
    if (location !== displayLocation) setTransistionStage('fadeOut')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [displayLocation, location])

  return (
    <main
      className={styles[transitionStage]}
      onAnimationEnd={() => {
        if (transitionStage === 'fadeOut') {
          setTransistionStage('fadeIn')
          setDisplayLocation(location)
        }
      }}
    >
      <Routes location={displayLocation}>
        <Route path="/">
          {/* Пути для меню */}
          {menu.map((item) => {
            if (item.path === '/') {
              return <Route index element={item.component} key={item.path} />
            }
            return <Route path={item.path} element={item.component} key={item.path} />
          })}

          <Route path="search-result" element={<SearchResultPage />} />

          {/* пути для категорий */}
          {categores.map((category) => (
            <Route path={category.url} key={category.url}>
              <Route index element={<CategoryPage category={category} />} />

              {/* Вложеные пути для инструмента в категорях */}
              {tools.map((tool) => {
                if (tool.categoryId === category.id) {
                  return <Route path={tool.toolUrl} key={tool.toolUrl} element={<ToolPage tool={tool} />} />
                }
                return null
              })}
            </Route>
          ))}
          <Route path="error" element={<ErrorPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </main>
  )
}

export default AppRouter
