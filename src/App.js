import React, { useState, useEffect } from 'react';
import TopBar from './components/layout/TopBar';
import Header from './components/layout/Header';
import MobileDrawer from './components/layout/MobileDrawer';
import Footer from './components/layout/Footer';
import QuoteModal from './components/common/QuoteModal';

// Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import FutureProjectsPage from './pages/FutureProjectsPage';
import ContactPage from './pages/ContactPage';

function App() {
  const [activePage, setActivePage] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);

  // Sync with URL Hash for seamless back/forward navigation
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      const validPages = ['home', 'about', 'services', 'future-projects', 'contact'];
      if (validPages.includes(hash)) {
        setActivePage(hash);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateToPage = (pageId) => {
    setActivePage(pageId);
    window.location.hash = pageId === 'home' ? '' : pageId;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="app-wrapper">
      {/* Top Bar with Location, Phone, Email & Social Links */}
      <TopBar />

      {/* Main Sticky Header with Logo, Desktop Nav, and "Get in Touch" CTA */}
      <Header
        activePage={activePage}
        setActivePage={navigateToPage}
        onOpenConsultation={() => setIsConsultationModalOpen(true)}
        onOpenMobileMenu={() => setIsMobileMenuOpen(true)}
      />

      {/* Mobile Sliding Navigation Drawer */}
      <MobileDrawer
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        activePage={activePage}
        setActivePage={navigateToPage}
        onOpenConsultation={() => setIsConsultationModalOpen(true)}
      />

      {/* Dynamic Page Views */}
      <main className="main-content">
        {activePage === 'home' && (
          <HomePage
            setActivePage={navigateToPage}
            onOpenConsultation={() => setIsConsultationModalOpen(true)}
          />
        )}

        {activePage === 'about' && (
          <AboutPage
            setActivePage={navigateToPage}
            onOpenConsultation={() => setIsConsultationModalOpen(true)}
          />
        )}

        {activePage === 'services' && (
          <ServicesPage
            setActivePage={navigateToPage}
            onOpenConsultation={() => setIsConsultationModalOpen(true)}
          />
        )}

        {activePage === 'future-projects' && (
          <FutureProjectsPage
            setActivePage={navigateToPage}
            onOpenConsultation={() => setIsConsultationModalOpen(true)}
          />
        )}

        {activePage === 'contact' && (
          <ContactPage
            setActivePage={navigateToPage}
            onOpenQuote={() => setIsConsultationModalOpen(true)}
          />
        )}
      </main>

      {/* Comprehensive Dark Footer */}
      <Footer
        setActivePage={navigateToPage}
        onOpenConsultation={() => setIsConsultationModalOpen(true)}
      />

      {/* Interactive Consultation & Project Inquiry Modal */}
      <QuoteModal
        isOpen={isConsultationModalOpen}
        onClose={() => setIsConsultationModalOpen(false)}
      />
    </div>
  );
}

export default App;
