import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  //initial state here
  id: "",
  email: "",
  username: "",
  name: "",
  image: "",
  phone: "",
};

export const userslice = createSlice({
  name: "users",
  initialState,
  reducers: {
    //Login and Logout redux code here
    loginRedux: (state, action) => {
      state.id = action.payload[0].id;
      state.username = action.payload[0].username;
      state.email = action.payload[0].email;
      state.name = action.payload[0].firstName + " " + action.payload[0].lastName;
      state.phone = action.payload[0].phone;
      state.image = action.payload[0].image;
    },
    logoutRedux: (state, action) => {
      // console.log(action.payload);
      state.id = "";
      state.username = "";
      state.email = "";
      state.name = "";
      state.phone = "";
      state.image = "";
    },
  },
});

//uncomment this line to use userslice
export const { loginRedux, logoutRedux } = userslice.actions;
export default userslice.reducer;
