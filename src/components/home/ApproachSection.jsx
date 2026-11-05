import React from 'react';
import { MessageSquare, MapPin, FileSpreadsheet, Compass, HardHat, CheckCircle2 } from 'lucide-react';
import { approachSteps } from '../../data/futureProjectsData';

const iconMap = {
  MessageSquare,
  MapPin,
  FileSpreadsheet,
  Compass,
  HardHat,
  CheckCircle2
};

const ApproachSection = ({ onOpenConsultation }) => {
  return (
    <section className="approach-section" aria-label="Our Construction Approach">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <span className="section-eyebrow" style={{ justifyContent: 'center' }}>
            OUR METHODOLOGY
          </span>
          <h2 className="section-title">Our Construction Approach</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Built on transparency, engineering rigor, and client partnership. Here is our structured 6-step roadmap from your initial idea to key handover.
          </p>
        </div>

        <div className="approach-grid">
          {approachSteps.map((step, idx) => {
            const Icon = iconMap[step.icon] || CheckCircle2;
            return (
              <div key={idx} className="approach-step-card">
                <div className="approach-step-header">
                  <span className="approach-step-num">{step.number}</span>
                  <div className="approach-icon-wrap">
                    <Icon size={22} />
                  </div>
                </div>

                <h3 className="approach-step-title">{step.title}</h3>
                <p className="approach-step-desc">{step.desc}</p>

                <div className="approach-step-highlight">
                  <span className="approach-badge">{step.highlight}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ApproachSection;

