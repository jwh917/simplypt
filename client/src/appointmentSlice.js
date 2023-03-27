import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const appointmentCreate = createAsyncThunk("appointment/create", (newAppointment) =>
  fetch("/appointments", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newAppointment),
  }).then((res) => res.json())
);

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
  },
  reducers: {},
  extraReducers: {
    // handle async actions: pending, fulfilled, rejected (for errors)
    [appointmentCreate.pending](state) {
      state.status = "loading";
    },
    [appointmentCreate.fulfilled](state, action) {
      state.entities = action.payload;
      // state.status = "idle";
    },    
    [fetchAppointments.fulfilled](state, action) {
      state.entities = action.payload;
      // state.status = "idle";
    },
    
  },
});


export const appointmentErrors = (state) => {
  const appointment = state.appointments.entities;
  return appointment.errors ? appointment.errors : [];
};



export default appointmentSlice.reducer;