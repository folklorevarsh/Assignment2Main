import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: {},
  totalQuantity: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items[newItem.id];
      if (!existingItem) {
        state.items[newItem.id] = {
          ...newItem,
          quantity: 1,
        };
      } else {
        existingItem.quantity++;
      }
      state.totalQuantity++;
    },
    removeItemFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.items[id];
      if (existingItem) {
        if (existingItem.quantity === 1) {
          delete state.items[id];
        } else {
          existingItem.quantity--;
        }
        state.totalQuantity--;
      }
    },
  },
});

export const { addItemToCart, removeItemFromCart } = cartSlice.actions;

export default cartSlice.reducer;