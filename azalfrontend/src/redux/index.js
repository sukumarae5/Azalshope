import { configureStore } from "@reduxjs/toolkit";
import usersliceReducer from "./userslice/userslice";
import productsliceReducer from "./productsslice/productslice";

export const store = configureStore({
    reducer:{
       users:usersliceReducer,
       products:productsliceReducer
    }
})