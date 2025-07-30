import React, { forwardRef } from 'react';
import styles from './Textarea.module.css';

const Textarea = forwardRef(({
  id,
  name,
  value,
  onChange,
  onBlur,
  placeholder,
  label,
  error,
  rows = 4,
  className,
  required = false,
  disabled = false,
  maxLength,
  ...props
}, ref) => {
  return (
    <div className={`${styles.textareaWrapper} ${className || ''}`}>
      {label && (
        <label htmlFor={id} className={styles.label}>
          {label}
          {required && <span className={styles.required}>*</span>}
        </label>
      )}
      
      <textarea
        ref={ref}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
        rows={rows}
        disabled={disabled}
        maxLength={maxLength}
        className={`${styles.textarea} ${error ? styles.error : ''} ${disabled ? styles.disabled : ''}`}
        {...props}
      />
      
      {maxLength && (
        <div className={styles.charCount}>
          {value ? value.length : 0}/{maxLength}
        </div>
      )}
      
      {error && <p className={styles.errorMessage}>{error}</p>}
    </div>
  );
});

Textarea.displayName = 'Textarea';

export default Textarea;