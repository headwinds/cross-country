import * as React from 'react';
import { GoldLeafViewSkeletonProps } from './gold-leaf-view-skeleton.types';

import styles from './gold-leaf-view-skeleton.module.css';

const GolfLeafViewSkeleton: React.FC<GoldLeafViewSkeletonProps> = ({ foo }) => (
  <div data-testid="error" className={styles.Error}>
    {foo || 'plan & start building'}
  </div>
);

export default GolfLeafViewSkeleton;
