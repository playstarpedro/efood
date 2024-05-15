import styled from 'styled-components'

export const Container = styled.section`
  padding-top: 80px;
  padding-bottom: 120px;
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, auto);
  column-gap: 32px;
  row-gap: 32px;
`
