import React, { useState, useEffect } from 'react';
import styles from './listicle.module.css';
import { Link, List, ListItem, Column, SubHeadline, Error } from '../..';
import useListicle from '../../../hooks/useListicle';

const Listicle = ({ url }: { url?: string }) => {
  const { data, error, isLoading } = useListicle();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!data) {
    return null;
  }

  if (error) {
    return <Error />;
  }

  // loop through catogories
  const listicle = Object.entries(data).map((arr, index) => {
    const category = arr[0];
    const urlModels = arr[1];
    console.log('category: ', category);

    const listicle = Array.isArray(urlModels) && urlModels?.map ? urlModels.map(({ url }, index) => {
      return (
        <ListItem key={url}>
          <Link url={url}>{url}</Link>
        </ListItem>
      );
    }) : null;
    return (
      <Column>
        <SubHeadline size="small">{category}</SubHeadline>
        {listicle}
      </Column>
    );
  });

  return (
    <Column className={styles.container}>
      {error ? <Error /> : null}
      <List>{listicle}</List>
    </Column>
  );
};

export default Listicle;
