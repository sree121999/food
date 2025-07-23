







import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import Searchbar from "./Searchbar"

const Navsearch = () => {
  const { user } = useSelector((state) => state.auth)
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      
      <div className="bg-amber-500 text-white h-24 flex items-center justify-between px-7 space-x-4">
        
        <h3 className="lg:text-3xl md:text-2xl sm:text-sm font-medium whitespace-nowrap">
          Hello, {user?.username || "guest"}!
        </h3>

        
        <div className="hidden md:block w-1/3">
          <Searchbar />
        </div>

        
        <div className="hidden sm:flex space-x-5 text-lg whitespace-nowrap">
          <Link to="/Home">Home</Link>
          <Link to="/Cart">Order</Link>
          <Link to="/About">About</Link>
          <Link to="/Contact">Contact</Link>
        </div>

        
        <div className="sm:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      
      {menuOpen && (
        <div className="sm:hidden bg-amber-400 text-white px-7 py-4 flex flex-col space-y-4">
          <Searchbar />
          <Link to="/Home" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/Cart" onClick={() => setMenuOpen(false)}>Order</Link>
          <Link to="/About" onClick={() => setMenuOpen(false)}>About</Link>
          <Link to="/Contact" onClick={() => setMenuOpen(false)}>Contact</Link>
        </div>
      )}
    </>
  );
};

export default Navsearch;
