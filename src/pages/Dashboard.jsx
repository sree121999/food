

import Navbar from "../componants/Navbar"
import Adddish from "../componants/Adddish"
import Foodlist from "../list/Foodlist"




const Dashboard=()=>{
    

   
    return(
        <>
        
        
        <div className="overflow-hidden">
        
        
        <Navbar/>
        

        <Adddish/>
        
        <Foodlist/>
        </div>
        
        
 
        </>
    )
}

export default Dashboard