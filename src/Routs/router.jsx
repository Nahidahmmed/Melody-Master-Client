import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import InstructorsPage from "../pages/InstructorsPage/InstructorsPage";
import AllClasses from "../pages/AllClasses/AllClasses";
import Dashboard from "../Layout/Dashboard/Dashboard";
import MyCart from "../pages/Dashboard/MyCart";
import AllUsers from "../pages/Dashboard/AllUsers";
import AddClass from "../pages/Dashboard/AddClass";
import MyClasses from "../pages/Dashboard/MyClasses";
import ManageClass from "../pages/Dashboard/ManageClass";




export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/signUp',
        element: <SignUp></SignUp>
      },
      {
        path: '/instructors',
        element: <InstructorsPage></InstructorsPage>
      },
      {
        path: '/allClasses',
        element: <AllClasses></AllClasses>
      },
    ]
  },
  {
    path: '/dashboard',
    element:<Dashboard></Dashboard>,
    children: [
      {
        path: 'allUsers',
        element: <AllUsers></AllUsers>
      },
      {
        path: 'myCart',
        element: <MyCart></MyCart>
      },
      {
        path: 'addClass',
        element: <AddClass></AddClass>
      },
      {
        path: 'myClasses',
        element: <MyClasses></MyClasses>
      },
      {
        path: 'manageClass',
        element: <ManageClass></ManageClass>
      },
    ]
  },
]);


