import React, { useState } from "react";
import "./contact.css";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const { name, email, message } = formData;
    if (!name || !email || !message) {
      toast.error("Please fill all the fields.");
      return false;
    }
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email.");
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setLoading(true);

    emailjs
      .send(
        "service_eww96fw",
        "template_xnk9jrb",
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        "tLhH_1L-cYj3tyKsj"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setSuccess(true);
          toast.success("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        },
        (err) => {
          console.error("FAILED...", err);
          toast.error("Failed to send message. Try again.");
        }
      )
      .finally(() => {
        setLoading(false);
        setTimeout(() => setSuccess(false), 4000);
      });
  };

  return (
    <div className="contact-container">
      <h2 style={{ color: "#facc15" }}>Contact Us</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit" disabled={loading}>
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>

      {/* ✅ Animated Success Message */}
      {success && (
        <p className="success-message animate-fade-in">
          ✅ Thank you! Mail sent successfully.
        </p>
      )}

      <div className="map-container">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d244.7613258578219!2d77.0190632!3d11.0250268!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba9699e51d7b463%3A0x1ff4b26b50fca06d!2sJJ%20HI-%20TECH%20WEB%20SOLUTIONS!5e0!3m2!1sen!2sin!4v1743941601896!5m2!1sen!2sin"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default Contact;
