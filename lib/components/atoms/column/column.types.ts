import * as React from 'react';

export interface ColumnProps {
  children?: React.ReactNode | React.ReactNode[];
  hasBackground?: boolean;
  backgroundColor?: string;
  hasChildrenCentered?: boolean;
  customClass?: string;
  customStyle?: any;
  dataTestId?: string;
}

declare const Column: React.ComponentType<ColumnProps>;

export default Column;
