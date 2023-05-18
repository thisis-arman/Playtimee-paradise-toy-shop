import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {

  RouterProvider,
} from "react-router-dom";
import router from './Components/Routes/Router';
import AuthProvider from './Components/Provider/AuthProvider';


ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='md:px-20 px-4 '>
  <React.StrictMode>
 <AuthProvider>
    <RouterProvider router={router} ></RouterProvider>
</AuthProvider>
  </React.StrictMode>
  </div>
)
