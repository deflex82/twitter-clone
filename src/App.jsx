import Feed from "./components/Feed"
import Home from "./pages/Home"

import { createBrowserRouter,Route,createRoutesFromElements, RouterProvider } from "react-router-dom"
import Profile from "./components/Profile"



function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <>
      <Route path="/" element ={<Home/>}>
      <Route index element ={<Feed/>}>
        
      </Route>
      <Route path="/:profile" element={<Profile/>}/>

      </Route>
     
      </>
      
    
  
  ))
  

  return (
    <>
    <RouterProvider router ={router}>
      
    <Home/>

    </RouterProvider>
   

    </>
  )
}

export default App
