import { Link } from 'react-router-dom'

import { useAppDispatch, useAppSelector } from '../../../../../redux/hooks'
import { selectSearchInput, setSearchInput } from '../../../../../redux/slices/searchSlice'
import { selectToolsBySearchQuery } from '../../../../../redux/slices/toolsSlice'

import styles from './search.module.scss'

function SearchVariants() {
  const foundTools = useAppSelector(selectToolsBySearchQuery)
  const searchInputValue = useAppSelector(selectSearchInput)
  const dispatch = useAppDispatch()

  if (searchInputValue === '') return null

  return (
    <ul className={styles['search-varinats']}>
      {foundTools.map((tool) => (
        <li key={tool!.toolUrl} className={styles['search-varinats-item']}>
          <Link
            to={tool!.toolUrl}
            onClick={() => dispatch(setSearchInput(''))}
            className={styles['search-varinats-item--link']}
          >
            {tool!.toolName}
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default SearchVariants
