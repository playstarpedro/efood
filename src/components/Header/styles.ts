import styled from 'styled-components'

export const CoverImage = styled.div`
  height: 186px;
  background-repeat: no-repeat;
  background-size: cover;

  .container {
    padding-top: 64px;
    padding-bottom: 64px;
    height: 186px;
    position: relative;
  }
`

export const HeaderNav = styled.nav`
  display: flex;
  justify-content: space-between;
  padding-top: 16px;
`

export const Logo = styled.img`
  position: absolute;
  left: 50%;
  top: 34%;
  transform: translateX(-50%);
`

export const HeaderA = styled.a`
  font-size: 18px;
  font-weight: 900;
  text-decoration: none;
`
