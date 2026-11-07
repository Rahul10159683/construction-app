import React from 'react';
import { Building2, Factory, Briefcase, Compass, ArrowRight } from 'lucide-react';
import { servicesData } from '../../data/servicesData';

const iconMap = {
  Building2,
  Factory,
  Briefcase,
  Compass
};

const ServicesPreview = ({ onNavigateServices }) => {
  return (
    <section className="services-section">
      <div className="container">
        <div style={{ marginBottom: '32px' }}>
          <span className="section-eyebrow">OUR SERVICES</span>
          <h2 className="section-title">Comprehensive Construction Services</h2>
        </div>

        <div className="services-grid">
          {servicesData.map((service) => {
            const IconComponent = iconMap[service.iconName] || Building2;

            return (
              <div
                key={service.id}
                className="service-card"
                onClick={onNavigateServices}
              >
                <div className="service-card-content-wrap">
                  <div className="service-icon-box">
                    <IconComponent size={24} />
                  </div>
                  <div>
                    <h3 className="service-card-title">{service.title}</h3>
                    <p className="service-card-desc">{service.subtitle}</p>
                  </div>
                </div>

                <div className="service-card-bottom">
                  <button
                    className="btn-circle-gold"
                    aria-label={`Learn more about ${service.title}`}
                  >
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default ServicesPreview;