import { Link } from 'react-router-dom'

import { Category } from '../../models/category'

import styles from './AllCategoresList.module.scss'

interface AllCategoresListItemProps {
  category: Category
}

function AllCategoresListItem({ category }: AllCategoresListItemProps) {
  return (
    <li className={styles.item}>
      <Link to={category.url} className={styles.link}>
        <img src={category.imgSrc} alt={category.name} className={styles.img} />
        <h3 className={styles.title}>{category.name}</h3>
      </Link>
    </li>
  )
}

export default AllCategoresListItem
