/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Home from "../pages/Home/Home";
import ErrorPage from "./../pages/ErrorPage/ErrorPage";
import PrivateRoute from "./PrivateRoute";
import Main from "../Layout/Main";
import Dashboard from "../Layout/Dashboard";
import Admin from "../pages/Dashboard/Admin";
import Instructors from './../pages/Instructors/Instructors';
import Classes from "../pages/Classes/Classes";
import Instructor from "../pages/Dashboard/Instructor";
import Student from "../pages/Dashboard/Student";



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
      {
        path: "instructors",
        element: <Instructors></Instructors>,
      },
      // {
      //   path: "classes",
      //   element: <Classes></Classes>,
      // },
      {
        path: "dashboard",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "classes",
        element: (
          <PrivateRoute>
           <Classes></Classes>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "admin",
        element:<Admin></Admin>
      },
      {
        path: "instructor",
        element:<Instructor></Instructor>
      },
      {
        path: "student",
        element:<Student></Student>
      },
    ]
  }
]);

export default router;