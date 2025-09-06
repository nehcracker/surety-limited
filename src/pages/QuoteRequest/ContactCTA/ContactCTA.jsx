import React, { useState, useEffect, useRef } from 'react';
import { Mail, Phone, MessageCircle, MapPin, Clock, ArrowRight, ExternalLink } from 'lucide-react';
import styles from './ContactCTA.module.css';

const ContactCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredContact, setHoveredContact] = useState(null);
  const sectionRef = useRef(null);

  const contactMethods = [
    {
      id: 'email',
      icon: Mail,
      title: 'Email Us',
      value: 'info@suretylimited.com',
      description: 'Get a response within 2 hours',
      action: 'mailto:info@suretylimited.com',
      color: 'blue'
    },
    {
      id: 'phone',
      icon: Phone,
      title: 'Call Us',
      value: '+44 123 456 7890',
      description: 'Mon-Fri, 9 AM - 6 PM GMT',
      action: 'tel:+441234567890',
      color: 'green'
    },
    {
      id: 'chat',
      icon: MessageCircle,
      title: 'Live Chat',
      value: 'Start Chat',
      description: 'Available 24/7 for instant help',
      action: '#',
      color: 'purple'
    }
  ];

  const officeInfo = [
    {
      icon: MapPin,
      title: 'Head Office',
      value: 'London, United Kingdom'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      value: 'Mon-Fri: 9 AM - 6 PM GMT'
    }
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

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const handleContactClick = (action, method) => {
    if (method === 'chat') {
      // Simulate opening chat widget
      alert('Live chat feature would open here');
      return;
    }
    
    if (action.startsWith('mailto:') || action.startsWith('tel:')) {
      window.location.href = action;
    }
  };

  const scrollToForm = () => {
    const formElement = document.getElementById('quote-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const getColorClasses = (color) => {
    switch (color) {
      case 'blue':
        return {
          card: styles.blueCard,
          icon: styles.blueIcon,
          button: styles.blueButton
        };
      case 'green':
        return {
          card: styles.greenCard,
          icon: styles.greenIcon,
          button: styles.greenButton
        };
      case 'purple':
        return {
          card: styles.purpleCard,
          icon: styles.purpleIcon,
          button: styles.purpleButton
        };
      default:
        return {
          card: styles.blueCard,
          icon: styles.blueIcon,
          button: styles.blueButton
        };
    }
  };

  return (
    <section 
      ref={sectionRef}
      className={styles.contactCTA}
    >
      <div className={styles.container}>
        <div className={`${styles.content} ${isVisible ? styles.visible : ''}`}>
          
          {/* Header */}
          <div className={styles.header}>
            <h2 className={styles.title}>Prefer to Speak With Us Directly?</h2>
            <p className={styles.subtitle}>
              Our team is here to help you find the perfect insurance solution. 
              Choose your preferred way to get in touch.
            </p>
          </div>

          {/* Contact Methods Grid */}
          <div className={styles.contactGrid}>
            {contactMethods.map((method, index) => {
              const IconComponent = method.icon;
              const colorClasses = getColorClasses(method.color);
              const isHovered = hoveredContact === method.id;

              return (
                <div
                  key={method.id}
                  className={`${styles.contactCard} ${colorClasses.card} ${isHovered ? styles.cardHovered : ''}`}
                  onMouseEnter={() => setHoveredContact(method.id)}
                  onMouseLeave={() => setHoveredContact(null)}
                  onClick={() => handleContactClick(method.action, method.id)}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className={styles.cardContent}>
                    <div className={`${styles.iconWrapper} ${colorClasses.icon}`}>
                      <IconComponent className={styles.contactIcon} />
                    </div>
                    
                    <div className={styles.contactInfo}>
                      <h3 className={styles.contactTitle}>{method.title}</h3>
                      <div className={styles.contactValue}>{method.value}</div>
                      <p className={styles.contactDescription}>{method.description}</p>
                    </div>

                    <button className={`${styles.contactButton} ${colorClasses.button}`}>
                      <span>Contact Now</span>
                      {method.id === 'chat' ? (
                        <MessageCircle className={styles.buttonIcon} />
                      ) : (
                        <ExternalLink className={styles.buttonIcon} />
                      )}
                    </button>
                  </div>

                  {/* Hover Effect */}
                  <div className={styles.hoverEffect}></div>
                </div>
              );
            })}
          </div>

          {/* Office Information */}
          <div className={styles.officeSection}>
            <div className={styles.officeCard}>
              <h3 className={styles.officeTitle}>Our Office</h3>
              <div className={styles.officeInfo}>
                {officeInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <div key={index} className={styles.officeItem}>
                      <IconComponent className={styles.officeIcon} />
                      <div>
                        <div className={styles.officeLabel}>{info.title}</div>
                        <div className={styles.officeValue}>{info.value}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className={styles.bottomCTA}>
            <div className={styles.ctaContent}>
              <h3 className={styles.ctaTitle}>Still Have Questions?</h3>
              <p className={styles.ctaDescription}>
                Our insurance experts are standing by to help you make the right choice.
              </p>
              <div className={styles.ctaButtons}>
                <button 
                  className={styles.primaryButton}
                  onClick={scrollToForm}
                >
                  Get Free Quote
                  <ArrowRight className={styles.buttonArrow} />
                </button>
                <button 
                  className={styles.secondaryButton}
                  onClick={() => handleContactClick('tel:+441234567890', 'phone')}
                >
                  Call Now
                  <Phone className={styles.buttonArrow} />
                </button>
              </div>
            </div>
          </div>

          {/* Trust Badges */}
          <div className={styles.trustBadges}>
            <div className={styles.badge}>
              <div className={styles.badgeIcon}>🏆</div>
              <span>Award Winning Service</span>
            </div>
            <div className={styles.badge}>
              <div className={styles.badgeIcon}>⚡</div>
              <span>Fast Response Time</span>
            </div>
            <div className={styles.badge}>
              <div className={styles.badgeIcon}>🔒</div>
              <span>Secure & Confidential</span>
            </div>
          </div>
        </div>

        {/* Background Decorations */}
        <div className={styles.backgroundDecorations}>
          <div className={styles.decoration1}></div>
          <div className={styles.decoration2}></div>
          <div className={styles.decoration3}></div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;