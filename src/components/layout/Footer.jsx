import React, { useState } from 'react';
import { MapPin, Phone, Mail, ChevronRight } from 'lucide-react';
import { FacebookIcon, InstagramIcon, LinkedinIcon } from '../common/SocialIcons';

  const Footer = ({ setActivePage, onOpenConsultation }) => {
    const [logoError, setLogoError] = useState(false);

    const handleNavClick = (pageId) => {
      setActivePage(pageId);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
      <footer className="site-footer">
        <div className="container footer-top">
          <div className="footer-grid">
            {/* Column 1: Brand */}
            <div className="footer-brand">
              {!logoError ? (
                <img
                  src="/Ramineni_logo.png"
                  alt="Ramineni Constructions"
                  className="footer-logo-img"
                  onError={() => setLogoError(true)}
                />
              ) : (
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <div
                    style={{
                      width: '36px',
                      height: '36px',
                      background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
                      borderRadius: '6px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#fff',
                      fontWeight: 'bold',
                      fontSize: '18px'
                    }}
                  >
                    R
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <span style={{ fontSize: '18px', fontWeight: '800', color: '#ffffff' }}>
                      RAMINENI
                    </span>
                    <span style={{ fontSize: '10px', fontWeight: '700', color: '#f59e0b' }}>
                      CONSTRUCTIONS
                    </span>
                  </div>
                </div>
              )}
              <p className="footer-desc">
                Building Tomorrow's Landmarks. A new-age construction company committed to delivering quality, reliable and modern spaces for a better tomorrow.
              </p>
            </div>

            {/* Column 2: Quick Links */}
            <div>
              <h4 className="footer-column-title">Quick Links</h4>
              <ul className="footer-links-list">
                <li>
                  <button className="footer-link-btn" onClick={() => handleNavClick('home')}>
                    <ChevronRight size={14} className="footer-link-arrow" />
                    <span>Home</span>
                  </button>
                </li>
                <li>
                  <button className="footer-link-btn" onClick={() => handleNavClick('about')}>
                    <ChevronRight size={14} className="footer-link-arrow" />
                    <span>About Us</span>
                  </button>
                </li>
                <li>
                  <button className="footer-link-btn" onClick={() => handleNavClick('services')}>
                    <ChevronRight size={14} className="footer-link-arrow" />
                    <span>Services</span>
                  </button>
                </li>
                <li>
                    <button className="footer-link-btn" onClick={() => handleNavClick('future-projects')}>
                      <ChevronRight size={14} className="footer-link-arrow" />
                      <span>Future Projects</span>
                    </button>
                </li>
                <li>
                  <button className="footer-link-btn" onClick={() => handleNavClick('contact')}>
                    <ChevronRight size={14} className="footer-link-arrow" />
                    <span>Contact</span>
                  </button>
                </li>
              </ul>
            </div>

            {/* Column 3: Our Services */}
            <div>
              <h4 className="footer-column-title">Our Services</h4>
              <ul className="footer-links-list">
                <li>
                  <button className="footer-link-btn" onClick={() => handleNavClick('services')}>
                    <ChevronRight size={14} className="footer-link-arrow" />
                    <span>Residential Construction</span>
                  </button>
                </li>
                <li>
                  <button className="footer-link-btn" onClick={() => handleNavClick('services')}>
                    <ChevronRight size={14} className="footer-link-arrow" />
                    <span>Commercial Construction</span>
                  </button>
                </li>
                <li>
                  <button className="footer-link-btn" onClick={() => handleNavClick('services')}>
                    <ChevronRight size={14} className="footer-link-arrow" />
                    <span>Industrial Construction</span>
                  </button>
                </li>
                <li>
                  <button className="footer-link-btn" onClick={() => handleNavClick('services')}>
                    <ChevronRight size={14} className="footer-link-arrow" />
                    <span>Renovation & Remodeling</span>
                  </button>
                </li>
              </ul>
            </div>

            {/* Column 4: Get in Touch */}
            <div>
              <h4 className="footer-column-title">Get in Touch</h4>
              <div className="footer-contact-list">
                <div className="footer-contact-item">
                  <Phone className="footer-contact-icon" />
                  <span>+91 7013334673</span>
                </div>
                <div className="footer-contact-item">
                  <Mail className="footer-contact-icon" />
                  <span>info@ramineniconstructions.in</span>
                </div>
                <div className="footer-contact-item">
                  <MapPin className="footer-contact-icon" />
                  <span>Hyderabad, Telangana</span>
                </div>
              </div>

              <div className="footer-social-row" style={{ marginTop: '16px' }}>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="footer-social-icon" aria-label="Facebook">
                  <FacebookIcon size={15} />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="footer-social-icon" aria-label="Instagram">
                  <InstagramIcon size={15} />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="footer-social-icon" aria-label="LinkedIn">
                  <LinkedinIcon size={15} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="container footer-bottom-inner">
            <div>
              © 2026 Ramineni Constructions. All rights reserved.
            </div>
            <div className="footer-bottom-links">
              <button className="footer-legal-link" onClick={() => handleNavClick('contact')}>
                Privacy Policy
              </button>
              <span>•</span>
              <button className="footer-legal-link" onClick={() => handleNavClick('contact')}>
                Terms of Use
              </button>
            </div>
          </div>
        </div>
      </footer>
    );
  };

  export default Footer;
