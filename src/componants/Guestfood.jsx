import Cartbutton from "./Cartbutton"
import Orderbutton from "./Cartbutton"

const Guestfood=({data})=>{
    return(
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  ms-10 mt-10">
        {Array.isArray(data)&&
        data?.map((item)=>{
            
            const{id,name,category,description,price,imageUrl,stock}=item
            return(
                <div key={id} className=" text-center w-115 mb-6 rounded border-orange-500 shadow-lg pb-3">
                    <img src={imageUrl} className="w-auto h-50 inline"/>
                      <h2 className="font-medium text-2xl">{name}</h2>
                    <h3 className="font-medium text-2xl"> ₹ {price}</h3>
                    <h5>Quantity of item- {stock}</h5>
                    <h4 className="font-semibold">{category}</h4>
                    <p className="text-gray-600">{description}</p>
                    <Cartbutton item={item}/>

                </div>
            )
        })


        }
       </div>
     
        
        </>
    )
}
export default Guestfood