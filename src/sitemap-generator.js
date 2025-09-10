const fs = require('fs');
const path = require('path');

// Configuration for your website
const WEBSITE_URL = 'https://suretylimited.com';
const OUTPUT_PATH = path.join(__dirname, '..', 'public', 'sitemap.xml');

// Define your routes with metadata
const routes = [
  {
    path: '/',
    changefreq: 'weekly',
    priority: '1.0',
    lastmod: '2024-12-11'
  },
  {
    path: '/about',
    changefreq: 'monthly',
    priority: '0.8',
    lastmod: '2024-12-11'
  },
  {
    path: '/services',
    changefreq: 'weekly',
    priority: '0.9',
    lastmod: '2024-12-11'
  },
  {
    path: '/contact',
    changefreq: 'monthly',
    priority: '0.7',
    lastmod: '2024-12-11'
  },
  {
    path: '/services/bonds',
    changefreq: 'weekly',
    priority: '0.8',
    lastmod: '2024-12-11'
  },
  {
    path: '/services/bonds/performance-bonds',
    changefreq: 'weekly',
    priority: '0.7',
    lastmod: '2024-12-11'
  },
  {
    path: '/services/insurance',
    changefreq: 'weekly',
    priority: '0.8',
    lastmod: '2024-12-11'
  },
  {
    path: '/quote-request',
    changefreq: 'monthly',
    priority: '0.9',
    lastmod: '2024-12-11'
  },
  {
    path: '/sitemap',
    changefreq: 'monthly',
    priority: '0.3',
    lastmod: '2024-12-11'
  }
];

/**
 * Generate XML sitemap content
 */
function generateSitemap(routes, baseUrl) {
  const urls = routes.map(route => {
    const loc = route.path === '/' ? baseUrl : `${baseUrl}${route.path}`;
    return `  <url>
    <loc>${loc}</loc>
    <lastmod>${route.lastmod}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`;
  }).join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${urls}
</urlset>`;
}

/**
 * Write sitemap to file
 */
function writeSitemap(content, filePath) {
  try {
    // Ensure the directory exists
    const dir = path.dirname(filePath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✅ Sitemap generated successfully at: ${filePath}`);
    console.log(`📊 Total URLs: ${routes.length}`);
    
    // Display route summary
    console.log('\n📋 Generated routes:');
    routes.forEach(route => {
      const url = route.path === '/' ? WEBSITE_URL : `${WEBSITE_URL}${route.path}`;
      console.log(`  - ${url} (Priority: ${route.priority})`);
    });
    
  } catch (error) {
    console.error('❌ Error writing sitemap:', error);
    throw error;
  }
}

/**
 * Main function to generate sitemap
 */
function generateSitemapFile() {
  console.log('🚀 Generating sitemap...\n');
  
  const sitemapContent = generateSitemap(routes, WEBSITE_URL);
  writeSitemap(sitemapContent, OUTPUT_PATH);
  
  console.log('\n📝 Next steps:');
  console.log('1. Upload the sitemap.xml file to your website root directory');
  console.log('2. Add the sitemap URL to your robots.txt file');
  console.log('3. Submit the sitemap to Google Search Console');
  console.log('4. Sitemap URL: https://suretylimited.com/sitemap.xml');
}

// Run the generator
generateSitemapFile();