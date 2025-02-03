import React, { useState } from "react";
import Header from "./components/Header";
import Carousel from "./components/Carousel";
import About from "./components/About";
import Services from "./components/Service";
import Fertility from "./components/Fertility";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
// Header Component// Navigation Component
// Carousel Component
// About Section Component
// Services Section Component// Fertility Section Component// Blog Section Component// Contact Section Component// Footer Component// Main App Component
const App = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Carousel />
        <About />
        <Services />
        <Fertility />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
