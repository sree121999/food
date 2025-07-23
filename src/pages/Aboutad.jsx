import Aboutpara from "../componants/Aboutpara"
import Navbar from "../componants/Navbar"

const Aboutad=()=>{
    return(
        <>
        <div className="overflow-hidden">
        <Navbar/>

         <div className=" flex flex-row justify-around sm:ms-3">
        <Aboutpara/>
        <img src="./img/scooter.jpg" className=" hidden md:block rounded-4xl mt-12 lg:w-100 me-15 "/>
        </div>
         </div>

        </>
    )
}

export default Aboutad