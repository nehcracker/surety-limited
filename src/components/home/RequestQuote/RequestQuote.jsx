import React, { useState } from 'react';
import styles from './RequestQuote.module.css';

const RequestQuote = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    industry: '',
    serviceType: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setIsSubmitting(false);
      setFormSubmitted(true);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setFormSubmitted(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          industry: '',
          serviceType: '',
          message: ''
        });
      }, 3000);
    }, 1000);
  };

  const industryOptions = [
    { value: '', label: 'Select your industry' },
    { value: 'construction', label: 'Construction & Infrastructure' },
    { value: 'energy', label: 'Energy, Oil & Gas' },
    { value: 'logistics', label: 'Logistics & Maritime' },
    { value: 'financial', label: 'Financial Institutions' },
    { value: 'government', label: 'Public Sector & Government' },
    { value: 'trade', label: 'Import/Export & Trade' },
    { value: 'sme', label: 'SMEs & Startups' },
    { value: 'other', label: 'Other' }
  ];

  const serviceOptions = [
    { value: '', label: 'Select service type' },
    { value: 'bonds', label: 'Surety & Bonds' },
    { value: 'insurance', label: 'General Insurance Covers' },
    { value: 'corporate', label: 'Corporate Risk Solutions' },
    { value: 'global', label: 'Specialized Global Covers' },
    { value: 'other', label: 'Other Services' }
  ];

  const InputField = ({ label, type, name, value, onChange, required, placeholder, icon }) => (
    <div className={styles.fieldWrapper}>
      <div className={`${styles.inputContainer} ${focusedField === name ? styles.focused : ''}`}>
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          onFocus={() => setFocusedField(name)}
          onBlur={() => setFocusedField('')}
          required={required}
          placeholder={placeholder}
          className={styles.inputField}
        />
        <div className={styles.inputIcon}>
          {icon}
        </div>
        <label className={styles.floatingLabel}>
          {label}
        </label>
      </div>
    </div>
  );

  const SelectField = ({ label, name, value, onChange, options, required }) => (
    <div className={styles.fieldWrapper}>
      <div className={`${styles.selectContainer} ${focusedField === name ? styles.focused : ''}`}>
        <select
          name={name}
          value={value}
          onChange={onChange}
          onFocus={() => setFocusedField(name)}
          onBlur={() => setFocusedField('')}
          required={required}
          className={styles.selectField}
        >
          {options.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <div className={styles.selectIcon}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
        </div>
        <div className={styles.selectArrow}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="6,9 12,15 18,9"/>
          </svg>
        </div>
        <label className={styles.floatingLabel}>
          {label}
        </label>
      </div>
    </div>
  );

  const TextareaField = ({ label, name, value, onChange, rows, placeholder }) => (
    <div className={styles.fieldWrapper}>
      <div className={`${styles.textareaContainer} ${focusedField === name ? styles.focused : ''}`}>
        <textarea
          name={name}
          value={value}
          onChange={onChange}
          onFocus={() => setFocusedField(name)}
          onBlur={() => setFocusedField('')}
          rows={rows}
          placeholder={placeholder}
          className={styles.textareaField}
        />
        <div className={styles.textareaIcon}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
          </svg>
        </div>
        <label className={styles.floatingLabel}>
          {label}
        </label>
      </div>
    </div>
  );

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.container}>
        <div className={styles.formCard}>
          <div className={styles.formSection}>
            <div className={styles.formContent}>
              {/* Header */}
              <div className={styles.header}>
                <div className={styles.headerIcon}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <h2 className={styles.title}>Request Your Quote</h2>
                <p className={styles.subtitle}>
                  Get personalized insurance solutions tailored to your business needs. 
                  Our experts will respond within 24 hours.
                </p>
              </div>

              {formSubmitted ? (
                <div className={styles.successMessage}>
                  <div className={styles.successIcon}>
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                      <polyline points="22,4 12,14.01 9,11.01"/>
                    </svg>
                  </div>
                  <h3 className={styles.successTitle}>Thank You!</h3>
                  <p className={styles.successText}>
                    Your quote request has been submitted successfully. 
                    Our team will contact you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className={styles.form}>
                  <div className={styles.formGrid}>
                    <InputField
                      label="Full Name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                      icon={<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                        <circle cx="12" cy="7" r="4"/>
                      </svg>}
                    />
                    <InputField
                      label="Email Address"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john@company.com"
                      icon={<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                        <polyline points="22,6 12,13 2,6"/>
                      </svg>}
                    />
                  </div>

                  <div className={styles.formGrid}>
                    <InputField
                      label="Phone Number"
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="+1 (555) 000-0000"
                      icon={<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                      </svg>}
                    />
                    <InputField
                      label="Company Name"
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your Company Ltd."
                      icon={<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M3 21h18"/>
                        <path d="M5 21V7l8-4v18"/>
                        <path d="M19 21V11l-6-4"/>
                      </svg>}
                    />
                  </div>

                  <div className={styles.formGrid}>
                    <SelectField
                      label="Industry"
                      name="industry"
                      value={formData.industry}
                      onChange={handleChange}
                      options={industryOptions}
                      required
                    />
                    <SelectField
                      label="Service Type"
                      name="serviceType"
                      value={formData.serviceType}
                      onChange={handleChange}
                      options={serviceOptions}
                      required
                    />
                  </div>

                  <TextareaField
                    label="Tell us about your requirements"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Please describe your specific needs, project details, or any questions you have..."
                  />

                  <div className={styles.submitSection}>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`${styles.submitButton} ${isSubmitting ? styles.submitting : ''}`}
                    >
                      {isSubmitting ? (
                        <div className={styles.loadingContent}>
                          <div className={styles.spinner}></div>
                          Processing...
                        </div>
                      ) : (
                        'Get Your Free Quote'
                      )}
                    </button>
                  </div>

                  <div className={styles.disclaimer}>
                    <p>🔒 Your information is secure and will never be shared with third parties.</p>
                  </div>
                </form>
              )}
            </div>
          </div>

          {/* Stats Section */}
          <div className={styles.statsSection}>
            <div className={styles.decorativeElement1}></div>
            <div className={styles.decorativeElement2}></div>
            
            <div className={styles.statsContent}>
              <div className={styles.statsHeader}>
                <h3 className={styles.statsTitle}>Why Choose Our Services?</h3>
              </div>
              
              <div className={styles.statsGrid}>
                <div className={styles.statItem}>
                  <div className={styles.statNumber}>24h</div>
                  <div className={styles.statLabel}>Response Time</div>
                </div>
                <div className={styles.statItem}>
                  <div className={styles.statNumber}>A+</div>
                  <div className={styles.statLabel}>Rated Insurers</div>
                </div>
                <div className={styles.statItem}>
                  <div className={styles.statNumber}>Global</div>
                  <div className={styles.statLabel}>Coverage</div>
                </div>
              </div>
              
              <div className={styles.featuresList}>
                <div className={styles.featureItem}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                    <polyline points="22,4 12,14.01 9,11.01"/>
                  </svg>
                  <span>Competitive rates & flexible terms</span>
                </div>
                <div className={styles.featureItem}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                    <polyline points="22,4 12,14.01 9,11.01"/>
                  </svg>
                  <span>Expert consultation & support</span>
                </div>
                <div className={styles.featureItem}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                    <polyline points="22,4 12,14.01 9,11.01"/>
                  </svg>
                  <span>Tailored solutions for your business</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestQuote;