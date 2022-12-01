import { useCallback, useEffect, useState } from 'react'

import { useAppDispatch, useAppSelector } from '../../../../redux/hooks'
import { selectSearchInput, setSearchInput } from '../../../../redux/slices/searchSlice'
import { selectToolsBySearchQuery, selectToolsURL } from '../../../../redux/slices/toolsSlice'
import styles from '../search.module.scss'

import SearchDropdownItem from './SearchDropdownItem'

function SearchDropdown() {
  const foundTools = useAppSelector(selectToolsBySearchQuery)
  const toolsUrl = useAppSelector(selectToolsURL)
  const searchInputValue = useAppSelector(selectSearchInput)
  const dispatch = useAppDispatch()
  const [selected, setSelected] = useState(-1)

  const clearSearchInput = useCallback(() => dispatch(setSearchInput('')), [])

  const handleKeyDown = (ev: KeyboardEvent) => {
    if (ev.code === 'ArrowDown') {
      ev.preventDefault()
      ev.stopPropagation()
      setSelected((prev) => {
        const index = prev === foundTools.length - 1 ? 0 : prev + 1
        return index
      })
    }
    if (ev.code === 'ArrowUp') {
      ev.preventDefault()
      ev.stopPropagation()
      setSelected((prev) => {
        const index = prev === 0 ? foundTools.length - 1 : prev - 1
        return index
      })
    }
  }

  useEffect(() => {
    setSelected(-1)
  }, [searchInputValue])

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [selected])

  if (searchInputValue === '' || foundTools.length === 0) return null

  return (
    <ul className={styles['search-varinats']}>
      {foundTools.map((tool, index) => (
        <SearchDropdownItem
          key={tool!.toolUrl}
          url={toolsUrl[tool!.id]}
          clearInput={clearSearchInput}
          active={index === selected}
        >
          {tool!.toolName}
        </SearchDropdownItem>
      ))}
    </ul>
  )
}

export default SearchDropdown
