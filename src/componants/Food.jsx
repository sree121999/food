import Deletebtn from "./Deletebtn.jsx"
import Editbtn from "./Editbtn"

const Food=({data})=>{
    return(
        <>
         <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:ms-15 sm:ms-2 md:ms-5 mt-7 ">
        {Array.isArray(data)&&
        data?.map((item)=>{
            const{id,name,category,description,price,imageUrl,stock}=item
            return(
                <div key={id} className=" text-center  w-90 mb-5 px-3 rounded border-orange-500 pb-3 shadow-lg">
                    <img src={imageUrl} className="w-auto h-50 inline"/>
                      <h2 className="font-medium text-2xl">{name}</h2>
                    <h3 className="font-medium text-2xl"> ₹ {price}</h3>
                    <h4 className="font-semibold">{category}</h4>
                    <h5>Quantity of item- {stock}</h5>
                    <p className="text-gray-600">{description}</p>
                    <div className="flex justify-center space-x-10">
                    <Editbtn item={item}/>
                    <Deletebtn item={item}/>
                    </div>

                </div>
            )
        })


        }
       </div>
     
        
        
        </>
    )
}
export default Food