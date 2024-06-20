import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type CartState = {
  items: DishType[]
  isOpen: boolean
  isCheckoutOpen: boolean
}

const initialState: CartState = {
  items: [],
  isOpen: false,
  isCheckoutOpen: false
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<DishType>) => {
      const dish = state.items.find((item) => item.id === action.payload.id)

      if (!dish) {
        state.items.push(action.payload)
      } else {
        alert('O prato já está no carrinho!')
      }
    },
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    },
    openCheckout: (state) => {
      state.isCheckoutOpen = true
    },
    closeCheckout: (state) => {
      state.isCheckoutOpen = false
    },
    clear: (state) => {
      state.items = []
    }
  }
})

export const { open, close, add, remove, openCheckout, closeCheckout, clear } =
  cartSlice.actions
export default cartSlice.reducer
