

   





import jsondata from "./data.json"
import { useState } from "react"
import { useSelector } from "react-redux"
import Cartbutton from "../componants/Cartbutton"

const Guestlist = () => {
  const searchterm = useSelector((state) => state.search.term)
  const [data] = useState(jsondata.foodItems || [])
  const products = useSelector((state) => state.products)

  const combinedData = [...data, ...products]

  const filteredItems = combinedData.filter((item) =>
    item.name?.toLowerCase().includes(searchterm.toLowerCase())
  )

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:ms-10 sm:ms-5 md:ms-5 mt-7">
        {filteredItems.length > 0 ? (
          filteredItems.map((item) => {
            const { id, name, price, category, stock, description,imageUrl } = item
            return (
              <div
                key={id}
                className="text-center w-100 mb-5 rounded border-orange-500 shadow-lg pb-3 "
              >
                <img src={imageUrl} className="w-auto h-50 inline"/>
                <h2 className="font-medium text-2xl">{name}</h2>
                <h3 className="font-medium text-2xl">₹ {price}</h3>
                <h4 className="font-semibold sm:text-wrap">{category}</h4>
                <h5>Quantity of item - {stock}</h5>
                <p className="text-gray-600">{description}</p>
                <Cartbutton item={item} />
              </div>
            )
          })
        ) : (
          <p className="text-xl font-semibold text-red-500">No matching items found.</p>
        )}
      </div>
    </>
  )
}

export default Guestlist


