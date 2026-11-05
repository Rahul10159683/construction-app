import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { testimonialsData } from '../../data/testimonialsData';

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonialsData.length - 1 : prev - 1));
  };

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev === testimonialsData.length - 1 ? 0 : prev + 1));
  };

  const current = testimonialsData[currentIndex];

  return (
    <section className="testimonials-section">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '24px' }}>
          <span className="section-eyebrow" style={{ justifyContent: 'center' }}>
            TESTIMONIALS
          </span>
          <h2 className="section-title">What Our Clients Say</h2>
        </div>

        <div className="testimonial-container">
          <div className="testimonial-box">
            {/* Desktop Prev Button */}
            <button
              className="testimonial-nav-btn desktop-only"
              onClick={prevTestimonial}
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>

            {/* Testimonial Content */}
            <div className="testimonial-center-card">
              <div className="testimonial-quote-icon">“</div>
              <p className="testimonial-text">
                "{current.text}"
              </p>

              <div className="testimonial-author-block">
                <img
                  src={current.avatar}
                  alt={current.name}
                  className="testimonial-avatar"
                  loading="lazy"
                />
                <div className="testimonial-author-meta">
                  <h4 className="testimonial-author-name">{current.name}</h4>
                  <div className="testimonial-author-role">
                    {current.role}, {current.location}
                  </div>
                  <div className="testimonial-stars" aria-label={`${current.rating} out of 5 stars`}>
                    {[...Array(current.rating)].map((_, i) => (
                      <Star key={i} size={14} fill="#f59e0b" color="#f59e0b" />
                    ))}
                  </div>
                </div>
              </div>

              {/* Mobile controls */}
              <div className="testimonial-controls-mobile" style={{ marginTop: '20px' }}>
                <button
                  className="testimonial-nav-btn"
                  onClick={prevTestimonial}
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft size={18} />
                </button>
                <span style={{ fontSize: '12px', color: '#64748b', fontWeight: '600' }}>
                  {currentIndex + 1} / {testimonialsData.length}
                </span>
                <button
                  className="testimonial-nav-btn"
                  onClick={nextTestimonial}
                  aria-label="Next testimonial"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>

            {/* Desktop Next Button */}
            <button
              className="testimonial-nav-btn desktop-only"
              onClick={nextTestimonial}
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

