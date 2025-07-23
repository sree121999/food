import Navbarguest from "../componants/Navbarguest"
import Searchbar from "../componants/Searchbar"

import Offer from "../componants/Offer"
import Food from "../componants/Food"
import Guestlist from "../list/Guestlist"
import Navsearch from "../componants/Navsearch"
import { useState } from "react"
const Home=()=>{

    
    return<>
    <div className="overflow-hidden">
        
        <Navsearch/>
    
    
     
    
    
    <Offer/>
    
    <Guestlist/>
    </div>
    



    
    </>
}
export default Home