import { Helmet } from 'react-helmet'

import Container from '../../components/Container/Container'
import PopularTools from '../../components/PopularTools/PopularTools'
import PageTitle from '../../components/UI/PageTitle/PageTitle'

import styles from './DeliveryPage.module.scss'

function DeliveryPage() {
  return (
    <Container>
      <Helmet>
        <title>Монино-тулс - Доставка инструмента</title>
        <meta
          name="description"
          content="Доставим арендованный инструмент по Щёлковскому и Ногинскому району. Доставляем в Лосино-петровский, Обухово, Кабаново, Купавна, Ногинск, Электросталь, Электроугли, Щёлково, Черноголовка. Звоните! ☎ +7 (916) 677-39-56"
        />
      </Helmet>
      <div className={styles.wrapper}>
        <PageTitle variant="secondary">Доставка инструмента</PageTitle>
        <div className={styles.price}>
          <p>Вы можете заказать доставку любого оборудования и инструмента.</p>
          <p>Стоимость доставки:</p>
          <ul>
            <li>Зелёная зона - 600 рублей.</li>
            <li>Жёлтая зона - 1500 рублей.</li>
          </ul>
          <iframe
            src="https://yandex.ru/map-widget/v1/?um=constructor%3Abafc30a58065f10b8416e37beeba041c019975bfdd91bde418a9b2e7296a5edc&amp;source=constructor"
            width="100%"
            height="400"
            frameBorder="0"
            title="карта доставки"
          />
        </div>
      </div>
      <PopularTools />
    </Container>
  )
}

export default DeliveryPage
