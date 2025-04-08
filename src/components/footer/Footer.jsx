import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Location */}
        <div className="footer-section">
          <h4>📍 Our Location</h4>
          <p>Coimbatore, Tamil Nadu - 641001</p>
        </div>

        {/* Contact Info */}
        <div className="footer-section">
          <h4>📧 Contact</h4>
          <p>squadracreations@gmail.com</p>
          <p>+91 9566955195</p>
        </div>

        {/* Help & Support */}
        <div className="footer-section">
          <h4>❓ Help & Support</h4>
          <p>Help & FAQs</p>
          <p>Customer Support</p>
          <p>Order Tracking</p>
        </div>

        {/* Extra Activities */}
        <div className="footer-section">
          <h4>🎨 Extra Activities</h4>
          <p>Workshops</p>
          <p>Creative Sessions</p>
          <p>Community Events</p>
        </div>

        {/* Social Media */}
        <div className="footer-section">
          <h4>🌐 Follow Us</h4>
          <div className="social-icons">
            <a href="http://behance.net/squadra7" target="_blank" rel="noreferrer">Behance</a>
            <a href="https://www.instagram.com/squadra_7_" target="_blank" rel="noreferrer">Instagram</a>
            <a href="https://www.linkedin.com/company/106778929/" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </div>
      </div>

      <p className="footer-bottom">
        © {new Date().getFullYear()} Squadra Digital Studio. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
