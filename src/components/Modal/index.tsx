import { ModalContent, ModalButton, ModalStyled } from './styles'

import close from '../../assets/images/close.svg'

type Props = {
  foto: string
  nome: string
  descricao: string
  preco: number
  id: number
  porcao: string
  handleCloseClick?: () => void
}

const Modal = ({
  id,
  foto,
  nome,
  descricao,
  preco,
  porcao,
  handleCloseClick
}: Props) => {
  return (
    <>
      <ModalStyled>
        <ModalContent>
          <img
            onClick={handleCloseClick}
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
        <div className="overlay"></div>
      </ModalStyled>
    </>
  )
}

export default Modal
