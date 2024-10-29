import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state) => {
      // Se puede escribir código mutable porque immer se encarga de hacer el trabajo de la inmutabilidad
      state.isOpen = true;

      // Antes de las redux tookit
      // return {
      //     ...state,
      //     isOpen: true,
      // }
    },
    closeModal: (state) => {
      state.isOpen = false;

      // Antes de las redux tookit
      // return {
      //     ...state,
      //     isOpen: false,
      // }
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;

export const selectModal = (store) => store.modal;

export const modalReducer = modalSlice.reducer;
