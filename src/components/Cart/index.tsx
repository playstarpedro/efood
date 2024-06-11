import trashCan from '../../assets/images/trash-can.svg'
import { Button } from '../Dish/styles'

import { close } from '../../store/reducers/cart'

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
                  <img className="trash-can" src={trashCan} alt="lixeira" />
                </S.CartItem>
              ))}
            </ul>
            <S.TotalPrice>
              <h4>Valor total</h4>
              <h4>{parseToBrl(getTotalPrice(items))} </h4>
            </S.TotalPrice>
            <Button>Continuar com a entrega</Button>
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
