import { useDispatch, useSelector } from 'react-redux'

import logo from '../../assets/images/logo.png'
import coverImage from '../../assets/images/vector.png'

import { open } from '../../store/reducers/cart'

import { CoverImage, Logo, HeaderNav, HeaderA, StyledLink } from './styles'
import { RootReducer } from '../../store'

const Header = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }

  return (
    <CoverImage style={{ backgroundImage: `url(${coverImage})` }}>
      <div className="container">
        <HeaderNav>
          <StyledLink to="/">
            <HeaderA>Restaurantes</HeaderA>
          </StyledLink>
          <HeaderA>
            {items.length} produto(s) no{' '}
            <span onClick={openCart}>carrinho</span>
          </HeaderA>
        </HeaderNav>
        <li>
          <Logo src={logo} alt="efood" />
        </li>
      </div>
    </CoverImage>
  )
}

export default Header
