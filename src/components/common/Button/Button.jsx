import React from 'react';
import styles from './Button.module.css';

/**
 * Button component for Surety Limited
 * @param {Object} props - Component props
 * @param {string} [props.variant='primary'] - Button variant (primary, secondary, outline, text)
 * @param {string} [props.size='medium'] - Button size (small, medium, large)
 * @param {boolean} [props.fullWidth=false] - Whether button should take full width
 * @param {React.ReactNode} props.children - Button content
 * @param {Function} [props.onClick] - Click handler function
 * @param {string} [props.type='button'] - Button type (button, submit, reset)
 * @param {boolean} [props.disabled=false] - Whether button is disabled
 * @param {string} [props.className] - Additional CSS classes
 * @param {Object} [props.rest] - Additional props to pass to button element
 */
const Button = ({
  variant = 'primary',
  size = 'medium',
  fullWidth = false,
  children,
  onClick,
  type = 'button',
  disabled = false,
  className = '',
  ...rest
}) => {
  const buttonClasses = [
    styles.button,
    styles[variant],
    styles[size],
    fullWidth ? styles.fullWidth : '',
    className
  ].filter(Boolean).join(' ');

  return (
    <button
      className={buttonClasses}
      onClick={onClick}
      type={type}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
