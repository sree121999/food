import { useState } from "react"
import jsondata from"./data.json"
import Food from "../componants/Food"
import Adddish from "../componants/Adddish"
import Addform from "../componants/Addform"
import { useSelector } from "react-redux"
import Editbtn from "../componants/Editbtn"
import Deletebtn from "../componants/Deletebtn"


const Foodlist=()=>{

    const[data]=useState(jsondata.foodItems  ||[])
    const products=useSelector((state)=>state.products)
    console.log(data)
    

    
    
    


    return(
        <>
        
         
       <Food data={data}/>
 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ms-10 mt-7 ">
       {products?.map((item)=>{
        const {id,name,price,category,stock,description,imageUrl}=item
        return(
            <div key={id} className="text-center w-100  mb-5 rounded border-orange-500 shadow-lg pb-3">
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
       })}
       
       </div>
      
       </>
    )
}
export default Foodlist



