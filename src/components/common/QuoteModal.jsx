import React, { useState } from 'react';
import { X, CheckCircle2, ArrowRight } from 'lucide-react';

const QuoteModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    projectType: 'residential',
    serviceNeeded: 'consultation',
    location: '',
    areaSqFt: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      phone: '',
      email: '',
      projectType: 'residential',
      serviceNeeded: 'consultation',
      location: '',
      areaSqFt: '',
      message: ''
    });
    onClose();
  };

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div>
            <h3 style={{ margin: 0, fontSize: '20px', color: '#0b1727' }}>
              Schedule a Project Consultation
            </h3>
            <p style={{ margin: '4px 0 0 0', fontSize: '13px', color: '#64748b' }}>
              Connect with Ramineni Constructions' engineering team to discuss your upcoming project or plot development.
            </p>
          </div>
          <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
            <X size={20} />
          </button>
        </div>

        <div className="modal-body">
          {submitted ? (
            <div style={{ textAlign: 'center', padding: '30px 10px' }}>
              <CheckCircle2 size={56} color="#10b981" style={{ margin: '0 auto 16px auto' }} />
              <h4 style={{ fontSize: '22px', color: '#0b1727', marginBottom: '8px' }}>
                Thank You, {formData.name}!
              </h4>
              <p style={{ color: '#475569', fontSize: '14px', maxWidth: '420px', margin: '0 auto 24px auto', lineHeight: '1.6' }}>
                We have received your consultation request for <strong>{formData.projectType.toUpperCase()}</strong> construction in {formData.location || 'Telangana / AP'}. Our principal engineering director will contact you at <strong>{formData.phone}</strong> to schedule an initial consultation or site visit.
              </p>
              <button className="btn btn-primary-gold" onClick={handleReset}>
                Done & Close
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="form-grid-2">
                <div className="form-group">
                  <label className="form-label">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="e.g. Ramesh Kumar"
                    className="form-control"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="+91 98765 00000"
                    className="form-control"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-grid-2">
                <div className="form-group">
                  <label className="form-label">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="name@example.com"
                    className="form-control"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Project Type *</label>
                  <select
                    name="projectType"
                    className="form-control"
                    value={formData.projectType}
                    onChange={handleChange}
                  >
                    <option value="residential">Residential (Villa / House / Apartment)</option>
                    <option value="commercial">Commercial (Office / Retail / Complex)</option>
                    <option value="industrial">Industrial (Warehouse / Factory)</option>
                    <option value="renovation">Renovation & Remodeling</option>
                  </select>
                </div>
              </div>

              <div className="form-grid-2">
                <div className="form-group">
                  <label className="form-label">Project Location / City *</label>
                  <input
                    type="text"
                    name="location"
                    required
                    placeholder="e.g. Hyderabad, Mokila, Jubilee Hills"
                    className="form-control"
                    value={formData.location}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Approx Built-up Area (Sq.Ft)</label>
                  <input
                    type="number"
                    name="areaSqFt"
                    placeholder="e.g. 4000"
                    className="form-control"
                    value={formData.areaSqFt}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">What Stage Is Your Project In?</label>
                <select
                  name="serviceNeeded"
                  className="form-control"
                  value={formData.serviceNeeded}
                  onChange={handleChange}
                >
                  <option value="consultation">Initial Idea & Feasibility Consultation</option>
                  <option value="site-visit">Own Plot - Need Site Visit & Planning</option>
                  <option value="estimation">Have Drawings - Need Itemized BOQ & Estimate</option>
                  <option value="execution">Ready for Immediate Construction Execution</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Project Notes or Specific Aspirations</label>
                <textarea
                  name="message"
                  rows={3}
                  placeholder="Share details like plot dimensions, preferred architectural style, target start date..."
                  className="form-control"
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px', marginTop: '16px' }}>
                <button type="button" className="btn btn-outline-dark" onClick={onClose}>
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary-gold">
                  <span>Request Consultation</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuoteModal;
