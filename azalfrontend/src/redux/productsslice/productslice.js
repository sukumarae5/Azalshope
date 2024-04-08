// productslice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allProducts: []
};

const productslice = createSlice({
  name: "products",
  initialState,
  reducers: {
    productRedux: (state, action) => {
      state.allProducts = [...action.payload];
    },
  },
});

export const { productRedux } = productslice.actions;
export default productslice.reducer;
