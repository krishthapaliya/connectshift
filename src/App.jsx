import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/home/Navbar";
import Home from "./components/home/Home";
import Features from "./components/home/Features";
import Howitworks from "./components/home/Howitworks";
import Contactus from "./components/home/Contactus";
import Pricing from "./components/home/Pricing";
import Signin from "./components/home/Signin";
import Startfree from "./components/home/Startfree";
import Footer from "./components/home/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Features" element={<Features />} />
          <Route path="/Howitworks" element={<Howitworks />} />
          <Route path="/Pricing" element={<Pricing />} />
          <Route path="/Contactus" element={<Contactus />} />
          <Route path="/Signin" element={<Signin />} />
          <Route path="/Startfree" element={<Startfree />} />
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
  );
};

export default App;
