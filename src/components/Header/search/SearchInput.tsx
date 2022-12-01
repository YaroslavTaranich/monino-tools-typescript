import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

import { selectSearchInput, setSearchInput } from '../../../redux/slices/searchSlice'
import { useAppDispatch, useAppSelector } from '../../../redux/hooks'

import styles from './search.module.scss'
import SearchDropdown from './SearchDropdown/SearchDropdown'

const SearchInput = () => {
  const dispatch = useAppDispatch()
  const inputValue = useAppSelector(selectSearchInput)
  const findButtonRef = useRef<HTMLAnchorElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && findButtonRef.current) {
      findButtonRef.current.click()
    }
  }

  useEffect(() => {
    setTimeout(() => {
      if (inputRef.current) {
        inputRef.current.focus()
      }
    }, 200)
  }, [])

  return (
    <>
      <div className={styles['search-block']}>
        <input
          ref={inputRef}
          type="search"
          placeholder="Поиск"
          className={styles['search-block-input']}
          value={inputValue}
          onChange={(e) => dispatch(setSearchInput(e.target.value))}
          onKeyDown={handleKeyDown}
          autoComplete="off"
        />

        <Link ref={findButtonRef} className={styles['search-btn-find']} to="/search-result">
          <span className={styles['search-span']}>Найти! </span>
          <span className={styles['search-span']}>
            <FontAwesomeIcon icon={faSearch} />
          </span>
        </Link>
      </div>

      <SearchDropdown />
    </>
  )
}

export default SearchInput
