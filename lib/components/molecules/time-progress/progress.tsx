import * as React from 'react';
import { Column } from '../../';
import { ProgressProps } from './progress.types';
import styles from './progress.module.css';

const Progress: React.FC<ProgressProps> = ({ foo }) => {
  return (
    <Column dataTestId="progress" customClass={styles.Progress}>
      {foo || 'plan & start building'}
    </Column>
  );
};

export default Progress;
