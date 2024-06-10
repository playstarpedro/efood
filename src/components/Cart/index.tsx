import pizza from '../../assets/images/pizza2.png'
import trashCan from '../../assets/images/trash-can.svg'
import { Button } from '../Dish/styles'

import { close } from '../../store/reducers/cart'

import * as S from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'

const Cart = () => {
  const { isOpen } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  return (
    <S.CartContainer className={isOpen ? 'is-open' : ''}>
      <S.Overlay onClick={closeCart} />
      <S.SideBar>
        <ul>
          <S.CartItem>
            <img src={pizza} alt="pizza" />
            <div>
              <h3>Pizza Marguerita</h3>
              <h4>R$ 60,90</h4>
            </div>
            <img className="trash-can" src={trashCan} alt="lixeira" />
          </S.CartItem>
          <S.CartItem>
            <img src={pizza} alt="pizza" />
            <div>
              <h3>Pizza Marguerita</h3>
              <h4>R$ 60,90</h4>
            </div>
            <img className="trash-can" src={trashCan} alt="lixeira" />
          </S.CartItem>
          <S.CartItem>
            <img src={pizza} alt="pizza" />
            <div>
              <h3>Pizza Marguerita</h3>
              <h4>R$ 60,90</h4>
            </div>
            <img className="trash-can" src={trashCan} alt="lixeira" />
          </S.CartItem>
        </ul>
        <S.TotalPrice>
          <h4>Valor total</h4>
          <h4>R$ 182,70</h4>
        </S.TotalPrice>
        <Button>Continuar com a entrega</Button>
      </S.SideBar>
    </S.CartContainer>
  )
}

export default Cart
