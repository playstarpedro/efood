import { CoverImage, Logo, HeaderUl, HeaderLi } from './styles'
import logo from '../../assets/images/logo.png'
import coverImage from '../../assets/images/vector.png'
import { Link } from 'react-router-dom'

const Header = () => (
  <CoverImage style={{ backgroundImage: `url(${coverImage})` }}>
    <div className="container">
      <HeaderUl>
        <HeaderLi>Restaurantes</HeaderLi>
        <li>
          <Logo src={logo} alt="efood" />
        </li>
        <HeaderLi>0 produto(s) no carrinho</HeaderLi>
      </HeaderUl>
    </div>
  </CoverImage>
)

export default Header
