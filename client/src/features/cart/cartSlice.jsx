import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  openDialog: false,
  cartItems: []
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItems: (state, { payload }) => {
      state.cartItems = [...payload];
    },
    setOpenDialog: (state, { payload }) => {
      state.openDialog = payload;
    }
  }
});

export const { addItems, setOpenDialog } = cartSlice.actions;
export default cartSlice.reducer;
