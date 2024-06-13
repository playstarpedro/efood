import styled from 'styled-components'
import { colors } from '../../styles'
import { Button } from '../Dish/styles'

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
  color: ${colors.cream};
  z-index: 1;
  padding: 32px 8px 0 8px;
  max-width: 360px;
  width: 100%;

  h3 {
    font-size: 16px;
    font-weight: 700;
    line-height: 18px;
    padding-bottom: 16px;
  }
`

export const Form = styled.form`
  label {
    font-size: 14px;
    font-weight: 700;
    line-height: 16px;
    display: block;
    margin-bottom: 8px;
  }

  input {
    padding: 8px;
    font-size: 14px;
    font-weight: 700;
    line-height: 16px;
    width: 100%;
    margin-bottom: 8px;
    border: 1px solid ${colors.cream};
    background-color: ${colors.cream};
  }

  .cep-number {
    display: flex;
    justify-content: space-between;

    .input-block {
      display: block;

      input {
        width: 155px;
      }
    }
  }

  .button-area {
    margin-top: 24px;
  }
`

export const FormButton = styled(Button)`
  margin-bottom: 8px;
`
