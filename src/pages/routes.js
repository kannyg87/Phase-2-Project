
import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./ErrorPage";
import Home from "./Home";
import Login from "./Login";
import MakeupDetails from './MakeupDetails'


 const router = createBrowserRouter([
  {
    path: "/",
    element: <Login/>,
    errorElement: <ErrorPage />
   },
   {
    path: "/login",
    element: <Login/>,
    errorElement: <ErrorPage />
  },
   {
    path: "/home",
    element: <Home />,
    errorElement: <ErrorPage />
  }, 
   {
    path: "/product/:id",
    element:  <MakeupDetails product={product} />,
    errorElement: <ErrorPage />
  }
 ])

 export default router