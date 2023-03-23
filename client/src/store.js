import { configureStore } from "@reduxjs/toolkit";

import ptsReducer from "./ptsSlice";
import userReducer from "./userSlice";
import profileReducer from "./profileSlice";
import appointmentsReducer from "./appointmentSlice";


const store = configureStore({
  reducer: {
    pts: ptsReducer,
    user: userReducer,
    patient_profile: profileReducer,
    appointments: appointmentsReducer
  },
});

export default store;