import { IconDefinition } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useNavigate } from 'react-router'

import Button from '../UI/Button/Button'

import styles from './IconBenefits.module.scss'

interface IconBenefitsCardProp {
  title: string
  text: string
  icon: IconDefinition
  link: null | string
}

function IconBenefitsCard({ title, text, icon, link }: IconBenefitsCardProp) {
  const navigate = useNavigate()
  return (
    <li className={styles.card}>
      <FontAwesomeIcon icon={icon} className={styles.card__icon} />
      <h4 className={styles.card__title}>{title}</h4>
      <p className={styles.card__text}>{text}</p>
      {link && (
        <Button variant="secondary" onClick={() => navigate(link)}>
          О доставке
        </Button>
      )}
    </li>
  )
}

export default IconBenefitsCard
