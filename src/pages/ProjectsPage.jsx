import React, { useState } from 'react';
import PageHero from '../components/common/PageHero';
import CtaBanner from '../components/home/CtaBanner';
import { projectsData } from '../data/projectsData';
import { MapPin, ArrowRight } from 'lucide-react';

const ProjectsPage = ({ setActivePage, onOpenQuote, onSelectProject }) => {
  const [filter, setFilter] = useState('all');

  const filterTabs = [
    { id: 'all', label: 'All Projects' },
    { id: 'residential', label: 'Residential' },
    { id: 'commercial', label: 'Commercial' },
    { id: 'industrial', label: 'Industrial' },
    { id: 'renovation', label: 'Renovation' }
  ];

  const filteredProjects = filter === 'all'
    ? projectsData
    : projectsData.filter((p) => p.category === filter);

  return (
    <div className="projects-page">
      <PageHero
        title="Our Construction Portfolio"
        subtitle="Explore our completed landmark residential estates, Grade-A commercial complexes, and industrial distribution centers across Telangana and Andhra Pradesh."
        breadcrumb="Projects"
        onNavigateHome={() => {
          setActivePage('home');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      <section className="page-section">
        <div className="container">
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

          {/* Projects Grid */}
          <div className="projects-grid">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="project-card"
                onClick={() => onSelectProject(project)}
              >
                <div className="project-thumb-wrapper">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-thumb"
                    loading="lazy"
                  />
                  <div
                    style={{
                      position: 'absolute',
                      top: '12px',
                      left: '12px',
                      backgroundColor: 'rgba(11, 23, 39, 0.85)',
                      color: '#f59e0b',
                      fontSize: '11px',
                      fontWeight: '800',
                      padding: '4px 10px',
                      borderRadius: '20px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px'
                    }}
                  >
                    {project.categoryLabel}
                  </div>
                </div>

                <div className="project-card-body">
                  <h3 className="project-card-title">{project.title}</h3>
                  <div className="project-card-location">
                    <MapPin className="project-location-pin" />
                    <span>{project.fullLocation || project.location}</span>
                  </div>

                  <p style={{ fontSize: '13px', color: '#64748b', margin: '8px 0 12px 0', lineHeight: '1.45' }}>
                    {project.shortDesc}
                  </p>

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '10px', borderTop: '1px solid #f1f5f9', fontSize: '12px', color: '#64748b' }}>
                    <span>Area: <strong>{project.area}</strong></span>
                    <span style={{ color: '#d97706', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '4px' }}>
                      View Details <ArrowRight size={13} />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner onOpenQuote={onOpenQuote} />
    </div>
  );
};

export default ProjectsPage;

