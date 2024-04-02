import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './router/Root';
import Home from './Components/Home/Home';

import Resister from './Components/Reister/Resister';
import Login from './Components/Login/Login';
import Provider from './Provider/Provider';
import PrivetRoute from './Components/Privet/PrivetRoute';
import Order from './Components/order/Order';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/resister',
        element:<Resister></Resister>
      },
      {
        path:'/order',
        element:<PrivetRoute><Order></Order></PrivetRoute>
      }
    ]
  }
]);











ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

   <Provider>
   <RouterProvider router={router} />
   </Provider>
  </React.StrictMode>,
)
