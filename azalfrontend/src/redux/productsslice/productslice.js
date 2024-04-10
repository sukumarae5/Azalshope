// productslice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allProducts: [],
  cartItem:[]
};

const productslice = createSlice({
  name: "products",
  initialState,
  reducers: {
    productRedux: (state, action) => {
      console.log(action.payload);
      if(action.payload.message === "No products available"){
        console.log("No products available");
      }else{
        state.allProducts = [...action.payload];
      }
    },
  },
});

export const { productRedux } = productslice.actions;
export default productslice.reducer;
