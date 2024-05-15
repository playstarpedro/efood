import styled from 'styled-components'
import { colors } from '../../styles'

export const CoverImage = styled.div`
  width: 100%;
  height: 280px;
  background-repeat: no-repeat;
  background-size: cover;

  .container {
    padding-top: 25px;
    padding-bottom: 32px;
  }
`

export const DishNationality = styled.h2`
  font-size: 32px;
  font-weight: 100;
  line-height: 37.5px;
  color: ${colors.white};
  margin-bottom: 156px;
`

export const DishName = styled.h2`
  font-size: 32px;
  font-weight: 900;
  line-height: 37.5px;
  color: ${colors.white};
`
