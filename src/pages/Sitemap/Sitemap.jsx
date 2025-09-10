import React from 'react';
import { Link } from 'react-router-dom';
import { Title, Meta } from 'react-head';
import './Sitemap.css';

const Sitemap = () => {
  // Define your site structure
  const siteStructure = [
    {
      title: 'Home',
      path: '/',
      description: 'Surety & Bonds | General Insurance Covers | Corporate Risk Solutions',
      lastModified: '2024-12-11'
    },
    {
      title: 'About Us',
      path: '/about',
      description: 'About Surety Limited | Global insurance | Licensed international insurance brokerage',
      lastModified: '2024-12-11'
    },
    {
      title: 'Services',
      path: '/services',
      description: 'Comprehensive surety bonds and insurance services with global coverage',
      lastModified: '2024-12-11',
      children: [
        {
          title: 'Bonds',
          path: '/services/bonds',
          description: 'Complete bonding services - Performance bonds, bid bonds, financial guarantees',
          lastModified: '2024-12-11',
          children: [
            {
              title: 'Performance Bonds',
              path: '/services/bonds/performance-bonds',
              description: 'Specialized performance bond services and contract guarantees',
              lastModified: '2024-12-11'
            }
          ]
        },
        {
          title: 'General Insurance',
          path: '/services/insurance',
          description: 'General insurance coverage - Trade credit, marine cargo, political risk insurance',
          lastModified: '2024-12-11'
        }
      ]
    },
    {
      title: 'Contact',
      path: '/contact',
      description: 'Contact Surety Limited | Get in Touch with Our Insurance Experts',
      lastModified: '2024-12-11'
    },
    {
      title: 'Request Quote',
      path: '/quote-request',
      description: 'Request a Quote | Surety Limited - Insurance & Bonds with best rates',
      lastModified: '2024-12-11'
    }
  ];

  // Render site structure recursively
  const renderSiteMap = (items, level = 0) => {
    return (
      <ul className={`sitemap-list level-${level}`}>
        {items.map((item, index) => (
          <li key={index} className="sitemap-item">
            <div className="sitemap-link-container">
              <Link to={item.path} className="sitemap-link">
                <span className="sitemap-title">{item.title}</span>
                <span className="sitemap-path">{item.path}</span>
              </Link>
              <div className="sitemap-meta">
                <span className="sitemap-description">{item.description}</span>
                <span className="sitemap-date">Last updated: {item.lastModified}</span>
              </div>
            </div>
            {item.children && renderSiteMap(item.children, level + 1)}
          </li>
        ))}
      </ul>
    );
  };

  // Count total pages
  const countTotalPages = (items) => {
    let count = items.length;
    items.forEach(item => {
      if (item.children) {
        count += countTotalPages(item.children);
      }
    });
    return count;
  };

  const totalPages = countTotalPages(siteStructure);

  return (
    <div className="sitemap-container">
      {/* SEO Meta Tags */}
      <Title>Sitemap - Your Website</Title>
      <Meta name="description" content="Complete sitemap of all pages and services available on our website" />
      <Meta name="robots" content="index, follow" />
      
      <div className="sitemap-header">
        <h1>Website Sitemap</h1>
        <p className="sitemap-intro">
          Navigate through all {totalPages} pages of our website. This sitemap provides 
          an organized overview of all available content and services.
        </p>
        
        <div className="sitemap-stats">
          <div className="stat-item">
            <span className="stat-number">{totalPages}</span>
            <span className="stat-label">Total Pages</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">{siteStructure.filter(item => item.children).length}</span>
            <span className="stat-label">Main Sections</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">
              {siteStructure.reduce((acc, item) => acc + (item.children ? item.children.length : 0), 0)}
            </span>
            <span className="stat-label">Service Pages</span>
          </div>
        </div>
      </div>

      <div className="sitemap-content">
        <div className="sitemap-search">
          <input
            type="text"
            placeholder="Search pages..."
            className="sitemap-search-input"
            onChange={(e) => {
              const searchTerm = e.target.value.toLowerCase();
              const items = document.querySelectorAll('.sitemap-item');
              items.forEach(item => {
                const title = item.querySelector('.sitemap-title').textContent.toLowerCase();
                const description = item.querySelector('.sitemap-description').textContent.toLowerCase();
                const path = item.querySelector('.sitemap-path').textContent.toLowerCase();
                
                if (title.includes(searchTerm) || description.includes(searchTerm) || path.includes(searchTerm)) {
                  item.style.display = 'block';
                } else {
                  item.style.display = 'none';
                }
              });
            }}
          />
        </div>

        <nav className="sitemap-navigation" role="navigation" aria-label="Site structure">
          {renderSiteMap(siteStructure)}
        </nav>

        <div className="sitemap-footer">
          <div className="sitemap-xml-link">
            <h3>For Search Engines</h3>
            <p>
              <a href="/sitemap.xml" target="_blank" rel="noopener noreferrer">
                View XML Sitemap
              </a>
              {' '}(Machine-readable format for search engines)
            </p>
          </div>
          
          <div className="sitemap-contact">
            <h3>Need Help?</h3>
            <p>
              Can't find what you're looking for? <Link to="/contact">Contact us</Link> for assistance.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sitemap;