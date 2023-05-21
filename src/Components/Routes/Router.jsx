import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home";
import Blogs from "../Pages/Blogs/Blogs";
import AddToy from "../Pages/AddToy/AddToy";
import MyToys from "../Pages/MyToys/MyToys";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import ProductDetails from "../Pages/Home/HomeCompo/ProductDetails";
import ProductsCard from "../Pages/Home/HomeCompo/Products";
import AllToy from "../Pages/AllToys/AllToy";
import ToyDetail from "../Pages/AllToys/ToyDetail";
import PrivateRoute from "./PrivateRoute";
import UpdateToy from "../Pages/MyToys/UpdateToy";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products/:id",
        element: (
          <PrivateRoute>
            <ProductDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://playtime-paradise.vercel.app/toyproduct/${params.id}`),
      },
      {
        path: "/shop/toy/:id",
        element: (
          <PrivateRoute>
            <ToyDetail />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://playtime-paradise.vercel.app/toyproduct/${params.id}`),
      },
      {
        path: "/shop",
        element: <AllToy />,
        loader: () => fetch("https://playtime-paradise.vercel.app/toyproduct"),
      },
      {
        path: "/update/:id",
        element: <UpdateToy />,
        loader: ({ params }) =>
          fetch(`https://playtime-paradise.vercel.app/mytoys/${params.id}`),
      },
      {
        path: "/blog",
        element: <Blogs />,
      },
      {
        path: "/create",
        element: <AddToy />,
      },
      {
        path: "/mytoys",
        element: <MyToys />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
]);

export default router;
