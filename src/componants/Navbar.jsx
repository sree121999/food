
   




import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import { Menu, X } from "lucide-react"
import { useState } from "react"

const Navbar = () => {
  const { user } = useSelector((state) => state.auth)
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      
      <div className="bg-amber-500 text-white h-24 flex items-center justify-between px-7 py-8">
        <h3 className="text-3xl font-medium">Hello, {user.username}!</h3>

        
        <div className="hidden sm:flex space-x-5 text-lg">
          <Link to="/Home">Home</Link>
          <Link to="/Aboutad">About</Link>
          <Link to="/Contactadmin">Contact</Link>
        </div>

        
        <div className="sm:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      
      {isOpen && (
        <div className="bg-amber-400 text-white flex flex-col space-y-4 px-7 py-4 sm:hidden">
          <Link to="/Home" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/Aboutad" onClick={() => setIsOpen(false)}>About</Link>
          <Link to="/Contactadmin" onClick={() => setIsOpen(false)}>Contact</Link>
        </div>
      )}
    </>
  )
}

export default Navbar;
