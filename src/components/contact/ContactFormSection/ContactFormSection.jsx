import React, { useState } from 'react';
import styles from './ContactFormSection.module.css';

const ContactFormSection = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    company: '',
    email: '',
    phone: '',
    country: '',
    inquiryType: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState({
    loading: false,
    success: false,
    error: null
  });

  const [errors, setErrors] = useState({});

  const countries = [
    'United Kingdom', 'Kenya', 'UAE', 'Nigeria', 'South Africa', 
    'Ghana', 'Tanzania', 'Uganda', 'Rwanda', 'Zambia', 'Other'
  ];

  const inquiryTypes = [
    'Quote Request',
    'Bond Request', 
    'Partnership',
    'General Inquiry',
    'Technical Support',
    'Other'
  ];

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }

    if (!formData.inquiryType) {
      newErrors.inquiryType = 'Please select an inquiry type';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
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

  const mapInquiryTypeToServiceType = (inquiryType) => {
    const mapping = {
      'Quote Request': 'other',
      'Bond Request': 'bonds',
      'Partnership': 'other',
      'General Inquiry': 'other',
      'Technical Support': 'other',
      'Other': 'other'
    };
    return mapping[inquiryType] || 'other';
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setFormStatus({ loading: true, success: false, error: null });

    try {
      const payload = {
        name: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        industry: 'other', // Default since form doesn't have industry field
        serviceType: mapInquiryTypeToServiceType(formData.inquiryType),
        message: formData.message,
        company: formData.company || undefined
      };

      const response = await fetch('https://quote-request-worker.nehlmac4.workers.dev', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setFormStatus({ loading: false, success: true, error: null });

        // Reset form on success
        setFormData({
          fullName: '',
          company: '',
          email: '',
          phone: '',
          country: '',
          inquiryType: '',
          message: ''
        });
      } else {
        setFormStatus({
          loading: false,
          success: false,
          error: result.error || 'Failed to send message. Please try again or contact us directly.'
        });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setFormStatus({
        loading: false,
        success: false,
        error: 'Network error. Please check your connection and try again.'
      });
    }
  };

  return (
    <section className={styles.formSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.badge}>
            <span className={styles.icon}>📥</span>
            Send Us a Message
          </div>
          <h2 className={styles.heading}>Get in Touch</h2>
          <p className={styles.subheading}>
            Fill out the form below and one of our advisors will get back to you within 24 hours.
          </p>
        </div>

        <div className={styles.formContainer}>
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.formGrid}>
              {/* Full Name */}
              <div className={styles.formGroup}>
                <label htmlFor="fullName" className={styles.label}>
                  Full Name <span className={styles.required}>*</span>
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className={`${styles.input} ${errors.fullName ? styles.error : ''}`}
                  placeholder="Enter your full name"
                />
                {errors.fullName && <span className={styles.errorText}>{errors.fullName}</span>}
              </div>

              {/* Company */}
              <div className={styles.formGroup}>
                <label htmlFor="company" className={styles.label}>
                  Company / Organization
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className={styles.input}
                  placeholder="Enter company name"
                />
              </div>

              {/* Email */}
              <div className={styles.formGroup}>
                <label htmlFor="email" className={styles.label}>
                  Email Address <span className={styles.required}>*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`${styles.input} ${errors.email ? styles.error : ''}`}
                  placeholder="Enter your email address"
                />
                {errors.email && <span className={styles.errorText}>{errors.email}</span>}
              </div>

              {/* Phone */}
              <div className={styles.formGroup}>
                <label htmlFor="phone" className={styles.label}>
                  Phone Number <span className={styles.required}>*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className={`${styles.input} ${errors.phone ? styles.error : ''}`}
                  placeholder="+44 123 456 7890"
                />
                {errors.phone && <span className={styles.errorText}>{errors.phone}</span>}
              </div>

              {/* Country */}
              <div className={styles.formGroup}>
                <label htmlFor="country" className={styles.label}>
                  Country
                </label>
                <select
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                  className={styles.select}
                >
                  <option value="">Select your country</option>
                  {countries.map(country => (
                    <option key={country} value={country}>{country}</option>
                  ))}
                </select>
              </div>

              {/* Inquiry Type */}
              <div className={styles.formGroup}>
                <label htmlFor="inquiryType" className={styles.label}>
                  Type of Inquiry <span className={styles.required}>*</span>
                </label>
                <select
                  id="inquiryType"
                  name="inquiryType"
                  value={formData.inquiryType}
                  onChange={handleInputChange}
                  className={`${styles.select} ${errors.inquiryType ? styles.error : ''}`}
                >
                  <option value="">Select inquiry type</option>
                  {inquiryTypes.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
                {errors.inquiryType && <span className={styles.errorText}>{errors.inquiryType}</span>}
              </div>
            </div>

            {/* Message */}
            <div className={styles.formGroup}>
              <label htmlFor="message" className={styles.label}>
                Message <span className={styles.required}>*</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                className={`${styles.textarea} ${errors.message ? styles.error : ''}`}
                placeholder="Please provide details about your inquiry..."
                rows="5"
              />
              {errors.message && <span className={styles.errorText}>{errors.message}</span>}
            </div>

            {/* Submit Button */}
            <div className={styles.submitSection}>
              <button
                type="submit"
                disabled={formStatus.loading}
                className={`${styles.submitButton} ${formStatus.loading ? styles.loading : ''}`}
              >
                {formStatus.loading ? (
                  <>
                    <span className={styles.spinner}></span>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <span className={styles.sendIcon}>📤</span>
                  </>
                )}
              </button>
            </div>

            {/* Status Messages */}
            {formStatus.success && (
              <div className={styles.successMessage}>
                <span className={styles.successIcon}>✅</span>
                Thank you! Your message has been sent successfully. We'll get back to you within 24 hours.
              </div>
            )}

            {formStatus.error && (
              <div className={styles.errorMessage}>
                <span className={styles.errorIcon}>❌</span>
                {formStatus.error}
              </div>
            )}
          </form>

          <div className={styles.formInfo}>
            <div className={styles.infoCard}>
              <div className={styles.infoIcon}>⚡</div>
              <h4 className={styles.infoTitle}>Quick Response</h4>
              <p className={styles.infoText}>
                We typically respond to all inquiries within 24 hours during business days.
              </p>
            </div>

            <div className={styles.infoCard}>
              <div className={styles.infoIcon}>🔒</div>
              <h4 className={styles.infoTitle}>Secure & Confidential</h4>
              <p className={styles.infoText}>
                Your information is protected and will never be shared with third parties.
              </p>
            </div>

            <div className={styles.infoCard}>
              <div className={styles.infoIcon}>🌍</div>
              <h4 className={styles.infoTitle}>Global Support</h4>
              <p className={styles.infoText}>
                Our team operates across multiple time zones to serve you better.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;