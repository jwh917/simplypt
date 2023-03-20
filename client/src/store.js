import { configureStore } from "@reduxjs/toolkit";

import ptsReducer from "./ptsSlice";
import userReducer from "./userSlice";
import profileReducer from "./profileSlice";

const store = configureStore({
  reducer: {
    pts: ptsReducer,
    user: userReducer,
    patient_profile: profileReducer,
  },
});

export default store;