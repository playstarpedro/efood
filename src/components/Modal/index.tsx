import { ModalContent, ModalButton, ModalStyled } from './styles'

import close from '../../assets/images/close.svg'
import { useDispatch } from 'react-redux'

import { add } from '../../store/reducers/cart'

type Props = {
  dish: DishType
  clickToCloseModal?: () => void
}

const Modal = ({ dish, clickToCloseModal }: Props) => {
  const dispatch = useDispatch()

  const addToCart = () => {
    dispatch(add(dish))
  }

  return (
    <>
      <ModalStyled>
        <ModalContent>
          <img
            onClick={clickToCloseModal}
            src={close}
            alt="fechar"
            className="close-button"
          />
          <ul>
            <li className="modal-image">
              <img src={dish.foto} alt={dish.nome} />
            </li>
            <li className="modal-text">
              <header>
                <h3>{dish.nome}</h3>
              </header>
              <p>
                {dish.descricao} <br />
                <br />
                Serve: de {dish.porcao}
              </p>
              <ModalButton onClick={addToCart}>
                Adicionar ao carrinho - R$ {dish.preco}
              </ModalButton>
            </li>
          </ul>
        </ModalContent>
        <div onClick={clickToCloseModal} className="overlay"></div>
      </ModalStyled>
    </>
  )
}

export default Modal
