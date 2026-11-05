import React from 'react';
import HeroSection from '../components/home/HeroSection';
import StatsBar from '../components/home/StatsBar';
import AboutPreview from '../components/home/AboutPreview';
import ServicesPreview from '../components/home/ServicesPreview';
import FutureProjectsPreview from '../components/home/FutureProjectsPreview';
import ApproachSection from '../components/home/ApproachSection';
import AdvantageSection from '../components/home/AdvantageSection';
import CtaBanner from '../components/home/CtaBanner';

const HomePage = ({ setActivePage, onOpenConsultation }) => {
  const navigateTo = (pageId) => {
    setActivePage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="home-page-container">
      {/* 1. Hero: Building Tomorrow's Landmarks */}
      <HeroSection
        onNavigateServices={() => navigateTo('services')}
        onNavigateContact={() => navigateTo('contact')}
      />

      {/* 2. Core Highlights Bar: Quality Focused, Client Centric, Sustainable Approach, Modern Construction, On-Time Delivery */}
      <StatsBar />

      {/* 3. About Us: Introduction as a newly established construction company */}
      <AboutPreview
        onNavigateAbout={() => navigateTo('about')}
      />

      {/* 4. Our Services: Residential, Commercial, Industrial, Renovation & Remodeling */}
      <ServicesPreview
        onNavigateServices={() => navigateTo('services')}
      />

      {/* 5. Future Projects: Upcoming Developments */}
      <FutureProjectsPreview
        onNavigateFutureProjects={() => navigateTo('future-projects')}
        onOpenUpdatesModal={onOpenConsultation}
      />

      {/* 6. Our Construction Approach: 6-Stage Process (User Recommendation) */}
      <ApproachSection
        onOpenConsultation={onOpenConsultation}
      />

      {/* 7. Our Core Values: Quality, Integrity, Customer Focus, Sustainability, Excellence */}
      <AdvantageSection />

      {/* 8. CTA Banner: Let's Build Together with Blueprint & Safety Helmet */}
      <CtaBanner
        onNavigateContact={() => navigateTo('contact')}
      />
    </div>
  );
};

export default HomePage;
