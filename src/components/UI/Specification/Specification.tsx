import type { ISpecification } from '../../../models/tools'

import styles from './Specification.module.scss'

interface SpecificationProps {
  data: ISpecification[]
}

function Specification({ data }: SpecificationProps) {
  return (
    <div className={styles.wrapper}>
      <h3 className={styles.title}>Технические характеристики:</h3>
      <dl className={styles.list}>
        {data.map((elem) => (
          <div key={elem.name} className={styles.list__line}>
            <dt className={styles.list__name}>{elem.name}</dt>
            <dd className={styles.list__value}>{elem.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  )
}

export default Specification
