import { configureStore } from "@reduxjs/toolkit";
import modalSLice from "../store/slices/modalSlice";
import filterSlice from "./slices/filterSlice";
import tokenSlice from "./slices/tokenSlice";
import { adsApi } from "../API/adsAPI";

export const store = configureStore({
  reducer: {
    modal: modalSLice,
    filter: filterSlice,
    token: tokenSlice,
    [adsApi.reducerPath]: adsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(adsApi.middleware),
});
