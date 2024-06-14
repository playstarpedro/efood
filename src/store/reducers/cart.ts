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
      state.items.push(action.payload)
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
    }
  }
})

export const { open, close, add, remove, openCheckout, closeCheckout } =
  cartSlice.actions
export default cartSlice.reducer
