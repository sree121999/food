import Contactpara from "../componants/Contactpara"
import Logout from "../componants/Logout"
import Navbarguest from "../componants/Navbarguest"

const Contact=()=>{
    return(
        <>
        <div className="overflow-hidden ">
        <Navbarguest/>
        <div className="flex flex-row justify-around ">
            <Contactpara/>
            <img src="./img/deliveryboy.jpg" className=" hidden md:block rounded-full mt-10 h-130"/>

        </div>
        <Logout/>
        </div>
        </>
    )

}
export default Contact