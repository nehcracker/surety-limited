import React, { useState, useMemo, useCallback } from 'react';
import styles from './GlobalReach.module.css';

const GlobalReach = () => {
  const [activeRegion, setActiveRegion] = useState(null);
  
  // Memoize regions array to prevent recreation on every render
  const regions = useMemo(() => [
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
  ], []);

  // Memoize the click handler to prevent recreation
  const handleRegionClick = useCallback((regionId) => {
    setActiveRegion(prevActive => prevActive === regionId ? null : regionId);
  }, []);

  // Memoize region index calculation to prevent repeated indexOf calls
  const getRegionDelay = useCallback((region) => {
    return regions.findIndex(r => r.id === region.id) * 0.1;
  }, [regions]);

  return (
    <section className={styles.globalReachSection}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>
          <span className={styles.globeIcon} role="img" aria-label="Globe">🌍</span> Our Global Reach
        </h2>
        
        <div className={styles.mapContainer}>
          <div className={styles.worldMap}>
            {/* This would ideally be replaced with an SVG world map with interactive regions */}
            <div className={styles.mapPlaceholder} role="img" aria-label="World map showing our global presence">
              <div className={styles.mapOverlay}></div>
            </div>
            
            <div className={styles.regionMarkers}>
              {regions.map(region => (
                <button 
                  key={region.id}
                  type="button"
                  className={`${styles.regionMarker} ${styles[region.id]}`}
                  style={{ backgroundColor: region.color }}
                  onClick={() => handleRegionClick(region.id)}
                  aria-label={`Select ${region.name} region`}
                  aria-pressed={activeRegion === region.id}
                >
                  <span 
                    className={styles.markerPulse} 
                    style={{ borderColor: region.color }}
                    aria-hidden="true"
                  ></span>
                </button>
              ))}
            </div>
          </div>
          
          <div className={styles.regionInfo} role="group" aria-label="Regional information">
            {regions.map(region => (
              <div 
                key={region.id}
                className={`${styles.regionCard} ${activeRegion === region.id ? styles.active : ''}`}
                style={{ 
                  '--region-color': region.color,
                  '--region-delay': `${getRegionDelay(region)}s`
                }}
                onClick={() => handleRegionClick(region.id)}
                role="button"
                tabIndex={0}
                aria-expanded={activeRegion === region.id}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleRegionClick(region.id);
                  }
                }}
              >
                <h3>{region.name}</h3>
                
                <div 
                  className={styles.regionCountries}
                  aria-hidden={activeRegion !== region.id}
                >
                  <ul>
                    {region.countries.map((country, index) => (
                      <li 
                        key={`${region.id}-${country}`} 
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        {country}
                      </li>
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
          <div className={styles.noteIcon} aria-hidden="true">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              role="img"
              aria-label="Compliance checkmark"
            >
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