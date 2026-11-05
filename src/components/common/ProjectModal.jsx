import React, { useState } from 'react';
import { X, MapPin, Calendar, Ruler, User, CheckCircle2, ArrowRight } from 'lucide-react';

const ProjectModal = ({ project, onClose, onEnquire }) => {
  const [selectedImg, setSelectedImg] = useState(0);

  if (!project) return null;

  const galleryImages = project.gallery && project.gallery.length > 0
    ? project.gallery
    : [project.image];

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-card" style={{ maxWidth: '800px' }} onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div>
            <span
              style={{
                fontSize: '11px',
                fontWeight: '800',
                color: '#d97706',
                textTransform: 'uppercase',
                letterSpacing: '1px'
              }}
            >
              {project.categoryLabel}
            </span>
            <h3 style={{ margin: '2px 0 0 0', fontSize: '22px', color: '#0b1727' }}>
              {project.title}
            </h3>
          </div>
          <button className="modal-close-btn" onClick={onClose} aria-label="Close details">
            <X size={20} />
          </button>
        </div>

        <div className="modal-body">
          {/* Main Hero Gallery Image */}
          <div style={{ height: '320px', borderRadius: '12px', overflow: 'hidden', marginBottom: '14px', backgroundColor: '#e2e8f0' }}>
            <img
              src={galleryImages[selectedImg] || project.image}
              alt={project.title}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>

          {/* Gallery Thumbnails if multiple */}
          {galleryImages.length > 1 && (
            <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
              {galleryImages.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImg(idx)}
                  style={{
                    width: '64px',
                    height: '50px',
                    borderRadius: '6px',
                    overflow: 'hidden',
                    border: selectedImg === idx ? '2px solid #d97706' : '1px solid #cbd5e1',
                    padding: 0,
                    cursor: 'pointer',
                    background: 'none'
                  }}
                >
                  <img src={img} alt="thumbnail" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </button>
              ))}
            </div>
          )}

          {/* Project Meta Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
              gap: '12px',
              padding: '16px',
              backgroundColor: '#f8fafc',
              borderRadius: '10px',
              marginBottom: '20px'
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: '#64748b' }}>
                <MapPin size={13} color="#d97706" />
                <span>Location</span>
              </div>
              <strong style={{ fontSize: '13.5px', color: '#0b1727' }}>{project.fullLocation || project.location}</strong>
            </div>

            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: '#64748b' }}>
                <Ruler size={13} color="#d97706" />
                <span>Built-up Area</span>
              </div>
              <strong style={{ fontSize: '13.5px', color: '#0b1727' }}>{project.area}</strong>
            </div>

            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: '#64748b' }}>
                <Calendar size={13} color="#d97706" />
                <span>Completed</span>
              </div>
              <strong style={{ fontSize: '13.5px', color: '#0b1727' }}>{project.year} ({project.completionTime})</strong>
            </div>

            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: '#64748b' }}>
                <User size={13} color="#d97706" />
                <span>Client</span>
              </div>
              <strong style={{ fontSize: '13.5px', color: '#0b1727' }}>{project.client}</strong>
            </div>
          </div>

          {/* Descriptions */}
          <div style={{ marginBottom: '20px' }}>
            <h4 style={{ fontSize: '16px', margin: '0 0 8px 0', color: '#0b1727' }}>
              Project Overview
            </h4>
            <p style={{ fontSize: '14px', lineHeight: '1.6', color: '#475569', margin: 0 }}>
              {project.fullDesc || project.shortDesc}
            </p>
          </div>

          {/* Highlights */}
          {project.highlights && project.highlights.length > 0 && (
            <div style={{ marginBottom: '24px' }}>
              <h4 style={{ fontSize: '16px', margin: '0 0 10px 0', color: '#0b1727' }}>
                Key Engineering Highlights
              </h4>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '8px' }}>
                {project.highlights.map((h, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '13px', color: '#334155' }}>
                    <CheckCircle2 size={15} color="#d97706" style={{ marginTop: '2px', flexShrink: 0 }} />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px' }}>
            <button className="btn btn-outline-dark" onClick={onClose}>
              Close
            </button>
            <button
              className="btn btn-primary-gold"
              onClick={() => {
                onClose();
                onEnquire();
              }}
            >
              <span>Build Similar Project</span>
              <ArrowRight size={15} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;

