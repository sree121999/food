import { configureStore } from "@reduxjs/toolkit";
import authreducer from "./authSlice"
import productreducer from "./productslice"
import cartreducer from './cartslice'
import searchreducer from './searchslice'

export const store=configureStore ({
    reducer:{
        auth:authreducer,
        products:productreducer,
        cart:cartreducer,
        search:searchreducer,



    },

})
export default store



