import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router'
import './index.css'
import Layout from './components/Layout'
import Home from './pages/Home'
import Shop from './pages/Shop'
import ProductDetails from './pages/ProductDetails'
import Error from './pages/Error'
import AboutUs from './pages/AboutUs'
import ContactUs from './pages/ContactUs'
import Cart from './pages/Cart'
import PrivacyPolicy from './pages/PrivacyPolicy'
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
    path: "contactus",
    element: <ContactUs />
  },
  {
    path: "cart",
    element: <Cart />
  },
  {
    path: "privacypolicy",
    element: <PrivacyPolicy />
  },
  {
    path: "faqs",
    element: <Faq />
  }
  ]
}])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
