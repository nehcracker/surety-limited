import { useState, useEffect } from 'react';

/**
 * Custom hook for handling form state and validation
 * @param {Object} initialValues - Initial form values
 * @param {Function} validate - Validation function that returns error object
 * @param {Function} onSubmit - Function to run on successful form submission
 * @returns {Object} Form handlers and state
 */
const useForm = (initialValues = {}, validate = () => ({}), onSubmit = () => {}) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Run validation when values or touched fields change
  useEffect(() => {
    if (Object.keys(touched).length > 0) {
      const validationErrors = validate(values);
      setErrors(validationErrors);
    }
  }, [values, touched, validate]);

  // Handle submission when isSubmitting changes
  useEffect(() => {
    if (isSubmitting) {
      const validationErrors = validate(values);
      setErrors(validationErrors);
      
      if (Object.keys(validationErrors).length === 0) {
        onSubmit(values);
        setIsSubmitted(true);
      }
      
      setIsSubmitting(false);
    }
  }, [isSubmitting, values, validate, onSubmit]);

  // Handle input change
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    setValues(prevValues => ({
      ...prevValues,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    setTouched(prevTouched => ({
      ...prevTouched,
      [name]: true
    }));
  };

  // Handle field blur
  const handleBlur = (e) => {
    const { name } = e.target;
    
    setTouched(prevTouched => ({
      ...prevTouched,
      [name]: true
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    if (e) e.preventDefault();
    
    // Mark all fields as touched
    const touchedFields = {};
    Object.keys(values).forEach(field => {
      touchedFields[field] = true;
    });
    
    setTouched(touchedFields);
    setIsSubmitting(true);
  };

  // Reset form to initial values
  const resetForm = () => {
    setValues(initialValues);
    setErrors({});
    setTouched({});
    setIsSubmitted(false);
  };

  // Set specific field value
  const setFieldValue = (field, value) => {
    setValues(prevValues => ({
      ...prevValues,
      [field]: value
    }));
  };

  return {
    values,
    errors,
    touched,
    isSubmitting,
    isSubmitted,
    handleChange,
    handleBlur,
    handleSubmit,
    resetForm,
    setFieldValue
  };
};

export default useForm;