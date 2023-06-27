import { configureStore } from '@reduxjs/toolkit';
import courseReducer from './features/course/courseSlice';
import cartReducer from './features/cart/cartSlice';
export const store = configureStore({
  reducer: {
    course: courseReducer,
    cart: cartReducer
  }
});
