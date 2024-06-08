import Product from '../Product'

import { Container, List } from './styles'

export type Props = {
  restaurants: Restaurant[]
}

const ProductsList = ({ restaurants }: Props) => (
  <Container>
    <List>
      {restaurants.map((restaurant) => (
        <li key={restaurant.id}>
          <Product
            id={restaurant.id}
            titulo={restaurant.titulo}
            destacado={restaurant.destacado}
            tipo={restaurant.tipo}
            avaliacao={restaurant.avaliacao}
            descricao={restaurant.descricao}
            capa={restaurant.capa}
          />
        </li>
      ))}
    </List>
  </Container>
)

export default ProductsList
