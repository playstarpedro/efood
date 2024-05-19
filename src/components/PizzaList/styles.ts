import styled from 'styled-components'
import { colors } from '../../styles'
import { Button } from '../PizzaProduct/styles'

export const Container = styled.section`
  padding-top: 56px;
  padding-bottom: 120px;
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, auto);
  column-gap: 32px;
  row-gap: 32px;
`

export const Modal = styled.div`
  color: ${colors.white};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: none;
  align-items: center;
  justify-content: center;

  &.visable {
    display: flex;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
  }
`

export const ModalContent = styled.div`
  background-color: ${colors.primaryRed};
  padding: 32px;
  max-width: 1024px;
  position: relative;
  z-index: 1;
  position: relative;

  .close-button {
    float: right;
    position: absolute;
    top: 0px;
    right: 0px;
    margin-top: 8px;
    margin-right: 8px;
  }

  ul {
    display: grid;
    grid-template-columns: 1fr 3fr;
    gap: 24px;
  }

  .modal-image {
    > img {
      width: 280px;
      height: 280px;
      object-fit: cover;
    }
  }

  header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 24px;

    h3 {
      font-size: 18px;
      font-weight: bold;
      line-height: 22px;
    }
  }

  p {
    font-size: 14px;
    line-height: 22px;
    font-weight: 400;
    margin-bottom: 16px;
  }
`

export const ModalButton = styled(Button)`
  width: 218px;
`
