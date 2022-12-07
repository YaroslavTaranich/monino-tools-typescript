import { useAppSelector } from '../../redux/hooks'
import { selectAllCategory } from '../../redux/slices/categorySlice'

import styles from './AllCategoresList.module.scss'
import AllCategoresListItem from './AllCategoresListItem'

function AllCategoresList() {
  const categores = useAppSelector(selectAllCategory.selectAll)

  return (
    <section className={styles.categores}>
      <ul className={styles.list}>
        {categores.map((category) => (
          <AllCategoresListItem key={category.id} category={category} />
        ))}
      </ul>
    </section>
  )
}

export default AllCategoresList
