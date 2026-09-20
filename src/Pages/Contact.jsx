import React, { useState } from 'react';
import '../Styles/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for reaching out to Sparktec Locomotives! We will contact you shortly.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <div className="contact-container">
      {/* Header */}
      <div className="contact-header">
        <h1>Contact Us</h1>
        <p>Get in touch with our team for locomotive spare parts, technical support, or maintenance services.</p>
      </div>

      {/* Main Grid Layout */}
      <div className="contact-grid">
        
        {/* Left Column: Business Info */}
        <div className="contact-info-card">
          <h2 className="company-title">Sparktec Locomotives</h2>
          <div className="proprietor-tag">Proprietor: Rajeshkumar </div>

          <div className="info-item">
            <span className="info-icon">📞</span>
            <div className="info-content">
              <h4>Phone / Mobile</h4>
              <p>
                <a href="tel:+917010248952">+91-7010248952</a> / <a href="tel:+917845908952">+91-7845908952</a>
              </p>
            </div>
          </div>

          <div className="info-item">
            <span className="info-icon">✉️</span>
            <div className="info-content">
              <h4>Email</h4>
              <p>
                <a href="mailto:sparktec.sales@gmail.com">sparktec.sales@gmail.com</a>
              </p>
            </div>
          </div>

          <div className="info-item">
            <span className="info-icon">📍</span>
            <div className="info-content">
              <h4>Address</h4>
              <p>
                T.V.S Complex, Shop No.3, Ground Floor,<br />
                Karikalan Street and Agaramthen Main Road Junction,<br />
                Secretariat Colony, Padhuvanchery,<br />
                Chennai - 600126[cite: 1].
              </p>
            </div>
          </div>

          
        </div>

        {/* Right Column: Inquiry Form */}
        <div className="contact-form-card">
          <h2>Send Us a Message</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Full Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email address"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your contact number"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message / Requirement *</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                placeholder="Specify required spare parts or maintenance requirements..."
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default Contact;