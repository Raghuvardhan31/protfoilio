import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <section className="contact-section">
      <h2 className="contact-title">Contact Me</h2>
      <p className="contact-subtitle">
        Let’s connect and build something amazing together.
      </p>

      <div className="contact-container">
        <div className="contact-info centered">
          <h3>Get In Touch</h3>

          <p>
            <strong>Email:</strong>{" "}
            <a
              href="mailto:bonjuriraghuvardhan@gmail.com"
              className="contact-link"
            >
              bonjuriraghuvardhan@gmail.com
            </a>
          </p>

          <p>
            <strong>Phone:</strong>{" "}
            <a href="tel:+918309474687" className="contact-link">
              +91 8309474687
            </a>
          </p>

          <p>
            <strong>Location:</strong>{" "}
            <a
              href="https://www.google.com/maps/place/Hyderabad"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              Hyderabad, India
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
