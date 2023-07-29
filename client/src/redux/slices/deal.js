import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filtered: [],
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
  },
});

// Action creators generated for each case reducer function
export const { createDealStart, createDealSuccess, createDealFailure } =
  dealSlice.actions;

export default dealSlice.reducer;
