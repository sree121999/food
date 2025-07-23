import Loginpage from "./pages/Loginpage";
import Router from "./routes/Router";
import { useEffect } from "react"



const App = () => {
    useEffect(() => {
  document.title = "food-delivery"
}, [])
    



  return (
    <>
 
   
      
      <Router />
      
    </>
  )
}

export default App;



