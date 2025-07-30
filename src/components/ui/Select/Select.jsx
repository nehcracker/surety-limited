import React, { useState, useRef, useEffect } from 'react';
import styles from './Select.module.css';

/**
 * Custom Select component with dropdown functionality
 * 
 * @param {Object} props Component props
 * @param {string} props.label Label text for the select field
 * @param {Array} props.options Array of option objects with value and label properties
 * @param {string|number} props.value Currently selected value
 * @param {Function} props.onChange Function to call when selection changes
 * @param {string} [props.placeholder="Select an option"] Placeholder text when no option is selected
 * @param {boolean} [props.disabled=false] Whether the select is disabled
 * @param {string} [props.errorMessage] Error message to display
 * @param {string} [props.id] HTML id attribute
 * @param {string} [props.name] HTML name attribute
 * @param {string} [props.className] Additional CSS class
 */
const Select = ({
  label,
  options = [],
  value,
  onChange,
  placeholder = "Select an option",
  disabled = false,
  errorMessage,
  id,
  name,
  className,
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef(null);
  
  // Find the selected option label
  const selectedOption = options.find(option => option.value === value);
  const displayValue = selectedOption ? selectedOption.label : placeholder;

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleToggleDropdown = () => {
    if (!disabled) {
      setIsOpen(!isOpen);
    }
  };

  const handleOptionSelect = (option) => {
    onChange(option.value);
    setIsOpen(false);
  };

  const hasError = !!errorMessage;

  return (
    <div className={`${styles.selectContainer} ${className || ''}`} ref={selectRef}>
      {label && <label className={styles.label} htmlFor={id}>{label}</label>}
      
      <div 
        className={`
          ${styles.select} 
          ${isOpen ? styles.open : ''} 
          ${disabled ? styles.disabled : ''} 
          ${hasError ? styles.error : ''}
        `}
        onClick={handleToggleDropdown}
        tabIndex={disabled ? -1 : 0}
        role="combobox"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-labelledby={id}
        aria-controls={id ? `${id}-listbox` : undefined}
        id={id}
        {...props}
      >
        <div className={styles.selectedValue}>
          {displayValue}
        </div>
        <div className={styles.arrow}>
          <svg 
            width="10" 
            height="6" 
            viewBox="0 0 10 6" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              d="M1 1L5 5L9 1" 
              stroke="currentColor" 
              strokeWidth="1.5" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
      {isOpen && (
        <ul 
          className={styles.options}
          role="listbox"
          aria-labelledby={id}
          id={id ? `${id}-listbox` : undefined}
        >
        {options.map((option) => (
            <li
              key={option.value}
              className={`
                ${styles.option} 
                ${option.value === value ? styles.selected : ''}
              `}
              onClick={() => handleOptionSelect(option)}
              role="option"
              aria-selected={option.value === value}
            >
              {option.label}
            </li>
          ))}
          {options.length === 0 && (
            <li className={styles.noOptions}>No options available</li>
          )}
        </ul>
      )}
      
      {hasError && <div className={styles.errorMessage}>{errorMessage}</div>}
    </div>
  );
};

export default Select;