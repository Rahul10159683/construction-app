import React from 'react';
import { ArrowRight } from 'lucide-react';

const HeroSection = ({ onNavigateServices, onNavigateContact }) => {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-grid">
          {/* Left Text Content */}
          <div className="hero-content">
            <span className="hero-eyebrow">RAMINENI CONSTRUCTIONS</span>

            <h1 className="hero-title">
              Building Tomorrow's <span className="highlight-gold">Landmarks</span>
            </h1>

            <p className="hero-tagline">
              A new-age construction company committed to delivering quality, reliable and modern spaces for a better tomorrow.
            </p>

            <div className="hero-actions">
              <button
                className="btn btn-primary-gold"
                onClick={onNavigateServices}
              >
                <span>Our Services</span>
                <ArrowRight size={16} />
              </button>

              <button
                className="btn btn-outline-dark"
                onClick={onNavigateContact}
              >
                <span>Contact Us</span>
              </button>
            </div>
          </div>

          {/* Right Hero Image: Construction Site with Tower Crane at Sunset */}
          <div className="hero-image-wrapper">
            <img
              src={`${process.env.PUBLIC_URL || ''}/home_logo.png`}
              alt="Ramineni Constructions - Building Tomorrow's Landmarks"
              className="hero-image"
              loading="eager"
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80';
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
