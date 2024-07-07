import { useState } from 'react'
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";

// Pages
import Product from './pages/Product';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';

// ui-components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  const Layout = () =>{
    return(
      <>
        <Navbar />
        <Outlet />
        <Footer />
      </>
      
    )
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children:[
        {
          path: "/",
          element: <Product />
        },
        {
          path: "/cart",
          element: <Cart />
        },
        {
          path: "/checkout",
          element: <Checkout />
        }
      ]
    },
   
  ]);



  return (
    <>
        <RouterProvider router={router} />
    </>
  )
}

export default App
