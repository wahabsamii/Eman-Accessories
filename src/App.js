import './App.css';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Newcategory from './pages/Admin/Newcategory';
import AddProduct from './pages/Admin/AddProduct';
import Login from './pages/Auth/Login';
import Cart from './pages/Cart';
import Dashboard from './pages/Admin/Dashboard';
import AdminRoute from './components/Routes/AdminRoute';
import UpdateProduct from './pages/Admin/UpdateProduct';
import Products from './pages/Admin/Products';
import Users from './pages/Admin/Users';
import PrivateRoute from './components/Routes/Private';
import UserDashboard from './pages/user/UserDashboard';
import Orders from './pages/user/Orders';
import Profile from './pages/user/Profile';
import Search from './pages/user/Search';
import Footer from './components/Footer';
import AllOrders from './pages/Admin/AllOrders';
import Products2 from './pages/Products';
import ContactPage from './pages/ContactPage';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import About from './pages/About';
import Faqs from './pages/Faqs';
import Brands from './pages/Brands';
import ProductDetails from './pages/ProductDetails';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Signup from './pages/Auth/Signup';

const stripePromise = loadStripe("pk_test_51QeXtaLmes5qhXJ4liAZNGdq8oxxIlgbv1tVUgJJN8ONDT4YChCBA3qNs7gzPZBSVk27IsLc6FfXElFUKsJ7LWB000SGuK1gLm");
function AppContent() {
  const location = useLocation();
  const hideHeaderRoutes = ['/login']; 
  useEffect(() => {
  AOS.init({
    duration: 800,
    once: true,
  });
}, []);
  return (
    <>
      {!hideHeaderRoutes.includes(location.pathname) && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/search" element={<Search />} />
        <Route path="/products" element={<Products2 />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/faqs" element={<Faqs />} />
        <Route path="/brands" element={<Brands />} />
        <Route path="/product/:slug" element={<ProductDetails />} />

        {/* User Dashboard */}
        <Route path="/dashboard" element={<PrivateRoute />}>
          <Route path="user" element={<UserDashboard />} />
          <Route path="user/orders" element={<Orders />} />
          <Route path="user/profile" element={<Profile />} />
        </Route>

        {/* Admin Dashboard */}
        <Route path="/dashboard" element={<AdminRoute />}>
          <Route path="admin" element={<Dashboard />} />
          <Route path="admin/create-category" element={<Newcategory />} />
          <Route path="admin/create-product" element={<AddProduct />} />
          <Route path="admin/product/:slug" element={<UpdateProduct />} />
          <Route path="admin/products" element={<Products />} />
          <Route path="admin/users" element={<Users />} />
          <Route path='admin/all-orders' element={<AllOrders />}/>
        </Route>
      </Routes>
      <Footer/>
    </>
  );
}

function App() {
  return (
    <Elements stripe={stripePromise}>
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
    </Elements>
  );
}

export default App;
