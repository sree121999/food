



import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { addtocart } from "../redux/cartslice"

const Cartbutton = ({ item }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const cart = useSelector((state) => state.cart)

  
  const getCartQty = (id) =>
    cart?.find((prod) => prod?.id === id)?.count || 0

  const handleAddToCart = () => {
    const cartQty = getCartQty(item.id)

    if (cartQty < item.stock) {
      dispatch(addtocart(item))
      navigate("/cart")
    } else {
      alert("No more stock available")
    }
  }

  return (
    <button
      onClick={handleAddToCart}disabled={getCartQty(item.id) >= item.stock}
      className="bg-orange-500 text-white w-32 h-9 rounded font-medium mt-4 hover:bg-amber-300 transition"
    >{getCartQty(item.id) >= item.stock ? "Out of Stock" : "Add to Cart"}
      
    </button>
  )
}

export default Cartbutton

