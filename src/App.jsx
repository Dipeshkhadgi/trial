import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Footer from './components/Footer/Footer'
import LoginPopup from './components/LoginPopup/LoginPopup'
import Navbar from './components/Navbar/Navbar'
import Cart from './pages/Cart/Cart'
import Home from './pages/Home/Home'
import MyOrders from './pages/MyOrders/MyOrders'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Verify from './pages/Verify/Verify'
import AboutUs from './pages/aboutUs/AboutUs'
import DeliveryPage from './pages/deliveryPage/DeliveryPage'
import OurServices from './pages/ourServices/OurServices'
import PageNotFound from './pages/pageNotFound/PageNotFound'
import PrivacyPolicy from './pages/privacyPolicy/PrivacyPolicy'
import ProductDetails from './pages/productDetails/ProductDetails'

const App = () => {

  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      <ToastContainer />
      {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : <></>}
      <div className='app'>
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about-us' element={<AboutUs />} />

          <Route path='/cart' element={<Cart />} />
          <Route path='/order' element={<PlaceOrder />} />
          <Route path='/myorders' element={<MyOrders />} />
          <Route path='/verify' element={<Verify />} />
          <Route path='/privacy-policy' element={<PrivacyPolicy />} />
          <Route path='/delivery' element={<DeliveryPage />} />
          <Route path='/product-details' element={<ProductDetails />} />
          <Route path='/services' element={<OurServices />} />


          <Route path='*' element={<PageNotFound />} />



        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App
