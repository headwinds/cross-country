import React, { Component } from 'react';
import clsx from 'clsx';
import styles from './image.module.css';
import { ImageProps } from './image.types';

const Image = ({
  url,
  width,
  a11y,
  height = 'auto',
  customClass = '',
  customStyle = {},
  dataTestId = 'image',
}: ImageProps) => (
  <img
    data-testid={dataTestId}
    className={(clsx(styles.image), customClass)}
    style={customStyle}
    src={url}
    width={width}
    height={height}
    alt={a11y}
    onError={e => (e.target.style.display = 'none')}
  />
);

export default Image;
