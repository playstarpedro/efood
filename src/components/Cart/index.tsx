import pizza from '../../assets/images/pizza2.png'
import trashCan from '../../assets/images/trash-can.svg'
import { Button } from '../Dish/styles'

import * as S from './styles'

const Cart = () => {
  return (
    <S.CartContainer className="is-open">
      <S.Overlay />
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
