import React, {useState, useEffect} from 'react';
import { dataset } from './data-set';
import Chart from '../chart';



const ChartStory = () => {
    const [data, setData] = useState<any>(null);
    const [variant, setVariant] = useState<"line" | "bar" | "scatterplot">("scatterplot");

    const getMockDataAsync = async () => {
        return new Promise(resolve => {
          setTimeout(() => {
            resolve(dataset);
          }, 0);
        });
      };

    useEffect(() => {
        const fetchData = async () => {
            const dataset = await getMockDataAsync();
            console.log("ChartStory dataset: ", dataset);
            
            setData(dataset);
        }
        fetchData();
    }, []);

    if (!data) { return null }

    return (
        <Chart data={data} variant={variant} />
    );
};

export default ChartStory;
