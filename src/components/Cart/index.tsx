import { Button } from '../Dish/styles'

import { close, remove, openCheckout } from '../../store/reducers/cart'

import * as S from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { getTotalPrice, parseToBrl } from '../../utils'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const setCheckoutOpen = () => {
    dispatch(openCheckout())
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  return (
    <S.CartContainer className={isOpen ? 'is-open' : ''}>
      <S.Overlay onClick={closeCart} />
      <S.SideBar>
        {items.length > 0 ? (
          <>
            <ul>
              {items.map((item) => (
                <S.CartItem key={item.id}>
                  <img src={item.foto} alt={item.nome} />
                  <div>
                    <h3>{item.nome}</h3>
                    <h4>{parseToBrl(item.preco)}</h4>
                  </div>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="trash-can"
                    type="button"
                  />
                </S.CartItem>
              ))}
            </ul>
            <S.TotalPrice>
              <h4>Valor total</h4>
              <h4>{parseToBrl(getTotalPrice(items))} </h4>
            </S.TotalPrice>
            <Button
              onClick={() => {
                setCheckoutOpen(), closeCart()
              }}
            >
              Continuar com a entrega
            </Button>
          </>
        ) : (
          <p className="empty-text">
            Carrinho vazio, adicione algum prato para continuar sua compra.
          </p>
        )}
      </S.SideBar>
    </S.CartContainer>
  )
}

export default Cart
