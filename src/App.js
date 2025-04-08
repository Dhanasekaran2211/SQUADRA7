/* ========== /src/App.js ========== */
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "../src/pages/Homepage/Homepage";
import Herobanner from "../src/components/Herobanner/Herobanner";
import About from "../src/components/About/About";
import ProductPage from "../src/pages/product/ProductPage";
import ProductDetails from "../src/pages/product/ProductDetails";
import ServicesShowcase from "../src/components/servicecard/ServicesShowcase";
import Blog from "../src/components/blog/Blog";
import Testimonials from "../src/components/testominiols/Testimonials";
import Contact from "../src/components/contact/Contact";
import PortfolioShowcase from "../src/components/portfolio/PortfolioShowcase"

const App = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Router>
      <div className={`App ${scrolled ? "scrolled" : ""}`}>
<Homepage/>
        <Routes>
          {/* <Route path="/" element={<Homepage />} /> */}
          <Route path="/herobanner" element={<Herobanner />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/services" element={<ServicesShowcase />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<PortfolioShowcase />} /> {/* if you use */}
        </Routes>

      </div>
    </Router>
  );
};

export default App;
