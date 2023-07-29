import { createSlice } from "@reduxjs/toolkit";
import jwtDecode from "jwt-decode";
import { setAuthToken } from "../utils";

const token = localStorage.token || null;
const user = token ? jwtDecode(token) : null;

const initialState = {
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
      setAuthToken(payload);
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
      localStorage.removeItem("token");
      setAuthToken(null);
      state.isAuthenticated = false;
      state.user = null;
    },
  },
});

// Action creators generated for each case reducer function
export const { signInStart, signInSuccess, signInFailure, signOut } =
  authSlice.actions;

export default authSlice.reducer;
