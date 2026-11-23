import NotFound from './components/NotFound';
import Home from './components/Home'
import Students from './components/Students';
import About from './components/About'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
function App() {
  const router=createBrowserRouter([{ path:'/', element:<Home/>},{path:'/students/:id',element:<Students/>},{path:'/about', element:<About/>},{path:'*', element:<NotFound/>}])
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App