import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  creators: [],
  deals: [],
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
      state.profile = {};
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
    getProfilePublicStart: state => {
      state.loading = true;
      state.error = null;
      state.profile = {};
    },
    getProfilePublicSuccess: (state, { payload }) => {
      state.loading = false;
      state.error = null;
      state.profile = payload;
    },
    getProfilePublicFailure: (state, { payload }) => {
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
    getDealsPublicStart: state => {
      state.deals = [];
      state.loading = true;
      state.error = null;
    },
    getDealsPublicSuccess: (state, { payload }) => {
      state.loading = false;
      state.error = null;
      state.deals = payload;
    },
    getDealsPublicFailed: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },
});

export const { actions, reducer } = profileSlice;
