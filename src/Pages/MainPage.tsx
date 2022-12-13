import { Helmet } from 'react-helmet'

import AllCategoresList from '../components/AllCategoresList/AllCategoresList'
import Container from '../components/Container/Container'
import IconBenefits from '../components/IconBenefits/IconBenefits'
import PopularTools from '../components/PopularTools/PopularTools'
import PageTitle from '../components/UI/PageTitle/PageTitle'

function MainPage() {
  return (
    <Container>
      <Helmet>
        <title>Монино-тулс - Аренда инструмента</title>
        <meta
          name="description"
          content="Аренда строительного инструмента в Монино. Для всех видов работ! Доставим в Лосино-петровский, Обухово, Кабаново, Купавна, Ногинск, Электросталь, Электроугли, Щёлково, Черноголовка. Звоните! ☎ +7 (916) 677-39-56"
        />
      </Helmet>
      <PageTitle>Строительный инструмент в аренду</PageTitle>
      <AllCategoresList />
      <IconBenefits />
      <PopularTools />
    </Container>
  )
}

export default MainPage
