import { Button } from '../Dish/styles'
import * as S from './styles'

const Checkout = () => {
  const isOpen = true

  return (
    <S.CartContainer className={isOpen ? 'is-open' : ''}>
      <S.Overlay />
      <S.SideBar>
        <S.Form>
          <h3>Entrega</h3>
          <div>
            <label>Quem irá receber</label>
            <input />
            <label>Endereço</label>
            <input />
            <label>Cidade</label>
            <input />
          </div>
          <div className="cep-number">
            <div className="input-block">
              <label>CEP</label>
              <input />
            </div>
            <div className="input-block">
              <label>Número</label>
              <input />
            </div>
          </div>
          <div>
            <label>Complemento (opcional)</label>
            <input />
          </div>
          <div className="button-area">
            <S.FormButton>Continuar com o pagamento</S.FormButton>
            <S.FormButton>Voltar para o carrinho</S.FormButton>
          </div>
        </S.Form>
      </S.SideBar>
    </S.CartContainer>
  )
}

export default Checkout
