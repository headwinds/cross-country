import * as React from 'react';

export interface LabelProps {
  text: string;
  forId?: string;
}

declare const Label: React.ComponentType<LabelProps>;

export default Label;