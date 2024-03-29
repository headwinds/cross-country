import { useEffect, useState } from "react";
//import useBulkFetch from "./useBulkFetch";
import { fetchTitleFromUrl } from "./useRapidApi";

type ListicleItems = {
  title: string;
  urls: string[];
}[];

// remote path
// https://listicles-phi.vercel.app/cross_country_list_aug_2023.txt
// path to data folder

// missing mar & apr
const months = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug"];

const month = "may";
const year = "2023";
const localPath = "../../../data/listicles/";
const remotePath = "https://cross-country-listicles.vercel.app/";
const defaultUrl = `${remotePath}cross_country_list_${month}_${year}.txt`;

const useListicle = (url: string = defaultUrl) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [urls, setUrls] = useState(null);

  // we have the urls, now fetch them
  /*
  const {
    data: urlsData,
    error: urlsError,
    isLoading: urlsIsLoading,
  } = useBulkFetch(urls);*/

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.text();

        const lines = data.split("\n");
        let curCateogry = "";
        const categories = lines.reduce((acc, line, index) => {
          // this first line should be the first category
          if (!line.includes("http") && line.trim() !== "") {
            const category = line.trim();
            if (!acc[category]) {
              acc[category] = [];
            }
            curCateogry = category;
          } else if (line.includes("http")) {
            const url = line.trim();
            acc[curCateogry].push({ title: curCateogry, url });
          }
          return acc;
        }, {});
        setData(categories);
      } catch (error) {
        setError(error);
        return console.error(error);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  // once we have all the urls, let's replace them with their titles
  useEffect(() => {
    // update all the urls with their titles
    const fetchData = async () => {
      // fetchTitleFromUrl
      if (data) {
        const urls = Object.keys(data).reduce((acc, category) => {
          const items = data[category];
          const urls = items.map((item) => item.url);
          return [...acc, ...urls];
        }, []);
        setUrls(urls);
      }
    };
    fetchData();
  }, [data]);

  return {
    data,
    error,
    isLoading,
  };
};

export default useListicle;
