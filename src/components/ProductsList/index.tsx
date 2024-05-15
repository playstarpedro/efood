import Dish from '../../models/Dish'

import Product from '../Product'

import { Container, List } from './styles'

export type Props = {
  dishs: Dish[]
}

const ProductsList = ({ dishs }: Props) => (
  <Container>
    <List>
      {dishs.map((dish) => (
        <Product
          key={dish.id}
          title={dish.title}
          rate={dish.rate}
          description={dish.description}
          image={dish.image}
          infos={dish.infos}
        />
      ))}
    </List>
  </Container>
)

export default ProductsList
