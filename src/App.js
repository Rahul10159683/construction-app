import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate, useLocation, Navigate } from 'react-router-dom';
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
  const navigate = useNavigate();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);

  // Derive active page directly from current route pathname
  const getActivePage = (pathname) => {
    if (pathname.startsWith('/about')) return 'about';
    if (pathname.startsWith('/services')) return 'services';
    if (pathname.startsWith('/future-projects')) return 'future-projects';
    if (pathname.startsWith('/contact')) return 'contact';
    return 'home';
  };

  const activePage = getActivePage(location.pathname);

  // Automatically scroll to top on every route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  // Clean route-based navigation (no hash / # in URL)
  const navigateToPage = (pageId) => {
    const routeMap = {
      home: '/',
      about: '/about',
      services: '/services',
      'future-projects': '/future-projects',
      contact: '/contact',
    };
    const targetRoute = routeMap[pageId] || '/';
    navigate(targetRoute);
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

      {/* Route-Based Page Navigation (Base path  /ramineni) */}
      <main className="main-content">
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                setActivePage={navigateToPage}
                onOpenConsultation={() => setIsConsultationModalOpen(true)}
              />
            }
          />
          <Route
            path="/about"
            element={
              <AboutPage
                setActivePage={navigateToPage}
                onOpenConsultation={() => setIsConsultationModalOpen(true)}
              />
            }
          />
          <Route
            path="/services"
            element={
              <ServicesPage
                setActivePage={navigateToPage}
                onOpenConsultation={() => setIsConsultationModalOpen(true)}
              />
            }
          />
          <Route
            path="/future-projects"
            element={
              <FutureProjectsPage
                setActivePage={navigateToPage}
                onOpenConsultation={() => setIsConsultationModalOpen(true)}
              />
            }
          />
          <Route
            path="/contact"
            element={
              <ContactPage
                setActivePage={navigateToPage}
                onOpenQuote={() => setIsConsultationModalOpen(true)}
              />
            }
          />
          {/* Catch-all redirect to base home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
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
