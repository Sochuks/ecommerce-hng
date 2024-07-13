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
import Confirm from './pages/Confirm';
import ProductDetails from './pages/ProductDetails';

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
          path: "/product/:id",
          element: <ProductDetails />
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
    {
      path: "/confirm",
      element: <Confirm />
    }
   
  ]);



  return (
    <>
        <RouterProvider router={router} />
    </>
  )
}

export default App
