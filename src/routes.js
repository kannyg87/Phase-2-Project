
import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import Login from "./pages/Login";


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
  // {
  //   path: "/profile/:id",
  //   element: <UserProfile />,
  //   errorElement: <ErrorPage />
  // }
 ])

 export default router