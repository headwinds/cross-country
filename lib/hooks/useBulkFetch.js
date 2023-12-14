import { useState, useEffect } from 'react';

const useBulkFetch = urls => {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setErrors] = useState([]);

  useEffect(() => {
    setLoading(true);
    const fetchResponses = async () => {
      try {
        const responses = await Promise.all(urls.map(url => fetch(url)));
        const data = await Promise.all(
          responses.map(async response => {
            try {
              const data = await response.json();
              return { data };
            } catch (error) {
              return { error };
            }
          })
        );
        setData(data);
      } catch (error) {
        setErrors(error);
      } finally {
        setLoading(false);
      }
    };
    fetchResponses();
  }, [urls]);

  return {
    data,
    isLoading,
    error,
  };
};

export default useBulkFetch;
