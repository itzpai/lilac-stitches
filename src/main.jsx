import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router'
import { CartProvider } from "./context/CartContext";
import './index.css'
import Layout from './components/Layout'
import Home from './pages/Home'
import Shop from './pages/Shop'
import ProductDetails from './pages/ProductDetails'
import Error from './pages/Error'
import AboutUs from './pages/AboutUs'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout';
import Faq from './pages/Faq'

const router = createBrowserRouter([{
  path: "/",
  element: <Layout />,
  errorElement: <Error />,
  children: [{
    index: true,
    element: <Home />
  },
  {
    path: "shop",
    element: <Shop />
  },
  {
    path: "product/:id",
    element: <ProductDetails />
  },
  {
    path: "aboutus",
    element: <AboutUs />
  },
  {
    path: "cart",
    element: <Cart />
  },
  {
    path: "checkout",
    element: <Checkout />
  },
  {
    path: "faqs",
    element: <Faq />
  }
  ]
}])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  </StrictMode>,
)
