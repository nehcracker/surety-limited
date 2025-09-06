import React, { useState, useEffect, useRef } from 'react';
import { Globe, TrendingDown, Users, ArrowRight, CheckCircle, Star } from 'lucide-react';
import styles from './WhyChooseUs.module.css';

const WhyChooseUs = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const sectionRef = useRef(null);

  const features = [
    {
      id: 1,
      icon: Globe,
      title: "Global Coverage",
      subtitle: "Access insurance and bonds across multiple markets worldwide",
      description: "Our extensive network of international partners ensures you get coverage wherever your business takes you. From local to global, we've got you covered.",
      benefits: ["150+ countries covered", "24/7 global support", "Multi-currency options"],
      color: "blue"
    },
    {
      id: 2,
      icon: TrendingDown,
      title: "Best Rates",
      subtitle: "Competitive premiums and fees from top-rated insurers",
      description: "We work with leading insurance providers to negotiate the best possible rates for our clients. Save money without compromising on coverage quality.",
      benefits: ["Up to 30% savings", "Price match guarantee", "No hidden fees"],
      color: "green"
    },
    {
      id: 3,
      icon: Users,
      title: "Expert Support",
      subtitle: "Professional advice to help you choose the right cover",
      description: "Our team of certified insurance experts provides personalized guidance to ensure you get exactly the coverage you need for your unique situation.",
      benefits: ["Certified experts", "Personalized service", "Free consultations"],
      color: "purple"
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

  const handleCardHover = (cardId) => {
    setHoveredCard(cardId);
  };

  const handleCardLeave = () => {
    setHoveredCard(null);
  };

  const getColorClasses = (color) => {
    switch (color) {
      case 'blue':
        return {
          gradient: styles.blueGradient,
          icon: styles.blueIcon,
          button: styles.blueButton
        };
      case 'green':
        return {
          gradient: styles.greenGradient,
          icon: styles.greenIcon,
          button: styles.greenButton
        };
      case 'purple':
        return {
          gradient: styles.purpleGradient,
          icon: styles.purpleIcon,
          button: styles.purpleButton
        };
      default:
        return {
          gradient: styles.blueGradient,
          icon: styles.blueIcon,
          button: styles.blueButton
        };
    }
  };

  return (
    <section 
      ref={sectionRef}
      className={styles.whyChooseUs}
    >
      <div className={styles.container}>
        <div className={`${styles.content} ${isVisible ? styles.visible : ''}`}>
          {/* Header */}
          <div className={styles.header}>
            <div className={styles.headerBadge}>
              <Star className={styles.badgeIcon} />
              Why Choose Surety Limited
            </div>
            <h2 className={styles.title}>
              Why Request a Quote From Us?
            </h2>
            <p className={styles.subtitle}>
              Discover the advantages that make us the preferred choice for thousands of clients worldwide
            </p>
          </div>

          {/* Cards Grid */}
          <div className={styles.cardsGrid}>
            {features.map((feature, index) => {
              const colorClasses = getColorClasses(feature.color);
              const IconComponent = feature.icon;
              const isHovered = hoveredCard === feature.id;

              return (
                <div
                  key={feature.id}
                  className={`${styles.card} ${isHovered ? styles.cardHovered : ''}`}
                  onMouseEnter={() => handleCardHover(feature.id)}
                  onMouseLeave={handleCardLeave}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Card Background Gradient */}
                  <div className={`${styles.cardGradient} ${colorClasses.gradient}`}></div>
                  
                  {/* Card Content */}
                  <div className={styles.cardContent}>
                    {/* Icon */}
                    <div className={`${styles.iconWrapper} ${colorClasses.icon}`}>
                      <IconComponent className={styles.icon} />
                    </div>

                    {/* Text Content */}
                    <div className={styles.textContent}>
                      <h3 className={styles.cardTitle}>{feature.title}</h3>
                      <p className={styles.cardSubtitle}>{feature.subtitle}</p>
                      <p className={styles.cardDescription}>{feature.description}</p>
                    </div>

                    {/* Benefits List */}
                    <div className={styles.benefitsList}>
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className={styles.benefit}>
                          <CheckCircle className={styles.checkIcon} />
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>

                    {/* Learn More Button */}
                    <button className={`${styles.learnMoreBtn} ${colorClasses.button}`}>
                      <span>Learn More</span>
                      <ArrowRight className={styles.arrowIcon} />
                    </button>
                  </div>

                  {/* Hover Effect Overlay */}
                  <div className={styles.hoverOverlay}></div>
                </div>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <div className={styles.bottomCTA}>
            <div className={styles.ctaCard}>
              <h3 className={styles.ctaTitle}>Ready to Get Started?</h3>
              <p className={styles.ctaDescription}>
                Join thousands of satisfied customers who trust us with their insurance needs
              </p>
              <button 
                className={styles.ctaButton}
                onClick={() => {
                  const formElement = document.getElementById('quote-form');
                  if (formElement) {
                    formElement.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Get Your Quote Now
                <ArrowRight className={styles.ctaArrow} />
              </button>
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

export default WhyChooseUs;