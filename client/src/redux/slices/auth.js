import { createSlice } from "@reduxjs/toolkit";
import jwtDecode from "jwt-decode";
import { setAuthToken } from "../utils";

const token = localStorage.token || null;
const user = token ? jwtDecode(token) : null;

const initialState = {
  isAuthenticated: !!token,
  loading: false,
  user,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signInStart: state => {
      state.loading = true;
      state.error = null;
    },
    signInSuccess: (state, { payload }) => {
      setAuthToken(payload);
      state.isAuthenticated = true;
      state.loading = false;
      state.user = jwtDecode(payload);
      state.error = null;
    },
    signInFailure: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    signUpStart: state => {
      state.loading = true;
      state.error = null;
    },
    signUpSuccess: state => {
      state.loading = false;
      state.error = null;
    },
    signUpFailure: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    signOut: state => {
      localStorage.removeItem("token");
      setAuthToken(null);
      state.isAuthenticated = false;
      state.user = null;
    },
  },
});

export const { actions, reducer } = authSlice;
