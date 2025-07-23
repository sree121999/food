import Aboutpara from "../componants/Aboutpara"
import Navbarguest from "../componants/Navbarguest"


const About=()=>{
    return(
        <>
        <div className="overflow-hidden">
        <Navbarguest/>
        
        <div className=" flex flex-row justify-around">
        <Aboutpara/>
        <img src="./img/scooter.jpg" className=" hidden md:block  rounded-4xl mt-12 w-100 me-15 "/>
       

</div>
</div>
        </>
    )
}

export default About