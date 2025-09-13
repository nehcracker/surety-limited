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
  const [submitError, setSubmitError] = useState('');

  // Cloudflare Worker endpoint
  const WORKER_ENDPOINT = 'https://quote-request-worker.nehlimac4.workers.dev';

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear any previous error when user starts typing
    if (submitError) {
      setSubmitError('');
    }
  };

  const validateForm = () => {
    const requiredFields = ['name', 'email', 'phone', 'industry', 'serviceType'];
    const errors = [];

    // Check required fields
    for (const field of requiredFields) {
      if (!formData[field] || formData[field].trim() === '') {
        errors.push(`${field.charAt(0).toUpperCase() + field.slice(1)} is required`);
      }
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.email && !emailRegex.test(formData.email)) {
      errors.push('Please enter a valid email address');
    }

    // Phone validation (basic)
    const phoneRegex = /^[+]?[1-9][\d]{0,15}$/;
    if (formData.phone && !phoneRegex.test(formData.phone.replace(/[\s-()]/g, ''))) {
      errors.push('Please enter a valid phone number');
    }

    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Clear previous errors
    setSubmitError('');
    
    // Client-side validation
    const validationErrors = validateForm();
    if (validationErrors.length > 0) {
      setSubmitError(validationErrors[0]); // Show first error
      return;
    }

    setIsSubmitting(true);
    
    try {
      const response = await fetch(WORKER_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim().toLowerCase(),
          phone: formData.phone.trim(),
          company: formData.company.trim(),
          industry: formData.industry,
          serviceType: formData.serviceType,
          message: formData.message.trim()
        }),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        console.log('Form submitted successfully:', result);
        setFormSubmitted(true);
        
        // Reset form after 5 seconds (increased from 3 for better UX)
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
        }, 5000);
      } else {
        // Handle API errors
        const errorMessage = result.error || 'Failed to submit form. Please try again.';
        setSubmitError(errorMessage);
        
        // Log detailed error for debugging
        console.error('Form submission failed:', {
          status: response.status,
          statusText: response.statusText,
          result
        });
      }
    } catch (error) {
      console.error('Network error submitting form:', error);
      
      // Handle different types of errors
      let errorMessage = 'Unable to submit your request. ';
      
      if (error.name === 'TypeError' && error.message.includes('fetch')) {
        errorMessage += 'Please check your internet connection and try again.';
      } else if (error.name === 'AbortError') {
        errorMessage += 'Request timed out. Please try again.';
      } else {
        errorMessage += 'Please try again in a few moments.';
      }
      
      setSubmitError(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
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
          disabled={isSubmitting}
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
          disabled={isSubmitting}
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
          disabled={isSubmitting}
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
                  <div className={styles.successDetails}>
                    <p>📧 Confirmation sent to: <strong>{formData.email}</strong></p>
                    <p>📞 We'll call you at: <strong>{formData.phone}</strong></p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className={styles.form}>
                  {/* Error Message Display */}
                  {submitError && (
                    <div className={styles.errorMessage}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10"/>
                        <line x1="15" y1="9" x2="9" y2="15"/>
                        <line x1="9" y1="9" x2="15" y2="15"/>
                      </svg>
                      <span>{submitError}</span>
                    </div>
                  )}

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
                          Submitting Your Request...
                        </div>
                      ) : (
                        <>
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginRight: '8px' }}>
                            <path d="M22 2L11 13"/>
                            <polygon points="22,2 15,22 11,13 2,9"/>
                          </svg>
                          Get Your Free Quote
                        </>
                      )}
                    </button>
                  </div>

                  <div className={styles.disclaimer}>
                    <p>🔒 Your information is secure and will never be shared with third parties.</p>
                    <p>⚡ Average response time: 2-4 hours during business hours</p>
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