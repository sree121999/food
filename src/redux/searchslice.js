import { createSlice } from "@reduxjs/toolkit"

const searchslice=createSlice({
    name:'search',
    initialState:{
        term:''
    },
    reducers:{
         setsearchterm :(state,action)=>{
            state.term=action.payload
        }
    }
})



export const{setsearchterm}=searchslice.actions

export default searchslice.reducer