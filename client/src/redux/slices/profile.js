import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  creators: [],
  profile: {},
  loading: false,
  error: null,
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    createProfileStart: state => {
      state.loading = true;
      state.error = null;
    },
    createProfileSuccess: state => {
      state.loading = false;
      window.history.back();
    },
    createProfileFailure: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    getProfileStart: state => {
      state.loading = true;
      state.error = null;
    },
    getProfileSuccess: (state, { payload }) => {
      state.loading = false;
      state.error = null;
      state.profile = payload;
    },
    getProfileFailure: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    getCreatorsStart: state => {
      state.loading = true;
      state.error = null;
    },
    getCreatorsSuccess: (state, { payload }) => {
      state.loading = false;
      state.error = null;
      state.creators = payload;
    },
    getCreatorsFailure: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },
});

export const { actions, reducer } = profileSlice;
