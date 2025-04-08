import React from "react";
import "./ServicesShowcase.css";

const services = [
  { id: 1, name: "Web Development", desc: "Building high-performance websites.", icon: "🌐" },
  { id: 2, name: "Mobile App Development", desc: "Creating seamless mobile experiences.", icon: "📱" },
  { id: 3, name: "AI & Chatbot Solutions", desc: "Innovative AI-driven applications.", icon: "🤖" },
  { id: 4, name: "UI/UX Design", desc: "Crafting user-centric designs.", icon: "🎨" },
  { id: 5, name: "SEO & Digital Marketing", desc: "Boosting online presence effectively.", icon: "📈" },
  { id: 6, name: "E-commerce Solutions", desc: "Scalable online stores for businesses.", icon: "🛒" }
];

const ServicesShowcase = () => {
  return (
    <div className="services-container">
      <h2 className="services-title">Our Services</h2>
      <p className="services-subtitle">Empowering businesses with top-tier digital solutions.</p>
      <div className="services-grid">
        {services.map(service => (
          <div key={service.id} className="service-card">
            <span className="service-icon">{service.icon}</span>
            <h3 className="service-name">{service.name}</h3>
            <p className="service-desc">{service.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesShowcase;
