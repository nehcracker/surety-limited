import React, { useState } from 'react';
import styles from './GlobalReach.module.css';

const GlobalReach = () => {
  const [activeRegion, setActiveRegion] = useState(null);
  
  const regions = [
    {
      id: 'africa',
      name: 'Africa',
      countries: ['Kenya', 'South Africa', 'Nigeria', 'Egypt', 'Ghana'],
      color: '#B8543F'
    },
    {
      id: 'europe',
      name: 'Europe',
      countries: ['United Kingdom', 'Germany', 'France', 'Italy', 'Spain'],
      color: '#0067AC'
    },
    {
      id: 'middle-east',
      name: 'Middle East',
      countries: ['UAE', 'Saudi Arabia', 'Qatar', 'Kuwait', 'Oman'],
      color: '#DBA111'
    },
    {
      id: 'asia',
      name: 'Asia',
      countries: ['Singapore', 'India', 'China', 'Japan', 'Malaysia'],
      color: '#4E7C35'
    }
  ];

  const handleRegionClick = (regionId) => {
    if (activeRegion === regionId) {
      setActiveRegion(null);
    } else {
      setActiveRegion(regionId);
    }
  };

  return (
    <section className={styles.globalReachSection}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>
          <span className={styles.globeIcon}>🌍</span> Our Global Reach
        </h2>
        
        <div className={styles.mapContainer}>
          <div className={styles.worldMap}>
            {/* This would ideally be replaced with an SVG world map with interactive regions */}
            <div className={styles.mapPlaceholder}>
              <div className={styles.mapOverlay}></div>
            </div>
            
            <div className={styles.regionMarkers}>
              {regions.map(region => (
                <div 
                  key={region.id}
                  className={`${styles.regionMarker} ${styles[region.id]}`}
                  style={{ backgroundColor: region.color }}
                  onClick={() => handleRegionClick(region.id)}
                >
                  <span className={styles.markerPulse} style={{ borderColor: region.color }}></span>
                </div>
              ))}
            </div>
          </div>
          
          <div className={styles.regionInfo}>
            {regions.map(region => (
              <div 
                key={region.id}
                className={`${styles.regionCard} ${activeRegion === region.id ? styles.active : ''}`}
                style={{ 
                  '--region-color': region.color,
                  '--region-delay': `${regions.indexOf(region) * 0.1}s`
                }}
                onClick={() => handleRegionClick(region.id)}
              >
                <h3>{region.name}</h3>
                
                <div className={styles.regionCountries}>
                  <ul>
                    {region.countries.map((country, index) => (
                      <li key={index} style={{ animationDelay: `${index * 0.1}s` }}>{country}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <p className={styles.globalText}>
          Whether you're a contractor in Kenya, a trading firm in Dubai, or a developer in the UK, 
          we deliver solutions that work within your local frameworks while meeting international standards.
        </p>
        
        <div className={styles.complianceNote}>
          <div className={styles.noteIcon}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
          </div>
          <p>
            We work with a vetted network of insurers and legal experts to ensure jurisdictional compliance, 
            timely issuance, and total transparency in every engagement.
          </p>
        </div>
      </div>
    </section>
  );
};

export default GlobalReach;
