import * as React from 'react';
import { ErrorProps } from './error.types';

import styles from './error.scss';

const GolfLeafViewSkeleton: React.FC<ErrorProps> = ({ foo }) => (
  <div data-testid="error" className={styles.Error}>
    {foo || 'missng prop foo'}
  </div>
);

export default GolfLeafViewSkeleton;
