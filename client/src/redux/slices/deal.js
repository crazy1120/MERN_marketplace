import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  deals: [],
  deal: {
    title: "",
    desc: "",
    price: "",
  },
  loading: false,
  errors: null,
};

const dealSlice = createSlice({
  name: "deal",
  initialState,
  reducers: {
    createDealStart: (state) => {
      state.loading = true;
      state.errors = null;
    },
    createDealSuccess: (state) => {
      state.loading = false;
      window.history.back();
    },
    createDealFailure: (state, { payload }) => {
      state.loading = false;
      state.errors = payload;
    },
    getDealsStart: (state) => {
      state.loading = true;
      state.errors = null;
    },
    getDealsSuccess: (state, { payload }) => {
      state.loading = false;
      state.deals = payload;
    },
    getDealsFailure: (state, { payload }) => {
      state.loading = false;
      state.errors = payload;
    },
  },
});

export const { actions, reducer } = dealSlice;
