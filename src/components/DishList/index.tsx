import { useEffect, useState } from 'react'

import close from '../../assets/images/close.svg'
import pizza from '../../assets/images/pizza2.png'

import { Container, List } from './styles'

import { Dishes } from '../../pages/Perfil'
import Dish from '../Dish'
import Modal from '../Modal'

export type Props = {
  dishes: Dishes[][]
}

const DishList = ({ dishes }: Props) => {
  const [showModal, setShowModal] = useState(false)
  const [selectedDishId, setSelectedDishId] = useState(0)

  const coletaId = (id: number) => {
    setSelectedDishId(id - 1) // Armazene o ID do prato clicado
    setShowModal(true)
  }

  const dishesToShow = dishes[0]

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
}

export default DishList
