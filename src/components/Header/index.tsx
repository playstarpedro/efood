import { useDispatch } from 'react-redux'

import logo from '../../assets/images/logo.png'
import coverImage from '../../assets/images/vector.png'
import { Link } from 'react-router-dom'

import { open } from '../../store/reducers/cart'

import { CoverImage, Logo, HeaderNav, HeaderA } from './styles'

const Header = () => {
  const dispatch = useDispatch()

  const openCart = () => {
    dispatch(open())
  }
  return (
    <CoverImage style={{ backgroundImage: `url(${coverImage})` }}>
      <div className="container">
        <HeaderNav>
          <HeaderA>Restaurantes</HeaderA>
          <HeaderA>
            0 produto(s) no <span onClick={openCart}>carrinho</span>
          </HeaderA>
        </HeaderNav>
        <li>
          <Link to="/">
            <Logo src={logo} alt="efood" />
          </Link>
        </li>
      </div>
    </CoverImage>
  )
}

export default Header
