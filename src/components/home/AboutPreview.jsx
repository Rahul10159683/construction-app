import React from 'react';
import { Target, Flag, ArrowRight } from 'lucide-react';

const AboutPreview = ({ onNavigateAbout }) => {
  return (
    <section className="about-preview-section">
      <div className="container">
        <div className="about-preview-grid">
          {/* Left Column: Image with architectural gold corner frame */}
          <div className="about-preview-image-wrap">
            <div className="about-floating-accent"></div>
            <div className="about-preview-image-frame">
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80"
                alt="Ramineni Constructions Architectural Elevation"
                className="about-preview-img"
                loading="lazy"
              />
            </div>
          </div>

          {/* Right Column: Text & Vision / Mission */}
          <div className="about-preview-content">
            <span className="section-eyebrow">ABOUT US</span>
            <h2 className="section-title">Ramineni Constructions</h2>

            <p className="about-preview-desc">
              Ramineni Constructions is a newly established construction company with a clear vision to create high-quality, functional and sustainable spaces. We bring together a dedicated team, modern construction practices and a commitment to excellence to deliver value for our clients.
            </p>

            <div className="about-cards-row">
              {/* Vision Card */}
              <div className="about-mini-card">
                <div className="about-mini-icon-wrap">
                  <Target size={28} />
                </div>
                <div>
                  <h4 className="about-mini-title">Our Vision</h4>
                  <p className="about-mini-text">
                    To be a trusted name in the construction industry, known for quality and integrity.
                  </p>
                </div>
              </div>

              {/* Mission Card */}
              <div className="about-mini-card">
                <div className="about-mini-icon-wrap">
                  <Flag size={28} />
                </div>
                <div>
                  <h4 className="about-mini-title">Our Mission</h4>
                  <p className="about-mini-text">
                    To deliver durable, safe and modern construction solutions with complete client satisfaction.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <button
                className="btn btn-outline-gold"
                onClick={onNavigateAbout}
              >
                <span>Read More</span>
                <ArrowRight size={15} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
