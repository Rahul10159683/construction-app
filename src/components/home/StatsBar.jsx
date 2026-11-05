import React from 'react';
import { HardHat, Handshake, Leaf, Layers, Clock } from 'lucide-react';

const StatsBar = () => {
  const highlights = [
    {
      title: "Quality Focused",
      icon: HardHat
    },
    {
      title: "Client Centric",
      icon: Handshake
    },
    {
      title: "Sustainable Approach",
      icon: Leaf
    },
    {
      title: "Modern Construction",
      icon: Layers
    },
    {
      title: "On-Time Delivery",
      icon: Clock
    }
  ];

  return (
    <section className="stats-section" aria-label="Our Core Commitments">
      <div className="container">
        <div className="value-highlights-grid">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="value-highlight-item">
                <div className="value-icon-box">
                  <Icon size={24} />
                </div>
                <span className="value-highlight-label">{item.title}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsBar;
