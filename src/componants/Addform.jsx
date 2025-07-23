import { useDispatch } from "react-redux"
import { addproduct } from "../redux/productslice"
import { useState } from "react"

const Addform=()=>{

    const[image,setimage]=useState(null)

    const handleimagechange =(e)=>{
        const file=e.target.files[0]
        if(file){
            const imageUrl=URL.createObjectURL(file)
            setimage(imageUrl)
        }
    }

    const dispatch=useDispatch()
    const formhandler=(e)=>{
        e.preventDefault()
       
        const newproduct={
            id: Date.now(),
      name: e.target.product_name.value,
      price:parseFloat( e.target.product_price.value),
      stock:parseInt(e.target.product_stock.value),
      description: e.target.description.value,
      category: e.target.category.value,
      imageUrl:image

        }
        dispatch(addproduct(newproduct))
        alert('Dish added successfully.You can see the dish in your Home page')
         e.target.reset()
         setimage(null)

    }
        


    return(
        <>
        
        
        <div className="text-center ">
        <h4 className="lg:text-4xl md:text-4xl text-orange-500  font-medium  pt-6 text-2xl   ">Add Food items</h4>
         </div>
        <form onSubmit={formhandler} className="mt-3 w-full max-w-md mx-auto h-screen px-6 pt-10 shadow-lg">


           <label className="text-orange-700 ">Name</label>
            <input type="text" placeholder="Enter the name of dish" name="product_name" required className=" w-full h-8 ps-3 border-2 border-orange-500 rounded block mb-3 "/>

            <label className="text-orange-700 ">Price</label>
             <input type="text"name="product_price" required className=" w-full h-8  border-2 border-orange-500 rounded "/>

             <label className="text-orange-700  " >Quantity of item</label>
             <input type="text"name="product_stock" required className="w-full h-8  border-2 border-orange-500 rounded "/>

             <label className="text-orange-700 block mt-3" >Description</label>
             <input type="text"name="description" required className=" w-full h-25  border-2 border-orange-500 rounded block mb-3 "/>

             <label className="text-orange-700 ">category</label>
            <input type="text" name="category" required className=" w-full h-8  border-2 border-orange-500 rounded block "/>


             
        
       
       
        
        {image &&(<img src={image}alt="selected" className="w-32 h-25 object-cover mt-2 border-2 border-amber-500"/>)}
    
    <input type="file"  required className="block text-sm text-gray-500 mt-20
    file:mr-4 file:py-2 file:px-4
    file:rounded-full file:border-0
    file:text-sm file:font-semibold
    file:bg-orange-500 file:text-white
    hover:file:bg-orange-600 mb-3" accept="image/*" onChange={handleimagechange}/>
      <label className="text-orange-700 lg:block mt-2">select food item image from your gallery</label>
      
<button type="submit" className="block bg-amber-500 px-4 py-2 text-white rounded-4xl w-30 mt-5 font-bold ms-35">Add</button>


       
       </form>
      
      
       
        



        </>
    )
}

export default Addform