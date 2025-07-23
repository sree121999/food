import { createSlice } from "@reduxjs/toolkit";

const savedauth=JSON.parse(localStorage.getItem('Auth'))||{
isauthenticated:false,
user:null
}

const authSlice=createSlice({
    name:'auth',
    initialState:savedauth,

    reducers:{
        login:(state,action)=>{
            
            const {username,role}=action?.payload
            state.user={username,role}
            state.isauthenticated=true,
         localStorage.setItem('auth',JSON.stringify(state))

        },
        logout:(state)=>{
            state.isauthenticated=false
            state.user=null
            localStorage.removeItem('auth')

        }

        
    }

})

export const {login,logout}=authSlice.actions
export default authSlice.reducer

