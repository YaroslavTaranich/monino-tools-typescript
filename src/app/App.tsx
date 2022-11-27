import React, { useEffect } from 'react'

import { useAppDispatch, useAppSelector } from '../redux/hooks'
import { getAllCategory, selectCategoryStatus } from '../redux/slices/categorySlice'
import { getAllTools, selectAllTools, selectToolsByCategoryId, selectToolsStatus } from '../redux/slices/toolsSlice'
import Spinner from '../components/UI/spinner/Spinner'

// import styles from './App.module.scss'

function App() {
  const dispatch = useAppDispatch()
  const toolsStatus = useAppSelector(selectToolsStatus)
  const categoryStatus = useAppSelector(selectCategoryStatus)
  const tools = useAppSelector(selectAllTools.selectAll)
  const categoryTools = useAppSelector(selectToolsByCategoryId(2))

  useEffect(() => {
    dispatch(getAllTools())
    dispatch(getAllCategory())
  }, [])

  console.log(tools, categoryTools)

  if (toolsStatus.fetchStatus === 'pending' || categoryStatus.fetchStatus === 'pending') {
    return <Spinner />
  }
  return <div className="App">app</div>
}

export default App
