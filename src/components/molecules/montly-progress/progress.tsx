import * as React from 'react';
import { Column } from '../../';
import { ProgressProps } from './progress.types';

import styles from './progress.css';

const Progress: React.FC<ProgressProps> = ({ foo }) => {
  return (
    <Column dataTestId="progress" customClass={styles.Progress}>
      {foo || 'missng prop foo'}
    </Column>
  );
};

export default Progress;
