import Submit from "./Submit"

const Contactpara=()=>{
    return(
        <>
        <div className="mt-8 sm:px-8">
        <h2 className="font-bold text-4xl text-orange-300 mt-7text-2xl">CONTACT US</h2>
        <p className="mt-7 font-medium lg:text-2xl  sm:text-base">Please fill out the form below and we will get back to you as soon as possible.</p>
         
         
        <form className=" border-amber-500 rounded-2xl shadow-lg mt-10 max-w-md mx-auto  w-130 h-85 ps-10 pt-8 ms-2 ">
            
            <input type="text" placeholder="Name"required className="block mb-5 w-90 h-9 border-2 border-amber-200 rounded ps-4 "/>
            <input type="email" placeholder="Email"required className="block mb-5  w-90 h-9 border-2 border-amber-200 rounded ps-4"/>
            <textarea placeholder="message" className="block w-90 h-22 border-2 border-amber-200 rounded ps-4"></textarea>
            <Submit/>
        
        </form>
        </div>
        
       
        </>

    )
}

export default Contactpara