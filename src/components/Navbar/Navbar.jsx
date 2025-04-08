/* ========== /src/components/Navbar/Navbar.js ========== */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import sqlogo from "../../assetes/Asset 1.png"
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
    return (
    <div className={`navbar-container ${isOpen ? "open" : ""}`}>
       {/* <div className="top-label">Build Your Business With Us 🚀</div> */}
      <nav className="navbar">
        <div className="navbar-logo">
          <Link to="/"><img src={sqlogo} alt="Squadraa Logo" className="Sqlogo" /></Link>
        </div>

        <ul className={`nav-menu ${isOpen ? "active" : ""}`}>
          <li><Link to="/technology">Technology</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/portfolio">Portfolio</Link></li>
          <li><Link to="/career">Career</Link></li>
          <li><Link to="/blog">Blog</Link></li>
        </ul>
        <li className="get-in-touch">
            <Link to="/contact">Get in Touch</Link>
          </li>

        <div className="hamburger" onClick={toggleMenu}>
          {isOpen ? <FiX /> : <FiMenu />}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

