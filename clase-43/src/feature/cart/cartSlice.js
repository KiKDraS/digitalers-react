import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  amount: 0,
  total: 0,
  isLoading: true,
};

export const getCartItems = createAsyncThunk(
  "cart/get-cart-items",
  async () => {
    const response = await fetch(
      "https://www.course-api.com/react-useReducer-cart-project"
    );

    if (!response.ok) throw new Error(`HTTP error: ${response.status}`);

    return await response.json(); // Generamos el action para getCartItems
  }
);

// export const removeCartItem = createAsyncThunk(
//   "cart/remove-cart-item",
//   async () => {
//     // Petición Fetch: DELETE
//   }
// );

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // Funciones puras
    clearCart: (state) => {
      state.cartItems = [];
    },
    removeItem: (state, action) => {
      const itemId = action.payload;
      const newCartItems = state.cartItems.filter((item) => item.id !== itemId);
      state.cartItems = newCartItems;
    },
    increase: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item.id === payload);
      // cartItem.amount = cartItem.amount + 1;
      cartItem.amount += 1;
    },
    decrease: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item.id === payload);
      // cartItem.amount = cartItem.amount - 1;
      cartItem.amount -= 1;
    },
    calculateTotals: (state) => {
      let amount = 0;
      let total = 0;

      state.cartItems.forEach((item) => {
        amount += item.amount;
        total += item.amount * item.price;
      });

      state.amount = amount;
      state.total = total;
    },
  },
  extraReducers: (builder) => {
    // "catch" de los estados de las promesas del createAsyncThunk

    builder
      .addCase(getCartItems.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCartItems.fulfilled, (state, action) => {
        //{type: "cart/get-cart-items", payload: response.json()}
        state.isLoading = false;
        state.cartItems = action.payload;
      })
      .addCase(getCartItems.rejected, (state) => {
        state.isLoading = false;
      });
    //   .addCase(removeCartItem.pending, (state) => {
    //     state.isLoading = true;
    //   })
    //   .addCase(removeCartItem.fulfilled, (state) => {
    //     state.isLoading = false;
    //   })
    //   .addCase(removeCartItem.rejected, (state) => {
    //     state.isLoading = false;
    //   });
  },
});

export const { calculateTotals, clearCart, removeItem, increase, decrease } =
  cartSlice.actions;
export const selectCart = (store) => store.cart;
export const cartReducer = cartSlice.reducer;
