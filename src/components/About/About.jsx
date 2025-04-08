import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./about.css";
// import img1 from "../../assetes/sqback.jpeg";
import img2 from "../../assetes/sqdes.jpeg";
// import img3 from "../../assetes/sqdev.jpeg";
// import img4 from "../../assetes/squix.jpeg";

const images = [img2];
// , img2, img3, img4
const About = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // 🔥 Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 8000); // 👈 3 sec ku oru murai change aagum

    return () => clearInterval(interval); // ❌ Cleanup when unmount
  }, []);
  return (
    <div className="about-container">
      {/* Left Side - About Content */}
      <div className="about-content">
        <motion.h1
          className="about-title"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          About Squadra
        </motion.h1>
        <p className="about-description">
          Squadra is a leading company specializing in AI-powered solutions, innovative designs, and top-tier development services. Our mission is to transform the digital landscape with cutting-edge technology and creativity.
        </p>
      </div>

      {/* Right Side - Image Slider with Rotation */}
      <div className="slider-container">
        <motion.div 
          className="slider-wrapper"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 8, ease: "linear" }}  // Infinite Rotation
        >
          <AnimatePresence>
            <motion.img
              key={currentIndex}
              src={images[currentIndex]}
              alt="Squadra Project"
              className="slider-image"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.3 }}
            />
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
