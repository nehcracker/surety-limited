import React, { forwardRef } from 'react';
import styles from './Input.module.css';

const Input = forwardRef(({
  type = 'text',
  label,
  name,
  value,
  onChange,
  onBlur,
  placeholder,
  required = false,
  disabled = false,
  error,
  className,
  ...props
}, ref) => {
  return (
    <div className={`${styles.inputContainer} ${className ? className : ''}`}>
      {label && (
        <label htmlFor={name} className={styles.label}>
          {label}
          {required && <span className={styles.required}>*</span>}
        </label>
      )}
      
      <input
        ref={ref}
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
        disabled={disabled}
        className={`${styles.input} ${error ? styles.inputError : ''} ${disabled ? styles.disabled : ''}`}
        {...props}
      />
      
      {error && <p className={styles.errorMessage}>{error}</p>}
    </div>
  );
});

Input.displayName = 'Input';

export default Input;