import React from 'react';
import styles from './ContactInfo.module.css';

const ContactInfo = () => {
  const contactDetails = [
    {
      id: 'office',
      title: '🌐 Global Head Office',
      items: [
        'Surety Limited',
        '5th Floor, Canary Wharf',
        'London, UK E14 5AB'
      ]
    },
    {
      id: 'email',
      title: '📧 Email Addresses',
      items: [
        { label: 'General Inquiries', value: 'info@suretylimited.com', type: 'email' },
        { label: 'Client Support', value: 'support@suretylimited.com', type: 'email' },
        { label: 'Partnerships', value: 'partners@suretylimited.com', type: 'email' }
      ]
    },
    {
      id: 'phone',
      title: '📞 Phone Numbers',
      items: [
        { label: 'United Kingdom', value: '+44 203 111 9999', type: 'phone' },
        { label: 'Kenya', value: '+254 712 345 678', type: 'phone' },
        { label: 'UAE', value: '+971 55 123 4567', type: 'phone' }
      ]
    },
    {
      id: 'hours',
      title: '🕒 Office Hours',
      items: [
        'Monday – Friday: 8:00 AM to 6:00 PM (GMT)',
        'Saturday: By appointment only',
        'Sunday & Holidays: Closed'
      ]
    }
  ];

  const handleContactClick = (type, value) => {
    if (type === 'email') {
      window.location.href = `mailto:${value}`;
    } else if (type === 'phone') {
      window.location.href = `tel:${value}`;
    }
  };

  return (
    <section className={styles.contactInfo}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.heading}>Contact Information</h2>
          <p className={styles.subheading}>
            Get in touch with our global team through multiple channels
          </p>
        </div>

        <div className={styles.infoGrid}>
          {contactDetails.map((section) => (
            <div key={section.id} className={styles.infoCard}>
              <h3 className={styles.cardTitle}>{section.title}</h3>
              <div className={styles.cardContent}>
                {section.items.map((item, index) => (
                  <div key={index} className={styles.infoItem}>
                    {typeof item === 'string' ? (
                      <span className={styles.infoText}>{item}</span>
                    ) : (
                      <div className={styles.contactItem}>
                        <span className={styles.contactLabel}>{item.label}:</span>
                        <button
                          className={styles.contactValue}
                          onClick={() => handleContactClick(item.type, item.value)}
                          title={`${item.type === 'email' ? 'Send email to' : 'Call'} ${item.value}`}
                        >
                          {item.value}
                          <span className={styles.contactIcon}>
                            {item.type === 'email' ? '✉️' : '📞'}
                          </span>
                        </button>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className={styles.emergencyContact}>
          <div className={styles.emergencyCard}>
            <div className={styles.emergencyIcon}>🚨</div>
            <div className={styles.emergencyContent}>
              <h4 className={styles.emergencyTitle}>Need Urgent Assistance?</h4>
              <p className={styles.emergencyText}>
                For time-sensitive bond or insurance matters, call our emergency hotline
              </p>
              <button 
                className={styles.emergencyButton}
                onClick={() => handleContactClick('phone', '+44 203 111 9999')}
              >
                Emergency Hotline: +44 203 111 9999
              </button>
            </div>
          </div>
        </div>

        <div className={styles.socialLinks}>
          <h4 className={styles.socialTitle}>Follow Us</h4>
          <div className={styles.socialIcons}>
            <a href="linkedin.com" className={styles.socialLink} aria-label="LinkedIn">
              <span className={styles.socialIcon}>💼</span>
            </a>
            <a href="x.com" className={styles.socialLink} aria-label="Twitter">
              <span className={styles.socialIcon}>🐦</span>
            </a>
            <a href="facebook.com" className={styles.socialLink} aria-label="Facebook">
              <span className={styles.socialIcon}>👥</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;