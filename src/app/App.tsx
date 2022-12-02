import { useEffect } from 'react'

import { useAppDispatch, useAppSelector } from '../redux/hooks'
import { getAllCategory, selectCategoryStatus } from '../redux/slices/categorySlice'
import { getAllTools, selectAllTools, selectToolsStatus } from '../redux/slices/toolsSlice'
import Spinner from '../components/UI/spinner/Spinner'
import AppRouter from '../router/AppRouter'
import Header from '../components/Header/Header'
import ToolsList from '../components/ToolsList/ToolsList'
import Container from '../components/Container/Container'

// import styles from './App.module.scss'

function App() {
  const dispatch = useAppDispatch()
  const toolsStatus = useAppSelector(selectToolsStatus)
  const categoryStatus = useAppSelector(selectCategoryStatus)
  const tools = useAppSelector(selectAllTools.selectAll)

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
      <Container>
        <ToolsList data={tools} title="Весь Инструмент" />
      </Container>
    </>
  )
}

export default App
