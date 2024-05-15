import Pizza from '../../models/Pizza'
import PizzaProduct from '../PizzaProduct'

import { Container, List } from './styles'

export type Props = {
  pizzas: Pizza[]
}

const PizzaList = ({ pizzas }: Props) => (
  <Container>
    <List>
      {pizzas.map((dish) => (
        <PizzaProduct
          key={dish.id}
          title={dish.title}
          description={dish.description}
          image={dish.image}
        />
      ))}
    </List>
  </Container>
)

export default PizzaList
