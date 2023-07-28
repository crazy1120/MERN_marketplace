import { createSlice } from "@reduxjs/toolkit";
import jwtDecode from "jwt-decode";

const token = localStorage.token || null;
const user = token ? jwtDecode(token) : null;

const initialState = {
  token,
  isAuthenticated: !!token,
  loading: false,
  user,
  errors: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signInStart: (state) => {
      state.loading = true;
      state.errors = null;
    },
    signInSuccess: (state, { payload }) => {
      state.token = payload;
      state.isAuthenticated = true;
      state.loading = false;
      state.user = jwtDecode(payload);
      state.errors = null;
    },
    signInFailure: (state, { payload }) => {
      state.loading = false;
      state.errors = payload;
    },
    signOut: (state) => {
      state.token = null;
      state.isAuthenticated = false;
      state.user = null;
    },
  },
});

// Action creators are generated for each case reducer function
export const { signInStart, signInSuccess, signInFailure, signOut } =
  authSlice.actions;

export default authSlice.reducer;
