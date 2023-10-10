import { useEffect, useState } from 'react';
import config from '../../cross-country-config-private';

const useRapidApi = (previewUrl?: string) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!config?.RAPID_API_KEY) {
          return setError({ message: 'No Rapid API Key' });
        }

        const oembed = 'false';

        const url = `https://link-preview4.p.rapidapi.com/?url=4${previewUrl}&oembed=${oembed}`;
        const options = {
          method: 'GET',
          headers: {
            'X-RapidAPI-Key': config.RAPID_API_KEY,
            'X-RapidAPI-Host': 'link-preview4.p.rapidapi.com',
          },
        };

        const response = await fetch(url, options);
        const result = await response.text();
        setData(result);
      } catch (error) {
        setError(error);
        return console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return {
    data,
    error,
    isLoading,
  };
};

export default useRapidApi;
