import React, { useState, useEffect, useRef } from 'react';
import './TestimonialCarousel.css';

const testimonialsData = [
  {
    id: 1,
    quote: "Surety Limited handled our international bond requirements faster than any provider we've worked with. Highly professional.",
    author: "Ahmed R.",
    position: "Infrastructure Developer",
    company: "Global Construction Partners",
    location: "Dubai, UAE",
    rating: 5,
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face",
    date: "2025-05-10"
  },
  {
    id: 2,
    quote: "They truly understand the complexities of our industry and helped us navigate insurance in multiple countries.",
    author: "Grace M.",
    position: "Logistics Executive",
    company: "Trans Global Shipping",
    location: "Singapore",
    rating: 5,
    imageUrl: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=60&h=60&fit=crop&crop=face",
    date: "2025-04-22"
  },
  {
    id: 3,
    quote: "The team at Surety Limited provided exceptional service for our multinational insurance needs. Their expertise saved us both time and money.",
    author: "Carlos V.",
    position: "CFO",
    company: "Energia Solutions",
    location: "Madrid, Spain",
    rating: 5,
    imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face",
    date: "2025-03-15"
  },
  {
    id: 4,
    quote: "Working with Surety Limited transformed our approach to risk management. Their bond solutions were perfectly tailored to our requirements.",
    author: "Sarah J.",
    position: "Risk Manager",
    company: "Financial Trust Group",
    location: "London, UK",
    rating: 4,
    imageUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop&crop=face",
    date: "2025-02-28"
  },
  {
    id: 5,
    quote: "Their expertise in cross-border insurance requirements was invaluable for our expansion into new markets. Highly recommended!",
    author: "Robert K.",
    position: "Operations Director",
    company: "Global Trade Inc.",
    location: "New York, USA",
    rating: 5,
    imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=60&h=60&fit=crop&crop=face",
    date: "2025-01-10"
  },
  {
    id: 6,
    quote: "Outstanding customer service and innovative solutions. They made our complex insurance requirements seem effortless.",
    author: "Maria L.",
    position: "Project Manager",
    company: "Mediterranean Developments",
    location: "Barcelona, Spain",
    rating: 5,
    imageUrl: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=60&h=60&fit=crop&crop=face",
    date: "2024-12-20"
  }
];

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);
  const intervalRef = useRef(null);
  const carouselRef = useRef(null);

  // Update cards per view based on screen size
  useEffect(() => {
    const updateCardsPerView = () => {
      if (window.innerWidth <= 768) {
        setCardsPerView(1);
      } else if (window.innerWidth <= 1024) {
        setCardsPerView(2);
      } else {
        setCardsPerView(3);
      }
    };

    updateCardsPerView();
    window.addEventListener('resize', updateCardsPerView);
    return () => window.removeEventListener('resize', updateCardsPerView);
  }, []);

  // Create extended array for seamless infinite loop
  const extendedTestimonials = [...testimonialsData, ...testimonialsData.slice(0, cardsPerView)];

  const nextSlide = React.useCallback(() => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex + 1;
      const maxIndex = testimonialsData.length - cardsPerView + 1;
      if (nextIndex >= maxIndex) {
        // Reset to start after animation completes
        setTimeout(() => {
          setCurrentIndex(0);
        }, 500);
        return nextIndex;
      }
      return nextIndex;
    });
  }, [cardsPerView]);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex === 0) {
        const maxIndex = testimonialsData.length - cardsPerView;
        // Jump to end position and animate back
        setTimeout(() => {
          setCurrentIndex(maxIndex);
        }, 500);
        return maxIndex + 1;
      }
      return prevIndex - 1;
    });
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const toggleAutoplay = () => {
    setIsPlaying(!isPlaying);
  };

  // Auto-play functionality
  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = setInterval(nextSlide, 4000);
    } else {
      clearInterval(intervalRef.current);
    }
    return () => clearInterval(intervalRef.current);
  }, [isPlaying, cardsPerView, nextSlide]);

  // Touch handlers for mobile swipe
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
  };

  // Mouse handlers for desktop
  const handleMouseEnter = () => {
    setIsPlaying(false);
  };

  const handleMouseLeave = () => {
    setIsPlaying(true);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span
        key={index}
        className={`star ${index < rating ? 'star-filled' : 'star-empty'}`}
      >
        ★
      </span>
    ));
  };

  const GoogleIcon = () => (
    <svg className="google-icon" viewBox="0 0 24 24">
      <path fill="#4285f4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
      <path fill="#34a853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
      <path fill="#fbbc05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
      <path fill="#ea4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
    </svg>
  );

  const maxDots = testimonialsData.length - cardsPerView + 1;

  return (
    <section className="testimonial-section">
      <div className="testimonial-container">
        {/* Header */}
        <div className="testimonial-header">
          <h2 className="section-title">What Our Clients Say</h2>
          <p className="section-subtitle">
            Discover why businesses worldwide trust Surety Limited for their insurance and bond requirements
          </p>
          <div className="google-rating">
            <GoogleIcon />
            <span className="google-text">Google Reviews</span>
            <div className="rating-stars">
              {renderStars(5)}
              <span className="rating-text">4.9 out of 5</span>
            </div>
          </div>
        </div>

        {/* Carousel Container */}
        <div 
          className="carousel-container"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div 
            ref={carouselRef}
            className="carousel-track"
            style={{ 
              transform: `translateX(-${currentIndex * (100 / cardsPerView)}%)`,
              transition: currentIndex >= maxDots ? 'none' : 'transform 0.5s ease-in-out',
              width: `${(extendedTestimonials.length / cardsPerView) * 100}%`
            }}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {extendedTestimonials.map((testimonial, index) => (
              <div 
                key={`${testimonial.id}-${index}`} 
                className="testimonial-card"
                style={{ flex: `0 0 ${100 / cardsPerView}%` }}
              >
                <div className="card-content">
                  {/* Google Review Badge */}
                  <div className="review-badge">
                    <GoogleIcon />
                    <span className="badge-text">Google Review</span>
                    <div className="card-rating">
                      {renderStars(testimonial.rating)}
                    </div>
                  </div>

                  {/* Quote */}
                  <div className="quote-container">
                    <div className="quote-mark">"</div>
                    <blockquote className="quote-text">
                      {testimonial.quote}
                    </blockquote>
                    <div className="quote-mark quote-mark-end">"</div>
                  </div>

                  {/* Author Info */}
                  <div className="author-info">
                    <div className="author-image">
                      <img 
                        src={testimonial.imageUrl} 
                        alt={testimonial.author}
                      />
                    </div>
                    <div className="author-details">
                      <h4 className="author-name">{testimonial.author}</h4>
                      <p className="author-position">{testimonial.position}</p>
                      <p className="author-company">
                        {testimonial.company} • {testimonial.location}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            className="nav-button nav-button-prev"
            onClick={prevSlide}
            aria-label="Previous testimonial"
          >
            ‹
          </button>
          <button
            className="nav-button nav-button-next"
            onClick={nextSlide}
            aria-label="Next testimonial"
          >
            ›
          </button>
        </div>

        {/* Controls */}
        <div className="carousel-controls">
          {/* Dots Navigation */}
          <div className="dots-container">
            {Array.from({ length: maxDots }, (_, index) => (
              <button
                key={index}
                className={`dot ${index === currentIndex % maxDots ? 'dot-active' : ''}`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          {/* Play/Pause Button */}
          <button
            className="play-pause-button"
            onClick={toggleAutoplay}
            aria-label={isPlaying ? 'Pause autoplay' : 'Play autoplay'}
          >
            <span className="play-pause-icon">
              {isPlaying ? '⏸' : '▶'}
            </span>
            <span className="play-pause-text">
              {isPlaying ? 'Pause' : 'Play'}
            </span>
          </button>
        </div>

        {/* Progress Bar */}
        <div className="progress-bar">
          <div 
            className="progress-fill"
            style={{ 
              width: `${((currentIndex % maxDots + 1) / maxDots) * 100}%` 
            }}
          />
        </div>

        {/* CTA Section */}
        <div className="cta-section">
          <p className="cta-text">Ready to experience exceptional service?</p>
          <button className="cta-button">Get Your Quote Today</button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;