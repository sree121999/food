import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Foodlist from "../list/Foodlist"

const Editbtn=({item})=>{

    
    const navigate=useNavigate()

    const edithandler=()=>{
     navigate(`/Editpage/${item.id}`)
}

    return(
        <>
        <div>
            
                
  <button onClick={()=>edithandler()} ><img src="./img/editimage.png" alt="edit" className="w-8 h-8  mt-3" /></button></div>

        
    

      

        
        </>
    )
    
}

export default Editbtn