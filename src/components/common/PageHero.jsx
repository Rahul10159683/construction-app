import React from 'react';
import { ChevronRight } from 'lucide-react';

const PageHero = ({ title, subtitle, breadcrumb, onNavigateHome }) => {
  return (
    <div className="page-hero">
      <div className="page-hero-overlay"></div>
      <div className="container page-hero-content">
        <nav className="breadcrumb-nav" aria-label="Breadcrumb">
          <button
            className="breadcrumb-link"
            onClick={onNavigateHome}
          >
            Home
          </button>
          <ChevronRight size={14} color="#94a3b8" />
          <span style={{ color: '#cbd5e1' }}>{breadcrumb || title}</span>
        </nav>

        <h1 className="page-hero-title">{title}</h1>
        {subtitle && <p className="page-hero-desc">{subtitle}</p>}
      </div>
    </div>
  );
};

export default PageHero;

