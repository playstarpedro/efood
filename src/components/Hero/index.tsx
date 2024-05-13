import { CoverImage, Logo, HeroText } from './styles'
import logo from '../../assets/images/logo.png'
import coverImage from '../../assets/images/vector.png'

const Hero = () => (
  <CoverImage style={{ backgroundImage: `url(${coverImage})` }}>
    <div className="container">
      <Logo src={logo} alt="efood" />
      <HeroText>
        Viva experiências gastronômicas no consforto da sua casa
      </HeroText>
    </div>
  </CoverImage>
)

export default Hero
