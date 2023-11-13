import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./slices/modalReducer";

export const store = configureStore({
  reducer: {
    modal: modalReducer,
  },
});
