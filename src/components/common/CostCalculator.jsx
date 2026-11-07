import React, { useState } from 'react';
import { Calculator, ArrowRight } from 'lucide-react';

const CostCalculator = ({ onOpenQuote }) => {
  const [projectType, setProjectType] = useState('residential-apartments');
  const [areaSqFt, setAreaSqFt] = useState(5000);
  const [qualityTier, setQualityTier] = useState('premium');

  const baseRates = {
    'residential-apartments': 2400,
    'industrial-infrastructure': 1900,
    'commercial-hubs': 3100,
    'tristate-execution': 2200
  };

  const tierMultipliers = {
    standard: 1.0,
    premium: 1.25,
    luxury: 1.6
  };

  const timelineMap = {
    'residential-apartments': '12 - 24 Months',
    'industrial-infrastructure': '8 - 16 Months',
    'commercial-hubs': '14 - 24 Months',
    'tristate-execution': 'Turnkey Lifecycle'
  };

  const ratePerSqFt = Math.round(baseRates[projectType] * tierMultipliers[qualityTier]);
  const totalCost = ratePerSqFt * Number(areaSqFt);

  // Cost breakdown
  const civilCost = Math.round(totalCost * 0.52);
  const finishCost = Math.round(totalCost * 0.28);
  const mepCost = Math.round(totalCost * 0.20);

  const formatCurrency = (val) => {
    if (val >= 10000000) {
      return `₹${(val / 10000000).toFixed(2)} Crores`;
    } else {
      return `₹${(val / 100000).toFixed(2)} Lakhs`;
    }
  };

  return (
    <div className="calculator-box">
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
        <div
          style={{
            width: '36px',
            height: '36px',
            borderRadius: '8px',
            background: 'var(--gold-gradient)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff'
          }}
        >
          <Calculator size={20} />
        </div>
        <h3 style={{ margin: 0, fontSize: '24px', color: '#ffffff' }}>
          Construction Cost Estimator
        </h3>
      </div>
      <p style={{ color: '#94a3b8', fontSize: '14px', margin: '0 0 24px 0' }}>
        Estimate your approximate project investment instantly based on current Hyderabad and Southern India market building material rates.
      </p>

      <div className="calc-grid">
        {/* Input Parameters */}
        <div>
          <div className="calc-field">
            <label>Select Project Category</label>
            <select
              className="calc-select"
              value={projectType}
              onChange={(e) => setProjectType(e.target.value)}
            >
              <option value="residential-apartments">Residential Apartments & Communities</option>
              <option value="industrial-infrastructure">Industrial Infrastructure (PEB & Factories)</option>
              <option value="commercial-hubs">Commercial Hubs (Offices & Retail)</option>
              <option value="tristate-execution">Tristate Execution & Turnkey Projects</option>
            </select>
          </div>

          <div className="calc-field">
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
              <label style={{ margin: 0 }}>Built-up Area</label>
              <span style={{ color: '#f59e0b', fontWeight: '700', fontSize: '14px' }}>
                {Number(areaSqFt).toLocaleString('en-IN')} sq.ft
              </span>
            </div>
            <input
              type="range"
              min="1000"
              max="25000"
              step="500"
              value={areaSqFt}
              onChange={(e) => setAreaSqFt(Number(e.target.value))}
              style={{ width: '100%', accentColor: '#f59e0b', cursor: 'pointer' }}
            />
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: '#64748b', marginTop: '4px' }}>
              <span>1,000 sq.ft</span>
              <span>12,500 sq.ft</span>
              <span>25,000 sq.ft</span>
            </div>
          </div>

          <div className="calc-field">
            <label>Finishing & Specification Tier</label>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
              {[
                { id: 'standard', name: 'Standard', desc: 'Premium Brands' },
                { id: 'premium', name: 'Premium', desc: 'Luxury Finishes' },
                { id: 'luxury', name: 'Ultra-Luxury', desc: 'Italian & Smart Home' }
              ].map((tier) => (
                <button
                  key={tier.id}
                  type="button"
                  onClick={() => setQualityTier(tier.id)}
                  style={{
                    padding: '10px 8px',
                    borderRadius: '8px',
                    border: qualityTier === tier.id ? '2px solid #f59e0b' : '1px solid rgba(255,255,255,0.15)',
                    backgroundColor: qualityTier === tier.id ? 'rgba(245, 158, 11, 0.15)' : 'rgba(255,255,255,0.05)',
                    color: '#ffffff',
                    cursor: 'pointer',
                    textAlign: 'center'
                  }}
                >
                  <div style={{ fontWeight: '700', fontSize: '13px' }}>{tier.name}</div>
                  <div style={{ fontSize: '10px', color: '#cbd5e1' }}>{tier.desc}</div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Results Card */}
        <div className="calc-result-card">
          <span style={{ fontSize: '12px', fontWeight: '700', color: '#cbd5e1', textTransform: 'uppercase', letterSpacing: '1px' }}>
            Estimated Investment
          </span>

          <div className="calc-result-price">
            {formatCurrency(totalCost)}
          </div>

          <div style={{ fontSize: '13px', color: '#fcd34d', marginBottom: '20px' }}>
            Avg. ₹{ratePerSqFt.toLocaleString('en-IN')} / sq.ft (Inclusive of Materials & Labor)
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', textAlign: 'left', marginBottom: '24px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12.5px', color: '#cbd5e1', borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: '6px' }}>
              <span>Civil & Structural (52%)</span>
              <strong>{formatCurrency(civilCost)}</strong>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12.5px', color: '#cbd5e1', borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: '6px' }}>
              <span>Architectural Finishes (28%)</span>
              <strong>{formatCurrency(finishCost)}</strong>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12.5px', color: '#cbd5e1', borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: '6px' }}>
              <span>Electrical, Plumbing & HVAC (20%)</span>
              <strong>{formatCurrency(mepCost)}</strong>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12.5px', color: '#f59e0b', paddingTop: '4px' }}>
              <span>Expected Delivery Timeline</span>
              <strong>{timelineMap[projectType]}</strong>
            </div>
          </div>

          <button
            className="btn btn-primary-gold"
            onClick={onOpenQuote}
            style={{ width: '100%', padding: '12px', justifyContent: 'center' }}
          >
            <span>Lock In This Estimate</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};
export default CostCalculator;