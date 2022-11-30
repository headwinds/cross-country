import React, { Component } from 'react';
import styles from './image.scss';

const Image = ({ url, width, a11y }) => {
  const img = url && url != '' ? <img src={url} width={width} alt={a11y} /> : null;

  return img;
};

export default Image;
