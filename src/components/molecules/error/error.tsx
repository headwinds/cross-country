import * as React from 'react';
import { ErrorProps } from './error.types';

import styles from './error.css';

const Error: React.FC<ErrorProps> = ({ foo, customStyle }) => (
  <div data-testid="error" className={styles.Error} style={customStyle}>
    {foo || 'missng prop foo'}
  </div>
);

export default Error;
