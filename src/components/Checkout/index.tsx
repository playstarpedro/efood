import { useState } from 'react'
import * as S from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { closeCheckout, open, clear } from '../../store/reducers/cart'
import { useFormik } from 'formik'
import { getTotalPrice, parseToBrl } from '../../utils'
import * as Yup from 'yup'
import { usePurchaseMutation } from '../../services/api'

const Checkout = () => {
  const [purchase, { data, isSuccess }] = usePurchaseMutation()

  const { isCheckoutOpen, items } = useSelector(
    (state: RootReducer) => state.cart
  )
  const [checkoutStage, setCheckoutStage] = useState(1)

  const dispatch = useDispatch()

  const setCheckoutClose = () => {
    dispatch(closeCheckout())
  }

  const setCartOpen = () => {
    dispatch(open())
  }

  const clearCart = () => {
    dispatch(clear())
  }

  const form = useFormik({
    initialValues: {
      receiver: '',
      description: '',
      city: '',
      zipCode: '',
      number: '',
      complement: '',
      name: '',
      cardNumber: '',
      code: '',
      expiresMonth: '',
      expiresYear: ''
    },
    validationSchema: Yup.object({
      receiver: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caractetres')
        .required('O campo é obrigatório'),
      description: Yup.string()
        .min(5, 'O endereço precisa ter pelo menos 5 caractetres')
        .required('O campo é obrigatório'),
      city: Yup.string()
        .min(5, 'A cidade precisa ter pelo menos 5 caractetres')
        .required('O campo é obrigatório'),
      zipCode: Yup.string()
        .min(9, 'O CEP precisa ter 9 caracteres')
        .max(9, 'O CEP precisa ter 9 caracteres')
        .required('O campo é obrigatório'),
      number: Yup.number().required('O campo é obrigatório'),
      complement: Yup.string().min(
        5,
        'O endereço precisa ter pelo menos 5 caractetres'
      ),

      name: Yup.string()
        .min(5, 'O Nome do Cartão precisa ter pelo menos 5 caractetres')
        .required('O campo é obrigatório'),
      cardNumber: Yup.string()
        .min(5, 'O Número do Cartão precisa ter pelo menos 5 caractetres')
        .required('O campo é obrigatório'),
      code: Yup.string()
        .min(3, 'O CVV precisa ter 3 caractetres')
        .max(3, 'O CVV precisa ter 3 caractetres')
        .required('O campo é obrigatório'),
      expiresMonth: Yup.string()
        .min(2, 'O mês de expiração precisa ter 2 caractetres')
        .max(2, 'O mês de expiração precisa ter 2 caractetres')
        .required('O campo é obrigatório'),
      expiresYear: Yup.string()
        .min(2, 'O ano de expiração precisa ter 2 caractetres')
        .max(2, 'O ano de expiração precisa ter 2 caractetres')
        .required('O campo é obrigatório')
    }),
    onSubmit: (values) => {
      purchase({
        delivery: {
          receiver: values.receiver,
          adress: {
            description: values.description,
            city: values.city,
            zipCode: values.zipCode,
            number: Number(values.number),
            complement: values.complement
          }
        },
        payment: {
          card: {
            name: values.name,
            number: values.cardNumber,
            code: Number(values.code),
            expires: {
              month: Number(values.expiresMonth),
              year: Number(values.expiresYear)
            }
          }
        },
        products: [
          {
            id: 1,
            price: 10
          }
        ]
      })
    }
  })

  const getErrorMessage = (fieldName: string, message?: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors

    if (isTouched && isInvalid) return message
  }

  const checkInputHasError = (fieldName: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors
    const hasError = isTouched && isInvalid

    return hasError
  }

  return (
    <S.CartContainer className={isCheckoutOpen ? 'is-open' : ''}>
      <S.Overlay onClick={() => setCheckoutClose()} />
      <S.SideBar>
        {isSuccess && data ? (
          <S.Form className="is-open">
            <h3>Pedido realizado - {data.orderId}</h3>
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
                type="submit"
                onClick={() => {
                  setCheckoutClose(), setCheckoutStage(1), clearCart()
                }}
              >
                Concluir
              </S.FormButton>
            </div>
          </S.Form>
        ) : (
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
                  className={checkInputHasError('receiver') ? 'error' : ''}
                />
                <label htmlFor="adress">Endereço</label>
                <input
                  id="description"
                  type="text"
                  name="description"
                  value={form.values.description}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={checkInputHasError('description') ? 'error' : ''}
                />
                <label htmlFor="city">Cidade</label>
                <input
                  id="city"
                  type="text"
                  name="city"
                  value={form.values.city}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={checkInputHasError('city') ? 'error' : ''}
                />
              </div>
              <div className="input-group">
                <S.InputGroup maxWidth="155px">
                  <label htmlFor="zipCode">CEP</label>
                  <input
                    id="zipCode"
                    type="text"
                    name="zipCode"
                    value={form.values.zipCode}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError('zipCode') ? 'error' : ''}
                  />
                </S.InputGroup>
                <S.InputGroup maxWidth="155px">
                  <label htmlFor="number">Número</label>
                  <input
                    id="number"
                    type="number"
                    name="number"
                    value={form.values.number}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError('number') ? 'error' : ''}
                  />
                </S.InputGroup>
              </div>
              <div>
                <label htmlFor="complement">Complemento (opcional)</label>
                <input
                  id="complement"
                  type="text"
                  name="complement"
                  value={form.values.complement}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={checkInputHasError('complement') ? 'error' : ''}
                />
              </div>
              <div className="button-area">
                <S.FormButton
                  type="button"
                  onClick={() => {
                    setCheckoutStage(2)
                  }}
                >
                  Continuar com o pagamento
                </S.FormButton>
                <S.FormButton
                  type="button"
                  onClick={() => {
                    setCheckoutClose(), setCartOpen()
                  }}
                >
                  Voltar para o carrinho
                </S.FormButton>
              </div>
            </S.Form>
            {/* segunda parte do checkout  */}
            <S.Form className={checkoutStage === 2 ? 'is-open' : ''}>
              <h3>
                Pagamento - Valor a pagar {parseToBrl(getTotalPrice(items))}{' '}
              </h3>
              <div>
                <label htmlFor="name">Nome no cartão</label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  value={form.values.name}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={checkInputHasError('name') ? 'error' : ''}
                />
              </div>
              <div className="input-group">
                <S.InputGroup maxWidth="228px">
                  <label htmlFor="cardNumber">Número do cartão</label>
                  <input
                    id="cardNumber"
                    type="number"
                    name="cardNumber"
                    value={form.values.cardNumber}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError('cardNumber') ? 'error' : ''}
                  />
                </S.InputGroup>
                <S.InputGroup maxWidth="87px">
                  <label htmlFor="code">CVV</label>
                  <input
                    id="code"
                    type="number"
                    name="code"
                    value={form.values.code}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError('code') ? 'error' : ''}
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
                    value={form.values.expiresMonth}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={
                      checkInputHasError('expiresMonth') ? 'error' : ''
                    }
                  />
                </S.InputGroup>
                <S.InputGroup maxWidth="155px">
                  <label htmlFor="expiresYear">Ano de vencimento</label>
                  <input
                    id="expiresYear"
                    type="number"
                    name="expiresYear"
                    value={form.values.expiresYear}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError('expiresYear') ? 'error' : ''}
                  />
                </S.InputGroup>
              </div>
              <div className="button-area">
                <S.FormButton
                  type="submit"
                  onClick={() => {
                    form.handleSubmit
                  }}
                >
                  Finalizar pagamento
                </S.FormButton>
                <S.FormButton type="button" onClick={() => setCheckoutStage(1)}>
                  Voltar para a edição de endereço
                </S.FormButton>
              </div>
            </S.Form>
          </form>
        )}
      </S.SideBar>
    </S.CartContainer>
  )
}

export default Checkout
