import { createSlice } from '@reduxjs/toolkit';

const reducerSlice = createSlice({
  name: 'reducer',
  initialState: {
    cart: [],
    currency: { label: 'USD', symbol: '$' },
    isCartOverlay: false,
  },
  reducers: {
    setCart: (state, action) => {
      state.cart = action.payload;
    },
    setCurrency: (state, action) => {
      state.currency = action.payload;
    },
    setIsCartOverlay: (state, action) => {
      state.isCartOverlay = action.payload;
    },
  },
});

export const { setCart, setCurrency, setIsCartOverlay } = reducerSlice.actions;

export default reducerSlice.reducer;
