import { Link } from 'react-router-dom'

import { useAppDispatch, useAppSelector } from '../../../redux/hooks'
import { selectSearchInput, setSearchInput } from '../../../redux/slices/searchSlice'
import { selectToolsBySearchQuery, selectToolsURL } from '../../../redux/slices/toolsSlice'

import styles from './search.module.scss'

function SearchVariants() {
  const foundTools = useAppSelector(selectToolsBySearchQuery)
  const toolsUrl = useAppSelector(selectToolsURL)
  const searchInputValue = useAppSelector(selectSearchInput)
  const dispatch = useAppDispatch()

  if (searchInputValue === '' || foundTools.length === 0) return null

  return (
    <ul className={styles['search-varinats']}>
      {foundTools.map((tool) => (
        <li key={tool!.toolUrl} className={styles['search-varinats-item']}>
          <Link
            to={toolsUrl[tool!.id]}
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
