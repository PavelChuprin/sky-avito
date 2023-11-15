import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "../store/slices/modalReducer";
import adsReducer from "../store/slices/adsReducer";
import { adsApi } from "../API/adsAPI";

export const store = configureStore({
  reducer: {
    modal: modalReducer,
    ads: adsReducer,
    [adsApi.reducerPath]: adsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(adsApi.middleware),
});
