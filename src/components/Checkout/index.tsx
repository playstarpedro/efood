import { useState } from 'react'
import * as S from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { closeCheckout } from '../../store/reducers/cart'
import { useFormik } from 'formik'

const Checkout = () => {
  const { isCheckoutOpen } = useSelector((state: RootReducer) => state.cart)
  const [checkoutStage, setCheckoutStage] = useState(1)

  const dispatch = useDispatch()

  const setCheckoutClose = () => {
    dispatch(closeCheckout())
  }

  const form = useFormik({
    initialValues: {
      receiver: '',
      adress: {
        description: '',
        city: '',
        zipCode: '',
        number: 0,
        complement: ''
      },
      payment: {
        card: {
          name: 'string',
          number: 'string',
          code: 123,
          expires: {
            month: 12,
            year: 1234
          }
        }
      }
    },
    onSubmit: (values) => {
      console.log(values)
    }
  })

  console.log(form.values)

  return (
    <S.CartContainer className={isCheckoutOpen ? 'is-open' : ''}>
      <S.Overlay onClick={() => setCheckoutClose()} />
      <S.SideBar>
        <form onSubmit={form.handleSubmit}>
          <S.Form className={checkoutStage === 1 ? 'is-open' : ''}>
            <h3>Entrega</h3>
            <div>
              <label htmlFor="receiver">Quem irá receber</label>
              <input
                id="receiver"
                type="text"
                name="receiver"
                value={form.values.receiver}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
              <label htmlFor="adress">Endereço</label>
              <input
                id="adress"
                type="text"
                name="adress"
                value={form.values.adress.description}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
              <label htmlFor="city">Cidade</label>
              <input
                id="city"
                type="text"
                name="city"
                value={form.values.adress.city}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
            </div>
            <div className="input-group">
              <S.InputGroup maxWidth="155px">
                <label htmlFor="zipCode">CEP</label>
                <input
                  id="zipCode"
                  type="text"
                  name="zipCode"
                  value={form.values.adress.zipCode}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
              </S.InputGroup>
              <S.InputGroup maxWidth="155px">
                <label htmlFor="number">Número</label>
                <input
                  id="number"
                  type="number"
                  name="number"
                  value={form.values.adress.number}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
              </S.InputGroup>
            </div>
            <div>
              <label htmlFor="complement">Complemento (opcional)</label>
              <input
                id="complement"
                type="text"
                name="complement"
                value={form.values.adress.complement}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
            </div>
            <div className="button-area">
              <S.FormButton type="button" onClick={() => setCheckoutStage(2)}>
                Continuar com o pagamento
              </S.FormButton>
              <S.FormButton type="button" onClick={() => setCheckoutClose()}>
                Voltar para o carrinho
              </S.FormButton>
            </div>
          </S.Form>
          <S.Form className={checkoutStage === 2 ? 'is-open' : ''}>
            <h3>Pagamento - Valor a pagar R$ 190,90</h3>
            <div>
              <label htmlFor="cardName">Nome no cartão</label>
              <input
                id="cardName"
                type="text"
                name="cardName"
                value={form.values.payment.card.name}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
            </div>
            <div className="input-group">
              <S.InputGroup maxWidth="228px">
                <label htmlFor="cardNumber">Número do cartão</label>
                <input
                  id="cardNumber"
                  type="text"
                  name="cardNumber"
                  value={form.values.payment.card.number}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
              </S.InputGroup>
              <S.InputGroup maxWidth="87px">
                <label htmlFor="cardCode">CVV</label>
                <input
                  id="cardCode"
                  type="number"
                  name="cardCode"
                  value={form.values.payment.card.code}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
              </S.InputGroup>
            </div>
            <div className="input-group">
              <S.InputGroup maxWidth="155px">
                <label htmlFor="expiresMonth">Mês de vencimento</label>
                <input
                  id="expiresMonth"
                  type="number"
                  name="expiresMonth"
                  value={form.values.payment.card.expires.month}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
              </S.InputGroup>
              <S.InputGroup maxWidth="155px">
                <label htmlFor="expiresYear">Ano de vencimento</label>
                <input
                  id="expiresYear"
                  type="number"
                  name="expiresYear"
                  value={form.values.payment.card.expires.year}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
              </S.InputGroup>
            </div>
            <div className="button-area">
              <S.FormButton type="button" onClick={() => setCheckoutStage(3)}>
                Continuar com o pagamento
              </S.FormButton>
              <S.FormButton type="button" onClick={() => setCheckoutStage(1)}>
                Voltar para a edição de endereço
              </S.FormButton>
            </div>
          </S.Form>
          <S.Form className={checkoutStage === 3 ? 'is-open' : ''}>
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
        </form>
      </S.SideBar>
    </S.CartContainer>
  )
}

export default Checkout
