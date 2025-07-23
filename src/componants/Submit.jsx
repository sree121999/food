const Submit=()=>{

    const submitfun=()=>{
        alert('feedback submitted successfully')
    }
    return(
        <>
        <button onClick={()=>submitfun()}className="bg-orange-500 text-white w-32 h-9 rounded font-medium mt-7 ms-23 hover:bg-amber-300 transition">Submit</button>
        </>
    )
}
export default Submit