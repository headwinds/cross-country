import * as React from 'react';
import clsx from 'clsx';
import { SpanProps } from './span.types';

import styles from './span.scss';

const Span: React.FC<SpanProps> = ({ dataTestId = 'span', customClass = '', customStyle = {}, children, ...rest }) => {
  return (
    <span data-testid={dataTestId} className={clsx(styles.Span, customClass)} style={customStyle} {...rest}>
      {children}
    </span>
  );
};

export default Span;
