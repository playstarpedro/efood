import { PizzaContainer, Title, Description, Button } from './styles'

type Props = {
  image: string
  title: string
  description: string
  onClick: () => void
}

const PizzaProduct = ({ title, description, image }: Props) => (
  <PizzaContainer>
    <img src={image} alt={title} />
    <Title>{title}</Title>
    <Description>{description}</Description>
    <Button>Adicionar ao carrinho</Button>
  </PizzaContainer>
)

export default PizzaProduct
