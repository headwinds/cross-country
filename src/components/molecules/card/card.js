import React from 'react';
import Column from '../../atoms/column/column';
import styles from './card.scss';
import clsx from 'clsx';

const Card = ({ backgroundColor = '', customClass = '', customStyle = {}, ...rest }) => {
  return (
    <Column
      {...rest}
      customClass={clsx(styles.card, customClass)}
      customStyle={{ backgroundColor, ...customStyle }}
    ></Column>
  );
};

export default Card;
