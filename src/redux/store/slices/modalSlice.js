import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  modalReviews: false,
  modalEditAd: false,
  modalAddNewAd: false,
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
  },
});

export const { setModalReviews, setModalEditAd, setModalAddNewAd } =
  modalSlice.actions;

export default modalSlice.reducer;
