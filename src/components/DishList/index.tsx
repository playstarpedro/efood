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

  const dishesToShow = dishes[0]

  return (
    <Container>
      <List>
        {dishesToShow.map((prato) => (
          <Dish
            onClick={() => setShowModal(!showModal)}
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
          handleCloseClick={() => setShowModal(!showModal)}
          key={dishesToShow[0].id}
          id={dishesToShow[0].id}
          nome={dishesToShow[0].nome}
          foto={dishesToShow[0].foto}
          descricao={dishesToShow[0].descricao}
          porcao={dishesToShow[0].porcao}
          preco={dishesToShow[0].preco}
        />
      )}
    </Container>
  )
}

export default DishList
