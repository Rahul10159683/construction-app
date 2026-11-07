import React from 'react';
import { ArrowRight } from 'lucide-react';

const FutureProjectsPreview = ({ onNavigateFutureProjects, onOpenUpdatesModal }) => {
  return (
    <section className="future-projects-section">
      <div className="container">
        <div className="future-projects-card">
          <div className="future-projects-content">
            <span className="section-eyebrow">FUTURE PROJECTS</span>
            <h2 className="section-title">Upcoming Developments</h2>
            <p className="future-projects-text">
              We are in the process of initiating our first set of projects. Stay tuned for exciting updates.
            </p>

            <div style={{ marginTop: '24px' }}>
              <button
                className="btn btn-primary-gold"
                onClick={onOpenUpdatesModal || onNavigateFutureProjects}
              >
                <span>Get Updates</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>

          {/* Stylized Modern Skyline Blueprint Illustration */}
          <div className="future-projects-graphic-wrap">
            <img
              src={`${process.env.PUBLIC_URL || ''}/upcoming.png`}
              alt="Ramineni Constructions - Building Tomorrow's Landmarks"
              className="future-projects-graphic"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FutureProjectsPreview;

