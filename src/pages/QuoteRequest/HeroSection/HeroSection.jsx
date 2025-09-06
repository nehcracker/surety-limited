import React, { useState, useEffect } from 'react';
import { Shield, ArrowRight } from 'lucide-react';
import styles from './HeroSection.module.css';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    { 
      title: "Request a Quote Today", 
      subtitle: "Get tailored insurance solutions for your business" 
    },
    { 
      title: "Global Coverage", 
      subtitle: "Access insurance and bonds worldwide" 
    },
    { 
      title: "Expert Support", 
      subtitle: "Professional advice from industry leaders" 
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const scrollToForm = () => {
    const formElement = document.getElementById('quote-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className={styles.hero}>
      {/* Animated Background Elements */}
      <div className={styles.backgroundElements}>
        <div className={`${styles.bgElement} ${styles.bgElement1}`}></div>
        <div className={`${styles.bgElement} ${styles.bgElement2}`}></div>
        <div className={`${styles.bgElement} ${styles.bgElement3}`}></div>
      </div>

      <div className={styles.container}>
        <div className={styles.content}>
          {/* Trust Badge */}
          <div className={styles.trustBadge}>
            <Shield className={styles.shieldIcon} />
            Trusted by 10,000+ clients worldwide
          </div>

          {/* Sliding Headlines */}
          <div className={styles.slideContainer}>
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`${styles.slide} ${
                  index === currentSlide ? styles.slideActive : ''
                }`}
              >
                <h1 className={styles.title}>
                  {slide.title}
                </h1>
                <p className={styles.subtitle}>
                  {slide.subtitle}. Our team will provide you with competitive rates and fast turnaround.
                </p>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className={styles.ctaContainer}>
            <button
              onClick={scrollToForm}
              className={`${styles.btn} ${styles.btnPrimary}`}
            >
              <span className={styles.btnText}>
                Start Your Quote
                <ArrowRight className={styles.arrowIcon} />
              </span>
            </button>
            
            <button className={`${styles.btn} ${styles.btnSecondary}`}>
              Learn More
            </button>
          </div>

          {/* Slide Indicators */}
          <div className={styles.indicators}>
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`${styles.indicator} ${
                  index === currentSlide ? styles.indicatorActive : ''
                }`}
              />
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className={styles.scrollIndicator}>
          <div className={styles.scrollWheel}>
            <div className={styles.scrollDot}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;