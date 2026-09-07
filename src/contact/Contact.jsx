import React from 'react';
import './Contact.css';

export default function Contact() {
  const email = "alghieth.melhem@gmail.com";
  const phone = "+4917674025502";
  const whatsappUrl = `https://wa.me/4917674025502?text=Hello%20Al%20Ghieth,%20I%20saw%20your%20portfolio...`;

  return (
    <section id="contact" className="contact-section" data-aos="fade-up">
      <div className="contact-container">
        {/* ترويسة القسم */}
        <span className="contact-overline">04. What’s Next?</span>
        <h2 className="contact-title">Get In Touch</h2>

        <p className="contact-description">
          Whether you have a project in mind, an opportunity to discuss, or just 
          want to say hi, my inbox is always open. I’ll do my best to get back 
          to you promptly!
        </p>

        {/* أزرار الإجراء السريع (Action CTAs) */}
        <div className="contact-cta-group">
          {/* زر البريد الإلكتروني */}
          <a href={`mailto:${email}`} className="contact-btn email-btn">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
            Say Hello
          </a>

          {/* زر الواتساب المباشر */}
          <a href={whatsappUrl} target="_blank" rel="noreferrer" className="contact-btn whatsapp-btn">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
            </svg>
            Chat on WhatsApp
          </a>
        </div>

        {/* بطاقات قنوات التواصل المباشرة (Quick Info Grid) */}
        <div className="contact-details-grid">
          <div className="contact-info-card">
            <span className="card-label">Direct Email</span>
            <a href={`mailto:${email}`} className="card-value">{email}</a>
          </div>

          <div className="contact-info-card">
            <span className="card-label">Direct Line</span>
            <a href={`tel:${phone}`} className="card-value">+49 176 74025502</a>
          </div>

          <div className="contact-info-card">
            <span className="card-label">Location</span>
            <span className="card-value">Hessen, Germany</span>
          </div>
        </div>
      </div>
    </section>
  );
}