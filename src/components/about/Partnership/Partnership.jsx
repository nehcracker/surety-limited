import React, { useState, useCallback } from 'react';
import './Partnership.css';

const Partnership = () => {
  const [activePartner, setActivePartner] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    partnerType: '',
    message: ''
  });

  const partners = [
    {
      id: 'government',
      title: 'Government Agencies',
      icon: '🏛️',
      color: 'blue',
      description: 'Partner with government bodies for seamless bond requirements across public sector projects.',
      benefits: [
        'Streamlined bond verification',
        'Regulatory compliance expertise',
        'Public procurement support'
      ]
    },
    {
      id: 'financial',
      title: 'Financial Institutions',
      icon: '🏦',
      color: 'green',
      description: 'Collaborate with banks for comprehensive financial guarantees and credit solutions.',
      benefits: [
        'Mutual client services',
        'Trade finance solutions',
        'Risk mitigation strategies'
      ]
    },
    {
      id: 'brokers',
      title: 'Insurance Brokers',
      icon: '🤝',
      color: 'purple',
      description: 'Expand your service portfolio with specialized surety and bond solutions.',
      benefits: [
        'White-label solutions',
        'Revenue sharing models',
        'Technical training support'
      ]
    },
    {
      id: 'contractors',
      title: 'Contractors & Developers',
      icon: '🏗️',
      color: 'orange',
      description: 'Preferred partner programs for construction firms and development companies.',
      benefits: [
        'Fast-track applications',
        'Custom bond programs',
        'Risk management advice'
      ]
    },
    {
      id: 'trade',
      title: 'Trade & Export Firms',
      icon: '🚢',
      color: 'teal',
      description: 'Facilitate international trade with comprehensive guarantee and insurance products.',
      benefits: [
        'Export credit solutions',
        'Customs facilitation',
        'Cross-border support'
      ]
    }
  ];

  const handlePartnerClick = useCallback((id) => {
    setActivePartner(prev => prev === id ? null : id);
  }, []);

  const handleModalToggle = useCallback(() => {
    setShowModal(prev => !prev);
  }, []);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  }, []);

  const handleSubmit = useCallback(() => {
    if (!formData.name || !formData.company || !formData.email || !formData.partnerType || !formData.message) {
      alert('Please fill in all required fields.');
      return;
    }
    
    console.log('Form submitted:', formData);
    alert('Thank you for your interest! We will contact you within 24 hours.');
    setShowModal(false);
    setFormData({
      name: '',
      company: '',
      email: '',
      phone: '',
      partnerType: '',
      message: ''
    });
  }, [formData]);

  return (
    <section className="partnership-section">
      {/* Background Elements */}
      <div className="bg-pattern bg-pattern-1"></div>
      <div className="bg-pattern bg-pattern-2"></div>
      
      <div className="partnership-container">
        {/* Header */}
        <div className="partnership-header">
          <h2 className="partnership-title">
            Strategic
            <span className="partnership-title-highlight">Partnerships</span>
          </h2>
          <p className="partnership-subtitle">
            Join our network of trusted partners and expand your service offerings with comprehensive risk solutions
          </p>
        </div>

        {/* Partners Grid */}
        <div className="partners-grid">
          {partners.map((partner) => (
            <div
              key={partner.id}
              className={`partner-card ${activePartner === partner.id ? 'active' : ''} ${partner.color}`}
              onClick={() => handlePartnerClick(partner.id)}
            >
              {/* Card Header */}
              <div className={`partner-card-header ${partner.color}`}></div>
              
              <div className="partner-card-content">
                <div className="partner-card-title-section">
                  <div className="partner-icon">{partner.icon}</div>
                  <h3 className="partner-title">{partner.title}</h3>
                </div>
                
                <p className="partner-description">{partner.description}</p>
                
                {activePartner === partner.id && (
                  <div className="partner-benefits">
                    <div className="partner-benefits-divider"></div>
                    <h4 className="partner-benefits-title">Key Benefits:</h4>
                    <ul className="partner-benefits-list">
                      {partner.benefits.map((benefit, i) => (
                        <li key={i} className="partner-benefit-item">
                          <span className="benefit-check">✓</span>
                          <span className="benefit-text">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                <div className="partner-card-footer">
                  <span className="partner-toggle-text">
                    {activePartner === partner.id ? 'Show Less' : 'Learn More'}
                  </span>
                  <div className={`partner-arrow ${activePartner === partner.id ? 'rotated' : ''}`}>
                    <svg className="arrow-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="partnership-cta">
          <div className="cta-bg-pattern"></div>
          
          <div className="cta-content">
            <h3 className="cta-title">Ready to Partner?</h3>
            <p className="cta-description">
              Let's create a customized collaboration that benefits your organization and clients
            </p>
            
            <button
              onClick={handleModalToggle}
              className="cta-button"
            >
              Start Partnership
              <span className="cta-arrow">→</span>
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="modal-overlay" onClick={handleModalToggle}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3 className="modal-title">Partnership Application</h3>
              <button onClick={handleModalToggle} className="modal-close">
                <svg className="close-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <p className="modal-description">
              Tell us about your organization and how you'd like to collaborate with Surety Limited.
            </p>
            
            <div className="form-fields">
              <div className="form-row">
                <div className="form-field">
                  <label className="form-label">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-input"
                  />
                </div>
                
                <div className="form-field">
                  <label className="form-label">Company/Organization *</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="form-input"
                  />
                </div>
              </div>
              
              <div className="form-row">
                <div className="form-field">
                  <label className="form-label">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-input"
                  />
                </div>
                
                <div className="form-field">
                  <label className="form-label">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="form-input"
                  />
                </div>
              </div>
              
              <div className="form-field">
                <label className="form-label">Partnership Type *</label>
                <select
                  name="partnerType"
                  value={formData.partnerType}
                  onChange={handleChange}
                  className="form-input"
                >
                  <option value="">Select Partnership Type</option>
                  <option value="government">Government Agency</option>
                  <option value="financial">Financial Institution</option>
                  <option value="broker">Insurance Broker</option>
                  <option value="contractor">Contractor/Developer</option>
                  <option value="trade">Trade/Export Firm</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div className="form-field">
                <label className="form-label">Partnership Vision *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  placeholder="Describe how you envision partnering with us..."
                  className="form-textarea"
                ></textarea>
              </div>
              
              <button onClick={handleSubmit} className="form-submit-button">
                Submit Partnership Request
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Partnership;