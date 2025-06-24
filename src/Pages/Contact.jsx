import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      message: formData.message,
      title: "New Contact Form Submission",
      time: new Date().toLocaleString(),
    };

    emailjs
      .send(
        "service_gmail123",     
        "template_cpu1uka",        
        templateParams,
        "uWulyyX6hPQ-s4YPN"        
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setSubmitted(true);
          setError(null);
        },
        (err) => {
          console.error("FAILED...", err);
          setError("Oops! Something went wrong. Please try again later.");
        }
      );
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

            {error && <p className="error-message">{error}</p>}
          </form>
        ) : (
          <div className="thank-you-message">
            <h3>🎉 Thank you, {formData.name}!</h3>
            <p>Your message has been sent successfully.</p>
            <p>I will get back to you at <strong>{formData.email}</strong> as soon as possible.</p>
            <button
              className="back-btn"
              onClick={() => {
                setSubmitted(false);
                setFormData({
                  name: "",
                  email: "",
                  phone: "",
                  message: "",
                });
              }}
            >
              Send Another Message
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Contact;
