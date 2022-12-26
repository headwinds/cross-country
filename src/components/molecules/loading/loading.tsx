import * as React from 'react';
import { LoadingProps } from './loading.types';

import styles from './loading.scss';

const Loading: React.FC<LoadingProps> = ({ label }) => (
  <div data-testid="loading" className={styles.Loading}>
    {label || 'Loading...'}
  </div>
);

export default Loading;
