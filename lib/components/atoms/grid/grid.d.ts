import * as React from 'react';

export interface ColumnProps {
  children: ReactElement,
  hasBackground?:true,
  backgroundColor?: string
  hasChildrenCentered?:boolean,
  customStyle?: any
}

declare const Column: React.ComponentType<ColumnProps>;

export default Column;