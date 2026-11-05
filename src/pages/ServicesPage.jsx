import React from 'react';
import PageHero from '../components/common/PageHero';
import CostCalculator from '../components/common/CostCalculator';
import ApproachSection from '../components/home/ApproachSection';
import CtaBanner from '../components/home/CtaBanner';
import { servicesData } from '../data/servicesData';
import { CheckCircle2, ArrowRight } from 'lucide-react';

const ServicesPage = ({ setActivePage, onOpenConsultation }) => {
  return (
    <div className="services-page">
      <PageHero
        title="Comprehensive Construction Services"
        subtitle="End-to-end turnkey engineering services crafted for maximum durability, architectural distinction, and seamless project management."
        breadcrumb="Services"
        onNavigateHome={() => {
          setActivePage('home');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      {/* Detailed Services Section */}
      <section className="page-section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <span className="section-eyebrow" style={{ justifyContent: 'center' }}>
              OUR CAPABILITIES
            </span>
            <h2 className="section-title">Specialized Construction Sectors</h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              We bring specialized construction teams for each sector, ensuring strict compliance with local bylaws, safety regulations, and architectural fidelity.
            </p>
          </div>

          <div className="services-detailed-list">
            {servicesData.map((service, index) => {
              const isEven = index % 2 === 1;
              return (
                <div
                  key={service.id}
                  className={`service-detailed-item ${isEven ? 'reverse' : ''}`}
                >
                  <div className="service-detail-img-wrap">
                    <img
                      src={service.heroImage}
                      alt={service.title}
                      className="service-detail-img"
                      loading="lazy"
                    />
                  </div>

                  <div className="service-detail-content">
                    <div className="service-meta-pills">
                      <span className="service-meta-pill">{service.badge}</span>
                      <span className="service-meta-pill" style={{ backgroundColor: '#f1f5f9', color: '#334155', borderColor: '#cbd5e1' }}>
                        Avg: {service.pricingRange}
                      </span>
                    </div>

                    <h3 style={{ fontSize: '24px', color: '#0b1727', margin: '0 0 6px 0' }}>
                      {service.title}
                    </h3>
                    <p style={{ color: '#d97706', fontWeight: '600', fontSize: '14px', marginBottom: '14px' }}>
                      {service.subtitle}
                    </p>
                    <p style={{ color: '#475569', fontSize: '14.5px', lineHeight: '1.6', marginBottom: '20px' }}>
                      {service.description}
                    </p>

                    <div style={{ marginBottom: '24px' }}>
                      <strong style={{ fontSize: '13px', color: '#0b1727', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                        What's Included:
                      </strong>
                      <ul className="service-features-list">
                        {service.features.map((feat, fIdx) => (
                          <li key={fIdx} className="service-feature-point">
                            <CheckCircle2 className="service-check-icon" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <button
                      className="btn btn-primary-gold"
                      onClick={onOpenConsultation}
                    >
                      <span>Consult on {service.title}</span>
                      <ArrowRight size={15} />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Interactive Cost Calculator */}
          <CostCalculator onOpenQuote={onOpenConsultation} />
        </div>
      </section>

      {/* 6-Step Construction Approach */}
      <ApproachSection onOpenConsultation={onOpenConsultation} />

      <CtaBanner onNavigateContact={() => {
        setActivePage('contact');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }} />
    </div>
  );
};

export default ServicesPage;
