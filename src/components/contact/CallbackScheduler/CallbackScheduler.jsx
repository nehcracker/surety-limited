import React, { useState } from 'react';
import styles from './CallbackScheduler.module.css';

const CallbackScheduler = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    preferredTime: '',
    timezone: '',
    reason: ''
  });

  const [formStatus, setFormStatus] = useState({
    loading: false,
    success: false,
    error: null
  });

  const timeSlots = [
    '9:00 AM - 10:00 AM',
    '10:00 AM - 11:00 AM', 
    '11:00 AM - 12:00 PM',
    '1:00 PM - 2:00 PM',
    '2:00 PM - 3:00 PM',
    '3:00 PM - 4:00 PM',
    '4:00 PM - 5:00 PM'
  ];

  const timezones = [
    'GMT (London)',
    'EAT (Nairobi)',
    'GST (Dubai)',
    'EST (New York)',
    'PST (Los Angeles)',
    'CET (Paris)',
    'IST (India)'
  ];

  const reasons = [
    'Bond Inquiry',
    'Insurance Quote',
    'Partnership Discussion',
    'Technical Support',
    'General Consultation',
    'Claims Assistance'
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    setFormStatus({ loading: true, success: false, error: null });

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setFormStatus({ loading: false, success: true, error: null });
      
      // Reset form on success
      setFormData({
        name: '',
        phone: '',
        preferredTime: '',
        timezone: '',
        reason: ''
      });

    } catch (error) {
      setFormStatus({ 
        loading: false, 
        success: false, 
        error: 'Failed to schedule callback. Please try again or contact us directly.' 
      });
    }
  };

  return (
    <section className={styles.callbackSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.badge}>
            <span className={styles.icon}>📅</span>
            Schedule a Callback
          </div>
          <h2 className={styles.heading}>Prefer a Call?</h2>
          <p className={styles.subheading}>
            Let us call you at your preferred time. We'll connect you with the right expert.
          </p>
        </div>

        <div className={styles.formContainer}>
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.formGrid}>
              {/* Name */}
              <div className={styles.formGroup}>
                <label htmlFor="name" className={styles.label}>
                  Your Name <span className={styles.required}>*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={styles.input}
                  placeholder="Enter your full name"
                  required
                />
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
                  className={styles.input}
                  placeholder="+44 123 456 7890"
                  required
                />
              </div>

              {/* Timezone */}
              <div className={styles.formGroup}>
                <label htmlFor="timezone" className={styles.label}>
                  Your Timezone <span className={styles.required}>*</span>
                </label>
                <select
                  id="timezone"
                  name="timezone"
                  value={formData.timezone}
                  onChange={handleInputChange}
                  className={styles.select}
                  required
                >
                  <option value="">Select your timezone</option>
                  {timezones.map(timezone => (
                    <option key={timezone} value={timezone}>{timezone}</option>
                  ))}
                </select>
              </div>

              {/* Preferred Time */}
              <div className={styles.formGroup}>
                <label htmlFor="preferredTime" className={styles.label}>
                  Preferred Time <span className={styles.required}>*</span>
                </label>
                <select
                  id="preferredTime"
                  name="preferredTime"
                  value={formData.preferredTime}
                  onChange={handleInputChange}
                  className={styles.select}
                  required
                >
                  <option value="">Select preferred time slot</option>
                  {timeSlots.map(time => (
                    <option key={time} value={time}>{time}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Reason */}
            <div className={styles.formGroup}>
              <label htmlFor="reason" className={styles.label}>
                Reason for Callback <span className={styles.required}>*</span>
              </label>
              <select
                id="reason"
                name="reason"
                value={formData.reason}
                onChange={handleInputChange}
                className={styles.select}
                required
              >
                <option value="">Select reason for callback</option>
                {reasons.map(reason => (
                  <option key={reason} value={reason}>{reason}</option>
                ))}
              </select>
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
                    Scheduling...
                  </>
                ) : (
                  <>
                    Schedule Callback
                    <span className={styles.calendarIcon}>📅</span>
                  </>
                )}
              </button>
            </div>

            {/* Status Messages */}
            {formStatus.success && (
              <div className={styles.successMessage}>
                <span className={styles.successIcon}>✅</span>
                Great! We've scheduled your callback. Our team will call you at the requested time.
              </div>
            )}

            {formStatus.error && (
              <div className={styles.errorMessage}>
                <span className={styles.errorIcon}>❌</span>
                {formStatus.error}
              </div>
            )}
          </form>

          <div className={styles.sideInfo}>
            <div className={styles.infoCard}>
              <div className={styles.infoIcon}>⏰</div>
              <h4 className={styles.infoTitle}>Flexible Scheduling</h4>
              <p className={styles.infoText}>
                Choose a time that works best for you across multiple time zones.
              </p>
            </div>

            <div className={styles.infoCard}>
              <div className={styles.infoIcon}>👥</div>
              <h4 className={styles.infoTitle}>Expert Consultation</h4>
              <p className={styles.infoText}>
                Get connected with specialists who understand your specific needs.
              </p>
            </div>

            <div className={styles.infoCard}>
              <div className={styles.infoIcon}>🔒</div>
              <h4 className={styles.infoTitle}>No Obligation</h4>
              <p className={styles.infoText}>
                The initial consultation is completely free with no commitment required.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallbackScheduler;
