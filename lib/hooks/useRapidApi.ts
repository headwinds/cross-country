// TODO type check
// @ts-nocheck
import { useEffect, useState } from "react";
//import config from "@/cross-country-config-private"; path alias not working!

const config = {};

// https://rapidapi.com/techengine/api/link-preview4

export const fetchTitleFromUrl = async (previewUrl) => {
  const oembed = "false";

  const url = `https://link-preview4.p.rapidapi.com/?url=${previewUrl}&oembed=${oembed}`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": config?.RAPID_API_KEY ?? "",
      "X-RapidAPI-Host": "link-preview4.p.rapidapi.com",
    },
  };

  const response = await fetch(url, options);
  const result = await response.text();

  return result;
};

const useRapidApi = (previewUrl?: string) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!config?.RAPID_API_KEY) {
          return setError({ message: "No Rapid API Key" });
        }

        const result = await fetchTitleFromUrl(previewUrl);

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
