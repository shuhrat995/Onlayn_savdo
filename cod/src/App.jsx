import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

// Komponentlarni import qilish
import Nav from "./Components/navbar/Navbar";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import Faq from "./Components/Faq";
import FlashSales from "./Components/FlashSales";
import About from "./Components/About";
import Login from "./Components/Login";
import Order from "./Components/Order";
import Cart from './Components/Cart';
import Checkout from './Components/Checkout';
import Signup from "./Components/Signup";
import Wishlist from "./Components/Wishlist";
import ProductDetail from "./Components/ProductDetail";
import Reviews from './Components/Reviews';
import Account from "./Components/Account";
import Cancellations from "./Components/Cancellations";
import Terms from "./Components/Terms";
import PrivacyPolicy from "./Components/PrivacyPolicy";
import Footer from "./Components/Footer";

import './App.css';

function AppContent() {
  const location = useLocation();

  useEffect(() => {
    setTimeout(() => {
      window.dispatchEvent(new CustomEvent("codex:route-change", { detail: { path: location.pathname } }));
    }, 0);
  }, [location.pathname]);

  return (
    <>
      <Nav />

      {/* Sahifalar kontenti */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/about" element={<About />} />
        <Route path="/flash-sales" element={<FlashSales />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/orders" element={<Order />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/product-detail" element={<ProductDetail />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/account" element={<Account />} />
        <Route path="/cancellations" element={<Cancellations />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        {/* Agar foydalanuvchi noto'g'ri url kiritsa, Home'ga qaytaradi */}
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
