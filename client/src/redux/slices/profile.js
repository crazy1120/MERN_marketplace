import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  profile: {},
  loading: false,
  errors: null,
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    createProfileStart: state => {
      state.loading = true;
      state.errors = null;
    },
    createProfileSuccess: state => {
      state.loading = false;
      // window.history.back();
    },
    createProfileFailure: (state, { payload }) => {
      state.loading = false;
      state.errors = payload;
    },
    getProfileStart: state => {
      state.loading = true;
      state.errors = null;
    },
    getProfileSuccess: (state, { payload }) => {
      state.loading = false;
      state.errors = null;
      state.Profile = payload;
    },
    getProfileFailure: (state, { payload }) => {
      state.loading = false;
      state.errors = payload;
    },
  },
});

export const { actions, reducer } = profileSlice;
