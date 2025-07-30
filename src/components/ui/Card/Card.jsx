import React from 'react';
import styles from './Card.module.css';

/**
 * Reusable Card component for displaying content in a contained box
 * 
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Content to display inside the card
 * @param {string} [props.className] - Additional CSS class names
 * @param {string} [props.variant='default'] - Card style variant (default, outlined, elevated)
 * @param {boolean} [props.hoverable=false] - Whether the card should have hover effects
 * @param {React.MouseEventHandler} [props.onClick] - Optional click handler
 */
const Card = ({ 
  children, 
  className = '', 
  variant = 'default', 
  hoverable = false, 
  onClick,
  ...rest 
}) => {
  const cardClasses = [
    styles.card,
    styles[variant],
    hoverable ? styles.hoverable : '',
    onClick ? styles.clickable : '',
    className
  ].filter(Boolean).join(' ');

  return (
    <div 
      className={cardClasses} 
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      {...rest}
    >
      {children}
    </div>
  );
};

export default Card;