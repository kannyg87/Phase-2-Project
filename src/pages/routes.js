import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./ErrorPage";
import Home from "../pages/Home";
import Login from "./Login";
import App from "./App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/Product",
    element: <App />,
    errorElement: <ErrorPage />,
  },
]);

export default router;
