import { CoverImage, Logo, HeaderNav, HeaderA } from './styles'
import logo from '../../assets/images/logo.png'
import coverImage from '../../assets/images/vector.png'

const Header = () => (
  <CoverImage style={{ backgroundImage: `url(${coverImage})` }}>
    <div className="container">
      <HeaderNav>
        <HeaderA>Restaurantes</HeaderA>
        <li>
          <Logo src={logo} alt="efood" />
        </li>
        <HeaderA>0 produto(s) no carrinho</HeaderA>
      </HeaderNav>
    </div>
  </CoverImage>
)

export default Header
