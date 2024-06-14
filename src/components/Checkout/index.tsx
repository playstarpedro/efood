import { useState } from 'react'
import * as S from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { closeCheckout } from '../../store/reducers/cart'

const Checkout = () => {
  const { isCheckoutOpen } = useSelector((state: RootReducer) => state.cart)
  const [checkoutStage, setCheckoutStage] = useState(1)

  const dispatch = useDispatch()

  const setCheckoutClose = () => {
    dispatch(closeCheckout())
  }

  return (
    <S.CartContainer className={isCheckoutOpen ? 'is-open' : ''}>
      <S.Overlay onClick={() => setCheckoutClose()} />
      <S.SideBar>
        {checkoutStage === 1 && (
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
            <div className="input-group">
              <S.InputGroup maxWidth="155px">
                <label>CEP</label>
                <input />
              </S.InputGroup>
              <S.InputGroup maxWidth="155px">
                <label>Número</label>
                <input />
              </S.InputGroup>
            </div>
            <div>
              <label>Complemento (opcional)</label>
              <input />
            </div>
            <div className="button-area">
              <S.FormButton onClick={() => setCheckoutStage(2)}>
                Continuar com o pagamento
              </S.FormButton>
              <S.FormButton type="button" onClick={() => setCheckoutClose()}>
                Voltar para o carrinho
              </S.FormButton>
            </div>
          </S.Form>
        )}
        {checkoutStage === 2 && (
          <S.Form>
            <h3>Pagamento - Valor a pagar R$ 190,90</h3>
            <div>
              <label>Nome no cartão</label>
              <input />
            </div>
            <div className="input-group">
              <S.InputGroup maxWidth="228px">
                <label>Número do cartão</label>
                <input />
              </S.InputGroup>
              <S.InputGroup maxWidth="87px">
                <label>CVV</label>
                <input />
              </S.InputGroup>
            </div>
            <div className="input-group">
              <S.InputGroup maxWidth="155px">
                <label>Mês de vencimento</label>
                <input />
              </S.InputGroup>
              <S.InputGroup maxWidth="155px">
                <label>Ano de vencimento</label>
                <input />
              </S.InputGroup>
            </div>
            <div className="button-area">
              <S.FormButton onClick={() => setCheckoutStage(3)}>
                Continuar com o pagamento
              </S.FormButton>
              <S.FormButton onClick={() => setCheckoutStage(1)}>
                Voltar para a edição de endereço
              </S.FormButton>
            </div>
          </S.Form>
        )}
        {checkoutStage === 3 && (
          <S.Form>
            <h3>Pedido realizado - ORDER_ID</h3>
            <p>
              Estamos felizes em informar que seu pedido já está em processo de
              preparação e, em breve, será entregue no endereço fornecido.{' '}
              <br />
              <br />
              Gostaríamos de ressaltar que nossos entregadores não estão
              autorizados a realizar cobranças extras. <br />
              <br />
              Lembre-se da importância de higienizar as mãos após o recebimento
              do pedido, garantindo assim sua segurança e bem-estar durante a
              refeição. <br />
              <br />
              Esperamos que desfrute de uma deliciosa e agradável experiência
              gastronômica. Bom apetite!
            </p>
            <div className="button-area">
              <S.FormButton
                type="button"
                onClick={() => {
                  setCheckoutClose(), setCheckoutStage(1)
                }}
              >
                Concluir
              </S.FormButton>
            </div>
          </S.Form>
        )}
      </S.SideBar>
    </S.CartContainer>
  )
}

export default Checkout
