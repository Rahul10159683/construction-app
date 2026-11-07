import React, { useState } from 'react';
import PageHero from '../components/common/PageHero';
import CtaBanner from '../components/home/CtaBanner';
import { faqData } from '../data/faqData';
import { MapPin, Phone, Mail, Clock, Send, ChevronDown, CheckCircle2, User } from 'lucide-react';

const ContactPage = ({ setActivePage, onOpenQuote }) => {
  const [openFaq, setOpenFaq] = useState(0);
  const [formSent, setFormSent] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSent(true);
  };

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="contact-page">
      <PageHero
        title="Contact Ramineni Constructions"
        subtitle="Schedule a consultation with our principal architects and project engineers to bring your vision to life."
        breadcrumb="Contact Us"
        onNavigateHome={() => {
          setActivePage('home');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      <section className="page-section">
        <div className="container">
          <div className="contact-layout-grid">
            {/* Left Column: Direct Info Cards */}
            <div>
              <span className="section-eyebrow">GET IN TOUCH</span>
              <h2 className="section-title">We'd Love to Hear From You</h2>
              <p style={{ color: '#475569', fontSize: '14.5px', lineHeight: '1.6', marginBottom: '28px' }}>
                Whether you have an upcoming residential villa, an investment commercial site, or an industrial warehousing expansion, our team provides consultation and initial site feasibility surveys.
              </p>

              <div className="contact-info-cards">
                <div className="contact-card">
                  <div className="contact-icon-wrap">
                    <MapPin size={22} />
                  </div>
                  <div>
                    <h4 className="contact-card-title">Corporate Headquarters</h4>
                    <p className="contact-card-text">
                      Plot 422, Road No. 36, Jubilee Hills,<br />
                      Hyderabad, Telangana 500033
                    </p>
                  </div>
                </div>

                <div className="contact-card">
                  <div className="contact-icon-wrap">
                    <User size={22} />
                  </div>
                  <div>
                    <h4 className="contact-card-title">Key Contact Person</h4>
                    <p className="contact-card-text">
                      <strong style={{ fontSize: '15px', color: '#0b1727' }}>Ramineni Krishna Prasad</strong><br />
                      Founder & Managing Director
                    </p>
                  </div>
                </div>

                <div className="contact-card">
                  <div className="contact-icon-wrap">
                    <Phone size={22} />
                  </div>
                  <div>
                    <h4 className="contact-card-title">Phone & WhatsApp</h4>
                    <p className="contact-card-text">
                      <strong>Direct Call:</strong> <a href="tel:+918374415339" style={{ color: 'inherit', textDecoration: 'none' }}>+91 83744 15339</a><br />
                      <strong>WhatsApp:</strong> <a href="https://wa.me/918374415339" target="_blank" rel="noopener noreferrer" style={{ color: '#d97706', textDecoration: 'none', fontWeight: '600' }}>+91 83744 15339</a>
                    </p>
                  </div>
                </div>

                <div className="contact-card">
                  <div className="contact-icon-wrap">
                    <Mail size={22} />
                  </div>
                  <div>
                    <h4 className="contact-card-title">Email Inquiries</h4>
                    <p className="contact-card-text">
                      info@ramineniconstructions.in<br />
                      projects@ramineniconstructions.in
                    </p>
                  </div>
                </div>

                <div className="contact-card">
                  <div className="contact-icon-wrap">
                    <Clock size={22} />
                  </div>
                  <div>
                    <h4 className="contact-card-title">Operating Hours</h4>
                    <p className="contact-card-text">
                      Monday – Saturday: 9:00 AM – 7:00 PM<br />
                      Sunday: Site Inspections by Appointment
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div>
              <div className="contact-form-card">
                <h3 style={{ fontSize: '22px', color: '#0b1727', margin: '0 0 6px 0' }}>
                  Send Us a Direct Message
                </h3>
                <p style={{ fontSize: '13.5px', color: '#64748b', margin: '0 0 24px 0' }}>
                  Our project director will reply within 4 business hours.
                </p>

                {formSent ? (
                  <div className="form-success-banner">
                    <CheckCircle2 size={24} color="#059669" />
                    <div>
                      <strong>Message Sent Successfully!</strong>
                      <p style={{ margin: '4px 0 0 0', fontSize: '13px' }}>
                        Thank you for reaching out, {formData.name}. Our Hyderabad project advisory desk has received your note and will call you at {formData.phone || 'your number'}.
                      </p>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="form-grid-2">
                      <div className="form-group">
                        <label className="form-label">Full Name *</label>
                        <input
                          type="text"
                          name="name"
                          required
                          placeholder="Your full name"
                          className="form-control"
                          value={formData.name}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="form-group">
                        <label className="form-label">Phone Number *</label>
                        <input
                          type="tel"
                          name="phone"
                          required
                          placeholder="+91 83744 15339"
                          className="form-control"
                          value={formData.phone}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className="form-grid-2">
                      <div className="form-group">
                        <label className="form-label">Email Address *</label>
                        <input
                          type="email"
                          name="email"
                          required
                          placeholder="yourname@gmail.com"
                          className="form-control"
                          value={formData.email}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="form-group">
                        <label className="form-label">Interested Service</label>
                        <select
                          name="subject"
                          className="form-control"
                          value={formData.subject}
                          onChange={handleChange}
                        >
                          <option value="residential-apartments">Residential Apartments & Communities</option>
                          <option value="industrial-infrastructure">Industrial Infrastructure</option>
                          <option value="commercial-hubs">Commercial Hubs</option>
                          <option value="tristate-execution">Tristate Execution Support</option>
                        </select>
                      </div>
                    </div>

                    <div className="form-group">
                      <label className="form-label">Project Details or Inquiry</label>
                      <textarea
                        name="message"
                        required
                        placeholder="Tell us about your plot location, approximate square footage, timeline..."
                        className="form-control"
                        value={formData.message}
                        onChange={handleChange}
                      />
                    </div>

                    <button type="submit" className="btn btn-primary-gold" style={{ width: '100%', padding: '13px' }}>
                      <Send size={16} />
                      <span>Send Inquiry Message</span>
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="page-section-alt">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '36px' }}>
            <span className="section-eyebrow" style={{ justifyContent: 'center' }}>
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="section-title">Answers to Common Construction Inquiries</h2>
          </div>

          <div className="faq-list">
            {faqData.map((item, idx) => (
              <div key={idx} className="faq-item">
                <button className="faq-trigger" onClick={() => toggleFaq(idx)}>
                  <span>{item.question}</span>
                  <ChevronDown
                    size={18}
                    style={{
                      transform: openFaq === idx ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.2s ease',
                      flexShrink: 0
                    }}
                  />
                </button>
                {openFaq === idx && (
                  <div className="faq-content">
                    {item.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner onNavigateContact={() => {
        window.scrollTo({ top: 300, behavior: 'smooth' });
      }} />
    </div>
  );
};

export default ContactPage;

