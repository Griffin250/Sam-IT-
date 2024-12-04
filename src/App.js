import React from "react";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import ContactForm from "./components/ContactForm";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import LoginSignup from "./components/Auth/LoginSignup";
import Chatbot from "../src/components/Layout/Chatbot";
import NotFound from "./pages/NotFound";
import AboutUs from "./pages/AboutUs";
import BlogPosts from "./pages/BlogPost";

const App = () => {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
};

const AppContent = () => {
  const location = useLocation();
  const hideFooterOnLoginPage = location.pathname === "/loginSignup";
  const hideNavBarOnLoginPage = location.pathname ==="/loginSignup"
  return (
    <div>
      {!hideNavBarOnLoginPage && <Navbar />}
      <Chatbot />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/loginSignup" element={<LoginSignup />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/contactForm" element={<ContactForm />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/blogPost" element={<BlogPosts/>}/>
      </Routes>
      {!hideFooterOnLoginPage && <Footer />}
    </div>
  );
};

export default App;
