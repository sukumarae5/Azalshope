// productslice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allProducts: [],
  cartitem: [],
  oneProduct: [],
};

const productslice = createSlice({
  name: "products",
  initialState,
  reducers: {
    productRedux: (state, action) => {
      if (action.payload.message === "No products available") {
        console.log("No products available");
      } else {
        state.allProducts = [...action.payload];
      }
    },
    removeRedux: (state, action) => {
      const idsToRemove = action.payload;
      idsToRemove.forEach((id) => {
        const index = state.cartitem.findIndex((ele) => ele.id === id);
        if (index !== -1) {
          state.cartitem.splice(index, 1);
        }
      });
    },

    addcartitemRedux: (state, action) => {
      const check = state.cartitem.some((ele) => {
        return ele.id === action.payload.id;
      });
      if (check) {
        alert("it is already exist in your cart");
      } else {
        const total = action.payload.price;
        state.cartitem = [
          ...state.cartitem,
          { ...action.payload, quantity: 1, total: total },
        ];
      }
      
      console.log(action.payload);
    },

    incrqtyRedux:(state,action)=>{
      const index=state.cartitem.findIndex(ele=>{return ele.id===action.payload})
      let quantity =state.cartitem[index].quantity
    let qtyincre=++quantity
    state.cartitem[index].quantity=qtyincre
    let Price =state.cartitem[index].price
    state.cartitem[index].total=Price*qtyincre
    },
    decrqtyRedux:(state,action)=>{
      const index=state.cartitem.findIndex(ele=>{return ele.id===action.payload})
      let quantity =state.cartitem[index].quantity
      if (quantity>1){
        let qtydecre=--quantity
    state.cartitem[index].quantity=qtydecre
    let Price =state.cartitem[index].price
    state.cartitem[index].total=Price*qtydecre

      }
    
    },
    
    
    addOneProduct: (state, action) => {
      console.log(action.payload);
      state.oneProduct = action.payload;
    },
    updateProducts:(state,action) =>{
      state.allProducts = action.payload
    },
    deleteProductRedux:(state, action) => {
      state.allProducts = state.allProducts.filter(
        (product) => product.id !== action.payload
      );
    },
  },
});

export const { incrqtyRedux,decrqtyRedux,removeRedux } = productslice.actions;
export const {
  productRedux,
  addcartitemRedux,
  addOneProduct,
  updateProducts,
  deleteProductRedux,
} = productslice.actions;
export default productslice.reducer;
