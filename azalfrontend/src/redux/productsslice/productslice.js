import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // write your initial state here
};

export const productslice = createSlice({
  name: "products",
  initialState,
  reducers: {
    //write your redux here
  },
});

//uncomment this line to use productslice
// export const { } = productslice.actions; 
export default productslice.reducer