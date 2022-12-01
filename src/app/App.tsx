import React, { useEffect } from 'react'

import { useAppDispatch, useAppSelector } from '../redux/hooks'
import { getAllCategory, selectCategoryStatus } from '../redux/slices/categorySlice'
import { getAllTools, selectToolsStatus } from '../redux/slices/toolsSlice'
import Spinner from '../components/UI/spinner/Spinner'
import AppRouter from '../router/AppRouter'
// import HidebleSliderButton from '../components/UI/spinner/HidebleSliderButton/HidebleSliderButton'
import Header from '../components/Header/Header'

// import styles from './App.module.scss'

function App() {
  const dispatch = useAppDispatch()
  const toolsStatus = useAppSelector(selectToolsStatus)
  const categoryStatus = useAppSelector(selectCategoryStatus)

  useEffect(() => {
    dispatch(getAllTools())
    dispatch(getAllCategory())
  }, [])

  if (toolsStatus.fetchStatus === 'pending' || categoryStatus.fetchStatus === 'pending') {
    return <Spinner />
  }
  return (
    <>
      <Header />
      <AppRouter />
    </>
  )
}

export default App
