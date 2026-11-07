import React from 'react';
import PageHero from '../components/common/PageHero';
import CtaBanner from '../components/home/CtaBanner';
import ApproachSection from '../components/home/ApproachSection';
import { Target, Flag, ShieldCheck, Scale, Users, Leaf, Star, Award } from 'lucide-react';
import { teamData, advisoryBoardData } from '../data/teamData';

// Image path resolution helper for GitHub Pages, local dev, or custom subpaths
const resolveImagePath = (src) => {
  if (!src) return '';
  if (src.startsWith('http://') || src.startsWith('https://')) return src;
  const cleanPath = src.replace(/^\/?(construction-app\/)?/, '');
  const publicUrl = process.env.PUBLIC_URL || '';
  return `${publicUrl}/${cleanPath}`;
};

const AboutPage = ({ setActivePage, onOpenConsultation }) => {
  const coreValues = [
    {
      title: "Quality",
      desc: "We construct with lab-tested concrete, certified Fe 550D rebar, and verified materials from trusted manufacturers.",
      icon: ShieldCheck
    },
    {
      title: "Integrity",
      desc: "100% transparent itemized Bill of Quantities (BOQ), milestone-based invoicing, and zero hidden surcharges.",
      icon: Scale
    },
    {
      title: "Customer Focus",
      desc: "Direct communication with lead engineers, customized spatial layouts, and regular photo & video progress reporting.",
      icon: Users
    },
    {
      title: "Sustainability",
      desc: "Eco-friendly construction principles, rainwater percolation pits, solar readiness, and resource efficiency.",
      icon: Leaf
    },
    {
      title: "Excellence",
      desc: "An unwavering pursuit of architectural precision, structural safety, and timely project delivery.",
      icon: Star
    }
  ];

  return (
    <div className="about-page">
      <PageHero
        title="About Ramineni Constructions"
        subtitle="A newly established construction company committed to delivering high-quality, functional and sustainable spaces for a better tomorrow."
        breadcrumb="About Us"
        onNavigateHome={() => {
          setActivePage('home');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      {/* Heritage & Overview */}
      <section className="page-section">
        <div className="container">
          <div className="about-history-grid">
            <div className="about-history-text">
              <span className="section-eyebrow">OUR STORY</span>
              <h2 className="section-title">Built on Trust, Driven by Precision</h2>
              <p>
                <strong>Ramineni Constructions</strong> is a newly established construction company with a clear vision to create high-quality, functional and sustainable spaces. We bring together a dedicated team, modern construction practices and a commitment to excellence to deliver value for our clients.
              </p>
              <p>
                As a new-age firm, we operate free from legacy compromises. We combine contemporary architectural design with rigorous civil engineering standards, ensuring that every independent home, luxury villa, commercial office, or industrial warehouse is built to endure for generations.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px', marginTop: '24px' }}>
                <div style={{ padding: '16px', backgroundColor: '#f8fafc', borderRadius: '10px', border: '1px solid #e2e8f0' }}>
                  <div style={{ color: '#d97706', fontWeight: '800', fontSize: '24px', fontFamily: 'var(--font-heading)' }}>
                    100%
                  </div>
                  <div style={{ fontSize: '13px', color: '#64748b', fontWeight: '600' }}>
                    Transparent BOQ & Billing
                  </div>
                </div>
                <div style={{ padding: '16px', backgroundColor: '#f8fafc', borderRadius: '10px', border: '1px solid #e2e8f0' }}>
                  <div style={{ color: '#d97706', fontWeight: '800', fontSize: '24px', fontFamily: 'var(--font-heading)' }}>
                    10-Year
                  </div>
                  <div style={{ fontSize: '13px', color: '#64748b', fontWeight: '600' }}>
                    Structural Warranty
                  </div>
                </div>
              </div>
            </div>

            <div style={{ position: 'relative' }}>
              <div
                style={{
                  borderRadius: '16px',
                  overflow: 'hidden',
                  boxShadow: '0 20px 40px -10px rgba(11, 23, 39, 0.2)',
                  border: '4px solid #ffffff'
                }}
              >
                <img
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80"
                  alt="Ramineni Constructions Modern Architecture"
                  style={{ width: '100%', height: '380px', objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>

          {/* Vision & Mission Row */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px', marginTop: '20px' }}>
            <div
              style={{
                backgroundColor: '#ffffff',
                border: '1px solid #e2e8f0',
                borderRadius: '16px',
                padding: '32px',
                boxShadow: '0 4px 14px rgba(0,0,0,0.03)'
              }}
            >
              <div
                style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '12px',
                  backgroundColor: '#fffbeb',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#d97706',
                  marginBottom: '16px'
                }}
              >
                <Target size={26} />
              </div>
              <h3 style={{ fontSize: '20px', color: '#0b1727', margin: '0 0 10px 0' }}>Our Vision</h3>
              <p style={{ color: '#475569', fontSize: '14.5px', lineHeight: '1.6', margin: 0 }}>
                To be a trusted name in the construction industry, known for quality, integrity, and building tomorrow's landmarks with modern craftsmanship.
              </p>
            </div>

            <div
              style={{
                backgroundColor: '#ffffff',
                border: '1px solid #e2e8f0',
                borderRadius: '16px',
                padding: '32px',
                boxShadow: '0 4px 14px rgba(0,0,0,0.03)'
              }}
            >
              <div
                style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '12px',
                  backgroundColor: '#fffbeb',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#d97706',
                  marginBottom: '16px'
                }}
              >
                <Flag size={26} />
              </div>
              <h3 style={{ fontSize: '20px', color: '#0b1727', margin: '0 0 10px 0' }}>Our Mission</h3>
              <p style={{ color: '#475569', fontSize: '14.5px', lineHeight: '1.6', margin: 0 }}>
                To deliver durable, safe and modern construction solutions with complete client satisfaction through collaborative planning and honest execution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="page-section-alt">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <span className="section-eyebrow" style={{ justifyContent: 'center' }}>
              OUR FOUNDATION
            </span>
            <h2 className="section-title">Core Values That Guide Us</h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              Five non-negotiable principles that shape how we design, estimate, and construct every project.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px' }}>
            {coreValues.map((val, i) => {
              const Icon = val.icon;
              return (
                <div
                  key={i}
                  style={{
                    padding: '24px',
                    borderRadius: '14px',
                    backgroundColor: '#ffffff',
                    border: '1px solid #e2e8f0',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.03)'
                  }}
                >
                  <div style={{ color: '#d97706', marginBottom: '12px' }}>
                    <Icon size={26} />
                  </div>
                  <h4 style={{ fontSize: '17px', color: '#0b1727', margin: '0 0 8px 0' }}>{val.title}</h4>
                  <p style={{ fontSize: '13px', color: '#64748b', lineHeight: '1.5', margin: 0 }}>{val.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Construction Approach Section */}
      <ApproachSection onOpenConsultation={onOpenConsultation} />

      {/* Leadership Team */}
      <section className="page-section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '36px' }}>
            <span className="section-eyebrow" style={{ justifyContent: 'center' }}>
              LEADERSHIP & EXPERTISE
            </span>
            <h2 className="section-title">The Engineering Minds Behind Ramineni</h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              Qualified structural engineers, architects, and operations specialists dedicated to executing your vision.
            </p>
          </div>

          <div className="team-grid">
            {teamData.map((member, idx) => (
              <div key={idx} className="team-card">
                <div className="team-img-wrap">
                  <img
                    src={resolveImagePath(member.image)}
                    alt={member.name}
                    className="team-img"
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80";
                    }}
                  />
                </div>
                <div className="team-info">
                  <h4 className="team-name">{member.name}</h4>
                  <div className="team-role">{member.role}</div>
                  <p className="team-bio">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Advisory Board Section */}
      <section className="page-section-alt advisory-section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <span className="section-eyebrow" style={{ justifyContent: 'center' }}>
              STRATEGIC COUNSEL & GOVERNANCE
            </span>
            <h2 className="section-title">Advisory Board</h2>
            <p className="section-subtitle" style={{ margin: '0 auto', maxWidth: '680px' }}>
              Distinguished industry veterans providing strategic foresight, fiscal governance, regulatory liaison, and operational security to Ramineni Constructions.
            </p>
          </div>

          <div className="advisory-grid">
            {advisoryBoardData && advisoryBoardData.map((advisor, idx) => (
              <div key={idx} className="advisory-card">
                <div className="advisory-card-top">
                  <div className="advisory-avatar-wrap">
                    <img
                      src={resolveImagePath(advisor.image)}
                      alt={advisor.name}
                      className="advisory-avatar-img"
                      loading="lazy"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        const fallback = e.currentTarget.parentElement.querySelector('.advisory-avatar-fallback');
                        if (fallback) fallback.style.display = 'flex';
                      }}
                    />
                    <div className="advisory-avatar-fallback" style={{ display: 'none' }}>
                      {advisor.initials}
                    </div>
                  </div>
                  <div className="advisory-badge-pill">
                    <Award size={13} />
                    <span>Advisory Counsel</span>
                  </div>
                </div>

                <div className="advisory-card-body">
                  <h3 className="advisory-name">{advisor.name}</h3>
                  <div className="advisory-role-title">{advisor.role}</div>
                  {advisor.secondaryTitle && (
                    <div className="advisory-secondary-title">{advisor.secondaryTitle}</div>
                  )}

                  <div className="advisory-focus-badge">
                    <span className="focus-pulse-dot"></span>
                    <span>{advisor.focus}</span>
                  </div>

                  <p className="advisory-bio">{advisor.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner onNavigateContact={() => {
        setActivePage('contact');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }} />
    </div>
  );
};

export default AboutPage;
