import styled from 'styled-components'
import { colors } from '../../styles'

export const FooterContainer = styled.footer`
  background-color: ${colors.cream};
  width: 100%;
  height: 298px;
  display: block;
  font-weight: bold;

  .container {
    padding-top: 40px;
    padding-bottom: 40px;
  }
`
export const Logo = styled.img`
  width: 125px;
  height: 58px;
  margin: 0 auto;
  display: block;
  margin-bottom: 32px;
`

export const IconsList = styled.ul`
  display: flex;
  justify-content: center;
  margin-bottom: 80px;

  li {
    margin-right: 8px;
  }
`

export const FooterParagraph = styled.p`
  font-size: 10px;
  font-wheight: 400;
  text-align: center;
  margin: 0 auto;
  width: 480px;
`
