import { configureStore } from "@reduxjs/toolkit";
import searchSlice from "./slice/searchSlice";
import taskSlice from "./slice/taskSlice";

export const store = configureStore({
  reducer: {
    search: searchSlice,
    tasks: taskSlice,
  },
});
