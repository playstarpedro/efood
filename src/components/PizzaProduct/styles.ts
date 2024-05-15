import styled from 'styled-components'
import { colors } from '../../styles'

export const PizzaContainer = styled.div`
  background-color: ${colors.primaryRed};
  padding: 8px;
  width: 320px;
  height: 340px;
  color: ${colors.cream};
`

export const Title = styled.h3`
  font-size: 16px;
  font-weight: 900;
  line-height: 18px;
  margin-top: 8px;
  margin-bottom: 8px;
`

export const Description = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  margin-bottom: 8px;
`

export const Button = styled.button`
  background-color: ${colors.cream};
  color: ${colors.primaryRed};
  font-size: 14px;
  font-weight: 700;
  border: none;
  width: 100%;
  padding: 4px;
`
