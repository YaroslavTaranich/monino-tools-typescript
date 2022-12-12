import { useState } from 'react'

import { Tool } from '../../models/tools'
import OrderForm from '../Forms/OrderForm/OrderForm'
import PriceSelector from '../PriceSelector/PriceSelector'
import Button from '../UI/Button/Button'
import Popup from '../UI/popup/Popup'

import styles from './ToolOrder.module.scss'

interface ToolOrderProps {
  tool: Tool
}

function ToolOrder({ tool }: ToolOrderProps) {
  const [showPopup, setShowPopup] = useState(false)
  return (
    <section className={styles.order}>
      <div className={styles.order__item}>
        <PriceSelector price={tool.price} zalog={tool.zalog} />
        <Button onClick={() => setShowPopup(true)}>Взять в аренду</Button>
      </div>
      <div className={styles.order__item}>
        <img src={tool.toolImgSrc} alt={tool.toolName} />
      </div>
      <Popup open={showPopup} onClose={() => setShowPopup(false)}>
        <OrderForm tool={tool} />
      </Popup>
    </section>
  )
}

export default ToolOrder
