import { useState } from 'react'

import Pizza from '../../models/Pizza'
import PizzaProduct from '../PizzaProduct'

import close from '../../assets/images/close.svg'
import pizza from '../../assets/images/pizza2.png'

import { Container, List, Modal, ModalContent, ModalButton } from './styles'

export type Props = {
  pizzas: Pizza[]
}

const PizzaList = ({ pizzas }: Props) => {
  const [showModal, setShowModal] = useState(true)

  return (
    <Container>
      <List>
        {pizzas.map((dish) => (
          <PizzaProduct
            key={dish.id}
            title={dish.title}
            description={dish.description}
            image={dish.image}
            onClick={() => setShowModal(true)}
          />
        ))}
      </List>
      {showModal && (
        <Modal>
          <div className="container">
            <ModalContent>
              <img
                src={close}
                alt="fechar"
                className="close-button"
                onClick={() => setShowModal(false)}
              />
              <ul>
                <li className="modal-image">
                  <img src={pizza} alt="pizza" />
                </li>
                <li className="modal-text">
                  <header>
                    <h3>Pizza Marguerita</h3>
                  </header>
                  <p>
                    A pizza Margherita é uma pizza clássica da culinária
                    italiana, reconhecida por sua simplicidade e sabor
                    inigualável. Ela é feita com uma base de massa fina e
                    crocante, coberta com molho de tomate fresco, queijo
                    mussarela de alta qualidade, manjericão fresco e azeite de
                    oliva extra-virgem. A combinação de sabores é perfeita, com
                    o molho de tomate suculento e ligeiramente ácido, o queijo
                    derretido e cremoso e as folhas de manjericão frescas, que
                    adicionam um toque de sabor herbáceo. É uma pizza simples,
                    mas deliciosa, que agrada a todos os paladares e é uma ótima
                    opção para qualquer ocasião. <br />
                    <br />
                    Serve: de 2 a 3 pessoas
                  </p>
                  <ModalButton>Adicionar ao carrinho - R$ 60,90</ModalButton>
                </li>
              </ul>
            </ModalContent>
          </div>
          <div className="overlay"></div>
        </Modal>
      )}
    </Container>
  )
}

export default PizzaList
