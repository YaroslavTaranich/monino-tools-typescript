import { useAppSelector } from '../../redux/hooks'
import { selectPopularTools, selectToolsURL } from '../../redux/slices/toolsSlice'

import PopularToolCard from './PopularToolCard/PopularToolCard'
import ToolsSwiper from './ToolsSwiper/ToolsSwiper'
import styles from './PopularTools.module.scss'

function PopularTools() {
  const popular = useAppSelector(selectPopularTools)
  const toolsUrl = useAppSelector(selectToolsURL)

  return (
    <section className={styles.popular}>
      <h2 className={styles.title}>Популярный инструмент</h2>
      <ToolsSwiper>
        {popular.map((tool) => (
          <PopularToolCard key={tool?.id} tool={tool!} url={toolsUrl[tool!.id]} />
        ))}
      </ToolsSwiper>
    </section>
  )
}

export default PopularTools
