import { CoverImage, Logo, HeroText } from './styles'
import logo from '../../assets/images/logo.png'
import coverImage from '../../assets/images/vector.png'
import { Link } from 'react-router-dom'

const Hero = () => (
  <CoverImage style={{ backgroundImage: `url(${coverImage})` }}>
    <div className="container">
      <Link to="/perfil">
        <Logo src={logo} alt="efood" />
      </Link>
      <HeroText>
        Viva experiências gastronômicas no consforto da sua casa
      </HeroText>
    </div>
  </CoverImage>
)

export default Hero
