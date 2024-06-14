import { useState } from 'react'

import { Container, List } from './styles'

import Dish from '../Dish'
import Modal from '../Modal'

export type Props = {
  selectedRestaurant: Restaurant
}

const DishList = ({ selectedRestaurant }: Props) => {
  const [showModal, setShowModal] = useState(false)
  const [selectedDish, setSelectedDish] = useState<DishType>(
    selectedRestaurant.cardapio[0]
  )
  const menu = selectedRestaurant.cardapio

  if (menu !== undefined) {
    return (
      <Container>
        <List>
          {menu.map((dish) => (
            <Dish
              clickToShowModal={() => {
                setSelectedDish(dish), setShowModal(true)
              }}
              key={dish.id}
              id={dish.id}
              foto={dish.foto}
              nome={dish.nome}
              descricao={dish.descricao}
              preco={dish.preco}
              porcao={dish.porcao}
            />
          ))}
        </List>
        {showModal && (
          <Modal
            clickToCloseModal={() => setShowModal(false)}
            dish={selectedDish}
          />
        )}
      </Container>
    )
  } else {
    return <h1>Carregando</h1>
  }
}

export default DishList
