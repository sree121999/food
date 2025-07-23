import { useDispatch,useSelector } from "react-redux"
import { addtocart, removefromcart,incrementQty,decrementQty } from "../redux/cartslice"
import { useEffect } from "react"
import Navbarguest from "../componants/Navbarguest";










const Cart = () => {
  const cart = useSelector((state) => state.cart)
  const products = useSelector((state) => state.products)
  const dispatch=useDispatch()

  const getcartqty = (id) =>
    cart?.find((prod) => prod?.id === id)?.stock || 0

   const totalQuantity = cart.reduce((sum, item) => sum + (item.count || 0), 0);
  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * (item.count || 0),
    0
  );


  return (
    <>
    <div className="overflow-hidden">
    <Navbarguest/>
    <h4 className="text-3xl font-bold text-center my-4 text-orange-600">Your Cart</h4>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 ">
    
      {cart?.map((item) => {
        const cart_quantity = getcartqty(item.id)
        const { id,name,price,category ,description,imageUrl,count,stock} = item
       



        return (
          <div key={id} className="text-center lg: w-100 mb-6 rounded border-orange-500 border-2 pb-3 ">
            <img src={imageUrl} className="w-auto h-50 inline"/>
            <h2 className="font-medium text-2xl">{name}</h2>
             <h3 className="font-medium text-2xl"> ₹ {price}</h3>
             <h4 className="font-semibold">{category}</h4>

             <h4>In Cart: {count}</h4>
              <h4>Available: {stock - count}</h4>
            <p className="text-gray-600">{description}</p>
            <div className="flex justify-center items-center gap-3 my-2">
  <button
    onClick={() => dispatch(decrementQty(id))}
    className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
    disabled={count <= 1}
  >
    −
  </button>
  <span className="text-lg font-semibold">{count}</span>
  <button
    onClick={() => dispatch(incrementQty(id))}
    className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600"
    disabled={count >= stock}
  >
    +
  </button>
</div>

            <button onClick={()=>dispatch(removefromcart(item.id))} className="mt-2 px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600">Remove</button>
          
          

          </div>


        )
      })}
      </div>
      <div className="mt-4p-4 text-center bg-orange-100 rounded shadow-md mx-4 mb-3">
        <h2 className="text-xl font-bold text-orange-700">Cart Summary</h2>
        <p className="text-lg">Total Items: {totalQuantity}</p>
        <p className="text-lg">Total Price: ₹ {totalPrice}</p>
        <button className="mt-3 px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600">
          Proceed to Checkout
        </button>
      </div>

</div>





    </>
  )
}

export default Cart
