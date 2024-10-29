import { configureStore } from "@reduxjs/toolkit";
import { modalReducer } from "../feature/modal/modalSlice";
import { cartReducer } from "../feature/cart/cartSlice";

export const store = configureStore({
  reducer: {
    modal: modalReducer,
    cart: cartReducer,
  },
});
