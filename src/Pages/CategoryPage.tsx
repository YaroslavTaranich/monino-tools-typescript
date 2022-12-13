import { Helmet } from 'react-helmet'

import Container from '../components/Container/Container'
import ToolsList from '../components/ToolsList/ToolsList'
import PageTitle from '../components/UI/PageTitle/PageTitle'
import { Category } from '../models/category'
import { useAppSelector } from '../redux/hooks'
import { selectToolsByCategoryId } from '../redux/slices/toolsSlice'

interface CategoryPageProps {
  category: Category
}

function CategoryPage({ category }: CategoryPageProps) {
  const toolsInCategory = useAppSelector(selectToolsByCategoryId(category.id))

  return (
    <Container>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{category.htmlTitle}</title>
        <meta name="description" content={category.htmlDiscription} />
      </Helmet>
      <PageTitle>{category.name}</PageTitle>
      {toolsInCategory && <ToolsList data={toolsInCategory} />}
    </Container>
  )
}

export default CategoryPage
