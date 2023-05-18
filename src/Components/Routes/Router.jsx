import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home";
import Blogs from "../Pages/Blogs/Blogs";
import AddToy from "../Pages/AddToy/AddToy";
import MyToys from "../Pages/MyToys/MyToys";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      errorElement:<ErrorPage/>,
      children:[
        {
            path:'/',
            element:<Home/>
        },
        {
            path:'/blog',
            element:<Blogs/>
        },
        {
            path:'/create',
            element:<AddToy/>
        },
        {
            path:'/mytoys',
            element:<MyToys/>
        },
        {
            path:'/login',
            element:<Login/>
        },
        {
            path:'register',
            element:<Register/>
        }
      ]
    },
  ]);


  export default router