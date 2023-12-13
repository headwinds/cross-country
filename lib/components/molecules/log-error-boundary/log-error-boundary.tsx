import * as React from 'react';
import { Column } from '../../';
import { LogErrorBoundaryProps } from './log-error-boundary.types';

import styles from './log-error-boundary.module.css';

const LogErrorBoundary: React.FC<LogErrorBoundaryProps> = ({ foo }) => {
  return (
    <Column dataTestId="log-error-boundary" customClass={styles.LogErrorBoundary}>
      {foo || 'plan & start building'}
    </Column>
  );
};

export default LogErrorBoundary;
