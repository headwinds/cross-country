import * as React from 'react';

export interface RadioProps {
  text: string;
  id?:string;
  handleChange?: any
}

declare const Radio: React.FunctionalComponent<RadioProps>;

export default Radio;