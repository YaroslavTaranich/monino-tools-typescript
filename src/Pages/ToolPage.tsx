import { useMemo } from 'react'
import { Helmet } from 'react-helmet'
import { faGear, faMessage } from '@fortawesome/free-solid-svg-icons'

import Container from '../components/Container/Container'
import IconBenefits from '../components/IconBenefits/IconBenefits'
import PageTitle from '../components/UI/PageTitle/PageTitle'
import { Tool } from '../models/tools'
import Specification from '../components/UI/Specification/Specification'
import Tabs from '../components/UI/Tabs/Tabs'
import ToolOrder from '../components/ToolOrder/ToolOrder'

interface ToolPageProps {
  tool: Tool
}

function ToolPage({ tool }: ToolPageProps) {
  const tabs = useMemo(
    () => [
      { label: 'Характеристики', content: <Specification data={tool.specification} />, icon: faGear },
      { label: 'Описание', content: tool.toolDiscription, icon: faMessage },
    ],
    [tool]
  )

  return (
    <Container>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{tool.htmlTitle}</title>
        <meta name="description" content={tool.htmlDiscription} />
      </Helmet>
      <PageTitle>{tool.toolName}</PageTitle>
      <ToolOrder tool={tool} />
      <Tabs tabs={tabs} />
      <IconBenefits />
    </Container>
  )
}

export default ToolPage
