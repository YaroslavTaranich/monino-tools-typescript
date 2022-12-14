import { Tool } from '../../models/tools'
import { useAppSelector } from '../../redux/hooks'
import { selectToolsURL } from '../../redux/slices/toolsSlice'

import ToolInList from './ToolInList'
import styles from './toolsList.module.scss'

interface ToolsListProps {
  data: Tool[]
}

function ToolsList({ data }: ToolsListProps) {
  const toolsUrl = useAppSelector(selectToolsURL)

  return (
    <section className={styles.tools}>
      <ul className={styles.tools__list}>
        {data.map((tool) => (
          <li className={styles.tools__item} key={tool.toolUrl}>
            <ToolInList tool={tool} url={toolsUrl[tool.id]} />
          </li>
        ))}
      </ul>
    </section>
  )
}

export default ToolsList
