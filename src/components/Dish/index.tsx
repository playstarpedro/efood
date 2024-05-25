import { PizzaContainer, Title, Description, Button } from './styles'

type PropsModal = {
  foto: string
  nome: string
  descricao: string
  preco: number
  id: number
  porcao: string
  onClick?: () => void // responsável por chamar a função de mostrar a modal
}

const Dish = ({ nome, descricao, foto, onClick }: PropsModal) => {
  const getDescricao = (descricao: string) => {
    if (descricao.length > 95) {
      return descricao.slice(0, 120) + '...'
    }
    return descricao
  }

  return (
    <PizzaContainer>
      <img src={foto} alt={nome} />
      <Title>{nome}</Title>
      <Description>{getDescricao(descricao)}</Description>
      <Button onClick={onClick}>Adicionar ao carrinho</Button>
    </PizzaContainer>
  )
}

export default Dish
