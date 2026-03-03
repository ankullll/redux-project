import { HomePage } from "./pages/HomePage"
import {NavBar} from "./components/Navbar";
import MainRoutes from "./routes/MainRoutes";


const App = () => {
 
  
  return (
    <div className="min-h-screen w-screen bg-gray-800 text-white">
      <NavBar/>
      <MainRoutes/>
      
    
    </div>
  )
}

export default App

