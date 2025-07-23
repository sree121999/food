import { useNavigate, useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { updateproduct } from "../redux/productslice"
import { useEffect, useState } from "react"
import jsondata from "../list/data.json"


const Editpage=()=>{
    const {id}=useParams()
    const dispatch=useDispatch()
    const navigate=useNavigate()
    
    const products=useSelector((state)=>state.products)
    console.log(products)
    const reduxProducts = useSelector((state) => state.products)
    const jsonProducts = jsondata.foodItems || []
    const combined = [...jsonProducts, ...reduxProducts]

   

    const item =combined.find((item)=>item.id===parseInt(id))
    const [formdate,setformdata]=useState({
        name: item?.name || "",
    price: item?.price || "",
    stock: item?.stock || "",
    category: item?.category || "",
    description: item?.description || "",
    imageUrl: item?.imageUrl || "",
    })

    const handleupdate=(e)=>{
        setformdata(prev=>({
            ...prev,[e.target.name]:e.target.value,
        }))

    }

    const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(updateproduct({ id: parseInt(id), ...formdate}))
    alert("Item updated successfully!")
    navigate("/dashboard")
  }

  if (!item) return <p>Item not found</p>





    
    


    
    return(
        <>
      
        <div className="flex space-x-3 mt-8 justify-center  ">
      <img src="/img/editimage.png" className="h-8 w-8"/>
      <p className="font-medium text-2xl text-orange-500">{item.name} </p>
      </div>

      <form onSubmit={handleSubmit} className="mt-3 full max-w-md mx-auto h-screen    px-6 pt-10 shadow-lg">


       <label className="text-orange-700 ">Name</label>
      <input name="name" value={formdate.name} onChange={handleupdate} className=" w-full h-8 ps-3 border-2 border-orange-500 rounded block mb-5 " />

       <label className="text-orange-700 ">Price</label>
      <input name="price" value={formdate.price} onChange={handleupdate}  required className=" w-full h-8 ps-3 border-2 border-orange-500 rounded "/>


 <label className="text-orange-700 ms-4 " >Quantity of item</label>
     < input name="stock" value={formdate.stock} onChange={handleupdate} required className="w-full h-8 ps-3 border-2 border-orange-500 rounded "/>



<label className="text-orange-700 block mt-3" >Description</label>
<input name="description" value={formdate.description} onChange={handleupdate} required className=" w-full h-25 ps-3 border-2 border-orange-500 rounded block mb-3 "/>


 <label className="text-orange-700 ">category</label>

 
<input name="category" value={formdate.category} onChange={handleupdate}required className=" w-full h-8 ps-3 border-2 border-orange-500 rounded block " />


{formdate.imageUrl && (
  <img
    src={formdate.imageUrl}
    alt="selected"
    className="w-32 h-25 object-cover mt-2 border-2 border-amber-500"
/>
)}
 

     

<input
  type="file"
  accept="image/*"
  onChange={(e) => {
    const file = e.target.files[0]
    const reader = new FileReader()
    reader.onloadend = () => {
      setformdata((prev) => ({
        ...prev,
        imageUrl: reader.result,
      }))
    }
    if (file) {
      reader.readAsDataURL(file)
    }
  }}
  className="block text-sm text-gray-500 
    file:mr-4 file:py-2 file:px-4
    file:rounded-full file:border-0
    file:text-sm file:font-semibold
    file:bg-orange-500 file:text-white
    hover:file:bg-orange-600 mb-3"
/>



 <label className="text-orange-700 block mt-2">Upload Image</label>






<button type="submit" className="block bg-amber-500 px-4 py-2 text-white rounded-4xl w-30 mt-5 font-bold ms-35">Update</button>




</form>




    
  


        
        </>
    )
}

export default Editpage












 
          