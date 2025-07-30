/**
 * articlesData.js
 * Contains data for the Insights & Resources section of the Surety Limited website
 */

const articlesData = [
  {
    id: 1,
    title: "5 Things to Know Before Requesting a Bid Bond",
    excerpt: "Understand the key factors that impact your bid bond application and how to prepare effectively.",
    category: "Bonds",
    author: "James Wilson",
    authorTitle: "Senior Bonds Advisor",
    date: "2025-06-15",
    readTime: "7 min read",
    imageUrl: "/assets/images/insights/bid-bond-article.jpg",
    featured: true,
    tags: ["bid bonds", "construction", "application tips"],
    slug: "things-to-know-before-requesting-bid-bond"
  },
  {
    id: 2,
    title: "How Trade Credit Insurance Can Save Your Business in 2025",
    excerpt: "Explore how trade credit insurance protects your cash flow and secures your business against customer defaults.",
    category: "Insurance",
    author: "Sarah Chen",
    authorTitle: "Trade Credit Specialist",
    date: "2025-06-02",
    readTime: "9 min read",
    imageUrl: "/assets/images/insights/trade-credit-insurance.jpg",
    featured: true,
    tags: ["trade credit", "risk management", "cash flow"],
    slug: "how-trade-credit-insurance-saves-business"
  },
  {
    id: 3,
    title: "Insurance Trends Shaping Global Construction in Emerging Markets",
    excerpt: "Learn how new insurance models are enabling infrastructure development across emerging economies.",
    category: "Construction",
    author: "Michael Okonjo",
    authorTitle: "Construction Risk Advisor",
    date: "2025-05-20",
    readTime: "11 min read",
    imageUrl: "/assets/images/insights/construction-trends.jpg",
    featured: true,
    tags: ["construction", "emerging markets", "infrastructure"],
    slug: "insurance-trends-global-construction-emerging-markets"
  },
  {
    id: 4,
    title: "Navigating D&O Liability in the Age of ESG Requirements",
    excerpt: "How Directors and Officers can protect themselves amid increasing environmental, social, and governance scrutiny.",
    category: "Corporate Risk",
    author: "Elizabeth Morgan",
    authorTitle: "D&O Risk Consultant",
    date: "2025-05-10",
    readTime: "8 min read",
    imageUrl: "/assets/images/insights/do-liability.jpg",
    featured: false,
    tags: ["D&O", "ESG", "corporate governance"],
    slug: "navigating-do-liability-esg-requirements"
  },
  {
    id: 5,
    title: "The Ultimate Guide to Performance Bonds for Government Contracts",
    excerpt: "A comprehensive overview of performance bond requirements when bidding on public sector projects.",
    category: "Bonds",
    author: "Robert Kiyani",
    authorTitle: "Government Contracts Expert",
    date: "2025-04-28",
    readTime: "12 min read",
    imageUrl: "/assets/images/insights/government-contracts.jpg",
    featured: false,
    tags: ["performance bonds", "government", "public sector"],
    slug: "guide-performance-bonds-government-contracts"
  },
  {
    id: 6,
    title: "Cyber Insurance: Essential Coverage for Digital Businesses",
    excerpt: "Why cyber insurance has become non-negotiable for businesses of all sizes in the digital economy.",
    category: "Insurance",
    author: "Priya Mehta",
    authorTitle: "Cyber Risk Analyst",
    date: "2025-04-15",
    readTime: "6 min read",
    imageUrl: "/assets/images/insights/cyber-insurance.jpg",
    featured: false,
    tags: ["cyber risk", "digital business", "data protection"],
    slug: "cyber-insurance-essential-coverage-digital-businesses"
  },
  {
    id: 7,
    title: "Global Supply Chain Risks: Insurance Solutions for Manufacturers",
    excerpt: "How manufacturers can use insurance to mitigate disruptions in increasingly complex global supply chains.",
    category: "Manufacturing",
    author: "Thomas Schmidt",
    authorTitle: "Supply Chain Risk Advisor",
    date: "2025-04-03",
    readTime: "10 min read",
    imageUrl: "/assets/images/insights/supply-chain.jpg",
    featured: false,
    tags: ["supply chain", "manufacturing", "logistics"],
    slug: "global-supply-chain-risks-insurance-solutions"
  },
  {
    id: 8,
    title: "Political Risk Insurance: Expanding Business in Volatile Regions",
    excerpt: "How to protect your investments and operations when expanding into politically unstable markets.",
    category: "Global Risk",
    author: "Amina Diallo",
    authorTitle: "Political Risk Specialist",
    date: "2025-03-22",
    readTime: "9 min read",
    imageUrl: "/assets/images/insights/political-risk.jpg",
    featured: false,
    tags: ["political risk", "international business", "emerging markets"],
    slug: "political-risk-insurance-volatile-regions"
  }
];

// For featured articles (subset of the main array)
export const featuredArticles = articlesData.filter(article => article.featured);

// For category filters
export const articleCategories = [...new Set(articlesData.map(article => article.category))];

// Helper function to get articles by category
export const getArticlesByCategory = (category) => {
  return articlesData.filter(article => article.category === category);
};

// Helper function to get article by slug
export const getArticleBySlug = (slug) => {
  return articlesData.find(article => article.slug === slug);
};

// Helper function for related articles (same category, excluding current article)
export const getRelatedArticles = (currentArticleId, limit = 3) => {
  const currentArticle = articlesData.find(article => article.id === currentArticleId);
  if (!currentArticle) return [];
  
  return articlesData
    .filter(article => article.category === currentArticle.category && article.id !== currentArticleId)
    .slice(0, limit);
};

export default articlesData;
