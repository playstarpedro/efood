import { useState } from 'react'

import { Container, List } from './styles'

import { Dishes } from '../../pages/Perfil'
import Dish from '../Dish'
import Modal from '../Modal'

export type Props = {
  menus: Dishes[][]
  menuId: number
}

const DishList = ({ menus, menuId }: Props) => {
  const [showModal, setShowModal] = useState(false)
  const [selectedDishId, setSelectedDishId] = useState(0)

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

    console.log(selectedDishId)
    setShowModal(true)
  }

  const dishesToShow = menus[menuId]

  console.log(dishesToShow)

  if (dishesToShow !== undefined) {
    return (
      <Container>
        <List>
          {dishesToShow.map((prato) => (
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
            key={dishesToShow[selectedDishId].id}
            id={dishesToShow[selectedDishId].id}
            nome={dishesToShow[selectedDishId].nome}
            foto={dishesToShow[selectedDishId].foto}
            descricao={dishesToShow[selectedDishId].descricao}
            porcao={dishesToShow[selectedDishId].porcao}
            preco={dishesToShow[selectedDishId].preco}
          />
        )}
      </Container>
    )
  } else {
    return <h1>Carregando</h1>
  }
}

export default DishList
