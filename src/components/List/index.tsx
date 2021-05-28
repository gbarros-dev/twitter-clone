import { ReactNode } from 'react'

import { Container, Item, Title } from './styles'

type ListProps = {
  title: string
  elements: ReactNode[]
}

const List = ({ title, elements }: ListProps) => {
  return (
    <Container>
      <Item>
        <Title>{title}</Title>
      </Item>

      {elements.map((element, index) => (
        <Item key={index}>{element}</Item>
      ))}
    </Container>
  )
}

export default List
