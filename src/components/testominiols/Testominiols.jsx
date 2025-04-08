import React, { useState, useEffect } from "react";
import "./Testimonials.css";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    feedback: "Squadra transformed our digital presence! Highly recommended.",
    rating: 5,
    image: "https://via.placeholder.com/80",
  },
  {
    id: 2,
    name: "Jane Smith",
    feedback: "Amazing service and support! Our project was a success.",
    rating: 4,
    image: "https://via.placeholder.com/80",
  },
  {
    id: 3,
    name: "Michael Lee",
    feedback: "Professional team with outstanding creativity.",
    rating: 5,
    image: "https://via.placeholder.com/80",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="testimonials-container">
      <h2 className="title">What Our Clients Say</h2>
      <div className="testimonial-card">
        <img src={testimonials[currentIndex].image} alt={testimonials[currentIndex].name} className="client-image" />
        <p className="feedback">"{testimonials[currentIndex].feedback}"</p>
        <div className="stars">
          {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
            <FaStar key={i} className="star" />
          ))}
        </div>
        <h4 className="client-name">- {testimonials[currentIndex].name}</h4>
      </div>
    </div>
  );
};

export default Testimonials;
