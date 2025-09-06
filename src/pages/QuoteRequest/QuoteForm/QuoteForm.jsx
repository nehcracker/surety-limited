import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, CheckCircle, Loader, AlertCircle, User, Mail, Phone, Globe, Shield, FileText } from 'lucide-react';
import styles from './QuoteForm.module.css';

const QuoteForm = ({ onSubmit, isSubmitted }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    country: '',
    coverType: '',
    coverageAmount: '',
    additionalInfo: ''
  });
  
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [focusedField, setFocusedField] = useState('');
  const [isDetectingCountry, setIsDetectingCountry] = useState(true);
  const formRef = useRef(null);

  const coverTypes = [
    'Surety & Bonds',
    'Property Insurance',
    'Motor Insurance',
    'Marine & Aviation',
    'Travel Insurance',
    'Cyber Liability',
    'Other'
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const currentRef = formRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  // Auto-detect user's country based on IP
  useEffect(() => {
    const detectCountry = async () => {
      try {
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();
        
        if (data.country_name) {
          setFormData(prev => ({
            ...prev,
            country: data.country_name
          }));
        }
      } catch (error) {
        console.error('Error detecting country:', error);
      } finally {
        setIsDetectingCountry(false);
      }
    };

    detectCountry();
  }, []);

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validatePhone = (phone) => {
    return /^[+]?[1-9][\d]{0,15}$/.test(phone.replace(/\s/g, ''));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (!formData.country.trim()) {
      newErrors.country = 'Country is required';
    }

    if (!formData.coverType) {
      newErrors.coverType = 'Please select a cover type';
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    setIsLoading(true);
    setErrors({});
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      onSubmit();
    }, 2000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleFocus = (fieldName) => {
    setFocusedField(fieldName);
  };

  const handleBlur = () => {
    setFocusedField('');
  };

  if (isSubmitted) {
    return (
      <section id="quote-form" className={styles.successSection}>
        <div className={styles.container}>
          <div className={styles.successCard}>
            <div className={styles.successIcon}>
              <CheckCircle className={styles.checkIcon} />
            </div>
            <h2 className={styles.successTitle}>Quote Request Submitted!</h2>
            <p className={styles.successMessage}>
              Thank you for your request. Our team will review your information and get back to you within 24 hours with a customized quote.
            </p>
            <div className={styles.successActions}>
              <button
                onClick={() => window.location.reload()}
                className={styles.successButton}
              >
                Submit Another Quote
              </button>
            </div>
            <div className={styles.nextSteps}>
              <h3 className={styles.nextStepsTitle}>What happens next?</h3>
              <div className={styles.stepsList}>
                <div className={styles.step}>
                  <span className={styles.stepNumber}>1</span>
                  <span>Our team reviews your requirements</span>
                </div>
                <div className={styles.step}>
                  <span className={styles.stepNumber}>2</span>
                  <span>We prepare a customized quote</span>
                </div>
                <div className={styles.step}>
                  <span className={styles.stepNumber}>3</span>
                  <span>You receive your quote within 24 hours</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section 
      id="quote-form" 
      ref={formRef}
      className={styles.formSection}
    >
      <div className={styles.container}>
        <div className={`${styles.content} ${isVisible ? styles.visible : ''}`}>
          {/* Header */}
          <div className={styles.header}>
            <h2 className={styles.title}>Get Your Custom Quote</h2>
            <p className={styles.subtitle}>
              Fill out the form below and we'll get back to you within 24 hours
            </p>
          </div>

          {/* Form Card */}
          <div className={styles.formCard}>
            <div className={styles.formDecoration}></div>
            
            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.fieldsGrid}>
                {/* Full Name */}
                <div className={styles.fieldGroup}>
                  <label className={styles.label}>
                    <User className={styles.labelIcon} />
                    Full Name / Company Name *
                  </label>
                  <div className={`${styles.inputWrapper} ${focusedField === 'fullName' ? styles.focused : ''} ${errors.fullName ? styles.error : ''}`}>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      onFocus={() => handleFocus('fullName')}
                      onBlur={handleBlur}
                      className={styles.input}
                      placeholder="Enter your name or company"
                    />
                  </div>
                  {errors.fullName && (
                    <div className={styles.errorMessage}>
                      <AlertCircle className={styles.errorIcon} />
                      {errors.fullName}
                    </div>
                  )}
                </div>

                {/* Email */}
                <div className={styles.fieldGroup}>
                  <label className={styles.label}>
                    <Mail className={styles.labelIcon} />
                    Email Address *
                  </label>
                  <div className={`${styles.inputWrapper} ${focusedField === 'email' ? styles.focused : ''} ${errors.email ? styles.error : ''}`}>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => handleFocus('email')}
                      onBlur={handleBlur}
                      className={styles.input}
                      placeholder="your.email@example.com"
                    />
                  </div>
                  {errors.email && (
                    <div className={styles.errorMessage}>
                      <AlertCircle className={styles.errorIcon} />
                      {errors.email}
                    </div>
                  )}
                </div>

                {/* Phone */}
                <div className={styles.fieldGroup}>
                  <label className={styles.label}>
                    <Phone className={styles.labelIcon} />
                    Phone Number *
                  </label>
                  <div className={`${styles.inputWrapper} ${focusedField === 'phone' ? styles.focused : ''} ${errors.phone ? styles.error : ''}`}>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      onFocus={() => handleFocus('phone')}
                      onBlur={handleBlur}
                      className={styles.input}
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                  {errors.phone && (
                    <div className={styles.errorMessage}>
                      <AlertCircle className={styles.errorIcon} />
                      {errors.phone}
                    </div>
                  )}
                </div>

                {/* Country */}
                <div className={styles.fieldGroup}>
                  <label className={styles.label}>
                    <Globe className={styles.labelIcon} />
                    Country / Location *
                  </label>
                  <div className={`${styles.inputWrapper} ${focusedField === 'country' ? styles.focused : ''} ${errors.country ? styles.error : ''}`}>
                    <input
                      type="text"
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      onFocus={() => handleFocus('country')}
                      onBlur={handleBlur}
                      className={styles.input}
                      placeholder={isDetectingCountry ? "Detecting your location..." : "Enter your country"}
                      disabled={isDetectingCountry}
                    />
                    {isDetectingCountry && (
                      <div className={styles.loadingIndicator}>
                        <Loader className={styles.smallLoader} size={16} />
                      </div>
                    )}
                  </div>
                  {errors.country && (
                    <div className={styles.errorMessage}>
                      <AlertCircle className={styles.errorIcon} />
                      {errors.country}
                    </div>
                  )}
                </div>
              </div>

              {/* Cover Type */}
              <div className={styles.fieldGroup}>
                <label className={styles.label}>
                  <Shield className={styles.labelIcon} />
                  Type of Cover Needed *
                </label>
                <div className={`${styles.selectWrapper} ${focusedField === 'coverType' ? styles.focused : ''} ${errors.coverType ? styles.error : ''}`}>
                  <select
                    name="coverType"
                    value={formData.coverType}
                    onChange={handleChange}
                    onFocus={() => handleFocus('coverType')}
                    onBlur={handleBlur}
                    className={styles.select}
                  >
                    <option value="">Select coverage type</option>
                    {coverTypes.map((type) => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                  <ChevronDown className={styles.selectIcon} />
                </div>
                {errors.coverType && (
                  <div className={styles.errorMessage}>
                    <AlertCircle className={styles.errorIcon} />
                    {errors.coverType}
                  </div>
                )}
              </div>

              {/* Coverage Amount */}
              <div className={styles.fieldGroup}>
                <label className={styles.label}>
                  <FileText className={styles.labelIcon} />
                  Coverage Amount / Bond Size
                </label>
                <div className={`${styles.inputWrapper} ${focusedField === 'coverageAmount' ? styles.focused : ''}`}>
                  <input
                    type="text"
                    name="coverageAmount"
                    value={formData.coverageAmount}
                    onChange={handleChange}
                    onFocus={() => handleFocus('coverageAmount')}
                    onBlur={handleBlur}
                    className={styles.input}
                    placeholder="e.g., $100,000 or £50,000"
                  />
                </div>
              </div>

              {/* Additional Info */}
              <div className={styles.fieldGroup}>
                <label className={styles.label}>
                  <FileText className={styles.labelIcon} />
                  Additional Information / Specific Requirements
                </label>
                <div className={`${styles.textareaWrapper} ${focusedField === 'additionalInfo' ? styles.focused : ''}`}>
                  <textarea
                    name="additionalInfo"
                    value={formData.additionalInfo}
                    onChange={handleChange}
                    onFocus={() => handleFocus('additionalInfo')}
                    onBlur={handleBlur}
                    rows="4"
                    className={styles.textarea}
                    placeholder="Tell us more about your specific requirements..."
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className={styles.submitSection}>
                <button
                  type="submit"
                  disabled={isLoading}
                  className={`${styles.submitButton} ${isLoading ? styles.loading : ''}`}
                >
                  {isLoading ? (
                    <>
                      <Loader className={styles.loadingIcon} />
                      Processing...
                    </>
                  ) : (
                    'Request Quote'
                  )}
                </button>
                <p className={styles.submitNote}>
                  By submitting this form, you agree to our terms and conditions.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteForm;