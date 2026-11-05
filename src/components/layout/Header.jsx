import React, { useState, useEffect } from 'react';
import { Menu, ArrowRight } from 'lucide-react';

const Header = ({ activePage, setActivePage, onOpenConsultation, onOpenMobileMenu }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [logoError, setLogoError] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'services', label: 'Services' },
    { id: 'future-projects', label: 'Future Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (pageId) => {
    setActivePage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className={`site-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container header-inner">
        {/* Brand Logo */}
        <div
          className="brand-logo-link"
          onClick={() => handleNavClick('home')}
          role="button"
          tabIndex={0}
        >
          {!logoError ? (
            <img
              src="/Ramineni_logo.png"
              alt="Ramineni Constructions"
              className="brand-logo-img"
              onError={() => setLogoError(true)}
            />
          ) : (
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div
                style={{
                  width: '36px',
                  height: '36px',
                  background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
                  borderRadius: '6px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff',
                  fontWeight: 'bold',
                  fontSize: '18px'
                }}
              >
                R
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontSize: '18px', fontWeight: '800', color: '#0b1727', letterSpacing: '-0.3px' }}>
                  RAMINENI
                </span>
                <span style={{ fontSize: '10px', fontWeight: '700', color: '#f59e0b', letterSpacing: '1.2px' }}>
                  CONSTRUCTIONS
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Desktop Navigation */}
        <nav className="desktop-nav" aria-label="Main Navigation">
          {navItems.map((item) => (
            <button
              key={item.id}
              className={`nav-link ${activePage === item.id ? 'active' : ''}`}
              onClick={() => handleNavClick(item.id)}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Header CTA Action: "Get in Touch →" */}
        <div className="header-action">
          <button
            className="btn btn-primary-gold"
            onClick={onOpenConsultation}
          >
            <span>Get in Touch</span>
            <ArrowRight size={15} />
          </button>

          {/* Mobile Menu Hamburger */}
          <button
            className="mobile-menu-btn"
            onClick={onOpenMobileMenu}
            aria-label="Open Navigation Menu"
          >
            <Menu size={22} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
