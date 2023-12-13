import * as React from 'react';

export interface LabelProps {
  children: React.ReactNode;
  forId?: string;
}

declare const Label: React.ComponentType<LabelProps>;

export default Label;
