import React, { useState, useEffect } from "react";
import "./testimonials.css";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    feedback: "Squadra transformed our digital presence! Highly recommended.",
    rating: 5,
    image: "https://imgs.search.brave.com/eboIGGhRGrpYymLj-S50ap6ji_Xf2eA3m2W_paMq4QY/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTI0/NDY1NDg0OC9waG90/by90b3BzaG90LXJ1/c3NpYW4tcHJlc2lk/ZW50LXZsYWRpbWly/LXB1dGluLWNvbmdy/YXR1bGF0ZXMtaW50/ZXJpb3ItbWluaXN0/cnktZW1wbG95ZWVz/LWFuZC5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9RW1hajZJ/amZHVUtQNU51bW5L/bi1kOE52R0FFMkMz/QVg4bEVGNVF3OUd2/MD0",
  },
  {
    id: 2,
    name: "Jane Smith",
    feedback: "Amazing service and support! Our project was a success.",
    rating: 4,
    image: "https://imgs.search.brave.com/tYMzP7rUq3JBBAkz0wfkYX-d9cJE1K-i0rDEztAsrRI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy82/LzZlL0tpbV9Kb25n/LXVuX0FwcmlsXzIw/MTlfKGNyb3BwZWQp/LmpwZw",
  },
  {
    id: 3,
    name: "Michael Lee",
    feedback: "Professional team with outstanding creativity.",
    rating: 5,
    image: "https://imgs.search.brave.com/5d0IQh3uf_NlK5zZOqF26n-ykynexSxTFyuPg-guGmo/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9m/L2Y0L1VTQUZBX0hv/c3RzX0Vsb25fTXVz/a18oSW1hZ2VfMV9v/Zl8xNylfKGNyb3Bw/ZWQpLmpwZw",
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
