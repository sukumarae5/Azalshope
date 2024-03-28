import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  //Write initial state here
};

export const userslice = createSlice({
  name: "users",
  initialState,
  reducers: {
    //Write redux code here
  },
});

//uncomment this line to use userslice
// export const {} = userslice.actions; 
export default userslice.reducer;
