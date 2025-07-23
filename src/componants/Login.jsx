import { useDispatch, useSelector } from "react-redux"
import { Navigate, useNavigate } from "react-router-dom"
import { login } from "../redux/authSlice"
import { useState } from "react"



const Login=()=>{

     const [selectedRole, setSelectedRole] = useState("customer") 
   




    const dispatch=useDispatch()
    const navigate=useNavigate()
    const{isauthenticated,user}= useSelector(state=>state.auth)
    
    



const changeHandler=(e)=>{
e.preventDefault()
const username=e.target.username.value
const password=e.target.password.value
if(username==='admin'&& password==='12345'){
     dispatch(login({username,role:'admin'}))
    navigate('/Dashboard')


}
else if(username==='guest' && password==="678910"){
    dispatch(login({username,role:'guest'}))
navigate('/Home')
}
else{alert('invalidcredential')}


}





    return(
        <>
        <section className=" min-h-8 flex flex-col sm:flex-row justify-around items-center px-4 py-5">
       <div className="hidden sm:block   ">
        <img src="./img/shef.jpg" className="hidden md:block lg:w-auto lg:h-150"/>

        </div>
        <form onSubmit={changeHandler}>
        <div className=" lg:w-120 sm:w-35 md:w-95 ms-2 mt-3 h-125  text-center border-2 rounded-3xl border-orange-500 pt-15  ">
            <h3 className="text-5xl sm:text-4xl text-orange-500 font-medium text-center mb-4">Login</h3>
            <p className="text-center mb-4 text-gray-600 text-2xl sm:text-lg">Login to your account</p>
            <div className="space-x-3 text-center flex justify-center">
            <button
                type="button"
                onClick={() => setSelectedRole("customer")}
                className={`w-30 h-10 font-medium rounded border-2 
                ${selectedRole === "customer" ? "bg-orange-500 text-white" : "bg-white text-black border-orange-500"}`}
              >
                Customer
              </button>
            <button
                type="button"
                onClick={() => setSelectedRole("restaurant")}
                className={`w-30 h-10 font-medium rounded border-2 
                ${selectedRole === "restaurant" ? "bg-orange-500 text-white" : "bg-white text-black border-orange-500"}`}
              >
                Restaurant
              </button>
            </div>
              
            <input type="text" placeholder="UserName" className=" border-2  border-gray-200 rounded h-9 w-65 mb-4 ps-2 mt-3 " name="username" required/>
            <input type="password" placeholder="Password" className="  border-2  border-gray-200 rounded h-9 w-65 ps-2 mb-4" name="password" required/>
            <button type="submit" className=" w-65 bg-orange-500 h-9 font-bold rounded mb-4 text-white hover:bg-amber-300 transition">Login</button>
            <p>Don't have an account? <span>signup</span></p>

        </div>
        </form>
       
    </section>
        </>
    )
}
export default Login