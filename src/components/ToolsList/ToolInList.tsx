import { Link } from 'react-router-dom'

import { Tool } from '../../models/tools'
import Rub from '../UI/Rub/Rub'
import Specification from '../UI/Specification/Specification'

import styles from './toolsList.module.scss'

interface ToolInListProps {
  tool: Tool
  url: string
}

function ToolInList({ tool, url }: ToolInListProps) {
  return (
    <Link className={styles.tool} to={url}>
      <img src={tool.toolImgSrc} alt={tool.toolName} className={styles.pic} />
      <div className={styles.description}>
        <h2 className={styles.title}>{tool.toolName}</h2>
        <Specification data={tool.specification} />
        <div className={styles.price}>
          <span className={styles.price__span}>от {tool.price} </span>
          <Rub />
          <span className={styles.price__span}> / сутки</span>
        </div>
      </div>
    </Link>
  )
}

export default ToolInList
