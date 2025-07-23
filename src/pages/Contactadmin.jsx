
import Navbar from "../componants/Navbar"
import Contactpara from "../componants/Contactpara"
import Logout from "../componants/Logout"


const Contactadmin=()=>{
    return(
        <>
        <div className="overflow-hidden ">
        <Navbar/>
        <div className="flex flex-row justify-around ">
            <Contactpara/>
            <img src="./img/deliveryboy.jpg" className=" hidden md:block rounded-full mt-10 h-130"/>

        </div>
        <Logout/>
        </div>




        
        </>
    )
}

export default Contactadmin