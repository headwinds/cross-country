import React from 'react';
import styles from './grid.module.css';

type GridProps = {
  children: React.ReactElement | React.ReactElement[];
  customStyle?: React.CSSProperties;
  customClass?: string;
};

const Grid = ({ children = null, customClass, customStyle = {}, ...rest }: GridProps) => {
  return (
    <div {...rest} className={customClass} style={customStyle}>
      {children}
    </div>
  );
};

export default Grid;
