import { CoverImage, Logo, HeaderNav, HeaderA } from './styles'
import logo from '../../assets/images/logo.png'
import coverImage from '../../assets/images/vector.png'
import { Link } from 'react-router-dom'

const Header = () => (
  <CoverImage style={{ backgroundImage: `url(${coverImage})` }}>
    <div className="container">
      <HeaderNav>
        <HeaderA>Restaurantes</HeaderA>
        <HeaderA>0 produto(s) no carrinho</HeaderA>
      </HeaderNav>
      <li>
        <Link to="/">
          <Logo src={logo} alt="efood" />
        </Link>
      </li>
    </div>
  </CoverImage>
)

export default Header
