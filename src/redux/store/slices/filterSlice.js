import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  search: "",
  filterAds: [],
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setSearch: (state, action) => {
      state.search = action.payload;
    },
    setFilterAds: (state, action) => {
      state.filterAds = action.payload;
    },
  },
});

export const { setSearch, setFilterAds } = filterSlice.actions;

export default filterSlice.reducer;
