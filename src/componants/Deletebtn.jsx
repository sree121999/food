import { useDispatch } from "react-redux"
import { deleteproduct } from "../redux/productslice"

const Deletebtn=({item})=>{
    const dispatch=useDispatch()

    const handledelete=()=>{
        const confirm=window.confirm('are you sure to delete the item?')
        if(confirm){
            dispatch(deleteproduct(item.id))
            alert("item deleted successfully")
        }
    }

  




    return(
        <>

        <div>

           
        <button onClick={handledelete}><img src="./img/deleteimage.png" className="w-8 h-8 mt-2"/></button>
</div>
        
        </>
    )
}

export default Deletebtn