import React from 'react';
import { Link } from 'react-router-dom';
import styles from './InsightsResources.module.css';

const ArticleCard = ({ article }) => {
  const { title, excerpt, date, category, imageUrl, url } = article;
  
  return (
    <div className={styles.articleCard}>
      <div className={styles.articleImageContainer}>
        <Link to={url}>
          <img 
            src={imageUrl} 
            alt={title} 
            className={styles.articleImage} 
            onError={(e) => {
              e.target.src = '/assets/images/placeholder-article.jpg';
            }}
          />
        </Link>
        <span className={styles.articleCategory}>{category}</span>
      </div>
      
      <div className={styles.articleContent}>
        <p className={styles.articleDate}>{date}</p>
        <h3 className={styles.articleTitle}>
          <Link to={url}>{title}</Link>
        </h3>
        <p className={styles.articleExcerpt}>{excerpt}</p>
        <Link to={url} className={styles.readMoreLink}>
          Read more
        </Link>
      </div>
    </div>
  );
};

export default ArticleCard;
