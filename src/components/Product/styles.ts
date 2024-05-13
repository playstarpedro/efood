import styled from 'styled-components'
import { colors } from '../../styles'
import { TagContainer } from '../Tag/styles'

export const Card = styled.div`
  color: ${colors.primaryRed};
  position: relative;
  border-top: none;
  width: 472px;
  height: 398px;

  .card-image {
    width: 472px;
    height: 217px;
  }

  .card-container {
    background-color: #fff;
    border: 1px solid ${colors.primaryRed};
    border-top: none;
    padding: 8px;
    height: 181px;
    margin-top: -5px;
  }

  ${TagContainer} {
    margin-right: 8px;
  }
`

export const CardHeader = styled.div`
  margin-top: 8px;
  margin-x: 8px;
  display: flex;
  justify-content: space-between;
`

export const Title = styled.h3`
  font-size: 18px;
  font-weight: bold;
  display: flex;
  align-items: center;

  .star {
    margin-left: 8px;
  }
`
export const Description = styled.p`
  margin: 16px 0;
  font-size: 14px;
`

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  padding-top: 6px;
`
