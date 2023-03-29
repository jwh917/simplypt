import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const fetchAppointments = createAsyncThunk("appointments/fetchAppointments", () => {
  return fetch("/appointments")
    .then((response) => response.json())
    .then((data) => data);
});

export const appointmentDelete = createAsyncThunk("appointment/delete", (appointmentId) =>
  fetch(`/appointments/${appointmentId}`, {
    method: "DELETE"})
);

const appointmentSlice = createSlice({
  name: "appointments",
  initialState: {
    entities: [], // array of appointments
    status: "idle", // loading state
    error: null,
  },
  reducers: {},
  extraReducers: {
    // handle async actions: pending, fulfilled, rejected (for errors)
    [fetchAppointments.fulfilled](state, action) {
      state.entities = action.payload;
    },    
  },
});




export default appointmentSlice.reducer;