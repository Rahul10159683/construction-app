import React from 'react';
import { MapPin, ArrowRight } from 'lucide-react';
import { projectsData } from '../../data/projectsData';

const FeaturedProjects = ({ onNavigateProjects, onSelectProject }) => {
  // Take top 3 projects matching the design
  const featured = projectsData.slice(0, 3);

  return (
    <section className="projects-section">
      <div className="container">
        <div className="section-header-row">
          <div>
            <span className="section-eyebrow">OUR PROJECTS</span>
            <h2 className="section-title">Featured Projects</h2>
          </div>

          <button
            className="view-all-link"
            onClick={onNavigateProjects}
            style={{ background: 'none', border: 'none', padding: 0 }}
          >
            <span>View All Projects</span>
            <ArrowRight size={16} />
          </button>
        </div>

        <div className="projects-grid">
          {featured.map((project) => (
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
              </div>

              <div className="project-card-body">
                <h3 className="project-card-title">{project.title}</h3>
                <div className="project-card-location">
                  <MapPin className="project-location-pin" />
                  <span>{project.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;

