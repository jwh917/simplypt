import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchPTs = createAsyncThunk("pts/fetchPTs", () => {

  return fetch("/physical_therapists")
    .then((response) => response.json())
    .then((data) => data);
});

const ptsSlice = createSlice({
  name: "pts",
  initialState: {
    entities: [], // array of physical therapists
    status: "idle", // loading state
  },
  reducers: {},
  extraReducers: {
    // handle async actions: pending, fulfilled, rejected (for errors)
    [fetchPTs.pending](state) {
      state.status = "loading";
    },
    [fetchPTs.fulfilled](state, action) {
      state.entities = action.payload;
      state.status = "idle";
    },
  },
});


export default ptsSlice.reducer;