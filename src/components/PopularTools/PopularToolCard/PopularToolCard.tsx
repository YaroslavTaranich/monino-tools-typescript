import { Link } from 'react-router-dom'

import { Tool } from '../../../models/tools'

import styles from './PopularToolCard.module.scss'

interface PopularToolCardProps {
  tool: Tool
  url: string
}

function PopularToolCard({ tool, url }: PopularToolCardProps) {
  return (
    <div className={styles.card}>
      <Link to={url} className={styles.card__link}>
        <img src={tool.toolImgSrc} alt={tool.toolName} className={styles.card__img} />
        <h4 className={styles.card__title}>{tool.toolName}</h4>
      </Link>
    </div>
  )
}

export default PopularToolCard
