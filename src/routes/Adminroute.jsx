import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"


const Adminroute=({children})=>{

    const {user,isauthenticated} =useSelector(state=>state.auth)
    if(!isauthenticated){
        return <Navigate to="/"/>
    }
    

    if( user?.role!=='admin'){
        return <Navigate to="/Home"/>}

    return children
    
}
export default Adminroute