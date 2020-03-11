import * as React from 'react';

export interface ColumnProps {
  children: ReactElement,
  hasBackground?:true,
  backgroundColor?: string
  hasChildrenCentered?:boolean
}

declare const Column: React.ComponentType<ColumnProps>;

export default Column;