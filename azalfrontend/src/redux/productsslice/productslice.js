// productslice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allProducts: [],
  cartitem:[]
  
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

    addcartitemRedux:(state,action)=>{
      const check=state.cartitem.some((ele)=>{ return ele.id===action.payload.id })
      console.log(check)
      if (check){
          alert("already add your item")
      }else{
        const total=action.payload.price
        state.cartitem=[...state.cartitem,{...action.payload,qty:1,total:total}]   
        console.log(action.payload)  
    }    
    },
    removeRedux:(state,action)=>{

    return initialState

    },
    incrqtyRedux:(state,action)=>{
      const index=state.cartitem.findIndex(ele=>{return ele.id===action.payload})
      let qty =state.cartitem[index].qty
    let qtyincre=++qty
    state.cartitem[index].qty=qtyincre
    let Price =state.cartitem[index].price
    state.cartitem[index].total=Price*qtyincre
    },
    decrqtyRedux:(state,action)=>{
      const index=state.cartitem.findIndex(ele=>{return ele.id===action.payload})
      let qty =state.cartitem[index].qty
      if (qty>1){
        let qtydecre=--qty
    state.cartitem[index].qty=qtydecre
    let Price =state.cartitem[index].price
    state.cartitem[index].total=Price*qtydecre

      }
    
    },
    
  },
});


export const { productRedux ,removeRedux,addcartitemRedux,incrqtyRedux,decrqtyRedux} =productslice.actions;
export default productslice.reducer;
