import React from 'react';
import { X, ChevronRight, Phone, Mail, MapPin, User } from 'lucide-react';

  const MobileDrawer = ({ isOpen, onClose, activePage, setActivePage, onOpenConsultation }) => {
    const navItems = [
      { id: 'home', label: 'Home' },
      { id: 'about', label: 'About Us' },
      { id: 'services', label: 'Services' },
      { id: 'future-projects', label: 'Future Projects' },
      { id: 'contact', label: 'Contact' },
    ];

    const handleSelectPage = (pageId) => {
      setActivePage(pageId);
      onClose();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
      <>
        {/* Backdrop */}
        <div
          className={`mobile-drawer-overlay ${isOpen ? 'open' : ''}`}
          onClick={onClose}
          aria-hidden="true"
        />

        {/* Drawer */}
        <aside className={`mobile-drawer ${isOpen ? 'open' : ''}`} aria-label="Mobile Navigation">
          <div className="mobile-drawer-header">
            <img
              src={`${process.env.PUBLIC_URL || ''}/home_logo.png`}
              alt="Ramineni Constructions"
              style={{ height: '56px', width: 'auto', maxWidth: '240px', objectFit: 'contain' }}
              onError={(e) => {
                if (!e.currentTarget.dataset.retried) {
                  e.currentTarget.dataset.retried = 'true';
                  e.currentTarget.src = `${process.env.PUBLIC_URL || ''}/logo_taken.png`;
                  return;
                }
                e.currentTarget.style.display = 'none';
              }}
            />
            <button
              className="mobile-drawer-close"
              onClick={onClose}
              aria-label="Close menu"
            >
              <X size={20} />
            </button>
          </div>

          <nav className="mobile-drawer-body">
            {navItems.map((item) => (
              <button
                key={item.id}
                className={`mobile-nav-link ${activePage === item.id ? 'active' : ''}`}
                onClick={() => handleSelectPage(item.id)}
              >
                <span>{item.label}</span>
                <ChevronRight size={16} color={activePage === item.id ? '#d97706' : '#94a3b8'} />
              </button>
            ))}
          </nav>

          <div className="mobile-drawer-footer">
            <button
              className="btn btn-primary-gold"
              style={{ width: '100%', padding: '12px', justifyContent: 'center' }}
              onClick={() => {
                onClose();
                onOpenConsultation();
              }}
            >
              Get in Touch →
            </button>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '6px' }}>
              <div className="mobile-contact-item">
                <User size={14} color="#d97706" />
                <span style={{ fontWeight: '600', color: '#0f172a' }}>Ramineni Krishna Prasad</span>
              </div>
              <div className="mobile-contact-item">
                <Phone size={14} color="#d97706" />
                <a href="tel:+918374415339" style={{ color: 'inherit', textDecoration: 'none' }}>+91 83744 15339</a>
              </div>
              <div className="mobile-contact-item">
                <Mail size={14} color="#d97706" />
                <a href="mailto:info@ramineniconstructions.in" style={{ color: 'inherit', textDecoration: 'none' }}>info@ramineniconstructions.in</a>
              </div>
              <div className="mobile-contact-item">
                <MapPin size={14} color="#d97706" />
                <span>Hyderabad, Telangana</span>
              </div>
            </div>
          </div>
        </aside>
      </>
    );
  };

  export default MobileDrawer;
