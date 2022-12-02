import { IconDefinition } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ReactElement, useState } from 'react'

import styles from './Tabs.module.scss'

interface TabsProps {
  tabs: { label: string; content: ReactElement; icon?: IconDefinition }[]
}

const activeButtonClasses = [styles.button, styles['button--active']]
const activeContentItemClasses = [styles.content__item, styles['content__item--active']]

function Tabs({ tabs }: TabsProps) {
  const [selected, setSelected] = useState(0)

  return (
    <div className={styles.wrapper}>
      <div className={styles.controls}>
        {tabs.map((tab, index) => (
          <button
            type="button"
            className={selected === index ? activeButtonClasses.join(' ') : styles.button}
            onClick={() => setSelected(index)}
          >
            {tab.icon && <FontAwesomeIcon className={styles.icon} icon={tab.icon} />}
            <span className={styles.label}>{tab.label}</span>
          </button>
        ))}
      </div>
      <div className={styles.content}>
        {tabs.map((tab, index) => (
          <div className={selected === index ? activeContentItemClasses.join(' ') : styles.content__item}>
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Tabs
