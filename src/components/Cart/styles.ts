import styled from 'styled-components'
import { colors } from '../../styles'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
`

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 2;

  &.is-open {
    display: flex;
  }
`

export const SideBar = styled.aside`
  background-color: ${colors.primaryRed};
  z-index: 1;
  padding: 32px 8px 0 8px;
  max-width: 360px;
  width: 100%;

  .empty-text {
    font-size: 14px;
    line-height: ${colors.cream};
    text-align: center;
  }
`

export const CartItem = styled.div`
  background-color: ${colors.cream};
  padding: 8px;
  display: flex;
  position: relative;
  height: 100px;
  margin-bottom: 16px;

  img {
    width: 80px;
    height: 80px;
    object-fit: cover;
    margin-right: 8px;
  }

  h3 {
    margin-bottom: 16px;
    font-size: 18px;
    font-weight: 900;
    line-height: 21.09px;
  }

  h4 {
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
  }

  .trash-can {
    margin-right: 0;
    width: 16px;
    height: 16px;
    position: absolute;
    right: 8px;
    bottom: 8px;
    cursor: pointer;
  }
`

export const TotalPrice = styled.div`
  color: ${colors.cream};
  font-size: 14px;
  display: flex;
  font-weight: 700;
  line-height: 16px;
  justify-content: space-between;
  margin-top: 40px;
  margin-bottom: 16px;
`
