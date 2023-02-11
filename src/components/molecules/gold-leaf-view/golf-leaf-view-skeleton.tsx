import * as React from 'react';
import { GoldLeafViewSkeletonProps } from './gold-leaf-view-skeleton.types';

import styles from './gold-leaf-view-skeleton.scss';

const GolfLeafViewSkeleton: React.FC<GoldLeafViewSkeletonProps> = ({ foo }) => (
  <div data-testid="error" className={styles.Error}>
    {foo || 'missng prop foo'}
  </div>
);

export default GolfLeafViewSkeleton;
