import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "../store/slices/modalReducer";
import filterReducer from "./slices/filterReducer";
import { adsApi } from "../API/adsAPI";

export const store = configureStore({
  reducer: {
    modal: modalReducer,
    filter: filterReducer,
    [adsApi.reducerPath]: adsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(adsApi.middleware),
});
