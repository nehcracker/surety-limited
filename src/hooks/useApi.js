import { useState, useCallback } from 'react';

/**
 * Custom hook for handling API requests
 * @param {Function} apiFunction - The API function to call
 * @returns {Object} API state and handler functions
 */
const useApi = (apiFunction) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  // Execute the API call
  const execute = useCallback(async (...args) => {
    try {
      setLoading(true);
      setError(null);
      setSuccess(false);
      
      const result = await apiFunction(...args);
      
      setData(result);
      setSuccess(true);
      return result;
    } catch (err) {
      setError(err.message || 'An error occurred');
      return null;
    } finally {
      setLoading(false);
    }
  }, [apiFunction]);

  // Reset the state
  const reset = useCallback(() => {
    setData(null);
    setError(null);
    setLoading(false);
    setSuccess(false);
  }, []);

  return {
    data,
    error,
    loading,
    success,
    execute,
    reset
  };
};

export default useApi;