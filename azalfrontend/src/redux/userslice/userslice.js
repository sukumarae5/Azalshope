import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  //initial state here
  id: "",
  email: "",
  username: "",
  name: "",
  image: "",
};

export const userslice = createSlice({
  name: "users",
  initialState,
  reducers: {
    //Login and Logout redux code here
    loginRedux: (state, action) => {
      state.id = action.payload.id;
      state.username = action.payload.username;
      state.email = action.payload.email;
      state.name = action.payload.name;
      state.image = action.payload.image;
    },
    logoutRedux: (state, action) => {
      // console.log(action.payload);
      state.id = "";
      state.username = "";
      state.email = "";
      state.fistname = "";
      state.lastname = "";
      state.image = "";
    },
  },
});

//uncomment this line to use userslice
export const { loginRedux, logoutRedux } = userslice.actions;
export default userslice.reducer;
