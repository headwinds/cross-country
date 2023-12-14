import * as React from 'react';
import { ErrorProps } from './error.types';

import styles from './error.module.css';

const Error = ({ message, customStyle }: ErrorProps) => (
  <div data-testid="error" className={styles.Error} style={customStyle}>
    {message || 'sorry, something went wrong'}
  </div>
);

export default Error;
