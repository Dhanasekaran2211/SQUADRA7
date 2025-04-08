/* ========== /src/pages/Homepage/Homepage.js ========== */
import React from 'react';
import HeroBanner from '../../components/Herobanner/Herobanner';
import About from '../../components/About/About';
import ProductPage from '../product/ProductPage';
import './homepage.css';
import ServicesShowcase from '../../components/servicecard/ServicesShowcase';
import PortfolioShowcase from '../../components/portfolio/PortfolioShowcase';
import Chatbot from '../../components/chatbot/Chatbot';
import Testimonials from "../../components/testominiols/Testimonials"
// import Blog from '../../components/blog/Blog';
import Contact from '../../components/contact/Contact';
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/footer/Footer";
const Homepage = () => {
  return (
    <div className="homepage">
      <Navbar/>
      <HeroBanner />
      <About />
      <ServicesShowcase/>
      <PortfolioShowcase/>
      <Chatbot/>
      <ProductPage/>
      <Testimonials/>
      {/* <Blog/> */}
      <Contact/>
      <Footer/>
    </div>
  );
};

export default Homepage;
