import * as React from 'react';
import { ErrorProps } from './error.types';

import styles from './error.css';

const Error: React.FC<ErrorProps> = ({ foo, customStyle }) => (
  <div data-testid="error" className={styles.Error} style={customStyle}>
    {foo || 'plan & start building'}
  </div>
);

export default Error;
