import { useState } from 'react'

import { Container, List } from './styles'

import Dish from '../Dish'
import Modal from '../Modal'

export type Props = {
  selectedRestaurant: Restaurant
}

const DishList = ({ selectedRestaurant }: Props) => {
  const [showModal, setShowModal] = useState(false)
  const [selectedDishId, setSelectedDishId] = useState(0)
  const menu = selectedRestaurant.cardapio
  console.log(menu)

  // armazene o ID do prato clicado dependendo do cardápio
  const coletaId = (id: number) => {
    if (id >= 1 && id < 8) {
      setSelectedDishId(id - 1)
    } else if (id >= 8 && id < 11) {
      setSelectedDishId(id - 8)
    } else if (id >= 11 && id < 14) {
      setSelectedDishId(id - 11)
    } else if (id >= 14 && id < 17) {
      setSelectedDishId(id - 14)
    } else if (id >= 17 && id < 20) {
      setSelectedDishId(id - 17)
    } else if (id >= 20 && id < 23) {
      setSelectedDishId(id - 20)
    }
    setShowModal(true)
  }

  if (menu !== undefined) {
    return (
      <Container>
        <List>
          {menu.map((prato) => (
            <Dish
              clickToShowModal={() => coletaId(prato.id)}
              key={prato.id}
              id={prato.id}
              foto={prato.foto}
              nome={prato.nome}
              descricao={prato.descricao}
              preco={prato.preco}
              porcao={prato.porcao}
            />
          ))}
        </List>
        {showModal && (
          <Modal
            clickToCloseModal={() => setShowModal(false)}
            key={menu[selectedDishId].id}
            id={menu[selectedDishId].id}
            nome={menu[selectedDishId].nome}
            foto={menu[selectedDishId].foto}
            descricao={menu[selectedDishId].descricao}
            porcao={menu[selectedDishId].porcao}
            preco={menu[selectedDishId].preco}
          />
        )}
      </Container>
    )
  } else {
    return <h1>Carregando</h1>
  }
}

export default DishList
