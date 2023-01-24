import * as React from 'react';

export interface ColumnProps {
  children?: any;
  hasBackground?: true;
  backgroundColor?: string;
  hasChildrenCentered?: boolean;
  customClass?: string;
  customStyle?: {};
  dataTestId?: string;
}

declare const Column: React.ComponentType<ColumnProps>;

export default Column;
