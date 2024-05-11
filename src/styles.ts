import { createGlobalStyle } from 'styled-components'

export const colors = {
  backGroundColor: '#FFF8F2',
  primaryTextColor: '#E66767'
}

export const GlobalCss = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Roboto, sans-serif;
  list-style: none;
}

body {
  background-color: ${colors.backGroundColor};
  color: ${colors.primaryTextColor};
}

.container {
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
}
`
