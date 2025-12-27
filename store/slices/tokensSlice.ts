import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Token } from '../../types'

interface TokensState {
  items: Token[]
}

const initialState: TokensState = {
  items: []
}

const tokensSlice = createSlice({
  name: 'tokens',
  initialState,
  reducers: {
    setTokens(state, action: PayloadAction<Token[]>) {
      state.items = action.payload
    },
    updatePrice(state, action: PayloadAction<{ id: string; price: number }>) {
      const t = state.items.find((x) => x.id === action.payload.id)
      if (t) t.price = action.payload.price
    }
  }
})

export const { setTokens, updatePrice } = tokensSlice.actions
export default tokensSlice.reducer
