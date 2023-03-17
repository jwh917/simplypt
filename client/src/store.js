import { configureStore } from "@reduxjs/toolkit";

import ptsReducer from "./ptsSlice";
import userReducer from "./userSlice";

const store = configureStore({
  reducer: {
    pts: ptsReducer,
    user: userReducer,
  },
});

export default store;