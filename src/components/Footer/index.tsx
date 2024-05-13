import { FooterContainer, Logo, IconsList, FooterParagraph } from './styles'

import logo from '../../assets/images/logo.png'
import instagramIcon from '../../assets/images/instagram.svg'
import facebookIcon from '../../assets/images/facebook.svg'
import twitterIcon from '../../assets/images/twitter.svg'

const Footer = () => (
  <FooterContainer>
    <div className="container">
      <Logo src={logo} alt="efood" />
      <IconsList>
        <li>
          <a href="#">
            <img src={instagramIcon} alt="instagram" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src={facebookIcon} alt="facebook" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src={twitterIcon} alt="twitter" />
          </a>
        </li>
      </IconsList>
      <FooterParagraph>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade dos produtos é toda do
        estabelecimento contratado.
      </FooterParagraph>
    </div>
  </FooterContainer>
)

export default Footer
