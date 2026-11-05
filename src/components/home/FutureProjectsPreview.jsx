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
            <svg
              viewBox="0 0 540 280"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="future-skyline-svg"
            >
              {/* Isometric / Modern Grid Backdrop */}
              <defs>
                <linearGradient id="skylineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stop-color="#f59e0b" stop-opacity="0.3"/>
                  <stop offset="100%" stop-color="#0b1727" stop-opacity="0.1"/>
                </linearGradient>
                <linearGradient id="buildingGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stop-color="#fef3c7"/>
                  <stop offset="100%" stop-color="#f8fafc"/>
                </linearGradient>
              </defs>

              {/* Wireframe Skyline Buildings */}
              <g stroke="#cbd5e1" strokeWidth="1.5" strokeDasharray="3 3">
                <rect x="40" y="90" width="70" height="190" rx="4"/>
                <rect x="130" y="50" width="85" height="230" rx="4"/>
                <rect x="235" y="110" width="95" height="170" rx="4"/>
                <rect x="350" y="70" width="80" height="210" rx="4"/>
                <rect x="450" y="120" width="60" height="160" rx="4"/>
              </g>

              {/* Solid Accent Buildings */}
              <g fill="#f1f5f9" stroke="#94a3b8" strokeWidth="1.5">
                <rect x="60" y="120" width="75" height="160" rx="3" fill="#ffffff"/>
                <rect x="160" y="80" width="90" height="200" rx="3" fill="#f8fafc"/>
                <rect x="270" y="130" width="95" height="150" rx="3" fill="#ffffff"/>
                <rect x="385" y="100" width="80" height="180" rx="3" fill="#f8fafc"/>
              </g>

              {/* Window Grid Patterns */}
              <g fill="#cbd5e1">
                {/* Building 1 Windows */}
                <rect x="75" y="135" width="12" height="16" rx="2"/>
                <rect x="95" y="135" width="12" height="16" rx="2"/>
                <rect x="115" y="135" width="12" height="16" rx="2"/>
                <rect x="75" y="165" width="12" height="16" rx="2"/>
                <rect x="95" y="165" width="12" height="16" rx="2"/>
                <rect x="115" y="165" width="12" height="16" rx="2"/>

                {/* Building 2 Tower Windows */}
                <rect x="180" y="100" width="14" height="20" rx="2" fill="#f59e0b" fillOpacity="0.4"/>
                <rect x="205" y="100" width="14" height="20" rx="2" fill="#f59e0b" fillOpacity="0.4"/>
                <rect x="230" y="100" width="14" height="20" rx="2" fill="#f59e0b" fillOpacity="0.4"/>

                <rect x="180" y="135" width="14" height="20" rx="2"/>
                <rect x="205" y="135" width="14" height="20" rx="2"/>
                <rect x="230" y="135" width="14" height="20" rx="2"/>

                <rect x="180" y="170" width="14" height="20" rx="2"/>
                <rect x="205" y="170" width="14" height="20" rx="2"/>
                <rect x="230" y="170" width="14" height="20" rx="2"/>

                {/* Building 3 Windows */}
                <rect x="290" y="150" width="16" height="18" rx="2"/>
                <rect x="315" y="150" width="16" height="18" rx="2"/>
                <rect x="340" y="150" width="16" height="18" rx="2"/>
              </g>

              {/* Crane Silhouette on Skyline */}
              <g stroke="#f59e0b" strokeWidth="2">
                <line x1="205" y1="35" x2="205" y2="80"/>
                <line x1="140" y1="42" x2="270" y2="42"/>
                <line x1="205" y1="35" x2="245" y2="42"/>
                <line x1="205" y1="35" x2="165" y2="42"/>
              </g>

              {/* Ground Horizon Line */}
              <line x1="20" y1="280" x2="520" y2="280" stroke="#0b1727" strokeWidth="3"/>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FutureProjectsPreview;

