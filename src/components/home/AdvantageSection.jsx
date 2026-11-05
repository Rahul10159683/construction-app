import React from 'react';
import { ShieldCheck, Scale, Users, Leaf, Star } from 'lucide-react';
import { coreValuesData } from '../../data/futureProjectsData';

const iconMap = {
  ShieldCheck,
  Scale,
  Users,
  Leaf,
  Star
};

const AdvantageSection = () => {
  return (
    <section className="advantage-section" aria-label="Our Core Values">
      <div className="container">
        <div className="advantage-inner">
          {/* Heading with vertical divider */}
          <div className="advantage-heading-block">
            <h2 className="advantage-title">Our Core Values</h2>
          </div>

          {/* 5 Core Values Grid */}
          <div className="advantage-features-row">
            {coreValuesData.map((item, index) => {
              const Icon = iconMap[item.icon] || ShieldCheck;
              return (
                <div key={index} className="advantage-feature-item">
                  <div className="advantage-icon-wrap">
                    <Icon size={22} />
                  </div>
                  <span className="advantage-label">{item.title}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvantageSection;
