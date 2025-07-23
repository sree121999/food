import { useDispatch } from "react-redux"
import { logout } from "../redux/authSlice"
import { Navigate, useNavigate } from "react-router-dom"


const Logout=()=>{

    const dispatch=useDispatch()
    const navigate=useNavigate()

    return(
        
        <>
        <div className="text-end ">
        <button onClick={()=>{
            dispatch(logout())

            navigate('/')
        }} className="bg-red-700 text-white w-25 h-9 rounded font-medium mt-7 hover:bg-amber-300 transition  me-5">Logout</button>
</div>
        </>
    )
}
export default Logout