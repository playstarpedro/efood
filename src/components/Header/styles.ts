import styled from 'styled-components'

export const CoverImage = styled.div`
  width: 100%;
  height: 186px;
  background-repeat: no-repeat;
  background-size: cover;

  .container {
    padding-top: 64px;
    padding-bottom: 64px;
    align-items: flex-end;
  }

  a {
    text-decoration: none;
    font-weight: bold;
  }
`

export const HeaderUl = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Logo = styled.img`
  width: 125px;
  height: 58px;
`

export const HeaderLi = styled.li`
  font-size: 18px;
  font-weight: 900;
  text-decoration: none;
`
