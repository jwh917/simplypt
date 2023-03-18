import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchUser = createAsyncThunk("user/fetchUser", () =>
  fetch("/me").then((response) => (response.ok ? response.json() : null))
);

export const userLogout = createAsyncThunk("user/logout", () =>
  fetch("/logout", { method: "DELETE" })
);

export const userLogin = createAsyncThunk("user/login", (user) =>
  fetch("/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  }).then((res) => res.json())
);

export const userSignup = createAsyncThunk("user/signup", (userInput) =>
  fetch("/signup", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userInput),
  }).then((res) => res.json())
);

// USER PATCH
// export const userUpdate = createAsyncThunk("user/update", (user) =>
//   fetch("/me", {
//     method: "PATCH",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(user),
//   }).then((res) => res.json())
// );


// DELETE USER
// export const deleteUser = createAsyncThunk("user/delete", (user) =>
//   fetch("/me", {
//     method: "DELETE",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(newUserInput),
//   }).then((res) => res.json())
// );


const userSlice = createSlice({
  name: "user",
  initialState: {
    value: null, // object of @current_user 
  },
  reducers: {
    addProfile(state, action) {
      return {
        ...state,
        value: {...state.value, patient_profile: action.payload},
      }
    },
  },
  extraReducers: {
    [fetchUser.fulfilled](state, action) {
      state.value = action.payload;
    },
    [userLogout.fulfilled](state, action) {
      state.value = null;
    },
    [userLogin.fulfilled](state, action) {
      state.value = action.payload;
    },
    [userSignup.fulfilled](state, action) {
      state.value = action.payload;
    },
  },
});

export const selectUser = (state) => {
  const user = state.user.value;
  return user && !user.errors ? user : null;
};

export const selectErrors = (state) => {
  const user = state.user.value;
  return user && user.errors ? user.errors : [];
};

export const { addProfile } = userSlice.actions;

export default userSlice.reducer;