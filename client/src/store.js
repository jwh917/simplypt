import { configureStore } from "@reduxjs/toolkit";

import ptsReducer from "./ptsSlice";

const store = configureStore({
  reducer: {
    pts: ptsReducer,
  },
});

export default store;