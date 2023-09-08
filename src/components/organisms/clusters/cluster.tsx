import React, { useState, useEffect } from 'react';
import styles from './cluster.module.css';
import { Link, List, ListItem, Column, SubHeadline, Error } from '../../';

// remote path
// https://listicles-phi.vercel.app/cross_country_list_aug_2023.txt
// path to data folder

const months = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug'];

const month = 'may';
const year = '2023';
const localPath = '../../../data/listicles/';
const remotePath = 'https://cross-country-listicles.vercel.app/';
const file = `${remotePath}cross_country_list_${month}_${year}.txt`;

const Cluster = ({ children, customClass = '', ...rest }) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [categories, setCategories] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(file);
        const data = await response.text();
        setData(data);

        const lines = data.split('\n');
        let curCateogry = '';
        const categories = lines.reduce((acc, line, index) => {
          // this first line should be the first category
          if (!line.includes('http') && line.trim() !== '') {
            const category = line.trim();
            if (!acc[category]) {
              acc[category] = [];
            }
            curCateogry = category;
          } else if (line.includes('http')) {
            const url = line.trim();
            acc[curCateogry].push({ title: curCateogry, url });
          }
          console.log('acc: ', acc);
          return acc;
        }, {});
        setCategories(categories);
      } catch (error) {
        setError(error);
        return console.error(error);
      }
    };
    fetchData();
  }, []);

  if (!data || categories?.length > 0) {
    return <div>Loading...</div>;
  }

  // loop through catogories
  const listicle = Object.entries(categories).map((arr, index) => {
    const category = arr[0];
    const urlModels = arr[1];
    console.log('category: ', category);

    const listicle = urlModels.map(({ url }, index) => {
      return (
        <ListItem key={url}>
          <Link url={url}>{url}</Link>
        </ListItem>
      );
    });
    return (
      <Column>
        <SubHeadline size="small">{category}</SubHeadline>
        {listicle}
      </Column>
    );
  });

  return (
    <Column className={styles.cluster}>
      {error ? <Error /> : null}
      <List>{listicle}</List>
    </Column>
  );
};

export default Cluster;
