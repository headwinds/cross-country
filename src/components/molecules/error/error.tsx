import * as React from 'react';
import { ErrorProps } from './error.types';

import styles from './error.scss';

const Error: React.FC<ErrorProps> = ({ foo }) => (
  <div data-testid="error" className={styles.Error}>
    {foo || 'missng prop foo'}
  </div>
);

export default Error;
