import { createSlice } from "@reduxjs/toolkit";
const intail=JSON.parse(localStorage.getItem('products')) || []


const productslice=createSlice({
    name:'products',
    initialState:intail,
    reducers:{
        addproduct:(state,action)=>{
            const newproduct=action.payload
            state.push(newproduct)
            localStorage.setItem('products',JSON.stringify(state))
        },
        updateproduct: (state, action) => {
      const updatedProduct = action.payload;
      const index = state.findIndex((item) => item.id === updatedProduct.id)

      if (index !== -1) {
        state[index] = { ...state[index], ...updatedProduct }
        localStorage.setItem("products", JSON.stringify(state))
        console.log(updatedProduct)
      }
    },
    deleteproduct:(state,action)=>{
      const idtodelete=action.payload
      const updatestate=state.filter((item)=>
        item.id!==idtodelete
      )
      localStorage.setItem("products",JSON.stringify(updatestate))
      return updatestate
    },
    


   
    },
})

export const{addproduct,updateproduct,deleteproduct}=productslice.actions
export default productslice.reducer