/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Home from "../pages/Home/Home";
import Blogs from "./../pages/Blogs/Blogs";
import ErrorPage from "./../pages/ErrorPage/ErrorPage";
import PrivateRoute from "./PrivateRoute";
import Main from "../Layout/Main";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      // {
      //   path: "blogs",
      //   element: <Blogs></Blogs>,
      // },
      {
        path: "blogs",
        element: (
          <PrivateRoute>
            <Blogs></Blogs>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;