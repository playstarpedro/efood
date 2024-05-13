import styled from 'styled-components'

export const Container = styled.section`
  padding-top: 80px;
  padding-bottom: 120px;
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* 2 colunas */
  grid-template-rows: repeat(3, auto); /* 3 linhas (altura automática) */
  column-gap: 80px;
  row-gap: 48px;
`
