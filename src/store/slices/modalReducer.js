import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  modalReviews: false,
  modalEditAdv: false,
  modalAddNewAdv: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    setModalReviews(state, action) {
      state.modalReviews = action.payload;
    },
    setModalEditAdv(state, action) {
      state.modalEditAdv = action.payload;
    },
    setModalAddNewAdv(state, action) {
      state.modalAddNewAdv = action.payload;
    },
  },
});

export const { setModalReviews, setModalEditAdv, setModalAddNewAdv } =
  modalSlice.actions;

export default modalSlice.reducer;
