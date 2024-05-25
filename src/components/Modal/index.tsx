import { ModalContent, ModalButton, ModalStyled } from './styles'

import close from '../../assets/images/close.svg'

type Props = {
  foto: string
  nome: string
  descricao: string
  preco: number
  id: number
  porcao: string
  clickToCloseModal?: () => void
}

const Modal = ({
  id,
  foto,
  nome,
  descricao,
  preco,
  porcao,
  clickToCloseModal
}: Props) => {
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
              <img src={foto} alt={nome} />
            </li>
            <li className="modal-text">
              <header>
                <h3>{nome}</h3>
              </header>
              <p>
                {descricao} <br />
                <br />
                Serve: de {porcao}
              </p>
              <ModalButton>Adicionar ao carrinho - R$ {preco}</ModalButton>
            </li>
          </ul>
        </ModalContent>
        <div onClick={clickToCloseModal} className="overlay"></div>
      </ModalStyled>
    </>
  )
}

export default Modal
