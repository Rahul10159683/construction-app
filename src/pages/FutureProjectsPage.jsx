import React, { useState } from 'react';
import PageHero from '../components/common/PageHero';
import CtaBanner from '../components/home/CtaBanner';
import { futureProjectsData } from '../data/futureProjectsData';
import { MapPin, CheckCircle2, ArrowRight, BellRing } from 'lucide-react';

const FutureProjectsPage = ({ setActivePage, onOpenConsultation }) => {
  const [filter, setFilter] = useState('all');

  const filterTabs = [
    { id: 'all', label: 'All Upcoming' },
    { id: 'residential', label: 'Residential' },
    { id: 'commercial', label: 'Commercial' },
    { id: 'industrial', label: 'Industrial' }
  ];

  const filteredProjects = filter === 'all'
    ? futureProjectsData
    : futureProjectsData.filter((p) => p.category === filter);

  return (
    <div className="future-projects-page">
      <PageHero
        title="Upcoming Developments"
        subtitle="We are in the process of initiating our first set of projects. Explore our upcoming developments across Telangana and Andhra Pradesh."
        breadcrumb="Future Projects"
        onNavigateHome={() => {
          setActivePage('home');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      <section className="page-section">
        <div className="container">
          {/* Honest Transparency Notice Banner */}
          <div
            style={{
              backgroundColor: '#fffbeb',
              border: '1px solid #fde68a',
              borderRadius: '12px',
              padding: '20px 24px',
              marginBottom: '36px',
              display: 'flex',
              alignItems: 'center',
              gap: '16px'
            }}
          >
            <div
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '50%',
                backgroundColor: '#fef3c7',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#d97706',
                flexShrink: 0
              }}
            >
              <BellRing size={20} />
            </div>
            <div>
              <strong style={{ color: '#92400e', fontSize: '15px' }}>
                Newly Established & Forward-Thinking
              </strong>
              <p style={{ margin: '4px 0 0 0', color: '#78350f', fontSize: '13.5px', lineHeight: '1.5' }}>
                As a new-age construction firm, our upcoming developments are currently in architectural planning, soil testing, and municipal approval stages. We believe in 100% transparency without claiming past completed works.
              </p>
            </div>
          </div>

          {/* Category Filter Tabs */}
          <div className="filter-tabs-row">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                className={`filter-tab ${filter === tab.id ? 'active' : ''}`}
                onClick={() => setFilter(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Upcoming Developments Grid */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '36px' }}>
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: '16px',
                  border: '1px solid #e2e8f0',
                  boxShadow: '0 4px 16px rgba(0,0,0,0.03)',
                  overflow: 'hidden',
                  display: 'grid',
                  gridTemplateColumns: '1.1fr 1.3fr',
                  gap: '0'
                }}
                className="future-project-item"
              >
                <div style={{ height: '100%', minHeight: '280px', position: 'relative', backgroundColor: '#e2e8f0' }}>
                  <img
                    src={project.image}
                    alt={project.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      top: '16px',
                      left: '16px',
                      backgroundColor: 'rgba(11, 23, 39, 0.88)',
                      color: '#f59e0b',
                      fontSize: '11px',
                      fontWeight: '800',
                      padding: '5px 12px',
                      borderRadius: '20px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.8px'
                    }}
                  >
                    {project.statusBadge}
                  </div>
                </div>

                <div style={{ padding: '32px', display: 'flex', flexDirection: 'column' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                    <span
                      style={{
                        fontSize: '12px',
                        fontWeight: '700',
                        color: '#d97706',
                        backgroundColor: '#fffbeb',
                        padding: '3px 10px',
                        borderRadius: '12px'
                      }}
                    >
                      {project.status}
                    </span>
                    <span style={{ fontSize: '12px', color: '#64748b' }}>
                      Target Initiation: <strong>{project.targetLaunch}</strong>
                    </span>
                  </div>

                  <h3 style={{ fontSize: '22px', color: '#0b1727', margin: '0 0 8px 0' }}>
                    {project.title}
                  </h3>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#64748b', fontSize: '13px', marginBottom: '14px' }}>
                    <MapPin size={14} color="#d97706" />
                    <span>{project.location}</span>
                    <span>•</span>
                    <span>{project.area}</span>
                  </div>

                  <p style={{ color: '#475569', fontSize: '14px', lineHeight: '1.6', margin: '0 0 16px 0' }}>
                    {project.details}
                  </p>

                  <div style={{ marginBottom: '24px' }}>
                    <strong style={{ fontSize: '12.5px', color: '#0b1727', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                      Key Architectural Highlights:
                    </strong>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '8px', marginTop: '8px' }}>
                      {project.features.map((feat, fIdx) => (
                        <div key={fIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '13px', color: '#334155' }}>
                          <CheckCircle2 size={15} color="#d97706" style={{ marginTop: '2px', flexShrink: 0 }} />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div style={{ marginTop: 'auto' }}>
                    <button
                      className="btn btn-primary-gold"
                      onClick={onOpenConsultation}
                    >
                      <span>Inquire About This Development</span>
                      <ArrowRight size={15} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner onNavigateContact={() => {
        setActivePage('contact');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }} />
    </div>
  );
};

export default FutureProjectsPage;

