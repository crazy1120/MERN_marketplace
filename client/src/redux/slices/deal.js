import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  deals: [],
  deal: {
    title: "",
    desc: "",
    price: "",
  },
  loading: false,
  error: null,
};

const dealSlice = createSlice({
  name: "deal",
  initialState,
  reducers: {
    createDealStart: state => {
      state.loading = true;
      state.error = null;
    },
    createDealSuccess: state => {
      state.loading = false;
      window.history.back();
    },
    createDealFailure: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    getDealsStart: state => {
      state.loading = true;
      state.error = null;
    },
    getDealsSuccess: (state, { payload }) => {
      state.loading = false;
      state.error = null;
      state.deals = payload;
    },
    getDealsFailure: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },
});

export const { actions, reducer } = dealSlice;
