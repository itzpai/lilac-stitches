import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router'
import { CartProvider } from "./context/CartContext";
import { WishlistProvider } from './context/WishlistContext';
import './index.css'
import Layout from './components/Layout'
import Home from './pages/Home'
import Shop from './pages/Shop'
import ProductDetails from './pages/ProductDetails'
import Error from './pages/Error'
import AboutUs from './pages/AboutUs'
import Faq from './pages/Faq'
import Wishlist from './pages/Wishlist'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout';

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
    path: "faqs",
    element: <Faq />
  },
  {
    path: "wishlist",
    element: <Wishlist />
  },
  {
    path: "cart",
    element: <Cart />
  },
  {
    path: "checkout",
    element: <Checkout />
  }
  ]
}])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <WishlistProvider>
      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>
    </WishlistProvider>
  </StrictMode>,
)
