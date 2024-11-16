import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  query: "",
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    addSearch: (state, action) => {
      state.query = action.payload;
    },
    clearSearch: (state) => {
      state.query = "";
    },
  },
});

export const { addSearch, clearSearch } = searchSlice.actions;
export default searchSlice.reducer;
