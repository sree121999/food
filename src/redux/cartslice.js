import { createSlice } from "@reduxjs/toolkit";

const intail=JSON.parse(localStorage.getItem('cart')) || []



const cartslice=createSlice({
    name:'cart',
    initialState:intail,
    reducers:{
        addtocart:(state,action)=>{
            const item=state.find(prod=>prod.id===action.payload.id)
            
            if(item){
             if (item.count < item.stock) {
          item.count += 1;
        }
            }else{
                state.push({...action.payload,count:1})
            }
            localStorage.setItem('cart',JSON.stringify(state))
        },
         removefromcart: (state, action) => {
      const index = state.findIndex((item) => item.id === action.payload);
      if (index !== -1) {
        state.splice(index, 1);
      }
      localStorage.setItem("cart", JSON.stringify(state));
    },
    incrementQty: (state, action) => {
  const item = state.find(prod => prod.id === action.payload);
  if (item && item.count < item.stock) {
    item.count += 1;
  }
  localStorage.setItem("cart", JSON.stringify(state));
},

decrementQty: (state, action) => {
  const item = state.find(prod => prod.id === action.payload);
  if (item && item.count > 1) {
    item.count -= 1;
  }
  localStorage.setItem("cart", JSON.stringify(state));
}







    }
})

export const{addtocart,removefromcart,incrementQty,decrementQty}=cartslice.actions
export default cartslice.reducer