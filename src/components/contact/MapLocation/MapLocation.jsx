import React, { useState } from 'react';
import styles from './MapLocation.module.css';

const MapLocation = () => {
  const [activeOffice, setActiveOffice] = useState('london');

  const offices = [
    {
      id: 'london',
      name: 'London Head Office',
      address: '5th Floor, Canary Wharf, London, UK E14 5AB',
      phone: '+44 203 111 9999',
      email: 'london@suretylimited.com',
      hours: 'Mon-Fri: 8:00 AM - 6:00 PM GMT',
      coordinates: { lat: 51.5049, lng: -0.0197 },
      flag: '🇬🇧'
    },
    {
      id: 'nairobi',
      name: 'Nairobi Office',
      address: 'Westlands Business Park, Nairobi, Kenya',
      phone: '+254 712 345 678',
      email: 'nairobi@suretylimited.com',
      hours: 'Mon-Fri: 8:00 AM - 5:00 PM EAT',
      coordinates: { lat: -1.2921, lng: 36.8219 },
      flag: '🇰🇪'
    },
    {
      id: 'dubai',
      name: 'Dubai Office',
      address: 'Dubai International Financial Centre, UAE',
      phone: '+971 55 123 4567',
      email: 'dubai@suretylimited.com',
      hours: 'Sun-Thu: 9:00 AM - 6:00 PM GST',
      coordinates: { lat: 25.2048, lng: 55.2708 },
      flag: '🇦🇪'
    }
  ];

  const handleDirectionsClick = (office) => {
    const address = encodeURIComponent(office.address);
    window.open(`https://www.google.com/maps/dir/?api=1&destination=${address}`, '_blank');
  };

  const handlePhoneClick = (phone) => {
    window.location.href = `tel:${phone}`;
  };

  const handleEmailClick = (email) => {
    window.location.href = `mailto:${email}`;
  };

  return (
    <section className={styles.mapSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.badge}>
            <span className={styles.icon}>🗺️</span>
            Our Locations
          </div>
          <h2 className={styles.heading}>Find Us Worldwide</h2>
          <p className={styles.subheading}>
            With offices across key global markets, we're never far from where you need us.
          </p>
        </div>

        <div className={styles.mapContainer}>
          <div className={styles.officeSelector}>
            {offices.map((office) => (
              <button
                key={office.id}
                onClick={() => setActiveOffice(office.id)}
                className={`${styles.officeButton} ${
                  activeOffice === office.id ? styles.active : ''
                }`}
              >
                <span className={styles.officeFlag}>{office.flag}</span>
                <span className={styles.officeName}>{office.name}</span>
              </button>
            ))}
          </div>

          <div className={styles.mapWrapper}>
            <div className={styles.mapPlaceholder}>
              <div className={styles.mapIcon}>🗺️</div>
              <h3 className={styles.mapTitle}>Interactive Map</h3>
              <p className={styles.mapDescription}>
                Google Maps integration would be implemented here showing our office locations worldwide.
              </p>
              <div className={styles.mapCoordinates}>
                {offices.find(office => office.id === activeOffice) && (
                  <span>
                    📍 {offices.find(office => office.id === activeOffice).coordinates.lat}, 
                    {offices.find(office => office.id === activeOffice).coordinates.lng}
                  </span>
                )}
              </div>
            </div>

            <div className={styles.mapControls}>
              <button 
                className={styles.directionsButton}
                onClick={() => handleDirectionsClick(offices.find(office => office.id === activeOffice))}
              >
                <span className={styles.buttonIcon}>🧭</span>
                View Directions
              </button>
              <button className={styles.streetViewButton}>
                <span className={styles.buttonIcon}>👁️</span>
                Street View
              </button>
            </div>
          </div>

          <div className={styles.officeDetails}>
            {offices.map((office) => (
              <div
                key={office.id}
                className={`${styles.officeCard} ${
                  activeOffice === office.id ? styles.activeCard : ''
                }`}
              >
                <div className={styles.cardHeader}>
                  <span className={styles.cardFlag}>{office.flag}</span>
                  <h3 className={styles.cardTitle}>{office.name}</h3>
                </div>

                <div className={styles.cardContent}>
                  <div className={styles.detailItem}>
                    <span className={styles.detailIcon}>📍</span>
                    <div className={styles.detailText}>
                      <strong>Address:</strong>
                      <span>{office.address}</span>
                    </div>
                  </div>

                  <div className={styles.detailItem}>
                    <span className={styles.detailIcon}>📞</span>
                    <div className={styles.detailText}>
                      <strong>Phone:</strong>
                      <button 
                        className={styles.contactLink}
                        onClick={() => handlePhoneClick(office.phone)}
                      >
                        {office.phone}
                      </button>
                    </div>
                  </div>

                  <div className={styles.detailItem}>
                    <span className={styles.detailIcon}>📧</span>
                    <div className={styles.detailText}>
                      <strong>Email:</strong>
                      <button 
                        className={styles.contactLink}
                        onClick={() => handleEmailClick(office.email)}
                      >
                        {office.email}
                      </button>
                    </div>
                  </div>

                  <div className={styles.detailItem}>
                    <span className={styles.detailIcon}>🕒</span>
                    <div className={styles.detailText}>
                      <strong>Hours:</strong>
                      <span>{office.hours}</span>
                    </div>
                  </div>
                </div>

                <div className={styles.cardActions}>
                  <button 
                    className={styles.primaryAction}
                    onClick={() => handleDirectionsClick(office)}
                  >
                    <span className={styles.actionIcon}>🧭</span>
                    Get Directions
                  </button>
                  <button 
                    className={styles.secondaryAction}
                    onClick={() => handlePhoneClick(office.phone)}
                  >
                    <span className={styles.actionIcon}>📞</span>
                    Call Office
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.globalNote}>
          <div className={styles.noteCard}>
            <div className={styles.noteIcon}>🌍</div>
            <div className={styles.noteContent}>
              <h4 className={styles.noteTitle}>Global Coverage</h4>
              <p className={styles.noteText}>
                While we have physical offices in these locations, our services extend to over 50 countries worldwide. 
                Contact any of our offices for assistance regardless of your location.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapLocation;