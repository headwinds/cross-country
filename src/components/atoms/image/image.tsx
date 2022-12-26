import React, { Component } from 'react';
import clsx from 'clsx';
import styles from './image.scss';
import { ImageProps } from './image.types';

const Image: React.FC<ImageProps> = ({
  url,
  width,
  a11y,
  height = 'auto',
  customClass = '',
  customStyle = {},
  dataTestId = 'image',
}) => (
  <img
    data-testid={dataTestId}
    className={(clsx(styles.image), customClass)}
    style={customStyle}
    src={url}
    width={width}
    height={height}
    alt={a11y}
  />
);

export default Image;
