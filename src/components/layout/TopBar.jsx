import React from 'react';
import { MapPin, Phone, Mail, User } from 'lucide-react';
import { FacebookIcon, InstagramIcon, LinkedinIcon, YoutubeIcon } from '../common/SocialIcons';

const TopBar = () => {
  return (
    <div className="top-bar">
      <div className="container-wide top-bar-inner">
        <div className="top-bar-left">
          <div className="top-bar-item" title="Contact Person">
            <User className="top-bar-icon" />
            <span>Ramineni Krishna Prasad</span>
          </div>

          <a
            href="tel:+918374415339"
            className="top-bar-item"
            title="Call Us"
          >
            <Phone className="top-bar-icon" />
            <span>+91 83744 15339</span>
          </a>

          <a
            href="mailto:info@ramineniconstructions.in"
            className="top-bar-item"
            title="Email Us"
          >
            <Mail className="top-bar-icon" />
            <span>info@ramineniconstructions.in</span>
          </a>

          <a
            href="https://maps.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="top-bar-item"
            title="Office Location"
          >
            <MapPin className="top-bar-icon" />
            <span>Hyderabad, Telangana</span>
          </a>
        </div>

        <div className="top-bar-right">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            aria-label="Facebook"
          >
            <FacebookIcon size={14} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            aria-label="Instagram"
          >
            <InstagramIcon size={14} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            aria-label="LinkedIn"
          >
            <LinkedinIcon size={14} />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            aria-label="YouTube"
          >
            <YoutubeIcon size={14} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
