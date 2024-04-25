import { createSlice } from "@reduxjs/toolkit";

type ModalState = {
  isVisible: boolean;
};

const initialState: ModalState = {
  isVisible: false,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    activate: (state) => {
      state.isVisible = true;
    },
    deactivate: (state) => {
      state.isVisible = false;
    },
  },
});

export const { activate, deactivate } = modalSlice.actions;

export default modalSlice.reducer;
