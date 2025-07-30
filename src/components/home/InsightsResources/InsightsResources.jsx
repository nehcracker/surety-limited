import React from 'react';
import styles from './InsightsResources.module.css';
import ArticleCard from './ArticleCard';
import Button from '../../common/Button/Button';

const InsightsResources = () => {
  // This data would typically come from a data file or API
  const articles = [
    {
      id: 1,
      title: "5 Things to Know Before Requesting a Bid Bond",
      excerpt: "Learn the essential factors to consider before applying for a bid bond to ensure a smooth process.",
      date: "June 8, 2025",
      category: "Bonds",
      imageUrl: require('../../../assets/images/articles/bid-bond.png'),
      url: "/insights/bid-bond-essentials"
    },
    {
      id: 2,
      title: "How Trade Credit Insurance Can Save Your Business in 2025",
      excerpt: "Discover how trade credit insurance provides crucial protection against client insolvency and payment defaults.",
      date: "May 22, 2025",
      category: "Insurance",
      imageUrl: require('../../../assets/images/articles/trade-credit.jpg'),
      url: "/insights/trade-credit-insurance"
    },
    {
      id: 3,
      title: "Insurance Trends Shaping Global Construction in Emerging Markets",
      excerpt: "Explore the latest insurance developments affecting construction projects in developing economies.",
      date: "May 15, 2025",
      category: "Construction",
      imageUrl: require('../../../assets/images/articles/bid-bond.png'),
      url: "/insights/construction-insurance-trends"
    }
  ];

  return (
    <section className={styles.insightsSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Insights & Resources</h2>
          <p className={styles.subtitle}>
            Expert knowledge and industry updates to help you navigate the complex world of bonds and insurance.
          </p>
        </div>
        
        <div className={styles.articleGrid}>
          {articles.map(article => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
        
        <div className={styles.viewAllContainer}>
          <Button 
            variant="secondary" 
            to="/insights" 
            className={styles.viewAllButton}
          >
            View All Insights
          </Button>
        </div>
      </div>
    </section>
  );
};

export default InsightsResources;
