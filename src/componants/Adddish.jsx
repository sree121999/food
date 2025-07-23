import { Navigate, useNavigate } from "react-router-dom"


const Adddish=()=>{
    const navigate=useNavigate()
    const handler=()=>{
        navigate ('/Addform')
    }
    
    return(
        <>
        <button onClick={()=>handler()} className=" bg-orange-500 text-white w-32 h-9 rounded font-medium mt-15 ms-13 hover:bg-amber-300 transition"> + Add Dish</button>
</>
    )
}

export default Adddish