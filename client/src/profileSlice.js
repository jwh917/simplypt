import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const profileCreate = createAsyncThunk("profile/create", (newProfile) =>
  fetch("/patient_profiles", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newProfile),
  }).then((res) => res.json())
);

export const profileUpdate = createAsyncThunk("profile/update", (newProfile) =>
  fetch(`/patient_profiles/${newProfile.id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newProfile),
  }).then((res) => res.json())
);

export const fetchProfiles = createAsyncThunk("pts/fetchPTs", () => {
  return fetch("/patient_profiles")
    .then((response) => response.json())
    .then((data) => data);
});


const profileSlice = createSlice({
  name: "patient_profile",
  initialState: {
    value: null, // object of patient_profile 
    entities: []
  },
  reducers: {},
  extraReducers: {
    [profileCreate.fulfilled](state, action) {
      state.value = action.payload;
    },
    [profileUpdate.fulfilled](state, action) {
      state.value = action.payload;
    },
    [fetchProfiles.fulfilled](state, action) {
      state.entities = action.payload;
    },
  },
});

export const profileSelectErrors = (state) => {
  const userProfile = state.user.value;
  return userProfile && userProfile.errors ? userProfile.errors : [];
};

export default profileSlice.reducer;