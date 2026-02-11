import React, { useState } from 'react';
import './contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    institutionName: '',
    contactPerson: '',
    phone: '',
    email: '',
    requirement: ''
  });

  const [status, setStatus] = useState({
    submitted: false,
    type: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.institutionName || !formData.contactPerson || !formData.phone || !formData.email || !formData.requirement) {
      setStatus({
        submitted: true,
        type: 'error',
        message: 'Please fill in all fields.'
      });
      setTimeout(() => setStatus({ ...status, submitted: false }), 3000);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus({
        submitted: true,
        type: 'error',
        message: 'Please enter a valid email address.'
      });
      setTimeout(() => setStatus({ ...status, submitted: false }), 3000);
      return;
    }

    try {
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus({
          submitted: true,
          type: 'success',
          message: 'Thank you! We will contact you soon with your free consultation.'
        });
        setFormData({
          institutionName: '',
          contactPerson: '',
          phone: '',
          email: '',
          requirement: ''
        });
        setTimeout(() => setStatus({ ...status, submitted: false }), 3000);
      } else {
        setStatus({
          submitted: true,
          type: 'error',
          message: 'Failed to send message. Please try again.'
        });
        setTimeout(() => setStatus({ ...status, submitted: false }), 3000);
      }
    } catch (error) {
      console.error('Error:', error);
      setStatus({
        submitted: true,
        type: 'error',
        message: 'An error occurred. Please try again later.'
      });
      setTimeout(() => setStatus({ ...status, submitted: false }), 3000);
    }
  };

  return (
    <div className="contact-container">
      <div className="contact-header">
        <h1>Let's Start Your Journey</h1>
        <p>Ready to transform your business? Get in touch with our expert team today for a personalized consultation and discover how we can help you achieve your goals.</p>
      </div>

      <div className="contact-content">
        {/* Left Side - Contact Information */}
        <div className="contact-info">
          <div className="info-card">
            <h2>Get In Touch</h2>

            <div className="info-item">
              <div className="info-icon">📧</div>
              <div className="info-text">
                <h3>Email Address</h3>
                <p>
                  <a href="mailto:contact@chesswave.com">
                    contact@chesswave.com
                  </a>
                </p>
                <p className="sub-text">Response within 24 hours</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">📱</div>
              <div className="info-text">
                <h3>Phone Number</h3>
                <p>
                  <a href="tel:+18005551234">
                    +1 (800) 555-1234
                  </a>
                </p>
                <p className="sub-text">Mon - Fri, 9AM - 6PM EST</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">🏢</div>
              <div className="info-text">
                <h3>Office Location</h3>
                <p>ChessWave Solutions Inc.</p>
                <p className="sub-text">San Francisco, California</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">⏰</div>
              <div className="info-text">
                <h3>Business Hours</h3>
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p className="sub-text">Weekend: Available for urgent matters</p>
              </div>
            </div>
          </div>

          <div className="trust-box">
            <div className="trust-header">
              <span className="trust-icon">⭐</span>
              <h3>Why Choose ChessWave?</h3>
            </div>
            <ul className="trust-list">
              <li>✓ 10+ years of industry experience</li>
              <li>✓ 500+ successful projects delivered</li>
              <li>✓ 99.9% client satisfaction rate</li>
              <li>✓ Dedicated support team</li>
              <li>✓ Custom solutions for your needs</li>
            </ul>
            <p className="cta-text">Start your <span className="highlight">free consultation</span> today!</p>
          </div>

          <div className="social-section">
            <p className="social-title">Connect With Us</p>
            <div className="social-links">
              <a href="https://linkedin.com/company/chesswave" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                in
              </a>
              <a href="https://github.com/chesswave" target="_blank" rel="noopener noreferrer" title="GitHub">
                🔗
              </a>
              <a href="https://twitter.com/chesswave" target="_blank" rel="noopener noreferrer" title="Twitter">
                𝕏
              </a>
              <a href="https://facebook.com/chesswave" target="_blank" rel="noopener noreferrer" title="Facebook">
                f
              </a>
            </div>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-header">
            <h3>Request Free Consultation</h3>
            <p>Fill out the form below and our team will contact you within 24 hours.</p>
          </div>

          {status.submitted && (
            <div className={`${status.type}-message`}>
              {status.message}
            </div>
          )}

          <div className="form-group">
            <label htmlFor="institutionName">Company Name *</label>
            <input
              type="text"
              id="institutionName"
              name="institutionName"
              value={formData.institutionName}
              onChange={handleChange}
              placeholder="e.g., ABC Corporation"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="contactPerson">Full Name *</label>
            <input
              type="text"
              id="contactPerson"
              name="contactPerson"
              value={formData.contactPerson}
              onChange={handleChange}
              placeholder="Your full name"
              required
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="email">Email Address *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone Number *</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+1 (123) 456-7890"
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="requirement">Project Details *</label>
            <textarea
              id="requirement"
              name="requirement"
              value={formData.requirement}
              onChange={handleChange}
              placeholder="Tell us about your project, budget, timeline, and what you're looking to achieve..."
              required
            ></textarea>
          </div>

          <button type="submit" className="submit-btn">
            🚀 Request Free Consultation
          </button>

          <p className="form-note">
            We respect your privacy. Your information is secure and confidential.
          </p>

          <div className="form-benefits">
            <p className="benefits-title">What You'll Get:</p>
            <div className="benefits-grid">
              <div className="benefit-item">
                <span className="benefit-icon">📋</span>
                <span>Detailed Assessment</span>
              </div>
              <div className="benefit-item">
                <span className="benefit-icon">💡</span>
                <span>Custom Strategy</span>
              </div>
              <div className="benefit-item">
                <span className="benefit-icon">💰</span>
                <span>Transparent Pricing</span>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
