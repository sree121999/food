import { useState } from "react"
import { useDispatch } from "react-redux"
import { setsearchterm } from "../redux/searchslice"


const Searchbar=()=>{
    const[searchinput,setsearchinput]=useState('')
    const dispatch=useDispatch()


    const handlechange=(e)=>{
        const value=e.target.value
        setsearchinput(value)
        dispatch(setsearchterm(value))

    }



    return(
        <>
        
        
        
        <input type="text" onChange={handlechange} value={searchinput} placeholder=" Search... " className="h-9 lg:w-130 hidden md:block md:w-60 bg-amber-50 me-110 rounded text-gray-500 shadow-lg text-sm ps-4 border-orange-500 " />
        
        </>
    )
}

export default Searchbar