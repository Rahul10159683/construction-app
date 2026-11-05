import React, { useState } from 'react';
import PageHero from '../components/common/PageHero';
import CtaBanner from '../components/home/CtaBanner';
import { galleryItems } from '../data/faqData';
import { X, MapPin } from 'lucide-react';

const GalleryPage = ({ setActivePage, onOpenQuote }) => {
  const [filter, setFilter] = useState('All');
  const [activeLightboxImg, setActiveLightboxImg] = useState(null);

  const categories = ['All', 'Residential', 'Commercial', 'Industrial', 'Renovation', 'Construction'];

  const filteredItems = filter === 'All'
    ? galleryItems
    : galleryItems.filter((item) => item.category === filter);

  return (
    <div className="gallery-page">
      <PageHero
        title="Project Gallery"
        subtitle="A visual showcase of our structural craftsmanship, luxury villas, commercial architectural facades, and modern industrial hubs."
        breadcrumb="Gallery"
        onNavigateHome={() => {
          setActivePage('home');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      <section className="page-section">
        <div className="container">
          {/* Filter Categories */}
          <div className="filter-tabs-row">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`filter-tab ${filter === cat ? 'active' : ''}`}
                onClick={() => setFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Gallery Image Grid */}
          <div className="gallery-grid">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="gallery-card"
                onClick={() => setActiveLightboxImg(item)}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="gallery-img"
                  loading="lazy"
                />
                <div className="gallery-overlay">
                  <h4 className="gallery-overlay-title">{item.title}</h4>
                  <div className="gallery-overlay-meta">
                    {item.category} • {item.location}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {activeLightboxImg && (
        <div
          className="modal-backdrop"
          onClick={() => setActiveLightboxImg(null)}
          role="dialog"
        >
          <div
            style={{
              position: 'relative',
              maxWidth: '900px',
              width: '95%',
              backgroundColor: '#0b1727',
              borderRadius: '14px',
              overflow: 'hidden',
              boxShadow: '0 25px 60px rgba(0,0,0,0.5)'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveLightboxImg(null)}
              style={{
                position: 'absolute',
                top: '14px',
                right: '14px',
                width: '38px',
                height: '38px',
                borderRadius: '50%',
                backgroundColor: 'rgba(0,0,0,0.7)',
                color: '#ffffff',
                border: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                zIndex: 10
              }}
              aria-label="Close image"
            >
              <X size={20} />
            </button>

            <img
              src={activeLightboxImg.image}
              alt={activeLightboxImg.title}
              style={{ width: '100%', maxHeight: '70vh', objectFit: 'contain', display: 'block', backgroundColor: '#000000' }}
            />

            <div style={{ padding: '18px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <h4 style={{ color: '#ffffff', margin: '0 0 4px 0', fontSize: '18px' }}>
                  {activeLightboxImg.title}
                </h4>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#f59e0b', fontSize: '13px' }}>
                  <MapPin size={13} />
                  <span>{activeLightboxImg.location} ({activeLightboxImg.category})</span>
                </div>
              </div>

              <button
                className="btn btn-primary-gold"
                onClick={() => {
                  setActiveLightboxImg(null);
                  onOpenQuote();
                }}
              >
                Inquire
              </button>
            </div>
          </div>
        </div>
      )}

      <CtaBanner onOpenQuote={onOpenQuote} />
    </div>
  );
};

export default GalleryPage;

