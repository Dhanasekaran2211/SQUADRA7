/* ========== /src/components/Herobanner/Herobanner.js ========== */
import React, { useEffect, useRef, useState } from "react";
import HALO from "vanta/dist/vanta.halo.min";
import * as THREE from "three";
import "./herobanner.css";

const HeroBanner = () => {
  const [vantaEffect, setVantaEffect] = useState(null);
  const vantaRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect && vantaRef.current) {
      setVantaEffect(
        HALO({
          el: vantaRef.current,
          THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: true,
          mouseEase: true, 
          minHeight: 600.0,
          minWidth: 600.0,
          scale: 1.0,
          scaleMobile: 1.0,
          backgroundColor: 0x0a0a0a, // Updated to Luxury Black
          color: 0xfacc15, // Softer Gold
          amplitudeFactor: 5.0,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div ref={vantaRef} className="herobanner-container">
      <div className="herobanner-content">
        <h1 className="herobanner-title">Innovative Digital Design That Elevates Your Brand</h1>
        <p className="herobanner-subtitle">
        We craft stunning  impactful branding, and seamless digital experiences that make businesses thrive. Let’s create something extraordinary together
        </p>
        <button className="herobanner-btn">Start Your Work</button>
      </div>
    </div>
  );
};

export default HeroBanner;
