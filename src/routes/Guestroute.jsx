

import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"

const Guestroute=({children})=>{

    const {user,isauthenticated} =useSelector(state=>state.auth)
    if(!isauthenticated){
        return <Navigate to="/"/>
    }
    

    if(user?.role!=='guest')
        return <Navigate to='/Dashboard'/>

    return children
    
}
export default Guestroute