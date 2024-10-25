// Slice son las funciones que van a manejar todos los conceptos de modificación de state de Redux

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchCount } from "./counterAPI";

const initialState = {
  value: 0,
  status: "idle", // Desocupado
};

export const incrementAsync = createAsyncThunk(
  "counter/fetchCount",
  async (amount) => {
    const response = await fetchCount(amount);
    return response.data; //=== action.payload
  }
);

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value = state.value + 1; // Mutar valor
      // Es posible "mutar" porque la librería Immer incluida con las redux toolkit, toma la "mutación" y genera la copia por nosotros
    },
    decrement: (state, action) => {
      state.value -= action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      // El middleware fetchCount se encarga de manejar la petición asincrónica y actualizar el estado de acuerdo a la respuesta
      .addCase(incrementAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(incrementAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.value += action.payload; //response.data
      })
      .addCase(incrementAsync.rejected, (state) => {
        state.status = "failed";
      });
  },
});

// Exportar los actions creators
export const { increment, decrement } = counterSlice.actions;

// Exportar el reducer
export default counterSlice.reducer;
