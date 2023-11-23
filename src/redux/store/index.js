import { configureStore } from "@reduxjs/toolkit";
import modalSLice from "../store/slices/modalSlice";
import filterSlice from "./slices/filterSlice";
import tokenSlice from "./slices/tokenSlice";
import { adsApi } from "../API/adsAPI";
import { authApi } from "../API/authAPI";
import { usersApi } from "../API/usersAPI";

export const store = configureStore({
  reducer: {
    modal: modalSLice,
    filter: filterSlice,
    token: tokenSlice,
    [adsApi.reducerPath]: adsApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [usersApi.reducerPath]: usersApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(adsApi.middleware)
      .concat(authApi.middleware)
      .concat(usersApi.middleware),
});
