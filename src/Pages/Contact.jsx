import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add your form submission logic (API call, email etc)
    setSubmitted(true);
  };

  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <h2 className="contact-title">Get In Touch</h2>
        <p className="contact-subtitle">
          I'm always looking for new opportunities, and my inbox is always open.
          Whether you have a question or just want to say hi, I'll try my best to
          get back to you!
        </p>

        {!submitted ? (
          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <label htmlFor="phone">Contact Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Enter your contact number"
              value={formData.phone}
              onChange={handleChange}
            />

            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              placeholder="Write your message here"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>

            <button type="submit" className="submit-btn">
              Submit
            </button>
          </form>
        ) : (
          <div className="thank-you-message">
            <h3>Thank you for reaching out!</h3>
            <p>I will get back to you as soon as possible.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Contact;
