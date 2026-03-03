import { Route, Routes } from "react-router-dom";
import  {HomePage}  from "../pages/HomePage";
import CollectionPage from "../pages/CollectionPage";


const MainRoutes = () => {
   
  return ( <Routes>
    <Route path='/' element={<HomePage/>}/>
    <Route path='/collection' element={<CollectionPage />} />
</Routes>
   
  )
}

export default MainRoutes

