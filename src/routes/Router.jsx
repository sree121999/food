import { BrowserRouter,Routes, Route } from "react-router-dom"
import Loginpage from "../pages/Loginpage"
import Dashboard from "../pages/Dashboard"
import Home from "../pages/Home"
import Adminroute from "./Adminroute"
import Guestroute from "./Guestroute"
import About from "../pages/About"
import Contact from "../pages/Contact"
import Addform from "../componants/Addform"
import Cart from "../pages/Cart"
import Editpage from "../pages/Editpage"
import Aboutad from "../pages/Aboutad"
import Contactad from "../pages/Contactadmin"
import Contactadmin from "../pages/Contactadmin"

const Router=()=>{
    return(
        <>
        
        <Routes>
            <Route path='/' element={<Loginpage/>}></Route>
            
            <Route path='/Dashboard' element={
            <Adminroute>
            <Dashboard/>
            </Adminroute>}>

            </Route>

             <Route path='/Addform' element={
            <Adminroute>
            <Addform/>
            </Adminroute>}>

            </Route>


           <Route path="/Editpage/:id" element={<Adminroute><Editpage /></Adminroute>} >

            </Route>

             <Route path='/Aboutad' element={
            <Adminroute>
            <Aboutad/>
            </Adminroute>}>

            </Route>

             <Route path='/Contactadmin' element={
            <Adminroute>
            <Contactadmin/>
            </Adminroute>}>

            </Route>








            <Route path='/Home'element={
                <Guestroute>
                <Home/>
                </Guestroute>
                }>
            </Route>

            <Route path='/About' element={
                <Guestroute>
                    <About/>
                </Guestroute>
            }></Route>

              <Route path='/Contact' element={
                <Guestroute>
                    <Contact/>
                </Guestroute>
            }></Route>




<Route path='/Cart' element={
                <Guestroute>
                    <Cart/>
                </Guestroute>
            }></Route>
            
            

            

        </Routes>
            

        


        
        </>

    )
}
export default Router