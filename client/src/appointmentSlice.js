import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// user
// ...user.appointments 
// initialState

export const appointmentCreate = createAsyncThunk("appointment/create", (newAppointment) =>
  fetch("/appointments", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newAppointment),
  }).then((res) => res.json())
);
const appointmentSlice = createSlice({
  name: "appointments",
  initialState: {
    entities: [], // array of appointments
    status: "idle", // loading state
  },
  reducers: {},
  extraReducers: {
    // handle async actions: pending, fulfilled, rejected (for errors)
    [appointmentCreate.pending](state) {
      state.status = "loading";
    },
    [appointmentCreate.fulfilled](state, action) {
      state.entities = action.payload;
      state.status = "idle";
    },
    
  },
});



export default appointmentSlice.reducer;