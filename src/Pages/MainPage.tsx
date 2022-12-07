import AllCategoresList from '../components/AllCategoresList/AllCategoresList'
import Container from '../components/Container/Container'
import IconBenefits from '../components/IconBenefits/IconBenefits'
import PopularTools from '../components/PopularTools/PopularTools'
import PageTitle from '../components/UI/PageTitle/PageTitle'

function MainPage() {
  return (
    <Container>
      <PageTitle>Строительный инструмент в аренду</PageTitle>
      <AllCategoresList />
      <IconBenefits />
      <PopularTools />
    </Container>
  )
}

export default MainPage
