import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  modalReviews: false,
  modalEditAd: false,
  modalAddNewAd: false,
  modalChangePassword: false,
  modalExit: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    setModalReviews(state, action) {
      state.modalReviews = action.payload;
    },
    setModalEditAd(state, action) {
      state.modalEditAd = action.payload;
    },
    setModalAddNewAd(state, action) {
      state.modalAddNewAd = action.payload;
    },
    setModalChangePassword(state, action) {
      state.modalChangePassword = action.payload;
    },
    setModalExit(state, action) {
      state.modalExit = action.payload;
    },
  },
});

export const {
  setModalReviews,
  setModalEditAd,
  setModalAddNewAd,
  setModalChangePassword,
  setModalExit,
} = modalSlice.actions;

export default modalSlice.reducer;
