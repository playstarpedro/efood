import { Dish } from '../../pages/Home'

import Product from '../Product'

import { Container, List } from './styles'

export type Props = {
  dishs: Dish[]
}

const ProductsList = ({ dishs }: Props) => (
  <Container>
    <List>
      {dishs.map((dish) => (
        <li key={dish.id}>
          <Product
            id={dish.id}
            titulo={dish.titulo}
            destacado={dish.destacado}
            tipo={dish.tipo}
            avaliacao={dish.avaliacao}
            descricao={dish.descricao}
            capa={dish.capa}
          />
        </li>
      ))}
    </List>
  </Container>
)

export default ProductsList
