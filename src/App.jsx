import Loginpage from "./pages/Loginpage";
import Router from "./routes/Router";
import { Helmet, HelmetProvider } from 'react-helmet-async';


const App = () => {
  return (
    <>
   <HelmetProvider>
    <Helmet>
      <title>Food Delivery</title>
    </Helmet>
      
      <Router />
      </HelmetProvider>
    </>
  )
}

export default App;
