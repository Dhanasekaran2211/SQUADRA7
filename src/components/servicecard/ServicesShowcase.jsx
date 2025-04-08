import React from "react";
import "./servicesshowcase.css";

const services = [
  { id: 1, name: "Web Development", desc: "Building high-performance websites.", icon: "🌐" },
  // { id: 2, name: "Mobile App Development", desc: "Creating seamless mobile experiences.", icon: "📱" },
  // { id: 3, name: "AI & Chatbot Solutions", desc: "Innovative AI-driven applications.", icon: "🤖" },
  { id: 4, name: "UI/UX Design", desc: "Crafting user-centric designs.", icon: "🎨" },
  { id: 5, name: "SEO & Digital Marketing", desc: "Boosting online presence effectively.", icon: "📈" },
  // { id: 6, name: "Cloud Solutions", desc: "Secure cloud-based systems.", icon: "☁️" },
  { id: 7, name: "Customized T-SHIRT'S ", desc: "Scalable online stores for businesses.", icon: "🛒" },
  { id: 8, name: "Printing & Sales", desc: "Tailor-made solutions for enterprises.", icon: "💻" }
];

const ServicesShowcase = () => {
  return (
    <div className="services-container">
      <h2 className="services-title">Our Services</h2>
      <p className="services-subtitle">Empowering businesses with top-tier digital solutions.</p>
      <div className="marquee-wrapper">
        <div className="marquee">
          {/* Duplication for infinite scrolling effect */}
          {[...services, ...services].map((service, index) => (
            <div key={index} className="service-card">
              <span className="service-icon">{service.icon}</span>
              <h3 className="service-name">{service.name}</h3>
              <p className="service-desc">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesShowcase;
